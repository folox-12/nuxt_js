<template>
  <div>
    <!-- <v-select
      :options="['go', 'python', 'rust', 'javascript']"
      :default="'go'"
      class="select"
      @input="$event"
    /> -->
    <spoiler :title="'ПРостоолЖ'">
      <div class="class">1 1 1</div>
    </spoiler>
    <div class="div">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
      repudiandae dolor natus magnam dolorem pariatur nobis est numquam expedita
      veritatis. Illo consequatur molestias neque accusantium esse ipsam
      asperiores veniam minima eveniet atque dolore qui aspernatur commodi
      sapiente recusandae modi, facilis animi aliquid quasi magni nihil harum
      corporis laudantium iste. Cumque atque eveniet laudantium! Harum
      architecto expedita inventore quod ullam aliquam veritatis ducimus
      asperiores, tenetur tempora vero minus amet unde doloremque iste ratione
      sed aut nulla in magnam, ad quaerat voluptate? Amet laudantium illum error
      assumenda! Modi officiis repellendus voluptatum quo quis quasi, doloremque
      sunt numquam, soluta consectetur, quod recusandae consequuntur.
    </div>
    <radioButton
      :valuesRadio="{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, Все: 21 }"
      :custom="true"
    ></radioButton>
    <fdButton :text="'при'" :type="'white'" @click="someFunction" />
    <fdInput v-model="value" :closeIcon="true" :type="'primary'" />
    <iconBase
      :iconType="'plus-circle'"
      :fill="'red'"
      @click="foo"
      :backgroundColor="'grey'"
    />
  </div>
</template>
<script>
import selectComponent from "../components/selectComponent.vue";
import spoiler from "../components/UI/spoiler.vue";
import radioButton from "../components/UI/radio-button.vue";
import tableView from "../components/table-view.vue";
import fdButton from "../components/UI/fd-button.vue";
import fdInput from "../components/UI/fd-input.vue";
import iconBase from "../components/icons/IconBase.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      mySelectedValues: "",
      value: "",
    };
  },
  components: {
    "v-select": selectComponent,
    spoiler,
    radioButton,
    tableView,
    iconBase,
    fdButton,
    fdInput,
  },
  created() {},
  methods: {
    foo() {
      alert("");
    },
    select(value) {
      this.selectValue = value;
    },
    someFunction() {
      alert("yep");
    },
  },
  computed: {
    ...mapGetters("Map", ["getCoordinate"]),
    Coordinate() {
      return this.getCoordinate[inputValue];
    },
  },
};
</script>

<style lang="scss" scoped>
.main-area {
  display: flex;
  gap: 1rem;
  transition: all 0.5s ease;
  &__content {
    width: 100%;
    transition: all 0.5s ease;
  }
}
</style>
