<template>
  <div>
    <!-- <img src="../assets/img/menu_logo.png" alt="" /> -->
    <div class="header">
      <nav class="item">
        <ul class="ul">
          <li class="">
            <a
              href="#"
              @click="active = 'e-fatura'"
              :class="active == 'e-fatura' && 'header-button-active'"
              >E-Fatura
              <i class="fa-solid fa-file-lines fa-1x"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="active = 'e-arşiv'"
              :class="active == 'e-arşiv' && 'header-button-active'"
              >E-Arşiv
              <i class="fa-sharp fa-solid fa-box-archive fa-1"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="active = 'e-irsaliye'"
              :class="active == 'e-irsaliye' && 'header-button-active'"
              >E-İrsaliye
              <i class="fa-solid fa-truck-fast fa-1x"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="active = 'e-mm'"
              :class="active == 'e-mm' && 'header-button-active'"
              >E-MM
              <i class="fa-sharp fa-solid fa-person-digging fa-1x"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click="active = 'e-smm'"
              :class="active == 'e-smm' && 'header-button-active'"
            >
              E-SMM <i class="fa-solid fa-briefcase fa-1x"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "e fatura",
    };
  },
};
</script>
<style>
.header-button-active {
  color: #d61c4e !important;
  transition: all.2s !important;
  transform: scale(1.22);
}
</style>
