<template>
    <v-container>
        <v-layout flex-wrap>
            <v-flex md8 xs12 color="primary" pa-3>
                <p class="title grey--text">Instituto Federal de Educação, Ciência e Tecnologia</p>
                <p class="display-2 primary--text">Câmpus São Paulo</p>
                <p class="title grey--text font-weight-bold">Ministério da Educação</p>
            </v-flex>
            <v-flex md4 xs12 pa-3>
                <v-text-field solo placeholder="O que você procura?" append-icon="search">

                </v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.flex-wrap {
    flex-wrap: wrap;
}
</style>
