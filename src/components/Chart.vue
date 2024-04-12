<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import ChartAnnotation from "chartjs-plugin-annotation";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartAnnotation
  // ChartDataLabels
);

//create props for the data and the options

export default {
  name: "Chart",
  components: { Bar },
  props: {
    // Defining props to accept data and options from a parent component
    data: {
      type: Object,
      required: true, // Making the data prop required
    },
    options: {
      type: Object,
      required: false, // This prop is optional
      default: () => ({
        responsive: true, // Default options if none are provided
      }),
    },
  },
  data() {
    return {
      // Local state is now sourced from props
      chartData: this.data,
      chartOptions: this.options,
    };
  },
};
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
