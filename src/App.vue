<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>
    <div class="row d-flex justify-content-center">
      <div class="col col-12 col-sm-6 col-md-4">
        <ChartComp></ChartComp>
      </div>
      <ListComp :saledata="purchase"></ListComp>

      <div class="col col-12 col-sm-6 col-md-4">
        <MobileComp></MobileComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-4">
        <KontorComp></KontorComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-4">
        <SmsComp></SmsComp>
      </div>
    </div>
  </div>
</template>

<script>
import ChartComp from "./components/ChartComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import ButtonComp from "./components/ButtonComp.vue";
import ListComp from "./components/ListComp.vue";
import MobileComp from "./components/MobileComp.vue";
import KontorComp from "./components/KontorComp.vue";
import SmsComp from "./components/SmsComp.vue";
import { action } from "@/Axios";

export default {
  components: {
    HeaderComp,
    ButtonComp,
    MobileComp,
    KontorComp,
    SmsComp,
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
    this.saledata = Object.entries(fdata);
    this.purchase = Object.entries(purchase);
  },
  data() {
    return {
      saledata: [],
      purchase: [],
    };
  },

  // async earchive() {
  //   await action.earchive();
  // },
};
</script>
