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

        <div id="button">
            <v-btn v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain
                 @click="download">
                <v-icon>
                    mdi-microsoft-excel
                </v-icon>
                    Экспорт 
                </v-btn>
        </div>


    </v-container>
    
</template>

<script>
import axios from 'axios'
// import XLSX from 'xlsx'


export default {
    data(){
        return{
            search: '',
            dialogDelete: false,
            selectedItemIndex: -1,
            headers: [
                // {text: "ID", value: "id"},
                {text: "Полное имя", value: "fullname"},
                // {text: "Долгота", value: "longitude"},
                // {text: "Широта", value: "latitude"},
                {text: "Логин", value: "login"},
                {text: "Роль", value: "role"}
            ],

            locates: [],

            workSheetColumnName: [
                "fullname",
                "login",
                "role"
            ],
            
            workSheetName: 'Users',

            filePath: './outputFiles/excel-from-js.xlsx',

             items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]

        }

    },

    methods: {
        // download : function() {
        //     const parsedJson = JSON.stringify(this.items)
        //     const data = XLSX.utils.json_to_sheet(parsedJson)
        //     const wb = XLSX.utils.book_new()
        //     XLSX.utils.book_append_sheet(wb, data, 'data')
        //     XLSX.writeFile(wb,'demo.xlsx')
        // },


        // convert () {
        //     const parsedJson = JSON.stringify(this.locates)
        //     if (
        //         !Array.isArray(parsedJson) ||
        //         !parsedJson.every((p) => typeof p === "object" && p !== null)
        //     ) {
        //         return;
        //     }
        //     const heading = Object.keys(parsedJson[0]).join(",");
        //     const body = parsedJson.map((j) => Object.values(j).join(",")).join("n");
        //     this.csv = `${heading}${body}`;

        //     console.log("fdfdfd")
        // },
    },

    mounted() {
        axios
           .get('http://localhost:3001/api/userlogins')
            .then(response => {
                this.locates = response.data
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }
}
</script>
