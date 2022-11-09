<template>
  <div>
    <div class="message mt-3">
      <div class="">
        <button
          @click="comeActive = 'gelen'"
          type="button"
          class="btn btn-outline btn-sm"
          :class="{ 'come-button--active': comeActive == 'gelen' }"
        >
          GELEN KUTUSU
        </button>
        <button
          @click="comeActive = 'giden'"
          type="button"
          class="btn btn-outline btn-sm"
          :class="{ 'come-button--active': comeActive == 'giden' }"
        >
          GİDEN KUTUSU
        </button>
      </div>

      <div class="day-button">
        <button
          @click="active = 'dün'"
          type="button"
          class="btn btn-sm"
          :class="{ 'button--active': active == 'dün' }"
        >
          DÜN
        </button>
        <button
          @click="active = 'bugün'"
          type="button"
          class="btn btn-sm"
          :class="{ 'button--active': active == 'bugün' }"
        >
          BUGÜN
        </button>
        <button
          @click="active = 'bu hafta'"
          type="button"
          class="btn btn-sm"
          :class="{ 'button--active': active == 'bu hafta' }"
        >
          BU HAFTA
        </button>
        <button
          @click="active = 'bu ay'"
          type="button"
          class="btn btn-sm"
          :class="{ 'button--active': active == 'bu ay' }"
        >
          BU AY
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "bugün",
      comeActive: "giden",
    };
  },
};
</script>

<style>
.come-button--active {
  background-color: #d61c4e !important;
  color: white;
}
.button--active {
  background-color: #d61c4e !important;
  color: white;
}
</style>
