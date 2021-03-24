<template>
  <button>{{ title }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: {
      type: String,
      requred: true,
    },
  },
})
export default class Button extends Vue {}
</script>

<style lang="scss"></style>
