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
      :valuesRadio="{ 1: 1, 2: 2, Все: 21 }"
      :custom="true"
    ></radioButton>
    <tableView></tableView>
  </div>
</template>
<script>
import selectComponent from "../components/selectComponent.vue";
import spoiler from "../components/UI/spoiler.vue";
import radioButton from "../components/UI/radio-button.vue";
import tableView from "../components/table-view.vue";
export default {
  data() {
    return {
      mySelectedValues: "",
    };
  },
  components: {
    "v-select": selectComponent,
    spoiler,
    radioButton,
    tableView,
  },
  created() {},
  methods: {
    select(value) {
      this.selectValue = value;
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
