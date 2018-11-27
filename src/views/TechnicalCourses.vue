<template>
    <v-container id="root">
        <h1 class="display-2 font-weight-bold pb-2">Cursos técnicos ofertados</h1>
        <v-layout column>
            <v-flex class="pb-4">
                <p class="display-1 font-weight-light">Cursos técnicos integrados</p>
                <v-carousel hide-delimiters="">
                    <v-carousel-item
                        v-for="(item, i) in integrados"
                        :key="i"
                        :src="item.src"
                    >
                        <v-layout column style="height: 100%; ">
                            <v-spacer></v-spacer>
                            <div style="background: rgba(255,255,255,.8);">
                                <v-layout column pa-3>
                                    <v-flex>
                                        <h2 class="primary--text">{{ item.name }}</h2>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-layout>

                    </v-carousel-item>
                </v-carousel>
            </v-flex>
            <hr class="my-4">
            <v-flex>
                <p class="display-1 font-weight-light">Cursos técnicos modulares</p>
                <v-carousel hide-delimiters="">
                    <v-carousel-item
                        v-for="(item, i) in modulares"
                        :key="i"
                        :src="item.src"
                    >
                        <v-layout column style="height: 100%; ">
                            <v-spacer></v-spacer>
                            <div style="background: rgba(255,255,255,.8);">
                                <v-layout column pa-3>
                                    <v-flex>
                                        <h2 class="primary--text">{{ item.name }}</h2>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-layout>

                    </v-carousel-item>
                </v-carousel>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            integrados: [
                {
                    src : "http://unicv.edu.cv//images/ACAD/mecanicacurso.jpg",
                    name : "Mecânica"
                },
                {
                    src : "http://imagens.ecid.com.br/imagem-curso-online/pacote-informatica-cursos-online-bb2053f4-0d46-49c8-a670-021ec42dacfb.jpg",
                    name : "Informática"
                },
                {
                    src : "https://portaleducacao.vteximg.com.br/arquivos/ids/158631-350-189/Curso-Tecnico-em-Eletronica.jpg?v=636588916021530000",
                    name : "Eletrônica"
                },
                {
                    src : "http://etecaf.com.br/wp-content/uploads/2015/07/eletrotecnica.jpg",
                    name : "Eletrotécnica"
                },
            ], 
            modulares: [
                {
                    src : "http://www.centec-am.com.br/tim.php?src=uploads/courses/2018/02/tecnico-em-edificacoes-1518749656.jpg&w=397&h=364",
                    name : "Edificações"
                },
                {
                    src : "http://etecaf.com.br/wp-content/uploads/2015/07/eletrotecnica.jpg",
                    name : "Eletrotécnica"
                },
                {
                    src : "https://demonstre.com/wp-content/uploads/2018/01/telecomunicacoes.jpg",
                    name : "Telecomunicações"
                },

            ]
        }
    }

}
</script>

<style>

</style>
