<template>
    <v-layout column>
        <v-carousel hide-delimiters>
            <v-carousel-item
                v-for="item in mainCarouselItems"
                :key="item.title"
                :src="item.src">
                <v-layout column style="height: 100%">
                    <v-spacer></v-spacer>
                    <div style="background: rgba(255,255,255,.8);">
                        <v-layout column pa-3>
                            <v-flex>
                                <h2 class="primary--text">{{ item.title }}</h2>
                                <h4 class="font-weight-regular">{{ item.description }}</h4>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
        <v-layout row wrap class="main-card-container my-3">
            <v-flex sm12 md6>
                <v-card :class="{ 'mr-2': vuetify.breakpoint.mdAndUp, 'mb-2': !vuetify.breakpoint.mdAndUp }">
                    <v-card-title>
                        <h2 class="info--text">Destaques da Semana</h2>
                    </v-card-title>
                    <v-card-text class="pa-0">
                        <v-layout column>
                            <template
                                v-for="(item, i) in firstWeekNews">
                                <v-flex
                                    class="px-3"
                                    :key=i>
                                    <h3 class="title font-weight-medium">{{ item.title }}</h3>
                                    <p class="mt-2 mb-0">{{ item.subtitle }}</p>
                                </v-flex>
                                <v-divider 
                                    v-if="i != (firstWeekNews.length - 1)"
                                    class="my-3"
                                    :key="i+'-divider'" />
                            </template>
                        </v-layout>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="justify-end">
                        <!-- <v-spacer></v-spacer> -->
                        <v-btn flat color="info">
                            Veja mais notícias
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex sm12 md6>
                <v-card :class="{ 'ml-2': vuetify.breakpoint.mdAndUp, 'mt-2': !vuetify.breakpoint.mdAndUp }">
                    <v-card-title>
                        <h2 class="secondary--text">Comunidade IFSP</h2>
                    </v-card-title>
                    <v-card-text class="pa-0">
                        <v-layout column wrap>
                            <template
                                v-for="(item, i) in communityNews">
                            <v-flex
                                :key="item.title"
                                class="xs12 sm6 md4 px-3 fluid-flex">
                                <h3 class="secondary--text subheading font-weight-medium mb-1 text-uppercase">{{ item.type }}</h3>
                                <h4 class="title font-weight-regular">{{ item.title }}</h4>
                            </v-flex>
                            <v-divider 
                                    v-if="i != (communityNews.length - 1)"
                                    class="my-3"
                                    :key="i+'-divider'" />
                            </template>
                        </v-layout>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="justify-end">
                        <v-btn flat color="secondary">
                            Acesse a lista completa
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      mainCarouselItems: [
        {
          title: "Ginásio do IFSP-SPO",
          src:
            "https://www.ifsp.edu.br/images/galeria_em_artigos/fotos_artigos/setembro/ginasio1.jpg",
          description:
            "Construção ajuda a fomentar prática de esportes na instituição."
        },
        {
          title: "Visita de Fernando Haddad",
          src:
            "https://spo.ifsp.edu.br/images/phocagallery/16_03_2016_Haddad/thumbs/phoca_thumb_l_0004.jpg",
          description:
            "Na época prefeito da cidade, o político palestrou para os alunos e servidores!"
        }
      ],
      weekNews: [
        {
          title:
            "Muito mais do que uma escola, o IFSP oferece 5.862 oportunidades para você conquistar tudo o que você quiser!",
          subtitle:
            "As inscrições são gratuitas e devem ser realizadas de 8 de outubro a 20 de novembro."
        },
        {
          title: "Processo Seletivo para Curso PROEJA - 2019",
          subtitle:
            "Inscrições acontecem de 05 a 14 de novembro de 2018 para 40 vagas"
        },
        {
          title:
            "Alunos do Integrado em Informática participam da Olimpíada Brasileira de Informática 2018",
          subtitle:
            "Estudantes participaram, até agora, das três primeiras fases da competição"
        },
        {
          title:
            "Equipamento desenvolvido pela Mecânica possibilita colaboração acadêmicas",
          subtitle: "Desenvolvido e mantido por github.com/bolgheroni"
        }
      ],
      communityNews: [
        {
          type: "EVENTO",
          title:
            "O Futuro da Inteligência Artificial (25 de outubro, 19h, no Auditório Aldo Ivo)"
        },
        {
          type: "SEGURANÇA E SAÚDE",
          title:
            "1ª Palestra do Dia Nacional da Segurança e Saúde nas Escolas no IFSP"
        },
        {
          type: "FESTIVAL",
          title:
            "2º FEPIS - Festival de Poesia, Improviso e SLAM (23 de agosto, Teatro Jayme Compri)"
        }
      ]
    };
  },
  computed: {
    firstWeekNews() {
      return this.weekNews.slice(0, 3);
    },
    vuetify() { return this.$vuetify }
  }
};
</script>

<style lang="scss">
.main-card-container {
  > .flex {
    display: flex;
    > .v-card {
      flex-grow: 1;
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>

