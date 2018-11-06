<template>
    <v-container class="root-container">
        <v-layout wrap>
            <v-flex md8 xs12 color="primary" pa-3>
                <p class="title grey--text">Instituto Federal de Educação, Ciência e Tecnologia</p>
                <p class="display-2 primary--text">Câmpus São Paulo</p>
                <p class="title grey--text font-weight-bold">Ministério da Educação</p>
            </v-flex>
            <v-flex md4 xs12 pa-3>
                <v-text-field solo placeholder="O que você procura?" append-icon="search" />
                <v-layout justify-end>
                    <hoverable-icon icon="mdi-facebook" hover="primary" @click="openLink('http://facebook.com')" />
                    <hoverable-icon icon="mdi-instagram" hover="primary" @click="openLink('http://instagram.com')" />
                    <hoverable-icon icon="mdi-twitter" hover="primary" @click="openLink('http://twitter.com')" />
                    <hoverable-icon icon="mdi-rss" hover="primary" @click="openLink('http://spo.ifsp.edu.br')" />
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout wrap>
            <v-flex lg2 md3 sm4 xs12>
                <quick-menu></quick-menu>
            </v-flex>
            <v-flex lg10 md9 sm8 xs12>
                <v-tabs slider-color="accent">
                    <v-tab>
                        Notícias Principais
                    </v-tab>
                    <v-tab>
                        Espaço do Aluno
                    </v-tab>
                    <v-tab>
                        Espaço do Servidor
                    </v-tab>
                    <v-tab-item>
                        <main-news />
                    </v-tab-item>
                    <v-tab-item>
                        <p class="accent--text">oi</p>
                    </v-tab-item>
                    <v-tab-item>
                        <p class="info--text">oi</p>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      lastSelectedTreeItem: null
    };
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    searchItemById(collection, id) {
      for (let item of collection) {
        if (item.id == id) return item;
        if (item.children) return this.searchItemById(item.children, id);
      }
      return undefined;
    }
  },
  watch: {
    selectedTree() {
      if (this.selectedTree.length == 0)
        return
      // let selectedItem = this.searchItemById(this.sectionItems, this.selectedTree[0])
    }
  }
};
</script>

<style lang="scss">
.v-window-item {
    &:hover > .v-carousel__item {
        .v-image__image--cover {
            transform: scale(1.2);
        }
    }
    & > .v-carousel__item {
        .v-image__image--cover {
            transition: transform .3s;
        }
    }
}
</style>


<style lang="scss">
.left-tv {
  .v-treeview-node__label {
    font-size: 1rem !important;
  }
}
</style>
