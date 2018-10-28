<template>
    <v-container>
        <v-layout flex-wrap>
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
        <v-layout flex-wrap>
            <v-flex lg2 md3 sm4 xs12>
                <v-subheader>Acesso rápido</v-subheader>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-tile
                        v-for="item in leftMenuItems"
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
                            <v-subheader class="mt-4">Destaques da Semana</v-subheader>
                            <v-divider></v-divider>
                        </v-layout>
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
            mainCarouselItems: [
                {
                    title: 'Ginásio do IFSP-SPO',
                    src: 'https://www.ifsp.edu.br/images/galeria_em_artigos/fotos_artigos/setembro/ginasio1.jpg',
                    description: 'Construção ajuda a fomentar prática de esportes na instituição.'
                },
                {
                    title: 'Visita de Fernando Haddad',
                    src: 'https://spo.ifsp.edu.br/images/phocagallery/16_03_2016_Haddad/thumbs/phoca_thumb_l_0004.jpg',
                    description: 'Na época prefeito da cidade, o político palestrou para os alunos e servidores!'
                }
            ],
            leftMenuItems: [
                { icon: 'mdi-book-open-variant', title: 'Estude aqui' },
                { icon: 'mdi-star-three-points', title: 'Cursos técnicos' },
                { icon: 'mdi-star-four-points', title: 'Graduação' },
                { icon: 'mdi-star', title: 'Pós-graduação' },
                { icon: 'mdi-progress-clock', title: 'Cursos de curta duração' },
                { icon: 'mdi-calendar-star', title: 'Eventos no câmpus' },
                { icon: 'mdi-clipboard-check', title: 'Trabalhe aqui' },
                { icon: 'mdi-school', title: 'Egressos' },
            ]
        }
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank')
        },
        goTo(routeName) {
            this.$router.push({ name: routeName });
        }
    }
}
</script>


<style lang="scss" scoped>
.flex-wrap {
    flex-wrap: wrap;
}
</style>
