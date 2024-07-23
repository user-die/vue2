<template>
  <article class="filters">
    <section>
      <button class="categoryMain">
        <span class="name">Название категории</span><span class="count">3</span>
      </button>
      <button class="category">
        <span class="name">Название категории</span><span class="count">3</span>
      </button>
      <button class="category">
        <span class="name">Название категории</span><span class="count">3</span>
      </button>
      <button class="category">
        <span class="name">Название категории</span><span class="count">3</span>
      </button>
    </section>

    <section>
      <p class="sectionName mb16">Цена</p>

      <div class="priceDiv">
        <input class="priceInput" type="number" min="0" max="9999" />

        <span class="from">от</span>

        <div class="divider"></div>

        <span class="to">до</span>

        <input class="priceInput" type="number" min="1" max="9999" />
      </div>
    </section>

    <section class="h268">
      <div class="brands">
        <span class="sectionName">Бренд</span>
        <button aria-label="Очистить поиск по брендам" class="clearButton">
          Очистить
        </button>
      </div>

      <input class="searchBrand" type="text" />

      <div class="atributes">
        <Checkbox v-for="attribute in brands" label="Атрибут" :count="3" />
      </div>
    </section>

    <section class="h216">
      <p class="sectionName mb16">Размер</p>
      <div class="atributes">
        <Checkbox v-for="attribute in sizes" label="Атрибут" :count="3" />
      </div>
    </section>
  </article>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  components: {
    Checkbox,
  },
  data() {
    return {
      brands: Array.from({ length: 12 }, (_, i) => i + 1),
      sizes: Array.from({ length: 6 }, (_, i) => i + 1),
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/classes.scss";

@mixin category {
  background: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: PTSans, sans-serif;
    color: $main;
  }

  &:hover {
    background-color: $color-font-bg;
  }

  .name {
    font-size: 14px;
    line-height: 16px;
  }

  .count {
    font-size: 12px;
    line-height: 14px;
  }
}

.category {
  @include category;
  padding: 7px 16px 7px 32px;
}

.categoryMain {
  @include category;
  padding: 7px 16px 7px 8px;
}

.searchBrand {
  @include search;
  width: 100%;

  padding-left: 36px;
  background: url("@/assets/icons/search.png") no-repeat 12px center;
  height: 36px;
  margin: 16px 0;
}

.brands {
  display: flex;
  justify-content: space-between;
}

.filters {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (width < 800px) {
    display: none;
  }
}

.clearButton {
  font-size: 12px;
  line-height: 12px;
  border: none;
  background: none;
  text-decoration: underline;
  color: $second;

  &:active {
    color: $main;
  }
}

.sectionName {
  font-family: PTSans, sans-serif;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
}

.atributes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 180px;
  overflow-y: scroll;
}

.priceInput {
  border-radius: 4px;
  padding: 10px 0 10px 26px;
  border: 1px solid $color-border;
  font-size: 14px;
  font-family: PTSans, sans-serif;
  color: $main;

  &:hover {
    border: 1px solid $hover;
  }

  &::placeholder {
    opacity: 1;
  }
}

.priceDiv {
  display: grid;
  grid-template-columns: 42% 10px 42%;
  align-items: center;
  gap: 16px;
  position: relative;
}

.divider {
  width: 10px;
  height: 1px;
  background: $color-border;
}

@mixin from {
  position: absolute;
  color: $second;
  font-size: 12px;
  line-height: 14px;
  font-family: PTSans, sans-serif;
}

.from {
  @include from;
  left: 8px;
}

.to {
  @include from;
  right: 60px;
}
</style>
