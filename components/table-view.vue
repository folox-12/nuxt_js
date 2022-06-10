<template>
  <section class="table" id="table">
    <div class="table__responsive">
      <table class="table__data">
        <thead>
          <tr class="table-title">
            <th
              v-for="(name, value) in tableTitle"
              :key="value"
              :class="value"
              @click="getNameForSort(value)"
            >
              <div>
                {{ $t(name) }}

                <svg
                  v-if="sortedFlag == value"
                  width="11"
                  :class="{ reverse: flagDirection == false }"
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
              </div>
            </th>
            <th class="null"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!countOfAllDronoport" class="empty">
            <td colspan="4" style="text-align: center; font-size: 1.5rem">
              {{ $t("nothing-found") }}
            </td>
          </tr>
          <tr
            class="table-el"
            v-for="(index, row) in tableDescription"
            :key="row.id"
          >
            <td class="numerical">
              <span>{{ row + indexForNumberOfRow }}</span>
              <!-- <span>{{ index }}</span> -->
            </td>
            <td
              v-for="(key, value) in removeObjProperty(
                removeObjProperty(index, 'id'),
                'infrastructure'
              )"
              :class="value"
              :key="key.id"
            >
              <span>{{ key }}</span>
            </td>
            <td class="null">
              <OpenCard
                v-if="!$store.getters['GetChangestatus']"
                :link="'/Platform' + index.id"
              ></OpenCard>
              <EditCard
                v-else
                :propid="index"
                @deletePoint="deletePoint"
              ></EditCard>
            </td>
          </tr>
          <tr>
            <td colspan="5" v-if="$store.getters['GetChangestatus']">
              <AddCard :LengthInput="3" @addInfo="addInfo"></AddCard>
            </td>
          </tr>
        </tbody>
      </table>
      <WarningMessage
        v-show="this.modalError"
        :title="$t('titleforWarningMessage')"
      ></WarningMessage>
    </div>
    <slot></slot>
  </section>
</template>

<script>
import OpenCard from "@/components/buttonCardOpen.vue";
import EditCard from "@/components/buttonCardEditing.vue";
import AddCard from "@/components/formAddTable.vue";
import WarningMessage from "@/components/modalErrorInput.vue";

import { mapActions } from "vuex";

export default {
  layout: "default",
  components: {
    OpenCard,
    EditCard,
    AddCard,
    WarningMessage,
  },

  data() {
    return {
      modalError: false,
      to: "",
      sortedFlag: "",
      flagDirection: false,
    };
  },

  props: {
    tableTitle: { type: Object, default: {} },
    tableDescription: { type: Array, default: [] },
    pageNumber: { type: Number, default: 1 },
    itemsOnPage: { type: Number, required: true },
  },
  computed: {
    countOfAllDronoport() {
      return this.tableDescription.length;
    },
    indexForNumberOfRow() {
      return this.itemsOnPage * (this.pageNumber - 1) + 1; //row[0, 1] + countItem * (pageNumber -1) + 1
    },
  },
  methods: {
    ...mapActions("dronoports", ["addPlatform", "deletePlatform"]),
    addInfo(value) {
      if (value.includes(undefined) || value.includes("")) {
        this.modalError = true;
        setTimeout(() => {
          this.modalError = false;
        }, 2000);
      } else {
        let object = {
          id: 10,
          address: value[0],
          dronoport: value[1],
          postamat: value[2],
          infrastructure: [],
        };
        // console.log("f " + object.address);
        this.addPlatform(object);
      }
    },
    deletePoint(value) {
      //console.log(value.id);
      this.deletePlatform(value.id);
    },
    removeObjProperty(obj, prop_name) {
      const arr = Object.entries(obj);
      const filtered_arr = arr.filter(function ([key, value]) {
        return key != prop_name;
      });
      const filteredObj = Object.fromEntries(filtered_arr);
      // console.log(filteredObj);
      return filteredObj;
    },
    UpdatedPageNumber(value) {
      this.pageNumber = value;
    },
    getNameForSort(value) {
      if (this.sortedFlag == value) {
        this.flagDirection = !this.flagDirection;
      } else {
        this.sortedFlag = value;
        this.flagDirection = true;
      }
      setTimeout(() => this.$emit("onSorted", value, this.flagDirection), 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  transition: all 0.5s ease;
  max-width: 1140px;
  height: fit-content;
  padding: 15px 0 25px;
  background-color: #fff;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);

  &__responsive {
    display: block;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 16px;
  }
  table.table__data {
    color: #413e53;
    cursor: pointer;
    margin-bottom: 15px;
    min-width: 1140px;
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
    td,
    th {
      padding: 12px;
    }
    th {
      div {
        text-align: center;
        width: fit-content;
        margin-right: 15px;
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          right: -15px;
          width: 11px;
          height: 11px;
          transition: all 0.8s ease;
          &.reverse {
            transform: translate(0, -50%) rotate(180deg);
          }
        }
      }
    }
    td {
      vertical-align: middle;
      word-break: break-all;
      width: fit-content;
    }
    th.dronoport,
    th.postamat {
      div {
        margin: auto;
      }
    }
    td.dronoport,
    td.postamat {
      text-align: center;
      width: fit-content;
    }
    tr {
      & > :first-child {
        padding-left: 30px;
      }
      & > :last-child {
        padding-right: 30px;
      }
      &:hover td {
        color: #292c33;
        background-color: #ececec;
      }
    }
  }
}
</style>
