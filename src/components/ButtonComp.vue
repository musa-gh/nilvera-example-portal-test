<template>
  <div>
    <div class="message mt-3">
      <div>
        <button
          @click="active = 'gelen'"
          type="button"
          class="btn btn-outline btn-sm"
          :class="{ 'button--active': active == 'gelen' }"
        >
          GELEN KUTUSU
        </button>
        <button
          @click="active = 'giden'"
          type="button"
          class="btn btn-outline btn-sm"
          :class="{ 'button--active': active == 'giden' }"
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
      active: "gelen",
    };
  },
};
</script>

<style>
.button--active {
  background-color: #d61c4e !important;
  color: white;
}
</style>
