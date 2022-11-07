<template>
  <div>
    <canvas ref="doughnut"> </canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

const data = {
  labels: ["GELEN FATURA", "GİDEN FATURA"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2],
      backgroundColor: ["#D61C4E", "#541690"],
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "TOPLAM:5",
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
