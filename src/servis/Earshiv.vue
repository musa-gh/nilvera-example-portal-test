<template>
  <div>
    <ChartComp />
  </div>
</template>

<script>
import ChartComp from "../components/ChartComp.vue";

const Service_Name = "earchive";
export default {
  components: {
    ChartComp,
  },
  async created() {
    this.data = await getStatistics(Service_Name, this.statisticsDate);
  },
  data: () => ({
    data: {},
  }),
  watch: {
    async statisticsDate() {
      this.data = await getStatistics(Service_Name, this.statisticsDate);
    },
  },
  computed: {
    isAnyData() {
      return !Object.values(this.data).every((item) => item === 0);
    },
  },
};
</script>

<style></style>
