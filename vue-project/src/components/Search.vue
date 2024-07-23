<template>
  <div class="relative" :class="{ relativeMobile: mobile }">
    <input
      @focus="focused = true"
      @blur="focused = false"
      class="search"
      :class="{ mobileSearch: mobile }"
      type="text"
      placeholder="Поиск по 100 000 товаров"
    />

    <button v-if="focused || mobile" class="clearButton absolute">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L10 8.58579L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L8.58579 10L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L10 11.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L11.4142 10L13.7071 7.70711Z"
          fill="#333333"
        />
      </svg>
    </button>
    <button v-if="focused || mobile" class="button absolute">Найти</button>
  </div>
</template>

<script>
export default {
  props: {
    mobile: Boolean,
  },
  data() {
    return {
      focused: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/classes.scss";

.relative {
  flex: 1 1;
}

.relativeMobile {
  padding-right: 16px;
}

.search {
  @include search;

  width: 100%;
  padding-left: 48px;
  background: url("@/assets/icons/search.png") no-repeat 19px center;
  border-radius: 10px;
  font-size: 16px;
  font-family: Inter, sans-serif;

  &:focus {
    border-color: $color-brand;
  }
}

.mobileSearch {
  background: url("@/assets/icons/arrow.png") no-repeat 16px center;
  padding-left: 52px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $color-border;
}

.button {
  @include button;
  border-radius: 8px;
  width: 75px;
  background-color: $color-brand;
  color: $white;

  right: 4px;
  top: 4px;

  @media (width < 800px) {
    right: 16px;
  }
}

.clearButton {
  border: none;
  background: none;
  cursor: pointer;
  right: 86px;
  top: 12px;

  @media (width < 800px) {
    right: 98px;
  }

  svg {
    path {
      fill: $corol-icons;
    }
  }

  &:hover {
    svg {
      path {
        fill: $main;
      }
    }
  }
}
</style>
