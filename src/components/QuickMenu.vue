<template>
    <v-layout column>
        <v-flex>
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
        <v-flex>
            <v-subheader>Seções</v-subheader>
            <v-divider></v-divider>
            <v-treeview :items="sectionItems"
                        @input="showInput($event)"
                        class="left-tv"
                        :open-on-click=true
                        :activatable=true
                        :active.sync="selectedTree"
                        transition
                        active-class="primary--text font-weight-bold">
            </v-treeview>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            leftMenuItems: [
                { icon: "mdi-home", title: "Notícias" },
                { icon: "mdi-book-open-variant", title: "Estude aqui" },
                { icon: "mdi-star-three-points", title: "Cursos técnicos" },
                { icon: "mdi-star-four-points", title: "Graduação" },
                { icon: "mdi-star", title: "Pós-graduação" },
                { icon: "mdi-progress-clock", title: "Cursos de curta duração" },
                { icon: "mdi-calendar-star", title: "Eventos no câmpus" },
                { icon: "mdi-clipboard-check", title: "Trabalhe aqui" },
                { icon: "mdi-school", title: "Egressos" }
            ],
            selectedTree: [],
            sectionItems: [
                {
                id: 1,
                name: "Institucional",
                children: [
                    { id: 2, name: "Histórico" },
                    { id: 3, name: "Documentação e memória" },
                    { id: 4, name: "Estrutura física" },
                    { id: 5, name: "Estrutura organizacional" },
                    { id: 6, name: "Conselho de câmpus" },
                    { id: 7, name: "Comissões" },
                    { id: 8, name: "Documentos institucionais" },
                    { id: 9, name: "Horários" },
                    { id: 10, name: "Napne" },
                    { id: 11, name: "Relações internacionais" }
                ]
                },
                {
                id: 12,
                name: "Ensino",
                children: [
                    { id: 13, name: "Cursos" },
                    { id: 14, name: "Calendários" },
                    { id: 15, name: "Secretarias" },
                    { id: 16, name: "Biblioteca" },
                    { id: 17, name: "Programas e bolsas" },
                    { id: 18, name: "Turnos e horários" }
                ]
                },
                {
                    id: 19,
                    name: "Pesquisa",
                    children: [
                        { id: 20, name: "Ações de pesquisa" },
                        { id: 21, name: "Grupos de pesquisa" },
                        { id: 22, name: "Inovação, patentes e registros" },
                        { id: 23, name: "Publicações" },
                        { id: 24, name: "Comitê de ICeT" },
                        { id: 25, name: "Comissão de pesquisa" }
                    ]
                }
            ]
        }
    }
};
</script>

<style>
</style>
