<script setup>
import { ref, computed, reactive, watch, Teleport, onMounted } from "vue";
import { csvParse } from "d3-dsv";
import Chart from "./Chart.vue";

const showSidebarModal = ref(false);
const showUploadModal = ref(true);

const fileInput = ref(null); // the file object
const fileName = ref(""); // the name of the csv file
const columns = ref([]); //the columns in the csv file
const data = ref([]); //the data from the csv file - array of objects
const today = ref("");
const start = ref("");
const end = ref("");
const totalDebtLast7Days = ref([]);

watch(data, (newVal) => {
  if (data.value.length > 0) {
    showUploadModal.value = false;
  } else {
    showUploadModal.value = true;
  }
});

//toggle upload modal
const toggleUploadModal = () => {
  showUploadModal.value = !showUploadModal.value;
};

const toggleSidebarModal = () => {
  showSidebarModal.value = !showSidebarModal.value;
};

//chart options for goal chart
const goalChartOptions = reactive({
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
});

//chart data for goal chart
const goalChartData = reactive({
  labels: ["Debt Load"],
  datasets: [
    {
      //disable the labels
      data: totalDebtLast7Days.value,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      // Set the bar thickness here
      barThickness: 75, // This sets the height of each horizontal bar
    },
  ],
});

//chart options for user chart
const userChartOptions = reactive({
  //disable the labels
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

//chart data for user chart
const userChartData = reactive({
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Users",
      backgroundColor: "#f87979",
      data: [40, 20, 12, 39],
    },
  ],
});

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
    data.value = trimPropertyNames(jsonData);

    columns.value = jsonData.columns;
    console.log(data); // Output to verify
  };

  reader.onerror = (e) => console.error("Error reading file:", e.target.error);

  reader.readAsText(file); // Read the file as text for parsing
};

const handleDrop = (event) => {
  event.preventDefault(); // Prevent default behavior for drag and drop
  handleFiles(event);
};

const wipeData = () => {
  const confirmWipe = confirm(
    "Are you sure you want to wipe all the CSV data?"
  );

  if (!confirmWipe) {
    return;
  }

  data.value = [];
  fileName.value = "";
};

const todaysDate = computed(() => {
  const today = new Date();
  const month = today.getMonth() + 1; // January is 0!
  const day = today.getDate();
  const year = today.getFullYear();

  return `${month}/${day}/${year}`;
});

const trimPropertyNames = (arr) => {
  return arr.map((obj) => {
    const newObj = {};

    Object.entries(obj).forEach(([key, value]) => {
      const trimmedKey = key.trim();
      newObj[trimmedKey] = value;
    });

    return newObj;
  });
};

//computed function that returns the sum of "Debt Amount" for todaysDate
const sumDebtsOnDate = (date) => {
  return `$${formatWholeNumberWithCommas(
    data.value
      .filter((item) => item["Enrolled Date"] === date)
      .map(
        (item) => parseFloat(item["Debt Amount"].replace(/[\$,]/g, "")) // Remove $ and , then parse to float
      )
      .reduce((acc, currentValue) => acc + currentValue, 0)
  )}`; // Sum up the values
};

//we need a function that get's the sum of all debts within the last 7 days
const sumDebtsBetweenStartAndEndDates = computed(() => {
  const totalDebt = data.value
    .filter((item) => {
      const itemDate = new Date(item["Enrolled Date"]);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    })
    .map(
      (item) => parseFloat(item["Debt Amount"].replace(/[\$,]/g, "")) // Remove $ and , then parse to float
    )
    .reduce((acc, currentValue) => acc + currentValue, 0); // Sum up the values

  return `$${Intl.NumberFormat("en-US").format(totalDebt)}`;
});

const startDate = computed(() => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust if today is Sunday
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + diffToMonday
  );
  return `${start.getMonth() + 1}/${start.getDate()}/${start.getFullYear()}`;
});

const endDate = computed(() => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diffToFriday = 5 - dayOfWeek;
  const end = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + diffToFriday
  );
  return `${end.getMonth() + 1}/${end.getDate()}/${end.getFullYear()}`;
});

