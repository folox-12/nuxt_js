<template>
  <div class="page">
    <div class="card">
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        @DeleteImg="DeleteImg"
      ></Imagecard>

      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("platform-title") + splitPlatformId }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          :type="type"
          @changeInfo="changeData"
          @clearInput="clearInput"
        ></Tablecard>

        <div class="card__infrastructure card-infrastructure">
          <div class="card-infrastructure__title">
            <h2>{{ $t("infrastructure-title") }}</h2>
          </div>
          <div class="card-infrastructure__table">
            <table>
              <tr>
                <th align="left">
                  {{ $t("infrastructure-type")
                  }}<svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 0C5.70835 0 5.90816 0.0724249 6.05548 0.201342C6.20281 0.330259 6.28557 0.505107 6.28557 0.687423V8.65191L9.65725 5.70011C9.73029 5.6362 9.817 5.5855 9.91243 5.55091C10.0079 5.51632 10.1101 5.49852 10.2134 5.49852C10.3167 5.49852 10.419 5.51632 10.5144 5.55091C10.6099 5.5855 10.6966 5.6362 10.7696 5.70011C10.8427 5.76403 10.9006 5.8399 10.9401 5.92341C10.9797 6.00692 11 6.09642 11 6.18681C11 6.2772 10.9797 6.3667 10.9401 6.45021C10.9006 6.53371 10.8427 6.60959 10.7696 6.6735L6.05619 10.798C5.98321 10.8621 5.89652 10.9129 5.80108 10.9475C5.70565 10.9822 5.60333 11 5.5 11C5.39667 11 5.29436 10.9822 5.19892 10.9475C5.10348 10.9129 5.01679 10.8621 4.94381 10.798L0.23038 6.6735C0.15734 6.60959 0.0994023 6.53371 0.0598737 6.45021C0.0203452 6.3667 0 6.2772 0 6.18681C0 6.09642 0.0203452 6.00692 0.0598737 5.92341C0.0994023 5.8399 0.15734 5.76403 0.23038 5.70011C0.377889 5.57103 0.577955 5.49852 0.786565 5.49852C0.889858 5.49852 0.992141 5.51632 1.08757 5.55091C1.183 5.5855 1.26971 5.6362 1.34275 5.70011L4.71443 8.65191V0.687423C4.71443 0.505107 4.79719 0.330259 4.94452 0.201342C5.09184 0.0724249 5.29165 0 5.5 0Z"
                      fill="#9B41F3"
                    />
                  </svg>
                </th>
                <th align="left">{{ $t("infrastructure-manufacturer") }}</th>
                <th align="left">{{ $t("infrastructure-model") }}</th>
                <th align="right">{{ $t("infrastructure-num") }}</th>
                <th></th>
              </tr>
              <tr
                v-for="(item, index) in this.getInfrByPlatformId(
                  parseInt(splitPlatformId)
                )"
                v-bind:key="index"
              >
                <td>{{ $t(item.name) }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.type }}</td>
                <td align="right">{{ item.id }}</td>
                <td>
                  <OpenCard
                    v-if="$store.getters['GetChangestatus'] == false"
                    :link="'/' + $route.params.platform + item.link"
                  ></OpenCard>
                  <EditCard v-else></EditCard>
                </td>
              </tr>
            </table>
          </div>
          <div class="card-infrastructure__button">
            <button
              v-if="$store.getters['GetChangestatus'] == true"
              class="spoiler__reset_button"
            >
              {{ $t("add-btn-edit-platform") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Imagecard from "@/components/ImgCard.vue";
import Tablecard from "@/components/TableCard/TableCard.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import OpenCard from "@/components/buttonCardOpen.vue";
import EditCard from "@/components/buttonCardEditing.vue";
export default {
  /*
  async asyncData({ store }) {
    await store.dispatch("i18n/setRouteParams", {
      en: { postId: "my-post" },
      ru: { Platform: "" },
    });
  },
  */
  layout: "card",
  components: {
    Imagecard,
    Tablecard,
    ModalWindow,
    OpenCard,
    EditCard,
  },

  data() {
    // index_of_platform = $route.params.platform;
    return {
      img: [
        require("@/assets/img/platform1.jpg"),
        require("@/assets/img/platform2.jpg"),
        require("@/assets/img/platform3.jpg"),
      ],
      titleImg: [
        "left-view-modal-img",
        "top-view-modal-img",
        "right-view-modal-img",
      ],
      title: [
        "adress-table-card",
        "registration-num-table-card",
        "creation-date-table-card",
        "dimensions-table-card-meters",
        "alowable-temp-table-card",
        "operating-mode-table-card",
      ],
      description: [
        "г. Одинцово, б-р Маршала Крылова, 20",
        "450n-144-vc67",
        "08.02.22",
        "5 х 5",
        "от -10 до 30",
        "24/7",
        "",
      ],
      type: [
        "addres",
        "text",
        "date",
        "two quantity",
        "two quantity",
        "select",
      ],
    };
  },
  headerData: {
    title: "platform-title-page",
  },
  methods: {
    changeData(number, value) {
      this.description[number] = value;
    },
    DeleteImg(index) {
      this.img.splice(index, 1);
    },
    clearInput(index) {
      this.description[index] = "";
    },
  },
  computed: {
    ...mapGetters("dronoports", ["getInfrByPlatformId"]),
    splitPlatformId() {
      return this.$route.params.platform.match(/\d/g);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/card-area";
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #9b42f5;
  border-radius: 6px;
}

progress::-webkit-progress-bar {
  color: #9b42f5;
}

progress::-webkit-progress-value {
  color: #9b42f5;
}

progress {
  color: #9b42f5;
}

table {
  svg {
    margin-left: 0.5rem;
  }
}
</style>
