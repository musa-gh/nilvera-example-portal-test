<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>
    <div class="row">
      <div class="col-3">
        <ChartComp></ChartComp>
      </div>
      <div class="col-3">
        <MobileComp></MobileComp>
      </div>
      <div class="col-3">
        <MobileComp></MobileComp>
      </div>
      <div class="col-3">
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

export default {
  components: {
    HeaderComp,
    ButtonComp,
    MobileComp,
    ChartComp,
    ListComp,
  },
};
</script>
