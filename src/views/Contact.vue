<template>
    <v-container>
        <v-layout column class="px-2">
            <h1 class="display-2 primary--text">Contato com o IFSP</h1>
            <v-subheader class="pl-0 subheading font-weight-medium">
                Para conhecer os telefones dos setores, utilize a lista de ramais a seguir.
            </v-subheader>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3
                class="d-flex"
                v-for="item in branches"
                :key="item.id">
                <v-card class="elevation-8 ma-2 contact-card">
                    <v-card-title>
                        <h2 class="title primary--text font-weight-bold" style="line-height: 30px !important">{{ item.title }}</h2>
                    </v-card-title>
                    <v-card-text class="py-0" style="flex-grow: 1">
                        <p class="ma-0 pb-2">{{ item.description }}</p>
                    </v-card-text>
                    <v-card-text class="pt-0">
                        <h5 class="body-2 mt-2 pb-2 font-weight-bold">Telefones da Secretaria</h5>
                        <v-layout column>
                            <v-flex v-for="telephone in item.telephones"
                                    :key="telephone">
                                <p class="ma-1 title text-xs-center font-weight-medium primary--text">{{ telephone }}</p>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-card-actions class="px-3 pt-0 pb-3" v-if="item.email">
                        <v-layout column>
                            <h5 class="body-2 mt-2 font-weight-bold">E-mail</h5>
                            <v-layout row justify-end>
                                <a :href="`mailto:${item.email}`">
                                    <v-btn color="primary--text" class="font-weight-bold">
                                        Enviar
                                        <v-icon class="pl-2">mdi-at</v-icon>
                                    </v-btn>
                                </a>
                            </v-layout>
                        </v-layout>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            branches: [
                {
                    id: 1,
                    title: 'Cursos Técnicos Modulares, Integrados e Proeja',
                    description: 'Trata de todos os assuntos relacionados à vida acadêmica dos estudantes regularmente matriculados nos cursos técnicos e Proeja. ',
                    telephones: [
                        '(11) 2763-7611',
                        '(11) 2763-7548'
                    ],
                    email: 'cre@ifsp.edu.br'
                },
                {
                    id: 2,
                    title: 'Cursos Superiores',
                    description: 'Trata de todos os assuntos relacionados à vida acadêmica dos estudantes regularmente matriculados nos cursos superiores. ',
                    telephones: [
                        '(11) 2763-7501',
                        '(11) 2763-7650'
                    ],
                    email: 'crs@ifsp.edu.br'
                },
                {
                    id: 3,
                    title: 'Cursos de Pós-Graduação',
                    description: 'Trata de todos os assuntos relacionados à vida acadêmica dos estudantes  regularmente matriculados  nos cursos de pós-graduação. ',
                    telephones: [ '(11) 2763-7567' ],
                    email: 'spg_spo@ifsp.edu.br'
                },
                {
                    id: 4,
                    title: 'Setor de Estágios - Coordenadoria de Integração Escola Empresa',
                    description:    'Acompanha o estudante regularmente matriculado no Campus São Paulo do IFSP na realização de estágio profissional e promove a orientação' +
                                    'necessária relacionada ao mercado de trabalho, legislação de estágio, Conselho Regional e outros assuntos similares. ' +
                                    'Recebe e divulga vagas de estágios à comunidade.',
                    telephones: [ '(11) 2763-7531' ],
                    email: 'estagio@ifsp.edu.br'
                },
                {
                    id: 5,
                    title: 'Diretoria Sociopedagógica',
                    description:    'O Serviço Sociopedagógico tem como um dos seus objetivos zelar pela formação do estudante através do diálogo, ' +
                                    'refletir sobre a situação de ensino e aprendizagem, assim como contribuir no processo de socialização do estudante na vida acadêmica. ' +
                                    'Também se responsabiliza pelo Planejamento e Execução do Programa de Auxílio Permanência.',
                    telephones: [ '(11) 2763-7530' ],
                    email: 'dir.dsp@ifsp.edu.br'
                },
                {
                    id: 6,
                    title: 'Coordenadoria de Apoio ao Estudante',
                    description:    'Este setor trata de assuntos relacionados à emissão de carteirinhas de passe escolar aos estudantes e docentes do campus' +
                                    'e ao pagamento dos programas de auxílios financeiros e bolsas',
                    telephones: [ '(11) 2763-7649 ' ],
                    email: 'cae@ifsp.edu.br'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.contact-card {
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;
}
</style>

