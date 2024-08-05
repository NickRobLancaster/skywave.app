<script setup>
import { ref, computed, onMounted } from "vue";
import { Stage, Layer, Rect, Text, Group, Transformer } from "vue-konva";

const pageSize = ref("letter");
const stageConfig = ref({
  width: 612,
  height: 792,
});

const pages = ref([{ id: 1, items: [] }]);
const currentPage = ref(1);

const selectedShape = ref(null);
const transformerRef = ref(null);
const layerRef = ref(null);

const addToItems = (item) => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  if (page) {
    page.items.push(item);
  }
};

const getItems = () => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  return page ? page.items : [];
};

const updateStageSize = () => {
  const dimensions = getPageDimensions(pageSize.value);
  stageConfig.value.width = dimensions.width;
  stageConfig.value.height = dimensions.height;
};

const getPageDimensions = (size) => {
  switch (size) {
    case "letter":
      return { width: 612, height: 792 }; // 8.5" x 11" in points (1 inch = 72 points)
    case "legal":
      return { width: 612, height: 1008 }; // 8.5" x 14" in points
    default:
      return { width: 612, height: 792 };
  }
};

const handleDragMove = (id, e) => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  if (page) {
    const item = page.items.find((i) => i.id === id);
    if (item) {
      const group = e.target;
      item.group.x = group.x();
      item.group.y = group.y();
    }
  }
};

const handleDragEnd = (id, e) => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  if (page) {
    const item = page.items.find((i) => i.id === id);
    if (item) {
      const group = e.target;
      item.group.x = group.x();
      item.group.y = group.y();
    }
  }
};

const handleTransformEnd = (id, e) => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  if (page) {
    const item = page.items.find((i) => i.id === id);
    if (item) {
      const group = e.target;
      const rect = group.findOne("Rect");
      item.rect.width = rect.width() * rect.scaleX();
      item.rect.height = rect.height() * rect.scaleY();
      rect.scaleX(1);
      rect.scaleY(1);
    }
  }
};

const handleSelect = (id, e) => {
  selectedShape.value = id;
  const transformer = transformerRef.value;
  const group = e.target;
  transformer.nodes([group]);
  transformer.getLayer().batchDraw();
};

const deleteItem = (id) => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  if (page) {
    page.items = page.items.filter((item) => item.id !== id);
  }
};

const addSignatureRect = () => {
  const newId = Date.now();
  addToItems({
    id: newId,
    group: {
      x: 150,
      y: 150,
      draggable: true,
    },
    rect: {
      width: 150,
      height: 45,
      fill: "blue",
    },
    text: {
      x: 10, // position relative to the group's top-left corner
      y: 10, // position relative to the group's top-left corner
      text: `Signature`,
      fontSize: 20,
      fill: "white",
    },
  });
};

const addPage = () => {
  const newId = pages.value.length + 1;
  pages.value.push({ id: newId, items: [] });
  currentPage.value = newId;
};

const nextPage = () => {
  if (currentPage.value < pages.value.length) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

onMounted(() => {
  const transformer = transformerRef.value;
  const layer = layerRef.value;
  if (layer && transformer) {
    layer.add(transformer);
    layer.draw();
  }
});

// Computed function that returns an array of objects with the x, y coordinates, and page number of the signature rectangles
const getSignatureCoordinates = computed(() => {
  return pages.value.flatMap((page) =>
    page.items.map((item) => ({
      page: page.id,
      x: item.group.x,
      y: item.group.y,
    }))
  );
});

// Computed function to get the current items for the current page
const currentItems = computed(() => {
  const page = pages.value.find((p) => p.id === currentPage.value);
  return page ? page.items : [];
});

const totalPages = computed(() => pages.value.length);
</script>

<template>
  <div class="flex flex-row">
    <div class="w-72 flex flex-col gap-4 p-4 bg-slate-500">
      <div class="flex flex-col gap-3">
        <label for="pageSize" class="text-gray-50">Page Size</label>
        <select
          v-model="pageSize"
          @change="updateStageSize"
          class="px-2 py-1 border border-gray-300 rounded-md bg-gray-50"
        >
          <option value="letter">Letter (8.5" x 11")</option>
          <option value="legal">Legal (8.5" x 14")</option>
          <!-- Add more page sizes as needed -->
        </select>
      </div>
      <div class="">
        <button
          class="px-2 py-1 bg-blue-500 text-gray-50 rounded w-full"
          @click="addSignatureRect"
        >
          Add Signature
        </button>
      </div>
      <div class="">
        <button
          class="px-2 py-1 bg-green-500 text-gray-50 rounded w-full"
          @click="addPage"
        >
          Add Page
        </button>
      </div>
      <div class="flex flex-row items-center gap-2 mt-4">
        <button
          :class="`${
            currentPage > 1
              ? 'bg-blue-500'
              : 'bg-gray-300 disabled:cursor-not-allowed'
          }`"
          class="text-gray-50 px-2 py-1 rounded"
          @click="prevPage"
          :disabled="currentPage <= 1"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </button>
        <span class="text-gray-50 flex-1 text-center"
          >Page {{ currentPage }}</span
        >
        <button
          :class="`${
            currentPage < totalPages
              ? 'bg-blue-500'
              : 'bg-gray-300 disabled:cursor-not-allowed'
          }`"
          class="px-2 py-1 bg-blue-500 text-gray-50 rounded"
          @click="nextPage"
          :disabled="currentPage >= totalPages"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>
      </div>

      <pre
        class="text-gray-50 text-left h-[800px] self-stretch bg-black overflow-y-auto"
      >
        {{ getSignatureCoordinates }}
      </pre>
    </div>

    <div class="flex flex-col justify-center items-center h-screen p-10">
      <div
        class="border border-gray-300 h-auto pdf-container"
        ref="pdfContainer"
      >
        <v-stage ref="stage" :config="stageConfig">
          <v-layer ref="layer">
            <template v-for="(item, index) in currentItems" :key="item.id">
              <v-group
                :config="item.group"
                @dragmove="(e) => handleDragMove(item.id, e)"
                @dragend="(e) => handleDragEnd(item.id, e)"
                @transformend="(e) => handleTransformEnd(item.id, e)"
                @click="(e) => handleSelect(item.id, e)"
              >
                <v-rect :config="item.rect" />
                <v-text :config="item.text" />
                <!-- Delete button -->
                <v-text
                  :x="item.rect.width - 15"
                  :y="0"
                  text="x"
                  fill="red"
                  fontSize="20"
                  fontStyle="bold"
                  @click="() => deleteItem(item.id)"
                />
              </v-group>
            </template>
            <v-transformer ref="transformer" />
          </v-layer>
        </v-stage>
      </div>
    </div>

    <div class="flex flex-col flex-1 bg-slate-500">
      <!-- CHATGPT SOLUTION GOES HERE -->
    </div>
  </div>
</template>