//computed function that gets average "Debt Amount" for clients enrolled between startDate and endDate
const averageDebtAmount = computed(() => {
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);

  const filteredItems = data.value.filter((item) => {
    const enrolledDate = new Date(item["Enrolled Date"]);
    return enrolledDate >= start && enrolledDate <= end;
  });

  const totalDebt = filteredItems.reduce((acc, item) => {
    // Remove $ and commas, then convert to number
    const amount = parseFloat(item["Debt Amount"].replace(/[\$,]/g, ""));
    return acc + amount;
  }, 0);

  const average =
    filteredItems.length > 0 ? totalDebt / filteredItems.length : 0;
  return `$${Intl.NumberFormat("en-US").format(average.toFixed(0))}`; // Convert to 2 decimal places string
});

//gets the total client that enrolled today from the "Enrolled Date" key on the objects in the data array
const clientsEnrolledToday = computed(() => {
  return data.value.filter((item) => item["Enrolled Date"] === todaysDate.value)
    .length;
});

//computd function that returns the total clients enrolled between the startDate and endDate
const clientsEnrolledWeek = computed(() => {
  const start = new Date(startDate.value);
  const end = new Date(endDate.value);

  return data.value.filter((item) => {
    const enrolledDate = new Date(item["Enrolled Date"]);
    return enrolledDate >= start && enrolledDate <= end;
  }).length;
});

//computed function that gets the average program length of all clients
const averageProgramLength = computed(() => {
  return (
    data.value
      .map((item) => parseInt(Number(item["Term"])))
      .reduce((acc, currentValue) => acc + currentValue, 0) / data.value.length
  ).toFixed(0);
});

const topSalesUsers = computed(() => {
  const userAggregates = data.value.reduce((acc, item) => {
    const user = item["Sales User"];
    const debtAmount = parseFloat(item["Debt Amount"].replace(/[\$,]/g, ""));

    if (!acc[user]) {
      acc[user] = { count: 0, debt_load: 0 };
    }
    acc[user].count += 1;
    acc[user].debt_load += debtAmount;

    return acc;
  }, {});

  const userObjects = Object.entries(userAggregates).map(
    ([sales_user, data]) => ({
      sales_user,
      debt_load: data.debt_load.toFixed(2), // Formatting the debt_load to 2 decimal places
    })
  );

  // Sorting by count, but could also sort by debt_load if that's more relevant
  userObjects.sort((a, b) => b.debt_load - a.debt_load);

  return userObjects.slice(0, 3); // Return the top 3 sales users
});

onMounted(() => {
  today.value = todaysDate.value;
  start.value = startDate.value;
  end.value = endDate.value;

  console.log("Today: ", today.value);
  console.log("Start: ", start.value);
  console.log("End: ", end.value);
});

//spiffsToday array or default to the local storage value
const company_name = ref(
  JSON.parse(localStorage.getItem("companyName")) || "Quick Dash"
);
//spiffsToday array or default to the local storage value
const spiffsToday = ref(JSON.parse(localStorage.getItem("spiffsToday")) || []);

//spiffsWeek array or default to the local storage value
const spiffsWeek = ref(JSON.parse(localStorage.getItem("spiffsWeek")) || []);

const spiffAdderToday = () => {
  console.log(spiffsToday.value);
  spiffsToday.value.push({
    sales_rep: "",
    spiff_amount: "",
  });
};

const spiffAdderWeek = () => {
  spiffsWeek.value.push({
    sales_rep: "",
    spiff_amount: "",
  });
};

//watch the spiffsToday array and store in local storage
watch(company_name, (newVal) => {
  console.log(newVal);
  localStorage.setItem("companyName", JSON.stringify(newVal));
});
//watch the spiffsToday array and store in local storage
watch(spiffsToday.value, (newVal) => {
  console.log(newVal);
  localStorage.setItem("spiffsToday", JSON.stringify(newVal));
});

//watch the spiffsWeek array and store in local storage
watch(spiffsWeek.value, (newVal) => {
  console.log(newVal);

  localStorage.setItem("spiffsWeek", JSON.stringify(newVal));
});

const spiffWeekHovered = ref(false);
const spiffTodayHovered = ref(false);

const spiffWeekHoverOver = () => {
  spiffWeekHovered.value = true;
};
const spiffWeekHoverLeave = () => {
  spiffWeekHovered.value = false;
};
const spiffTodayHoverOver = () => {
  spiffTodayHovered.value = true;
};
const spiffTodayHoverLeave = () => {
  spiffTodayHovered.value = false;
};

