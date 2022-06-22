<template>
  <div class="title-of-page">
    <div class="header-page">
      <div class="header-page__mainblok">
        <div class="header-page__title">
          <h1>{{ $t(headerData.title) + splitPlatformId }}</h1>
          <div class="header-page__button">
            <fdButton @click="click" :text="buttonValue" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fdButton from "./UI/fd-button.vue";
export default {
  components: {
    fdButton,
  },
  props: {
    buttonValue: {
      type: String,
    },
    headerData: {
      type: Object,
      required: true,
      default: "Page",
    },
  },
  data() {
    return {
      status: this.$store.getters["GetChangestatus"],
    };
  },
  computed: {
    checkStore() {
      return this.$store.getters["GetChangestatus"]
        ? "accept-edit-btn"
        : "edit-message";
    },
    splitPlatformId() {
      return this.$route.params.platform === undefined
        ? ""
        : this.$route.params.platform.match(/\d+/g);
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-page {
  &__title {
    display: flex;
    justify-content: space-between;
    h1 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #141029;
    }
  }
}
@media (max-width: 667px) {
  .header-page {
    &__title {
      display: flex;
      justify-content: space-between;
      h1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        color: #141029;
      }
    }
  }
}
</style>
