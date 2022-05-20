<script lang="ts">
import { BNav, BContainer, BNavItem } from "bootstrap-vue";

export default {
  components: {
    BContainer,
    BNav,
    BNavItem,
  },
};
</script>

<template>
  <div id="app">
    <b-container>
        <b-nav>
            <b-nav-item class="mb-5" to="/">Home</b-nav-item>
        </b-nav>
        <router-view />
    </b-container>
  </div>
</template>

<style></style>
