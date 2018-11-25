<template>
   <div id="root" class="container">
       <h2>Boletim Ano 1</h2> 
       <v-card class="mt-3">
           <v-data-table
                :headers="bimestres"
                :items="notas"
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-center">{{ props.item.b1 }}</td>
                    <td class="text-xs-center">{{ props.item.b2 }}</td>
                    <td class="text-xs-center">{{ props.item.b3 }}</td>
                    <td class="text-xs-center">{{ props.item.b4 }}</td>
                    <td class="text-xs-center">{{ props.item.mf }}</td>
                </template>
            </v-data-table>
       </v-card>
   </div>
</template>

<script>
export default {
    data() {
        return {

            bimestres:[
                {
                    text: 'Materias',
                    align:'left',
                    sortable: false,
                    value: 'name'
                },
                    {text:'Bimestre 1', value: 'b1'},
                    {text:'Bimestre 2', value: 'b2'},
                    {text:'Bimestre 3', value: 'b3'},
                    {text:'Bimestre 4', value: 'b4'},
                    {text:'Média Final', value: 'mf'},
            ],
            notas :[
                {
                    value: false,
                    name: 'Português',
                    b1: 10,
                    b2: 9,
                    b3: 8.9,
                    b4: 10,
                    mf: 9.2
                },
                {
                    value: false,
                    name: 'Matemática',
                    b1: 10,
                    b2: 10,
                    b3: 10,
                    b4: 10,
                    mf: 10
                },
                {
                    value: false,
                    name: 'Geografia',
                    b1: 8,
                    b2: 8,
                    b3: 8,
                    b4: 8,
                    mf: 8
                },
                {
                    value: false,
                    name: 'História',
                    b1: 9.5,
                    b2: 9.4,
                    b3: 9.6,
                    b4: 9.5,
                    mf: 9.5
                },
                {
                    value: false,
                    name: 'Biologia',
                    b1: 7,
                    b2: 9,
                    b3: 8,
                    b4: 10,
                    mf: 8.1
                },
            ]
        }
    }   
}
</script>

<style>
thead tr{
    background-color: #03ca59;
}
</style>
