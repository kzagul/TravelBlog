<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Поиск..."
                > </v-text-field>
            </v-col>
        </v-row>
       
        <v-row>
            <v-col>
                <v-data-table
                    :headers = "headers"
                    :items = "locates"
                    :search = "search"
                    >

                    <!-- Confirm delete -->
                    <template v-slot:top>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Вы действительно хотите удалить?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="closeDelete">
                                        Отменить
                                    </v-btn>
                                     <v-btn color="primary" @click="deleteItemConfirm">
                                        Подтвердить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>

                    
                    <template v-slot:[`item.address`] = "{ item }">
                        <router-link :to="`/locatedetails/${item.id}/${linkNeated(item.address)}`" >
                            {{item.address}}
                        </router-link>
                    </template>

                    <template v-slot:[`item.actions`]="{ item }">
                       <router-link :to="`/edit/${item.id}/${linkNeated(item.address)}`" style="text-decoration: none; color: inherit;">
                            <v-icon
                                small
                                class="mr-2"
                               
                                >
                                    mdi-pencil
                            </v-icon>
                        </router-link>

                        <v-icon
                            small
                            @click="deleteItem(item)"
                            >
                                mdi-delete
                        </v-icon>
                    </template>

                </v-data-table>
            </v-col>

        </v-row>

    </v-container>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            search: '',
            dialogDelete: false,
            selectedItemIndex: -1,
            headers: [
                // {text: "ID", value: "id"},
                {text: "Адрес", value: "address"},
                // {text: "Долгота", value: "longitude"},
                // {text: "Широта", value: "latitude"},
                {text: "Действия", value: "actions"}
            ],

            locates: []
        }

    },

    methods: {
        linkNeated (link) {
            return link.replace(/\s+/g, '-').toLocaleLowerCase()
        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
        },
        deleteItem (item) {
            this.selectedItemIndex = this.locates.indexOf(item)
            this.dialogDelete = true
        },
        deleteItemConfirm () {
            const deleteLocate = this.locates[this.selectedItemIndex]
            axios
                .delete(`http://localhost:3000/api/locate/${deleteLocate.id}`)
                .then(response => {
                    this.locates.splice(this.selectedItemIndex, 1)
                    this.closeDelete()
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        }
    },

    mounted() {
        axios
            .get('http://localhost:3000/api/locate/')
            .then(response => {
                this.locates = response.data
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }
}
</script>
