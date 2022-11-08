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
import axios from "axios";

export default {
  components: {
    HeaderComp,
    ButtonComp,
    MobileComp,
    ChartComp,
    ListComp,
  },
  data() {
    return {};
  },
  async created() {
    const response = await axios
      .get("https://apitest.nilvera.com/earchive/Statistics", {
        headers: {
          Authorization:
            "Bearer 1A1A0BDAAFB770FECEAFD9D57EF7D53896F9E9AE15C74BC3321398F0B2C39057",
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err.data);
      });
    console.log(response);
  },
};
</script>
