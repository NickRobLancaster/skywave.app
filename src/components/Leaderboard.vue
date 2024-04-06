<script setup>
import { ref, computed, Teleport } from "vue";
import { csvParse } from "d3-dsv";
import Chart from "./Chart.vue";

const goalChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Disables the legend
    },

    annotation: {
      annotations: {
        line1: {
          type: "line",
          yMin: 0,
          yMax: 100,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          borderDash: [10, 5],
          label: {
            content: "Goal Threshold",
            enabled: true,
            position: "end",
          },
        },
      },
    },
  },
  indexAxis: "y", // Makes the bar chart horizontal
  // Other configurations...
};

const goalChartData = {
  labels: ["Debt Load"],
  datasets: [
    {
      //disable the labels
      data: [5, 10, 15, 20],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      // Set the bar thickness here
      barThickness: 75, // This sets the height of each horizontal bar
    },
  ],
};

const userChartOptions = {
  //disable the labels
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const userChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Users",
      backgroundColor: "#f87979",
      data: [40, 20, 12, 39],
    },
  ],
};

const showUploadModal = ref(false);
const toggleUploadModal = () => {
  showUploadModal.value = !showUploadModal.value;
};

const fileInput = ref(null);

const fileName = ref("");

const columns = ref([]);

const data = ref([]); // Store the parsed data

const triggerFileInput = () => {
  fileInput.value.click(); // Trigger the hidden file input click event
};

const handleFiles = (event) => {
  const files = event.target.files || event.dataTransfer.files;
  if (files.length === 0) {
    console.log("No file selected.");
    return;
  }

  const file = files[0]; // If supporting multiple files, you'd loop here
  const reader = new FileReader();

  reader.onload = (e) => {
    const csvText = e.target.result;
    // Parse CSV text into JSON
    fileName.value = file.name;
    const jsonData = csvParse(csvText);
    data.value = jsonData; // Store the parsed data for use in your component

    columns.value = jsonData.columns;
    console.log(jsonData); // Output to verify
  };

  reader.onerror = (e) => console.error("Error reading file:", e.target.error);

  reader.readAsText(file); // Read the file as text for parsing
};

const handleDrop = (event) => {
  event.preventDefault(); // Prevent default behavior for drag and drop
  handleFiles(event);
};
</script>

