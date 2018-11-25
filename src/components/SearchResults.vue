<template>
    <v-container flex-column class="root-search-results pa-0">
        <v-layout row wrap class="search-layout">
            <v-flex
                v-for="result in results"
                :key="result.id" xs12 sm6 md4>
                <v-card class="ma-2 elevation-4">
                    <v-card-title class="pb-0">
                        <v-layout column>
                            <v-flex>
                                <p class="title font-weight-bold primary--text">
                                    {{ result.title }}
                                </p>
                            </v-flex>
                            <v-flex>
                                <p class="mb-0 subheading font-weight-medium">
                                    {{ result.subtitle }}
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        <p>
                            {{ result.description }}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-layout column>
                            <v-btn color="primary--text" class="font-weight-bold">
                                Acessar
                                <v-icon class="pl-2">mdi-message-outline</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        results: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
.root-search-results {
    overflow-y: auto !important;
    overflow-x: hidden;
}

.search-layout {
    margin-right: -8px;
    margin-left: -8px;
    padding: 8px;
}
</style>
