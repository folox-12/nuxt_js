<template>
  <div
    v-if="$store.getters['GetChangestatus'] == false"
    class="card-main__list card-main-list"
  >
    <ul>
      <div
        v-for="(item, index) in title"
        :key="item"
        class="card-main-list__el"
      >
        <hr />
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[index]) }}</h4>
            <span v-if="description[index] != ''">{{
              description[index]
            }}</span>
            <span v-else>{{ $t("no-info") }}</span>
          </div>
        </li>
      </div>
    </ul>
  </div>
  <div v-else class="card-main__list card-main-list">
    <ul>
      <div class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[0]) }}</h4>
            <div v-if="type[0] == 'addres'" class="card-main-list__addres">
              <input
                :id="title[0]"
                type="text"
                class="card-main-list__input"
                :value="description[0]"
                @input="$emit('changeInfo', 0, $event.target.value)"
              />
              <button
                @click="clearInput(title[0]), $emit('clearInput', 0)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
            <div v-else-if="type[0] == 'text'">
              <input
                :id="title[0]"
                type="text"
                class="card-main-list__input"
                :value="description[0]"
                v-mask="['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"
                @input="$emit('changeInfo', 0, $event.target.value)"
              />
              <button
                @click="clearInput(title[0]), $emit('clearInput', 0)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[1]) }}</h4>
            <div v-if="type[1] == 'text'">
              <input
                :id="title[1]"
                type="text"
                class="card-main-list__input"
                v-bind:value="description[1]"
                v-mask="['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"
                @input="$emit('changeInfo', 1, $event.target.value)"
              /><button
                @click="clearInput(title[1]), $emit('clearInput', 1)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>

            <div
              v-else-if="type[1] == 'three quantity'"
              class="divThreeQuantity"
            >
              <input
                v-if="this.splitStringThreePoint[0]"
                :id="'first' + title[1]"
                type="text"
                class="card-main-list__input inputThreeQuantity"
                v-bind:value="this.splitStringThreePoint[0]"
                @input="$emit('changeInfo', 1, $event.target.value, 0)"
              />
              <button
                v-if="this.splitStringThreePoint[0]"
                @click="
                  clearInput('first' + title[1]), $emit('clearInput', 1, 0)
                "
                class="card-main-list-point__1button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
              <input
                v-if="this.splitStringThreePoint[1]"
                :id="'second' + title[1]"
                type="text"
                class="card-main-list__input inputThreeQuantity"
                v-bind:value="this.splitStringThreePoint[1]"
                @input="$emit('changeInfo', 1, $event.target.value, 1)"
              />
              <button
                v-if="this.splitStringThreePoint[1]"
                @click="
                  clearInput('second' + title[1]), $emit('clearInput', 1, 1)
                "
                class="card-main-list-point__2button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
              <input
                v-if="this.splitStringThreePoint[2]"
                :id="'third' + title[1]"
                type="text"
                class="card-main-list__input inputThreeQuantity"
                v-bind:value="this.splitStringThreePoint[2]"
                @input="$emit('changeInfo', 1, $event.target.value, 2)"
              />
              <button
                v-if="this.splitStringThreePoint[2]"
                @click="
                  clearInput('third' + title[1]), $emit('clearInput', 1, 2)
                "
                class="card-main-list-point__3button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[2]) }}</h4>
            <div v-if="type[2] == 'number'">
              <input
                :id="title[2]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[2]"
                @input="$emit('changeInfo', 2, $event.target.value)"
              /><button
                @click="clearInput(title[2]), $emit('clearInput', 2)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
            <div v-else-if="type[2] == 'date'">
              <input
                :id="title[2]"
                type="date"
                class="card-main-list__input"
                v-bind:value="description[2]"
                @input="$emit('changeInfo', 2, $event.target.value)"
              /><button
                @click="clearInput(title[2]), $emit('clearInput', 2)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[3]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[3]) }}</h4>
            <div v-if="type[3] == 'text'">
              <input
                :id="title[3]"
                type="text"
                class="card-main-list__input"
                v-bind:value="description[3]"
                v-mask="['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"
                @input="$emit('changeInfo', 3, $event.target.value)"
              /><button
                @click="clearInput(title[3]), $emit('clearInput', 3)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>

            <div v-else-if="type[3] == 'number'">
              <input
                :id="title[3]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[3]"
                @input="$emit('changeInfo', 3, $event.target.value)"
              /><button
                @click="clearInput(title[3]), $emit('clearInput', 3)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[4]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[4]) }}</h4>
            <div v-if="type[4] == 'number'">
              <input
                :id="title[4]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[4]"
                @input="$emit('changeInfo', 4, $event.target.value)"
              /><button
                @click="clearInput(title[4]), $emit('clearInput', 4)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
            <div v-else-if="type[4] == 'two quantity'">
              <input
                :id="title[4]"
                type="text"
                class="card-main-list__input"
                v-bind:value="description[4]"
                v-mask="['от XXX до XXX', 'от XX до XX', 'от XXX до XX']"
                @input="$emit('changeInfo', 4, $event.target.value)"
              /><button
                @click="clearInput(title[4]), $emit('clearInput', 4)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[5]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[5]) }}</h4>
            <div v-if="type[5] == 'number'">
              <input
                :id="title[5]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[5]"
                @input="$emit('changeInfo', 5, $event.target.value)"
              /><button
                @click="clearInput(title[5]), $emit('clearInput', 5)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
            <div v-if="type[5] == 'select'">
              <select
                :id="title[5]"
                class="card-main-list__input"
                @change="$emit('changeInfo', 5, $event.target.value)"
              >
                <option v-bind:value="description[5]">
                  {{ description[5] }}
                </option>
                <option v-if="description[5] != '24/7'" value="24/7">
                  24/7
                </option>
                <option v-if="description[5] != '6/1'" value="6/1">6/1</option>
                <option v-if="description[5] != '5/2'" value="5/2">5/2</option>
                <option v-if="description[5] != '4/3'" value="4/3">4/3</option>
                <option v-if="description[5] != '2/2'" value="2/2">2/2</option>
              </select>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[6]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[6]) }}</h4>
            <div v-if="type[6] == 'number'">
              <input
                :id="title[6]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[6]"
                @input="$emit('changeInfo', 6, $event.target.value)"
              /><button
                @click="clearInput(title[6]), $emit('clearInput', 6)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[7]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[7]) }}</h4>
            <div v-if="type[7] == 'number'">
              <input
                :id="title[7]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[7]"
                @input="$emit('changeInfo', 7, $event.target.value)"
              /><button
                @click="clearInput(title[7]), $emit('clearInput', 7)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[8]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ title[8] }}</h4>
            <div v-if="type[8] == 'number'">
              <input
                :id="title[8]"
                type="number"
                class="card-main-list__input"
                v-bind:value="description[8]"
                @input="$emit('changeInfo', 8, $event.target.value)"
              /><button
                @click="clearInput(title[8]), $emit('clearInput', 8)"
                style="right: -5px"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[9]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ title[9] }}</h4>
            <div>
              <input
                :id="title[9]"
                type="text"
                class="card-main-list__input"
                v-bind:value="description[9]"
                @input="$emit('changeInfo', 9, $event.target.value)"
              /><button
                @click="clearInput(title[9]), $emit('clearInput', 9)"
                class="card-main-list-point__button"
              >
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      splitStringThreePoint: {},
    };
  },
  props: {
    title: {
      type: Array,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    type: {
      type: Array,
      required: true,
    },
  },

  methods: {
    clearInput(index) {
      document.getElementById(index).value = "";
    },
    splitThreePoints() {
      if (this.type[1] == "three quantity") {
        let stringToSplit = this.description[1];
        var splitChar = " x ";
        let splittedSring = stringToSplit.split(splitChar);
        this.splitStringThreePoint = splittedSring;
        console.log(this.splitStringThreePoint);
      }
    },
  },

  beforeMount() {
    this.splitThreePoints();
  },
};
</script>

<style lang="scss" scoped>
.divThreeQuantity {
  display: flex;
  gap: 10px;
}
</style>
