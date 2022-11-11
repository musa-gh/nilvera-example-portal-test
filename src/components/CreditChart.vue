<template>
  <div>
    <canvas ref="doughnut" width="180px "></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

const data = {
  labels: ["Kullanılan"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1],
      backgroundColor: ["#3EC250 ", "#153462"],
      hoverOffset: 10,
      borderColor: ["#373747"],
      borderWidth: 4,
      borderRadius: 30,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
  options: {
    cutout: 40,
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
  props: {
    usage: Number,
  },
  mounted() {
    data.datasets[0].data = [this.usage ? this.usage : 1];
    new Chart(this.$refs.doughnut, config);
  },
};
</script>
