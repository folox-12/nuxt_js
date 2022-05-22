<template>
  <div class="main-area" id="main-area">
    <v-select
      :options="['go', 'python', 'rust', 'javascript']"
      :default="'go'"
      class="select"
      @input="$event"
    />
  </div>
</template>
<script>
import selectComponent from "../components/selectComponent.vue";

export default {
  data() {
    return {
      selectValue: "",
    };
  },
  components: {
    "v-select": selectComponent,
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
