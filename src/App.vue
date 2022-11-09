<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>
    <div class="row d-flex justify-content-center">
      <div class="col col-12 col-sm-6 col-md-4">
        <ChartComp></ChartComp>
      </div>
      <ListComp></ListComp>
      <div class="col col-12 col-sm-6 col-md-4">
        <MobileComp></MobileComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-4">
        <MobileComp></MobileComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-4">
        <MobileComp></MobileComp>
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
    let res = await action.earchive();
    console.log(res);
    let fdata = await action.sale();
    console.log(fdata);
  },
  // async purchase() {
  //   await action.purchase();
  // },
  // async earchive() {
  //   await action.earchive();
  // },
};
</script>
