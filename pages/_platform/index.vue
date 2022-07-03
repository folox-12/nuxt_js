<template>
  <div class="page">
    <TitleOfPage
      :headerData="headerData"
      v-if="headerData"
      @click="ChangeEditStatus"
      :buttonValue="
        this.$store.getters['GetChangestatus']
          ? $t('accept-edit-btn')
          : $t('edit-message')
      "
    />
    <div class="card">
      <!-- <h6>{{ this.description }}</h6> -->
      <Imagecard
        :img="img"
        :titleImg="titleImg"
        @DeleteImg="DeleteImg"
        @addPhoto="addPhoto"
      />

      <hr />
      <div class="card__main card-main">
        <div class="card-main__title">
          <h2>{{ $t("platform-title") }}</h2>
        </div>

        <Tablecard
          :title="title"
          :description="description"
          :type="type"
          @changeInfo="changeData"
          @clearInput="clearInput"
        />

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
                v-bind:class="
                  EditingInrustructureStatus == true &&
                  EditingInrustructureId == index &&
                  $store.getters['GetChangestatus'] == true
                    ? 'card-infrustruscture-editing'
                    : ''
                "
                v-for="(item, index) in this.getInfrByPlatformId(
                  parseInt(splitPlatformId)
                )"
                v-bind:key="index"
              >
                <td>{{ $t(item.name) }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.type }}</td>
                <td
                  v-if="
                    EditingInrustructureStatus == false ||
                    (EditingInrustructureStatus == true &&
                      EditingInrustructureId != index) ||
                    $store.getters['GetChangestatus'] == false
                  "
                  align="right"
                >
                  {{ item.id }}
                </td>
                <td
                  v-if="
                    EditingInrustructureStatus == true &&
                    EditingInrustructureId == index &&
                    $store.getters['GetChangestatus'] == true
                  "
                  align="right"
                >
                  <InputInfrustructure
                    :value="item.id"
                    :id="index"
                    @Clearinput="ClearinputTableInfrus"
                    @input="EditIdfrustructure"
                  />
                </td>
                <td>
                  <OpenCard
                    v-if="$store.getters['GetChangestatus'] == false"
                    :link="'/' + $route.params.platform + item.link"
                  ></OpenCard>
                  <EditCard
                    v-else
                    :propid="index"
                    :statusOfEditing="EditingInrustructureStatus"
                    @deletePoint="deletePoint"
                    @editingIdIntrustructure="editingIdIntrustructure"
                  ></EditCard>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <AddCard
                    v-show="addcardParam"
                    :LengthInput="1"
                    :typeOfForm="this.infrastructuretype"
                    @addInfo="addInfo"
                  ></AddCard>
                </td>
              </tr>
            </table>
            <WarningMessage
              v-show="this.modalError"
              :title="$t('titleforWarningMessage')"
            ></WarningMessage>
          </div>
          <div class="card-infrastructure__button">
            <button
              v-if="
                $store.getters['GetChangestatus'] == true &&
                addcardParam == false
              "
              class="spoiler__reset_button"
              @click="addcardParam = true"
            >
              {{ $t("add-btn-edit-platform") }}
            </button>
            <button
              v-else-if="
                $store.getters['GetChangestatus'] == true &&
                addcardParam == true
              "
              class="spoiler__reset_button"
              @click="addcardParam = false"
            >
              {{ $t("add-btn-exit-platform") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleOfPage from "../../components/TitleOfPage.vue";
import { mapGetters, mapActions } from "vuex";
import Imagecard from "@/components/ImgCard.vue";
import Tablecard from "@/components/TableCard/TableCard.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import OpenCard from "@/components/buttonCardOpen.vue";
import EditCard from "@/components/buttonCardEditing.vue";
import AddCard from "@/components/formAddTable.vue";
import WarningMessage from "@/components/modalErrorInput.vue";
import InputInfrustructure from "@/components/UI/fd-input.vue";
export default {
  components: {
    TitleOfPage,
    Imagecard,
    Tablecard,
    ModalWindow,
    OpenCard,
    EditCard,
    AddCard,
    WarningMessage,
    InputInfrustructure,
  },

  data() {
    return {
      infrastructuretype: "infrastructure",
      modalError: false,
      addcardParam: false,
      titleforWarningMessage: "titleforWarningMessage",
      FuncClose: true,
      EditingInrustructureStatus: false,
      EditingInrustructureId: "",
      linkForInfr: '',

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
        "dimensions-table-card-meters",
        "creation-date-table-card",
        "registration-num-table-card",
        "alowable-temp-table-card",
        "operating-mode-table-card",
      ],

      type: [
        "addres",
        "three quantity",
        "date",
        "text",
        "two quantity",
        "select",
      ],
    };
  },
  headerData: {
    title: "platform-title-page",
  },
  methods: {
    ChangeEditStatus() {
      this.$store.commit(
        "setChangestatus",
        !this.$store.getters["GetChangestatus"]
      );
      if (this.headerData.link) this.$router.push(this.headerData.link);
    },
    DeleteImg(index) {
      this.img.splice(index, 1);
    },

    ...mapActions("dronoports", [
      "addDroneport",
      "deleteDroneport",
      "EditIdfrustructureActions",
      "ClearinputTableInfrusActions",
    ]),
    addInfo(value, option, BrandOfInfrustructure, modelOfBrand) {
      if (
        value.includes(undefined) ||
        value.includes("") ||
        option == "" ||
        BrandOfInfrustructure == "" ||
        modelOfBrand == ""
      ) {
        this.modalError = true;
        setTimeout(() => {
          this.modalError = false;
        }, 2000);
      } else {
        switch(option){
          case 'Дронопорт':
            this.linkForInfr = "Droneport"
            break
            case 'Постамат':
            this.linkForInfr = "Postamat"
            break
            case 'Камера':
            this.linkForInfr = "Camera"
            break
            case 'Датчики движения':
            this.linkForInfr = "Sensor"
            break
            case 'Освещение':
            this.linkForInfr = "Light"
            break
            case 'Ограждение':
            this.linkForInfr = "Wall"
            break
        }
        var object = {
          name: option,
          company: BrandOfInfrustructure,
          link: "/" + this.linkForInfr,
          type:  modelOfBrand,
          id: value[0],
        
        };
        let id = parseInt(this.splitPlatformId);
        this.addDroneport([id, object]);
      }
    },
    changeData(index, value, type) {
      if (type != undefined) {
        var splitChar = "x";
        let DataSplitted = this.description[index].split(splitChar);
        DataSplitted[type] = String(value);
        let ClearDataSplitted = DataSplitted;
        let StringToInput = ClearDataSplitted.join("x");
        this.description[index] = StringToInput;
        localStorage.setItem(
          "DataStationLocal",
          JSON.stringify(this.description)
        );
      } else {
        this.description[index] = value;
        localStorage.setItem(
          "DataStationLocal",
          JSON.stringify(this.description)
        );
      }
    },
    ClearinputTableInfrus(value, id) {
      var idOfTable = parseInt(this.splitPlatformId);
      this.ClearinputTableInfrusActions([id, idOfTable]);
    },
    clearInput(index, type) {
      if (type != undefined) {
        var splitChar = "x";
        let DataSplitted = this.description[index].split(splitChar);
        DataSplitted[type] = " ";
        let ClearDataSplitted = DataSplitted;
        let StringToInput = ClearDataSplitted.join("x");
        this.description[index] = StringToInput;
        // localStorage.setItem(
        //   "DataStationLocal",
        //   JSON.stringify(this.description)
        // );
      } else {
        this.description[index] = "";
        // localStorage.setItem(
        //   "DataStationLocal",
        //   JSON.stringify(this.description)
        // );
      }
    },
    EditIdfrustructure(value, id) {
      var idOfTable = parseInt(this.splitPlatformId);
      this.EditIdfrustructureActions([value, id, idOfTable]);
    },
    deletePoint(value) {
      var id = parseInt(this.splitPlatformId);
      this.deleteDroneport([id, value]);
    },
    editingIdIntrustructure(value) {
      (this.EditingInrustructureStatus = !this.EditingInrustructureStatus),
        (this.EditingInrustructureId = value);
    },

    addPhoto(value) {
      this.img.push(value);
      // localStorage.setItem("imgStationLocal", JSON.stringify(this.img));
    },
  },

  computed: {
    headerData() {
      return this.$route.matched.map(
        (r) => r.components.default.options.headerData
      )[0];
    },
    ...mapGetters("dronoports", ["getInfrByPlatformId", "getPlatformInfoById"]),
    splitPlatformId() {
      return this.$route.params.platform.match(/\d+/g);
    },
    GetPlatformAddress() {
      return this.getPlatformInfoById(parseInt(this.splitPlatformId)).address;
      // return "г. Одинцово, б-р Маршала Крылова, 20";
    },

    description: function () {
      return [
        this.GetPlatformAddress,
        "5 x 5 ",
        "08.02.22",
        "450n-144-vc67",
        "от -10 до 30",
        "24/7",
        "",
      ];
    },
  },
};
</script>

<style lang="scss" scoped>

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
  border-spacing: 0px;
  svg {
    margin-left: 0.5rem;
  }
}
.card-infrustruscture-editing {
  background: #f7f7f9;
}
</style>
