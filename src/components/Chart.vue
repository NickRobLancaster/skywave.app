<script setup>
import { ref, watchEffect } from "vue";
import { Bar } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
import ChartAnnotation from "chartjs-plugin-annotation";
Chart.register(...registerables);

// Props for chart data and options
const props = defineProps({
  chartData: Object,
  chartOptions: Object,
});

// Ref for the chart instance
const chartRef = ref(null);

// Watch for changes in chartData to update the chart
watchEffect(() => {
  if (chartRef.value && props.chartData) {
    chartRef.value.data = props.chartData;
    chartRef.value.update();
  }
});
</script>

<template>
  <Bar ref="chartRef" :data="props.chartData" :options="props.chartOptions" />
</template>
