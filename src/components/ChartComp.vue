<template>
  <div>
    <canvas class="canvas" ref="doughnut"> </canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

/////////// FATURA///////////////////
const data = {
  labels: ["GELEN FATURA", "GİDEN FATURA"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2],
      fill: false,
      backgroundColor: ["#F6F54D", "#4FA095"],
      hoverOffset: 4,
      borderColor: ["#373747"],
      borderWidth: 6,
      borderRadius: 30,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
  options: {
    cutout: 95,
    responsive: false,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          color: "#dadada",
          boxWidth: 7,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        // text: "TOPLAM:5",
      },
    },
  },
};

export default {
  mounted() {
    new Chart(this.$refs.doughnut, config);
  },
};
</script>
<style>
.canvas {
  width: 340px;
}
</style>
