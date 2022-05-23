<template>
    <v-form v-model="valid">
        <v-container>
            <h2 class="text-center mb-10">
                Записать новую Экскурсию
            </h2>

            <v-row>
                <!-- address label -->
                <v-col cols="8 ml-auto mr-auto" >
                    <v-text-field v-model="editedItem.name" label="Наименование" :rules="addressRules">
                    </v-text-field>
                </v-col>

                <!-- longitude label -->
                <v-col cols="8 ml-auto mr-auto" >
                    <v-text-field v-model="editedItem.location" label="Локация" :rules="addressRules">
                    </v-text-field>
                </v-col>

                <!-- latitude label -->
                <v-col cols="8 ml-auto mr-auto" >
                    <v-text-field v-model="editedItem.duration" label="Продолжительность" :rules="addressRules">
                    </v-text-field>
                </v-col>

            </v-row>
            
            <v-dialog v-model="dialog" width="50%">
                <v-card>
                    <v-card-title>
                        <p v-if="success">
                            Новая экскурсия успешно добавлена!
                        </p>
                        <p v-if="!success">
                            Ошибка: новая экскурсия не была добавлена!
                        </p>

                    </v-card-title>

                    <v-card-actions>
                        <v-btn v-if="edit" @click.stop="dialog = !dialog" class="ma-1" large color="#000000" plain>Продолжить изменение</v-btn>
                        <v-spacer></v-spacer>
                            <router-link to="/excursionpage" style="text-decoration: none">
                                <v-btn @click.stop="dialog = false" v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                                    Подтвердить
                                </v-btn>
                            </router-link>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-row>
                <v-col cols="3 ml-auto mr-auto">
                    <!-- <router-link :to="'/'" exact style="text-decoration: none; color: inherit;"> -->
                        <v-btn @click.stop="save" :disabled="!valid" v-bind="attrs" v-on="on" class="ma-1" large color="#000000" plain>
                            <v-icon>
                                mdi-check
                            </v-icon>
                            Сохранить
                        </v-btn>
                    <!-- </router-link> -->
                </v-col>
            </v-row>


        </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            dialog: false,
            editedItem: {
                name: "",
                location: "",
                duration: "",
            },
            isOperationSuccess: false,
            valid: false,
            addressRules: [
                v => !!v || 'Поле пустое',
                v => v.length <= 40 || 'Должно быть не более 40 символов',
                v => v.length > 3 || 'Должно быть не менее 4 символов',
            ],
            reg: /^(([-]\d{1,3})|([\d]{1,3}))[.,][\d]{3,5}\b/gmu,
            
            coordinatesRules: [
                v => !!v || 'Поле пустое',
                v => v.match(this.reg) != null || 'Не корректный ввод данных' 
            ]
        }
    },

    computed: {
        success(){
            return this.isOperationSuccess
        },
    },

    methods: {
        save() {
                axios({
                    method: "post",
                    url: "http://localhost:3002/api/excursions",
                    data: this.editedItem,
                })
                .then(response => {
                    this.isOperationSuccess = true
                    this.dialog = true
                    console.log(response.data)
                })
                .catch(error =>{
                    this.isOperationSuccess = false
                    this.dialog = true
                    console.log(error)
                })
            }
    },
}
</script>