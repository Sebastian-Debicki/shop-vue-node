<template>
  <nav class="navbar">
    <h4 class="navbar__brand">Shop</h4>
    <ul>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Products</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class Navbar extends Vue {}
</script>

<style lang="scss">
@use '../styles/colors.scss' as color;
@use '../styles/fonts.scss' as font;

.navbar {
  background-color: color.$white;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  &__brand {
    @include font.format-text('xlarge', 700);
  }
}
</style>
