<template>
  <div class="Test">
    <div class="save-btn">
      <div class="ModalButton">
        <div class="ModalButton-Show">
          <button
            class="ModalButton-Show-button"
            @click="showButton = true"
            v-on:click="hideButton()"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.94435 9.5C2.55404 9.5 2.1797 9.34196 1.90371 9.06066C1.62771 8.77936 1.47266 8.39782 1.47266 8C1.47266 7.60218 1.62771 7.22064 1.90371 6.93934C2.1797 6.65804 2.55404 6.5 2.94435 6.5C3.33467 6.5 3.70901 6.65804 3.985 6.93934C4.261 7.22064 4.41605 7.60218 4.41605 8C4.41605 8.39782 4.261 8.77936 3.985 9.06066C3.70901 9.34196 3.33467 9.5 2.94435 9.5ZM7.85001 9.5C7.4597 9.5 7.08536 9.34196 6.80937 9.06066C6.53337 8.77936 6.37832 8.39782 6.37832 8C6.37832 7.60218 6.53337 7.22064 6.80937 6.93934C7.08536 6.65804 7.4597 6.5 7.85001 6.5C8.24033 6.5 8.61467 6.65804 8.89066 6.93934C9.16666 7.22064 9.32171 7.60218 9.32171 8C9.32171 8.39782 9.16666 8.77936 8.89066 9.06066C8.61467 9.34196 8.24033 9.5 7.85001 9.5ZM12.7557 9.5C12.3654 9.5 11.991 9.34196 11.715 9.06066C11.439 8.77936 11.284 8.39782 11.284 8C11.284 7.60218 11.439 7.22064 11.715 6.93934C11.991 6.65804 12.3654 6.5 12.7557 6.5C13.146 6.5 13.5203 6.65804 13.7963 6.93934C14.0723 7.22064 14.2274 7.60218 14.2274 8C14.2274 8.39782 14.0723 8.77936 13.7963 9.06066C13.5203 9.34196 13.146 9.5 12.7557 9.5Z"
                fill="#141029"
                fill-opacity="0.8"
              />
            </svg>
          </button>
        </div>
        <nuxt-link :to="link"><button class="ModalButton-button" v-show="showButton">Открыть</button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ModalWindow from "../components/ModalWindow.vue";

export default {
     props:{
    link:{
   type: String,
      required: true,
}
  },
  layout: "map",
  components: { ModalWindow },
  data() {
    return {
      showModal: false,
      showButton: false,
    };
  },
 

  methods: {
    hideButton() {
      document.addEventListener("DOMContentLoaded", () => {
        const button = document.querySelector(".ModalButton-Show-button");
      });
      window.addEventListener("click", (e) => {
        const target = e.target;
        if (
          !target.closest(".ModalButton-Show-button") &&
          !target.closest(".ModalButton-button")
        ) {
          this.showButton = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.ModalButton {
  position: relative;
  &-Show {
    &-button {
      background-color: inherit;
    }
  }
  &-button {
    height: 48px;
    width: 110px;
    background-color: white;
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 9999;
    position: absolute;
    right: -15px;
    top: -20px;
    &:hover {
      color: blueviolet;
      background-color: #f7f7f9;
    }
  }
}
</style>
