<template>
    <v-container class="root-container root-home pa-4" :class="[searchMode ? 'root-search' : '' ]">
        <v-layout wrap>
            <v-flex md8 xs12 color="primary" class="description-header">
                <p class="title grey--text">Instituto Federal de Educação, Ciência e Tecnologia</p>
                <p class="display-2 primary--text">Câmpus São Paulo</p>
                <p class="title grey--text font-weight-bold">Ministério da Educação</p>
            </v-flex>
            <v-flex md4 xs12>
                <v-text-field solo placeholder="O que você procura?"
                v-model="searchQuery"
                append-icon="search"
                @focus="searchMode = true"
                @blur="searchMode = false" />
                <v-layout justify-end>
                    <hoverable-icon icon="mdi-facebook" hover="primary" @click="openLink('http://facebook.com')" />
                    <hoverable-icon icon="mdi-instagram" hover="primary" @click="openLink('http://instagram.com')" />
                    <hoverable-icon icon="mdi-twitter" hover="primary" @click="openLink('http://twitter.com')" />
                    <hoverable-icon icon="mdi-rss" hover="primary" @click="openLink('http://spo.ifsp.edu.br')" />
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout wrap class="home-content">
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
        <search-results class="search-results" :results="this.resultsFake" />
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      lastSelectedTreeItem: null,
      searchMode: false,
      searchQuery: "",
      resultsFake: [
          {
              id: 1,
              title: "Alunos do campo viajam para Torres",
              subtitle: "Relatos de parentes indicam que a visita técnica não foi a melhor parte",
              description: "'As praias de Torres são as melhores do Brasil', diz John Schmitz Bretas, veterano e tiozão da viagem"
          },
          {
              id: 2,
              title: "Google pisa na concorrência ao lançar Flutter",
              subtitle: "Facebook fecha as portas e diz que React Native não é páreo",
              description: "Microsoft se rende e tira do jogo sua modesta ferramenta: o Xamarin."
          }
      ]
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

.root-search {
    .home-content, .description-header {
        max-height: 0vh !important;
        opacity: 0;
    }

    .search-results { 
        max-height: 100vh !important;
        opacity: 1 !important;
    }
}

.root-home {
    .home-content, .description-header {
        max-height: 100vh;
        opacity: 1;
    }

    .search-results {
        max-height: 0vh;
        opacity: 0;
    }

    .home-content, .description-header, .search-results {
        box-sizing: border-box;
        overflow-y: hidden;
        transition:
            opacity .5s ease-in,
            max-height 1s ease-in-out .5s;
    }
}

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

.left-tv {
  .v-treeview-node__label {
    font-size: 1rem !important;
  }
}
</style>
