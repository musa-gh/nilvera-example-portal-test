<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>
    <div class="row">
      <div class="col col-12 col-sm-6 col-md-3">
        <ChartComp></ChartComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <MobileComp></MobileComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <MobileComp></MobileComp>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <MobileComp></MobileComp>
      </div>
    </div>
    <ListComp></ListComp>
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
    // let response = action.earchive();
    await action.sale();
  },
  // async purchase() {
  //   await action.purchase();
  // },
  // async earchive() {
  //   await action.earchive();
  // },
};
</script>
