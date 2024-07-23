<template>
  <article class="card">
    <section
      class="img-container"
      :style="{
        backgroundColor: !item.available && 'rgba(248, 248, 250, 0.5)',
      }"
    >
      <div v-if="item.isHit" class="hit-shield">
        <span> Хит продаж </span>

        <img src="@/assets/icons/fire.jpg" alt="" />
      </div>
      <img
        class="img"
        src="@/assets/icons/productImage.png"
        alt="картинка продукта"
        :style="{ opacity: !item.available && '0.5' }"
      />
      <span v-if="item.sale > 0" class="sale-shield">{{ item.sale }}%</span>
    </section>

    <section>
      <p class="brand">{{ item.brand }}</p>
      <p class="name">{{ item.name }}</p>
    </section>

    <section v-if="item.available">
      <span class="newPrice"
        >{{ Intl.NumberFormat("ru-Ru").format(item.newPrice) }} ₽</span
      >
      <span class="oldPrice"
        >{{ Intl.NumberFormat("ru-Ru").format(item.oldPrice) }} ₽</span
      >
    </section>

    <button v-if="item.available" class="button">Купить</button>
    <button v-else class="buttonNotAvailable">Сообщить о поступлении</button>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      brand: String,
      name: String,
      img: String,
      isHit: Boolean,
      sale: Number,
      oldPrice: Number,
      newPrice: Number,
      available: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/classes.scss";

.card {
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  font-family: PTSans, sans-serif;
  max-height: 372px;

  .img-container {
    padding: 12px;
    display: grid;
    justify-items: start;
    height: 200px;
    background-color: rgba(248, 248, 250, 1);

    .img {
      height: 60px;
      align-self: center;
      justify-self: center;
    }
  }

  .brand {
    color: $second;
    line-height: 16px;
  }

  .name {
    height: 48px;
    line-height: 16px;
    margin-top: 8px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: $main;
  }

  .oldPrice {
    margin-left: 8px;
    color: $second;
    text-decoration: line-through;
  }

  .newPrice {
    font-size: 16px;
    font-weight: 700;
  }

  &:hover {
    .name {
      color: $hover;
    }

    .img {
      height: 82px;
    }
  }

  @media (width < 600px) {
    min-width: 165.5px;
  }
}

.buttonNotAvailable {
  @include button;
  border: 1px solid $second;
  width: 100%;
  color: $second;
  margin-top: 30px;

  &:hover {
    background-color: $second;
    color: $white;
  }
}

.sale-shield {
  @include shields;

  background-color: $color-brand;
  padding: 8px 10px;
  color: $white;
  align-self: flex-end;
}

.hit-shield {
  @include shields;

  padding: 0 8px;
  background-color: $white;
  border: 1px solid $color-scroll-bar;
  display: flex;
  align-items: center;
  gap: 7px;
}
</style>
