<template>
  <div class="ModalWindow">
    <div class="ModalWindow__container">
      <div class="Close" @click="$emit('close-modal')">
        <svg
          width="31"
          height="29"
          viewBox="0 0 31 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            xmlns="http://www.w3.org/2000/svg"
            x="0.140625"
            y="18.3906"
            width="25.4384"
            height="2.6467"
            transform="rotate(-45 0.140625 18.3906)"
            fill="#6D6A7A"
          />
          <rect
            xmlns="http://www.w3.org/2000/svg"
            x="1.87109"
            width="25.4384"
            height="2.6467"
            transform="rotate(45 1.87109 0)"
            fill="#6D6A7A"
          />
        </svg>
      </div>
      <div class="ModalWindow__container-description">
        <h6 v-if="$store.getters['GetChangestatus'] == false">
          {{ $t(titleImage) }}
        </h6>
        <h6 v-else>Добавьте фото</h6>
      </div>
      <div class="ModalWindow__container-image">
        <img
          v-if="$store.getters['GetChangestatus'] == false"
          :src="image"
          alt="Error"
        />
        <div v-else class="rz-picter">
          <img :src="img" class="img-avatar" />
          <input
            type="file"
            name="avatar"
            id="uppic"
            ref="file"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            @change="addImage()"
            class="uppic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/img/ico/addphoto.svg"),
      example: null
    };
  },
  props: {
    image: {
      type: Object,
      required: true,
      default: "../assets/img/platform1.jpg",
    },
    titleImage: {
      type: String,
      required: true,
      default: "Добавьте фото",
    },
  },
  methods: {
    addImage() {
      
      this.example = this.$refs.file.files[0]
       this.img = URL.createObjectURL(this.example);
      let agree = confirm("Добавить фото?");
      if (agree == true) {
      this.$emit('addPhoto',  URL.createObjectURL(this.example))
      
      
      
    
      }
    },
  },
};
</script>

<style scoped lang="scss">
.rz-picter {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;
}
.rz-picter:hover {
  animation: addphoto 3s ease 0s alternate-reverse, move 5s linear 2s;
  animation-iteration-count: infinite;
}

.uppic {
  width: 450px;
  height: 450px;
  margin: 0 auto;
  opacity: 0;
  z-index: 99999;
  top: 10px;
  position: absolute;
  cursor: pointer;
}
@keyframes addphoto {
  from {
    transform: scale(90%);
  }
  to {
    transform: scale(100%);
  }
}
.img-avatar {
  top: 10px;
  position: absolute;
}

.ModalWindow {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 9999;

  &__container {
    position: relative;
    text-align: center;
    background-color: rgb(255, 255, 255);
    height: 600px;
    width: 570px;
    margin-top: 5%;
    padding: 30px 30px;
    border-radius: 20px;

    &-description {
      display: flex;
      align-items: flex-start;
    }
    &-image {
      margin-top: 30px;
      img {
        border-radius: 3rem;
        border: rgba(0, 0, 0, 0.05) 1px solid;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        width: 450px;
        height: 450px;
      }
    }
  }
}

.Close {
  position: absolute;
  cursor: pointer;
  right: 15px;
  top: 30px;
}

h6 {
  text-align: start;
  font-weight: 500;
  font-size: 28px;
}
@media (max-width: 800px) {
  .ModalWindow {
    &__container {
      height: 300px;
      width: 270px;
      padding: 10px;
      &-image {
        margin-top: 20px;
        img {
          width: 100%;
          height: 230px;
        }
      }
    }
  }
  .Close {
    position: absolute;
    cursor: pointer;
    right: 7.5px;
    top: 15px;
  }
  h6 {
    text-align: start;
    font-weight: 400;
    font-size: 22px;
  }
}
</style>
