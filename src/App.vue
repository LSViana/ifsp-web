<template>
  <v-app>
    <v-toolbar >
        <v-layout align-center ref="toolbarvlayout">
          <div class="mr-2 toolbar-icon-container">
            <img src="../public/assets/svg/ifsp-logo.svg" alt="IFSP Logo" class="toolbar-icon">
          </div>
          <p class="my-0 ml-2 d-flex align-center">
            <span class="primary--text display-1 font-weight-black">IFSP</span>
            <!-- <span class="grey--text ml-3 font-weight-regular hidden-sm-and-down headline">Câmpus São Paulo</span> -->
          </p>
        </v-layout>
    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.toolbar-icon-container {
  width: 2%;
  min-width: 32px;
  display: flex;
  .toolbar-icon {
    width: 75%;
    height: 75%;
  }
}
</style>
