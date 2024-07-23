<template>
  <main>
    <Filters />

    <Search :mobile="true" class="mobile" />
    <h1>Название категории</h1>
    <div class="products">
      <ProductCards v-for="product in products" :item="product" />
    </div>
  </main>
</template>

<script>
import Filters from "@/components/Filters.vue";
import ProductCards from "@/components/ProductCards.vue";
import Search from "@/components/Search.vue";

export default {
  components: {
    Filters,
    ProductCards,
    Search,
  },
  data() {
    return {
      products: [
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: false,
          sale: 0,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: false,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
        {
          brand: "Бренд",
          name: "Полное название товара в несколько строк для вида с обрывом в конце фффффффффффффффффф",
          img: "",
          isHit: true,
          sale: 25,
          oldPrice: 5990,
          newPrice: 4990,
          available: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/classes.scss";

.mobile {
  @media (width > 800px) {
    display: none;
  }
}

input {
  border: none;
  border-bottom: 1px solid #d5d5d5;
  border-radius: 0;
}

h1 {
  color: $main;
  font-family: PTSans, sans-serif;
  font-size: 22px;
  line-height: 28pxs;
  margin-left: 24px;

  @media (width > 800px) {
    display: none;
  }
}

main {
  display: flex;
  gap: 36px;
  padding: 24px 100px 36px;

  @media (width < 800px) {
    padding: 0;
    flex-direction: column;
    gap: 12px;
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;

  @media (width < 1440px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (width < 1000px) {
    grid-template-columns: repeat(2, auto);
    gap: 12px;
    padding: 0 16px;
  }
}
</style>