<template>
  <Teleport to="#modals">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="showUploadModal"
        @click.self="toggleUploadModal"
        class="fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 p-10 z-50"
      >
        <div
          class="h-full w-full bg-base-100 rounded-xl border border-slate-400"
        >
          <div class="flex flex-col gap-2 p-2 h-full w-full">
            <h1 class="text-2xl font-bold text-white">Upload File</h1>
            <!-- <pre>
          {{ data }}
        </pre> -->
            <div class="flex-1 flex flex-row justify-center items-center">
              <div
                v-if="!fileName"
                class="p-16 border-slate-400 rounded-xl border-dotted border-4 flex flex-col items-center justify-center gap-8 h-full w-full"
                @dragover.prevent
                @dragleave.prevent
                @drop="handleDrop"
              >
                <p class="text-3xl">Drag and Drop CSV File Here</p>

                <p>OR</p>

                <button
                  @click="triggerFileInput"
                  class="bg-blue-500 text-white p-2 rounded"
                >
                  Browse for a CSV File
                </button>
                <input
                  type="file"
                  ref="fileInput"
                  class="hidden"
                  accept=".csv"
                  @change="handleFiles"
                  placeholder="Upload File"
                />
              </div>

              <div
                v-if="fileName"
                class="flex flex-col justify-center items-center gap-5"
              >
                <p class="text-3xl">
                  Uploaded:
                  <span class="bg-blue-500 text-white p-2 rounded">
                    {{ fileName }}
                  </span>
                </p>

                <!-- COLUMN HEADER -->
                <p>Column / Headers</p>
                <div class="overflow-x-auto border rounded-lg">
                  <table class="table">
                    <!-- head -->
                    <thead class="">
                      <tr class="divide-x divide-white text-white">
                        <th v-for="(col, i) in columns">
                          {{ col }}
                        </th>
                      </tr>
                    </thead>
                    <!-- <tbody>
                     
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                      </tr>
                     
                      <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                      </tr>
                     
                      <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                      </tr>
                    </tbody> -->
                  </table>
                </div>
              </div>
            </div>
            <button
              @click="toggleUploadModal"
              class="btn bg-slate-700 text-white hover:bg-white hover:text-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>

  <div class="h-screen w-screen flex flex-col bg-base-300">
    <!-- navbar -->
    <div
      class="flex flex-row items-center p-2 bg-base-100 border-b border-b-slate-400"
    >
      <h1 class="text-2xl font-bold text-white">Weekly Enrollments</h1>
      <div class="ml-auto flex flex-row items-center gap-2">
        <button
          @click="toggleUploadModal"
          class="btn bg-white text-slate-500 hover:bg-slate-700 hover:text-white"
        >
          <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
        </button>
        <img
          class="h-10 w-10 rounded-full"
          src="https://i.pinimg.com/736x/ce/d3/90/ced39071be26c0d491c35492e073c59f.jpg"
          alt=""
        />
      </div>
    </div>

    <!-- main -->
    <div class="flex-1 grid grid-cols-3 gap-2 p-2">
      <div class="col-span-3 flex flex-row gap-2">
        <div
          class="flex-1 bg-base-100 border border-amber-400 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">1st</div>
          <div class="text-white text-2xl">John Doe</div>
        </div>
        <div
          class="flex-1 bg-base-100 border border-gray-200 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">2nd</div>
          <div class="text-white text-2xl">John Doe</div>
        </div>
        <div
          class="flex-1 bg-base-100 border border-amber-600 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">3rd</div>
          <div class="text-white text-2xl">John Doe</div>
        </div>
      </div>
      <!-- main left 1/3 -->
      <div class="col-span-2 flex flex-col gap-2">
        <!-- left top -->
        <div class="grid grid-cols-5 flex-1 gap-2">
          <!-- enrolled debt - today -->
          <div class="col-span-1 bg-base-300 gap-2 flex flex-col">
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">Enrolled Debt - Today</div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl"
              >
                80K
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">Average Debt / Client</div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl"
              >
                3.5K
              </div>
            </div>
          </div>

          <!-- enrolled debt - week -->
          <div class="col-span-3 bg-base-300 flex flex-col">
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">Clients Enrolled - Week</div>

              <div class="flex-1">
                <Chart
                  :chartData="goalChartData"
                  :chartOptions="goalChartOptions"
                />
              </div>
            </div>
          </div>

          <!-- enrolments - today | average program length | clients enrolled - week -->
          <div class="col-span-1 gap-2 flex flex-col">
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col p-2"
            >
              <div class="">Enrollments Today</div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl"
              >
                5
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col p-2"
            >
              <div class="">Average Program Length</div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl"
              >
                43
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col p-2"
            >
              <div class="">Clients Enrolled - Week</div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl"
              >
                25
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 gap-2 flex flex-col flex-1">
          <!-- chart wrapper -->
          <div
            class="bg-base-100 flex-1 border border-slate-400 rounded flex flex-col p-2"
          >
            <div class="">Clients Enrolled - Week</div>
            <div
              class="flex-1 flex flex-col justify-center items-center text-5xl"
            >
              <Chart
                :chartData="userChartData"
                :chartOptions="userChartOptions"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div
          class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col"
        >
          <div class="flex-1 bg-base-100 rounded flex flex-col p-2 gap-5">
            <div class="">Todays New Clients</div>
            <div class="flex-1 flex flex-col text-5xl">
              <div class="overflow-x-auto">
                <table class="table table-zebra">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
