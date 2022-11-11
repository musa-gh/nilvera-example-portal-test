<template>
  <div class="mobil-port">
    <div v-for="(item, index) in credit" :key="index" class="mobile-chart">
      <div class="text-center">
        <h4 class="title">
          {{ item.Name === "Portal" ? "Kontör" : item.Name }}
        </h4>
        <p class="p1">TOPLAM : {{ item.TotalCredit }}</p>
        <p class="p2">KULLANILAN : {{ item.UsedCredit }}</p>
      </div>
      <CreditChart :usage="item.UsedCredit" />
    </div>
  </div>
</template>
<script>
////////////////MOBİLE///////////////

///////////WhatsAppp////////////

import CreditChart from "./CreditChart.vue";

export default {
  components: {
    CreditChart,
  },
  props: {
    credit: Array,
  },
};
</script>
<style>
.title {
  color: #dadada;
}
.p1,
.p2 {
  color: #dadada;
}
.mobil-port {
  display: flex;
  width: max-content;
  margin: 0 auto;
  flex-wrap: wrap;
}
.text-center {
  margin-top: 1rem;
}

.mobile-chart {
  margin: 0 1rem;
  display: flex;
  align-items: center;
  background-color: #252837;
  border-radius: 20px;
  cursor: pointer;
  padding-left: 4rem;
}
</style>
