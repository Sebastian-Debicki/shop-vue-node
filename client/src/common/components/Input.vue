<template>
  <input type="text" class="input" placeholder="{{placeholder}}" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    type: String,
  },
})
export default class Input extends Vue {}
</script>

<style lang="scss">
@use '../styles/colors.scss' as color;

.input {
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid color.$grey;
}
</style>
