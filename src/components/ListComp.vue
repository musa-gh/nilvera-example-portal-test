<template>
  <div>
    <div class="chart mt-3 d-flex flex-row mb-3">
      <div class="list">
        <div
          class="list-item"
          v-for="(item, index) in saledata.filter(
            (item) => item[0] != 'TotalCount'
          )"
          :key="index"
        >
          <a href="">
            <lord-icon
              class="lord"
              :src="`https://cdn.lordicon.com/${icon(item[0])}.json`"
              trigger="hover"
              :colors="`primary:${color(item[0])}`"
              style="width: 17px"
            >
            </lord-icon
            >{{ title(item[0]) }}
          </a>
          <span>{{ item[1] }}</span>
        </div>
        <!---->
        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/ogkplaef.json"
              trigger="hover"
              colors="primary:#66ee78"
              style="width: 20px"
            >
            </lord-icon>
            Ticari Fatura
          </a>
          <span>0</span>
        </div> -->

        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/qmuwmmnl.json"
              trigger="hover"
              colors="primary:#c79816"
              style="width: 20px"
            >
            </lord-icon
            >Cevap Bekleyen Ticari Fatura
          </a>
          <span>0</span>
        </div>
        <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/yqzmiobz.json"
              trigger="hover"
              colors="primary:#109121"
              style="width: 20px"
            >
            </lord-icon
            >Kabul Edilen Fatura
          </a>
          <span>0</span>
        </div> -->

        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/vacmyjrh.json"
              trigger="hover"
              colors="primary:#e83a30"
              style="width: 20px"
              class="lord"
            >
            </lord-icon>
            Reddedilen Fatura
          </a>
          <span>0</span>
        </div> -->
        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/jffauosv.json"
              trigger="hover"
              colors="primary:#109121"
              style="width: 20px"
            >
            </lord-icon
            >Başarılı Fatura
          </a>
          <span>0</span>
        </div> -->

        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/jfhbogmw.json"
              trigger="hover"
              colors="primary:#c71f16"
              style="width: 20px"
            >
            </lord-icon
            >Hatalı Fatura
          </a>
          <span>0</span>
        </div> -->

        <!-- <div class="list-item">
          <a href="">
            <lord-icon
              src="https://cdn.lordicon.com/nxooksci.json"
              trigger="hover"
              colors="primary:#4030e8"
              style="width: 20px"
            >
            </lord-icon
            >İşlem Bekleyen Fatura
          </a>
          <span>0</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    saledata: Array,
  },
  methods: {
    title(eng) {
      if (eng === "BasicCount") return "Temel Fatura"; //Ad
      if (eng === "CommercialCount") return "Ticari Fatura";
      if (eng === "ApprovalPendingCount") return "Cevap Bekleyen Ticari Fatura";
      if (eng === "ApprovedCount") return "Kabul Edilen Fatura";
      if (eng === "RejectedCount") return "Reddedilen Fatura";
      if (eng === "SuccessfullCount") return "Başarılı Fatura";
      if (eng === "IncorrectCount") return "Hatalı Fatura";
      if (eng === "PendingCount") return "İşlem Bekleyen Fatura";
    },
    icon(title) {
      if (title === "BasicCount") return "ogkplaef"; // sembol
      if (title === "CommercialCount") return "ogkplaef";
      if (title === "ApprovalPendingCount") return "qmuwmmnl";
      if (title === "ApprovedCount") return "yqzmiobz";
      if (title === "RejectedCount") return "vacmyjrh";
      if (title === "SuccessfullCount") return "jffauosv";
      if (title === "IncorrectCount") return "jfhbogmw";
      if (title === "PendingCount") return "nxooksci";
    },
    color(type) {
      if (type === "BasicCount") return "#e88c30"; //renk
      if (type === "CommercialCount") return "#66ee78";
      if (type === "ApprovalPendingCount") return "#c79816";
      if (type === "ApprovedCount") return "#109121";
      if (type === "RejectedCount") return "#e83a30";
      if (type === "SuccessfullCount") return "#109121";
      if (type === "IncorrectCount") return "#c71f16";
      if (type === "PendingCount") return "#4030e8";
    },
  },
};
</script>
<style></style>
