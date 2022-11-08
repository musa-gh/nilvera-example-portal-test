<template>
  <div>
    <canvas ref="doughnut"> </canvas>
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
      backgroundColor: ["#F6F54D", "#CF0A0A"],
      hoverOffset: 4,
      borderColor: ["#373747"],
      borderWidth: 1,
      cutOut: "90%",
      borderRedius: 30,
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
