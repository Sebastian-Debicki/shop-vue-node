<template>
  <main>
    <Navbar />
    <Dashboard />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Dashboard from './modules/dashboard/Dashboard.vue';
import Navbar from './common/components/Navbar.vue';

import './styles/styles.scss';

@Options({
  components: {
    Dashboard,
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
