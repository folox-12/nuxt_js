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
        <div v-if="Type == 'string'" class="ModalButton-button2" v-show="showButton">
          <button  @click="deletePoint">
            <span>Удалить</span>
          </button>
        </div>
        <div v-else-if="Type == 'icons'" class="ModalButton-button1" v-show="showButton">
          <button>
            <svg
              id="editing"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="editing"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9046 3.30962L19.677 2.47207C20.083 2.03287 20.1226 1.40981 19.7166 0.980824L19.4393 0.684618C19.0729 0.306699 18.459 0.388411 18.053 0.796972L17.2509 1.60388L18.9046 3.30962ZM7.32223 13.973L9.41222 13.0844L18.1882 4.03476L16.534 2.33923L7.76796 11.3889L6.8765 13.5032C6.75763 13.7891 7.05479 14.0854 7.32223 13.973ZM18.0839 17.5376C18.0839 19.7949 16.9052 21.0002 14.9043 21.0002H3.44407C1.24512 21.0002 0.0664062 19.7949 0.0664062 17.5376V5.87324C0.0664062 3.62615 1.24512 2.4209 3.44407 2.4209H13.8445L11.5762 4.75991H3.65208C2.79033 4.75991 2.33469 5.19911 2.33469 6.12859V17.2823C2.33469 18.2118 2.79033 18.6612 3.65208 18.6612H14.6963C15.3402 18.6612 15.8156 18.2118 15.8156 17.2823V9.20301L18.0839 6.864V17.5376Z"
                fill="#141029"
                fill-opacity="0.8"
              />
            </svg>
          </button>
          <hr />
          <button @click="deletePoint">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="delete_svg"
                d="M3 5H19L17.42 19.22C17.3658 19.7094 17.1331 20.1616 16.7663 20.49C16.3994 20.8184 15.9244 21 15.432 21H6.568C6.07564 21 5.60056 20.8184 5.23375 20.49C4.86693 20.1616 4.63416 19.7094 4.58 19.22L3 5Z"
                stroke="#141029"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="delete_svg"
                d="M6.345 2.147C6.50675 1.80397 6.76271 1.514 7.083 1.31091C7.4033 1.10782 7.77474 0.999996 8.154 1H13.846C14.2254 0.999806 14.5971 1.10755 14.9176 1.31064C15.2381 1.51374 15.4942 1.80381 15.656 2.147L17 5H5L6.345 2.147Z"
                stroke="#141029"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="delete_svg"
                d="M1 5H21"
                stroke="#141029"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="delete_svg"
                d="M9 10V15"
                stroke="#141029"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="delete_svg"
                d="M13 10V15"
                stroke="#141029"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalWindow from "../components/ModalWindow.vue";

export default {
  
  layout: "map",
  components: { ModalWindow },
  data() {
    return {
      showModal: false,
      showButton: false,
      id: 0,
    };
  },

  props:{
    propid:{
      type: Number
    },
    Type:{
      type: String
    }

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
    deletePoint() {
      this.$emit("deletePoint", this.propid);
    },
  },
  watch: {
    propid: function (new_value) {
      this.init;
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
  &-button1 {
    width: 61px;
    height: 86px;
    background-color: white;
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 9999;
    position: absolute;
    display: flex;
    flex-direction: column;
    right: -15px;
    top: -20px;

    button {
      background: transparent;
      padding: 10px 10px 10px 10px;
    }
    button:hover {
      svg {
        .delete_svg {
          stroke: #9b42f5;
        }
        #editing {
          fill: #9b42f5;
          fill-opacity: 1;
        }
      }
    }
    hr {
      width: 100%;
      border: 1px solid #e5e5e5;
      transform: matrix(1, 0.01, 0, -1, 0, 0);
    }
  }
  &-button2{
     width: 117px;
    height: 55px;
    background-color: white;
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    z-index: 9999;
    position: absolute;
    display: flex;
    flex-direction: column;
    right: -15px;
    top: -20px;
     button {
      background: transparent;
      padding: 15px 10px 15px 10px;
      span{
        font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: rgba(20, 16, 41, 0.8);
      }
    }
  }
 
}
</style>
