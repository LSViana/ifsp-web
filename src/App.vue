<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon class="hidden-md-and-up primary--text mr-3" @click="navDrawer =! navDrawer" />
      <div class="toolbar-icon-container">
        <img src="../public/assets/svg/ifsp-logo.svg" alt="IFSP Logo" class="toolbar-icon">
      </div>
      <v-toolbar-title class="font-weight-bold primary--text ml-3">
        IFSP
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menuItems"
          :key="item.name"
          @click="goTo(item.routeName)"
          flat color="primary">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view />
    <v-navigation-drawer v-model="navDrawer"
      temporary
      absolute>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <p class="ma-0 primary--text font-weight-bold">Menu de Opções</p>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0">
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          @click="goTo(item.routeName)">
          <v-list-tile-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navDrawer: false,
      menuItems: [
        { icon: 'mdi-home', title: 'Início', routeName: 'home' },
        { icon: 'mdi-phone', title: 'Contato', routeName: 'contact' }
      ]
    }
  },
  methods: {
    goTo(routeName) {
      this.navDrawer = false
      this.$router.push({ name: routeName })
    }
  }
};
</script>

<style>
* {
  outline: none;
  user-select: none;
}
</style>


<style lang="scss" scoped>
.toolbar-icon-container {
  width: 2%;
  min-width: 32px;
  display: flex;
  justify-content: center;
  .toolbar-icon {
    width: 75%;
    height: 75%;
  }
}
</style>
