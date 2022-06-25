<template>
  <div class="drop-down-menu" v-click-outside="hideMenu">
    <iconBase
      :backgroundColor="'none'"
      :iconType="'three-dot'"
      @click="toggleMenu"
    />
    <div v-if="showMenu" class="drop-down-menu__list drop-down-menu-list">
      <div class="drop-down-menu-list__body">
        <iconBase
          @click="editingIdIntrustructure"
          :iconType="'edit'"
          :backgroundColor="'rgba(1, 1, 1, 0)'"
        />
        <iconBase
          @click="deletePoint"
          :iconType="'delete'"
          :backgroundColor="'rgba(1, 1, 1, 0)'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
import IconBase from "./icons/IconBase.vue";
export default {
  components: { IconBase },
  data() {
    return {
      showMenu: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    propid: {
      type: Number,
    },
    Type: {
      type: String,
    },
    statusOfEditing: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideMenu() {
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    deletePoint() {
      this.showMenu = false;
      this.$emit("deletePoint", this.propid);
    },
    editingIdIntrustructure() {
      this.$emit("editingIdIntrustructure", this.propid);
    },
  },
  watch: {
    propid: function (new_value) {
      this.init;
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down-menu {
  position: relative;
  display: inline-block;
  &__list {
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 45px;
  }
}
.drop-down-menu-list {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
