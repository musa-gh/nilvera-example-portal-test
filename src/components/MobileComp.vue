<template>
  <div>
    <canvas ref="doughnut"> </canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

////////////////MOBİLE///////////////

///////////WhatsAppp////////////
const data = {
  labels: ["WhatsApp"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1],
      backgroundColor: ["#D1512D ", "#153462"],
      hoverOffset: 6,
      borderColor: ["#373747"],
      borderWidth: 2,
      borderRadius: 30,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
  options: {
    cutout: 90,
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