const formatWholeNumberWithCommas = (number) => {
  const wholeNumber = Math.floor(number); // Or use Math.ceil() or Math.round() as needed
  return new Intl.NumberFormat("en-US").format(wholeNumber);
};

const newClientsToday = computed(() => {
  const today = new Date();
  const formattedToday = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;

  return data.value.filter((item) => item["Enrolled Date"] === formattedToday);
});

const wipeLocalStorage = () => {
  const confirmWipe = confirm(
    "Are you sure you want to wipe all the local storage data?"
  );

  if (!confirmWipe) {
    return;
  }

  localStorage.clear();

  //reload the page
  location.reload();
};
</script>

<template>
  <Teleport to="#modals">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <div
        v-if="showSidebarModal"
        @click.self="toggleSidebarModal"
        class="fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 z-50 max-w-screen max-h-screen flex flex-col items-end"
      >
        <div class="h-full w-1/3 bg-base-100 border-l border-slate-400">
          <div class="flex flex-col gap-2 p-2 h-full w-full">
            <h1 class="text-2xl font-bold text-white text-right">
              <span class="cursive-text"> Quick Dash </span> &trade;
            </h1>

            <div
              class="border border-slate-400 rounded p-2 flex flex-col gap-5"
            >
              <h1 class="text-xl text-white">Welcome to Quick Dash</h1>
              <p class="text-base">
                In case you haven't figured out how to use Quick Dash &trade;
                yet... It's pretty simple.
              </p>
              <ol
                class="text-base list-decimal list-inside gap-2 space-y-2 pl-5"
              >
                <li>
                  Upon landing at our page you'll immediately be prompted to
                  drag and drop or browse a CSV file.
                </li>
                <li>Drag it, Drop it, Browse it, whatever you prefer</li>
                <li>
                  As long as you didn't upload some janky CSV or one of those
                  ".xls" files, you'll immediately see your metrics displayed
                </li>
                <li>Cheers 🍾</li>
              </ol>

              <p class="text-base">Feel free to give it a shot below</p>
            </div>

            <div class="w-1/2 ml-auto">
              <div class="flex-1 flex flex-row justify-center items-center">
                <div
                  v-if="!fileName"
                  class="p-8 border-slate-400 rounded-xl border-dotted border-4 flex flex-col items-center justify-center gap-8 h-full w-full"
                  @dragover.prevent
                  @dragleave.prevent
                  @drop="handleDrop"
                >
                  <p class="text-xl text-center">Drag and Drop CSV File Here</p>

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
              </div>
            </div>

            <div
              class="border border-slate-400 rounded p-2 flex flex-col gap-5 mt-auto"
            >
              <h1>Settings</h1>

              <div class="grid grid-cols-4 gap-3">
                <div class="col-span-3 flex flex-col gap-3">
                  <label for="startDate">Company Name</label>
                  <input
                    type="text"
                    v-model="company_name"
                    class="input input-sm rounded bg-gray-100 text-slate-600"
                  />
                </div>
                <button
                  class="btn btn-sm rounded bg-red-500 text-white mt-auto"
                  @click="wipeLocalStorage"
                >
                  Wipe Storage
                </button>
              </div>
            </div>
            <button
              @click="toggleSidebarModal"
              class="btn bg-slate-700 text-white hover:bg-white hover:text-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>

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
        class="fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 p-10 z-50 max-w-screen max-h-screen"
      >
        <div
          class="h-full w-full bg-base-100 rounded-xl border border-slate-400"
        >
          <div class="flex flex-col gap-2 p-2 h-full w-full">
            <h1 class="text-2xl font-bold text-white">Upload File</h1>
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

                <!-- <p>Column / Headers</p>
                <div class="overflow-x-auto border rounded-lg">
                  <table class="table">
                    <thead class="">
                      <tr class="divide-x divide-white text-white">
                        <th v-for="(col, i) in columns">
                          {{ col }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                  </table>
                </div> -->
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
      <h1 class="text-2xl font-bold text-white">
        Weekly Enrollments ({{ startDate }} - {{ endDate }})
      </h1>

      <div class="ml-auto text-3xl text-white cursive-text">
        {{ company_name }}
      </div>

      <div class="ml-auto flex flex-row items-center gap-2">
        <button
          v-if="data.length < 1"
          @click="toggleUploadModal"
          class="btn bg-blue-500 text-white hover:bg-blue-700"
        >
          <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" />
        </button>

        <button
          v-if="data.length > 0"
          @click="wipeData"
          class="btn text-white bg-red-500 hover:bg-red-700"
        >
          <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
        </button>

        <button
          @click="toggleSidebarModal"
          class="btn text-slate-600 bg-white hover:bg-base-100 hover:text-white hover:border hover:border-slate-400"
        >
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <!-- <img
          class="h-10 w-10 rounded-full"
          src="https://i.pinimg.com/736x/ce/d3/90/ced39071be26c0d491c35492e073c59f.jpg"
          alt=""
        /> -->
      </div>
    </div>

    <!-- main -->
    <div class="flex-1 grid grid-cols-3 gap-2 p-2 max-w-full overflow-hidden">
      <div class="col-span-3 flex flex-row max-sm:flex-col gap-2">
        <div
          class="flex-1 bg-base-100 border border-amber-400 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">1st</div>
          <div class="text-white text-2xl">
            {{ topSalesUsers[0]?.sales_user }} -
            {{ `$${formatWholeNumberWithCommas(topSalesUsers[0]?.debt_load)}` }}
          </div>
        </div>
        <div
          class="flex-1 bg-base-100 border border-gray-200 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">2nd</div>
          <div class="text-white text-2xl">
            {{ topSalesUsers[1]?.sales_user }} -
            {{ `$${formatWholeNumberWithCommas(topSalesUsers[1]?.debt_load)}` }}
          </div>
        </div>
        <div
          class="flex-1 bg-base-100 border border-amber-600 rounded flex flex-col p-2 text-center justify-center"
        >
          <div class="text-white text-3xl">3rd</div>
          <div class="text-white text-2xl">
            {{ topSalesUsers[2]?.sales_user }} -
            {{ `$${formatWholeNumberWithCommas(topSalesUsers[2]?.debt_load)}` }}
          </div>
        </div>
      </div>
      <!-- main left 2/3 -->
      <div class="col-span-2 max-sm:col-span-3 flex flex-col gap-2">
        <!-- left top -->
        <div
          class="grid grid-cols-5 max-sm:grid max-sm:grid-cols-1 flex-1 gap-2"
        >
          <!-- enrolled debt - today -->
          <div class="col-span-1 bg-base-300 gap-2 flex flex-col">
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">
                Enrolled Debt <br />
                - Today
              </div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-4xl text-emerald-400"
              >
                {{ sumDebtsOnDate(todaysDate) }}
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">
                Average Debt / Client<br />
                - Week
              </div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-4xl text-blue-400"
              >
                {{ averageDebtAmount }}
              </div>
            </div>
          </div>

          <!-- enrolled debt - week -->
          <div class="col-span-3 bg-base-300 flex flex-col">
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded p-2 flex flex-col"
            >
              <div class="">Enrolled Debt - Week</div>

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
              <div class="">
                Enrollments <br />
                - Today
              </div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl text-orange-400"
              >
                {{ clientsEnrolledToday }}
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col p-2"
            >
              <div class="">
                Average Program Length <br />
                - Week
              </div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl text-purple-400"
              >
                {{ averageProgramLength === "NaN" ? 0 : averageProgramLength }}
              </div>
            </div>
            <div
              class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col p-2"
            >
              <div class="">
                Clients Enrolled <br />
                - Week
              </div>
              <div
                class="flex-1 flex flex-col justify-center items-center text-5xl text-sky-400"
              >
                {{ clientsEnrolledWeek }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 gap-2 flex flex-col flex-1">
          <!-- chart wrapper -->
          <div
            class="bg-base-100 flex-1 border border-slate-400 rounded flex flex-col p-2 max-w-full overflow-x-auto"
          >
            <div class="">Enrollments by Rep - Week</div>
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

      <div class="flex flex-col col-span-1 max-sm:col-span-3 gap-2">
        <div
          class="flex-1 bg-base-100 border border-slate-400 rounded flex flex-col"
        >
          <div
            class="h-2/3 bg-base-100 rounded flex flex-col gap-5 overflow-y-auto"
          >
            <div class="p-2">New Clients - Today</div>

            <div class="flex-1 flex flex-col text-5xl">
              <div class="overflow-y-auto">
                <table class="table table-zebra">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th>Program Consultant</th>
                      <th>Client Name</th>
                      <th>Term</th>
                      <th>Total Debt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr v-for="(item, i) in newClientsToday" :key="i">
                      <td>{{ item["Sales User"] }}</td>
                      <th>{{ item["Customer Name"] }}</th>
                      <td>{{ item["Term"] }}</td>
                      <td>{{ item["Debt Amount"] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- spiff adders -->
          <div
            class="h-1/3 bg-base-100 flex-col grid grid-cols-2 border-t border-t-slate-400 divide-x divide-slate-400"
          >
            <div class="h-full overflow-y-auto hide-scroll">
              <div class="flex flex-row items-center p-2">
                <div class="">Spiffs - Today</div>
                <button
                  @click="spiffAdderToday"
                  class="ml-auto btn btn-xs border border-slate-400 hover:bg-gray-100 hover:text-slate-600"
                >
                  +
                </button>
              </div>
              <table class="table table-zebra table-xs">
                <!-- head -->
                <thead class="sticky top-0 bg-base-100">
                  <tr>
                    <th>Rep</th>
                    <th>Spiff</th>
                    <th
                      class="text-center"
                      v-if="spiffTodayHovered && spiffsToday.length !== 0"
                    >
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </th>
                  </tr>
                </thead>
                <tbody
                  @mouseover="spiffTodayHoverOver"
                  @mouseleave="spiffTodayHoverLeave"
                >
                  <!-- row 1 -->
                  <tr v-for="(item, i) in spiffsToday" :key="i">
                    <td>
                      <input
                        type="text"
                        v-model="spiffsToday[i].sales_rep"
                        class="w-full p-1 bg-transparent border border-slate-600 text-base rounded"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="spiffsToday[i].spiff_amount"
                        class="w-full text-emerald-500 p-1 bg-transparent border border-slate-600 text-base rounded"
                      />
                    </td>
                    <td v-if="spiffTodayHovered">
                      <button
                        @click="spiffsToday.splice(i, 1)"
                        class="btn btn-sm bg-red bg-red-500 text-white hover:bg-red-700 rounded"
                      >
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="spiffsToday.length === 0" class="p-2">
                <div class="bg-blue-500 p-5 rounded text-white text-center">
                  No Spiffs Today Yet
                </div>
              </div>
            </div>
            <div class="h-full overflow-y-auto hide-scroll">
              <div class="flex flex-row items-center p-2">
                <div class="">Spiffs - Week</div>
                <button
                  @click="spiffAdderWeek"
                  class="ml-auto btn btn-xs border border-slate-400 hover:bg-gray-100 hover:text-slate-600"
                >
                  +
                </button>
              </div>
              <table class="table table-zebra table-xs">
                <!-- head -->
                <thead class="sticky top-0 bg-base-100">
                  <tr>
                    <th>Rep</th>
                    <th>Spiff</th>
                    <th
                      class="text-center"
                      v-if="spiffWeekHovered && spiffsWeek.length !== 0"
                    >
                      <font-awesome-icon icon="fa-solid fa-trash" />
                    </th>
                  </tr>
                </thead>
                <tbody
                  @mouseover="spiffWeekHoverOver"
                  @mouseleave="spiffWeekHoverLeave"
                >
                  <!-- row 1 -->
                  <tr v-for="(item, i) in spiffsWeek" :key="i">
                    <td>
                      <input
                        type="text"
                        v-model="spiffsWeek[i].sales_rep"
                        class="w-full p-1 bg-transparent border border-slate-600 text-base rounded"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        v-model="spiffsWeek[i].spiff_amount"
                        class="w-full text-emerald-500 p-1 bg-transparent border border-slate-600 text-base rounded"
                      />
                    </td>
                    <td v-if="spiffWeekHovered">
                      <button
                        @click="spiffsWeek.splice(i, 1)"
                        class="btn btn-sm bg-red bg-red-500 text-white hover:bg-red-700 rounded"
                      >
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="spiffsWeek.length === 0" class="p-2">
                <div class="bg-blue-500 p-5 rounded text-white text-center">
                  No Spiffs This Week Yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scroll::-webkit-scrollbar {
  display: none;
}

.cursive-text {
  font-family: "Dancing Script", cursive;
}
</style>
