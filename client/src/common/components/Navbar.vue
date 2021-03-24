<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <h4 class="navbar__brand">Shop-brand</h4>
      <div class="navbar__input-wrapper">
        <Input placeholder="Search" /><Button title="Search" />
      </div>
      <ul class="navbar__list">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

@Options({
  components: {
    Input,
    Button,
  },
})
export default class Navbar extends Vue {}
</script>

<style lang="scss">
@use '../styles/colors.scss' as color;
@use '../styles/fonts.scss' as font;
@use '../styles/variables.scss' as var;

.navbar {
  background-color: color.$white;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.5rem;
  box-shadow: 0px 1px 5px 0 rgba(color.$dark-grey, 0.3);

  &__wrapper {
    width: var.$max-width;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    @include font.format-text('xlarge', 700);
  }

  &__input-wrapper {
    width: 50%;
    display: flex;
  }

  &__list {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
}
</style>
