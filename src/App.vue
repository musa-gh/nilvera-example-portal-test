<template>
  <div class="container">
    <HeaderComp></HeaderComp>
    <ButtonComp></ButtonComp>

    <ChartComp></ChartComp>
    <ListComp></ListComp>
  </div>
</template>

<script>
import ChartComp from "./components/ChartComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import ButtonComp from "./components/ButtonComp.vue";
import ListComp from "./components/ListComp.vue";

export default {
  components: {
    HeaderComp,
    ButtonComp,
    ChartComp,
    ListComp,
  },
};
</script>
