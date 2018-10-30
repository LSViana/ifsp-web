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
        <div id="week-news">
            <v-subheader class="mt-4 info--text">Destaques da Semana</v-subheader>
            <v-layout style="height: 1px; opacity: .75" class="info mb-2"></v-layout>
            <v-layout column>
                <v-flex class="pa-2">
                    <h3 class="title font-weight-medium">{{ firstWeekNews.title }}</h3>
                    <p class="my-2">{{ firstWeekNews.subtitle }}</p>
                </v-flex>
                <v-divider class="mb-2" />
                <v-flex>
                    <v-layout row wrap>
                        <v-flex
                            v-for="(item) in threeFirstWeekNews"
                            :key=" item.title"
                            class="xs12 sm6 md4 pa-1 fluid-flex">
                            <h4 class="font-weight-bold">{{ item.title }}</h4>
                            <p class="my-2 caption">{{ item.subtitle }}</p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout style="height: 1px; opacity: .75" class="info my-2"></v-layout>
            <v-layout row justify-end>
                <v-layout row align-center style="flex: unset">
                    <p class="ma-0">Veja todas as notícias</p>
                    <v-btn fab small color="info" class="btn-tiny">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-layout>
            </v-layout>
        </div>
        <div id="ifsp-community">
            <v-subheader class="mt-4 secondary--text">Comunidade IFSP</v-subheader>
            <v-layout style="height: 1px; opacity: .75" class="secondary mb-2"></v-layout>
            <v-layout row wrap>
                <v-flex
                    v-for="item in communityNews"
                    :key="item.title"
                    class="xs12 sm6 md4 pa-1 fluid-flex">
                    <h3 class="secondary--text body-2 mb-1 text-uppercase">{{ item.type }}</h3>
                    <h4 class="font-weight-medium">{{ item.title }}</h4>
                </v-flex>
            </v-layout>
            <v-layout style="height: 1px; opacity: .75" class="secondary my-2"></v-layout>
            <v-layout row justify-end>
                <v-layout row align-center style="flex: unset">
                    <p class="ma-0">Acesse a lista completa</p>
                    <v-btn fab small color="secondary" class="btn-tiny">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-layout>
            </v-layout>
        </div>
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
      return this.weekNews[0];
    },
    threeFirstWeekNews() {
      return this.weekNews.slice(1, 4);
    }
  }
};
</script>

<style>
</style>
