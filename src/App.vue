<template>
  <div class="container mt-3">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>
    <div class="row d-flex justify-content-center">
      <div class="chart-size">
        <ChartComp></ChartComp>
        <ListComp :saledata="purchase"></ListComp>
      </div>

      <MobileComp :credit="credit"></MobileComp>

      <!-- <div class="col col-12 col-sm-6 col-md-4">
        <KontorComp></KontorComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-4">
        <SmsComp></SmsComp>
      </div> -->
    </div>
  </div>
</template>

<script>
import ChartComp from "./components/ChartComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import ButtonComp from "./components/ButtonComp.vue";
import ListComp from "./components/ListComp.vue";
import MobileComp from "./components/MobileComp.vue";
// import KontorComp from "./components/KontorComp.vue";
// import SmsComp from "./components/SmsComp.vue";
import { action } from "@/Axios";

export default {
  components: {
    HeaderComp,
    ButtonComp,
    MobileComp,
    ChartComp,
    ListComp,
  },
  async created() {
    const res = await action.earchive();
    console.log(res);
    //
    const purchase = await action.purchase();
    console.log(purchase);
    //
    const fdata = await action.sale();
    console.log(fdata);
    //
    this.credit = await action.credit();
    //
    this.saledata = Object.entries(fdata);
    this.purchase = Object.entries(purchase);
  },
  data() {
    return {
      saledata: [],
      purchase: [],
      credit: [],
    };
  },

  // async earchive() {
  //   await action.earchive();
  // },
};
</script>
<style>
.chart-size {
  display: flex;
  justify-content: space-evenly;
  margin: 3rem 0;
}
</style>
