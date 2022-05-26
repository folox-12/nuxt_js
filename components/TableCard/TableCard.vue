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
            <span>{{ description[index] }}</span>
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
            <div class="card-main-list__addres">
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[0]"
                @input="$emit('changeInfo', 0, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[1]"
                @input="$emit('changeInfo', 1, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[2]"
                @input="$emit('changeInfo', 2, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[3]"
                @input="$emit('changeInfo', 3, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[4]"
                @input="$emit('changeInfo', 4, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[5]"
                @input="$emit('changeInfo', 5, $event.target.value)"
              /><button @click="clearInput()">
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[6]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ $t(title[6]) }}</h4>
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[6]"
                @input="$emit('changeInfo', 6, $event.target.value)"
              /><button @click="clearInput()">
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
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[7]"
                @input="$emit('changeInfo', 7, $event.target.value)"
              /><button @click="clearInput()">
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[7]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ title[8] }}</h4>
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[8]"
                @input="$emit('changeInfo', 8, $event.target.value)"
              /><button @click="clearInput()">
                <img src="@/assets/img/ico/smallClear.svg" alt="" />
              </button>
            </div>
          </div>
        </li>
      </div>
      <div v-if="description[9]" class="card-main-list__el">
        <li>
          <div class="card-main-list__point">
            <h4>{{ title[7] }}</h4>
            <div>
              <input
                type="text"
                class="card-main-list__input"
                v-bind:value="description[9]"
                @input="$emit('changeInfo', 9, $event.target.value)"
              /><button @click="clearInput()">
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
export default {
  data() {
    return {
      property: "sdada",
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
  },
  methods: {
    clearInput() {},
  },
};
</script>

<style lang="scss" scoped></style>
