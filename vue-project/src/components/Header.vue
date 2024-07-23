<template>
  <div class="header flex align-items-center">
    <div class="flex align-items-center">
      <img src="@/assets/icons/MainLogo.jpg" alt="" />
      <p class="logo">Логотип</p>
    </div>
    <RouterLink to="/catalog" :class="{ activeLink: route === '/catalog' }"
      >Каталог</RouterLink
    >

    <Search />

    <nav class="flex gap align-items-center">
      <RouterLink to="/info" :class="{ activeLink: route === '/info' }"
        >Информация о компании</RouterLink
      >
      <RouterLink to="/contacts" :class="{ activeLink: route === '/contacts' }"
        >Контакты</RouterLink
      >
      <RouterLink to="/" :class="{ activeLink: route === '/' }"
        >Полезные ссылки</RouterLink
      >
    </nav>
  </div>
</template>

<script>
import Search from "./Search.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    Search,
    RouterLink,
  },
  computed: {
    route: function () {
      return this.$route.fullPath;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/classes.scss";

.header {
  height: 72px;
  padding: 12px 100px;
  gap: 24px;

  @media (width < 1450px) {
    padding: 12px 128px;
  }

  @media (width < 800px) {
    display: none;
  }
}

nav {
  gap: 20px;
}

a {
  text-decoration: none;
  color: $main;
  line-height: 16.94px;
}

.logo {
  font-family: Inter, sans-serif;
  line-height: 19.36px;
  margin-left: 8px;
}

.activeLink {
  border: 1px solid $color-brand;
  color: black;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px 24px;
}
</style>
