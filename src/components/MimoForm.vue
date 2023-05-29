<template>
    <div>
        <v-form ref="requestDataForm" @submit="createOrder">
            <v-container>
                <v-row justify="center">
                    <h1 class="mt-6">complete the fields below</h1>
                </v-row>
                <v-row justify="center">
                    <v-col cols="7">                        
                        <span>Type your name:</span>
                        <v-text-field
                        label="Client name" 
                        v-model="requestData.name" 
                        variant="underlined" 
                        :rules="[rules.name]"
                        />

                        <span>Choose your cloth:</span>
                        <v-select 
                        label="Cloths"
                        :items="getCloths()"
                        v-model="requestData.cloth"
                        variant="underlined" 
                        :rules="[rules.required]"
                        />

                        <span>Choose your impress:</span>
                        <v-select 
                        label="Impress"
                        :items="getImpress()"
                        v-model="requestData.impres"
                        variant="underlined"
                        :rules="[rules.required]"
                        />
                        
                        <span>Choose a color:</span>
                        <v-select 
                        label="Color"
                        :items="getColors()"
                        v-model="requestData.color"
                        variant="underlined"
                        :rules="[rules.colors]"
                        multiple
                        chips
                        />
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                    <v-col cols="9" md="7" align="end"> 
                        <v-hover v-slot:default="{ isHovering, props }">
                            <v-btn 
                            v-bind="props"
                            width="100px"
                            class="mr-10 mr-md-5 text-white"
                            :color="isHovering ? 'red' : '#cb8db6'"
                            @click="clearForm()"
                            >
                                clear
                            </v-btn>
                        </v-hover>
                        <v-hover v-slot:default="{ isHovering, props }">
                            <v-btn 
                            v-bind="props"
                            :color="isHovering ? 'success' : '#cb8db6'"
                            width="100px" 
                            class="text-white"
                            @click="submit()"
                            >
                            submit</v-btn>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <feedBackMessage :message="requestMessage" v-show="requestMessage"/>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import globalRulesMethods from "/mixins/globalRulesMethods"
import feedBackMessage from "./feedBackMessage.vue";
export default {
    name: "MimoForm",
    components: {
        feedBackMessage
    },
    mixins: [globalRulesMethods],
    // secondary color : #8499b4
    data(){
        return {
            requestData: {
                name: "",
                cloth: null,
                impres: null,
                color: [],
                status: "Solicitado",
                orderDate: "",
                orderTime: "",
            },
            cloths: [],
            impress: [],
            colors: [],
            valid: true,
            errorTexts: {
                name: "Must type a name",
                required: "required field",
            },
            requestMessage: "",
            rules: {
                name: (name) => this.nameRules(name, this.errorTexts.name),
                required: (field) => this.mandatory(field, this.errorTexts.required),
                colors: (colors) => this.colorsRule(colors),
            }
        }
    },

    mounted() {
        this.getMaterials();
    },

    methods: {
        submit(){
            this.capitalLetter();
            this.getOrderDate();
            this.validateFormAndCreateOrder();
        },

        capitalLetter(){
            var name = this.requestData.name.split(" ");
            var formatedName = [];
            name.forEach((words) => {
                var upperletters = words[0];
                if (upperletters) {
                    formatedName.push(upperletters.toLocaleUpperCase() + words.slice(1));     
                } else {
                    formatedName.push("");
                }
            });
            this.requestData.name = formatedName.join(" ");
        },

        // improve clear form validation
        clearForm(){
            this.$refs.requestDataForm.reset();
            this.requestData.name = "";
            this.requestData.cloth = null;
            this.requestData.impres = null;
            this.requestData.color = [];
        },

        async validateFormAndCreateOrder(){
            const { valid } = await this.$refs.requestDataForm.validate();
            if (valid) {
                this.createOrder();
            }
        },

        async getMaterials() {
            const materials = await fetch("http://localhost:3000/materials");
            const data = await materials.json();
            this.cloths = data.cloths;
            this.impress = data.impress;
            this.colors = data.colors;
        },

        getCloths() {
            var cloth = this.cloths;
            var typeOfCloth = [];
            cloth.filter((cloths) => {
                typeOfCloth.push(cloths.tipo);
            });
            return typeOfCloth;
        },

        getImpress() {
            var impres = this.impress;
            var typeOfImpress = [];
            impres.filter((impress) => {
                typeOfImpress.push(impress.tipo);
            });
            return typeOfImpress;
        },

        getColors(){
            var colors = this.colors;
            var typeOfColors = [];
            colors.filter((colors) => {
                typeOfColors.push(colors.tipo)
            });
            return typeOfColors;
        },

        getOrderDate(){
            const date = new Date();
            var currentDate = date.toLocaleDateString();
            var currentTime = date.toLocaleTimeString().slice(0, -3);
            this.requestData.orderDate = currentDate;
            this.requestData.orderTime = currentTime;
        },

        async createOrder() {
                const url = "http://localhost:3000/product";
                const data = {
                   name: this.requestData.name,
                   cloths: this.requestData.cloth,
                   impress: this.requestData.impres,
                   colors: this.requestData.color,
                   status: this.requestData.status,
                   orderDate: this.requestData.orderDate,
                   orderTime: this.requestData.orderTime,
                };
                const jsonData = JSON.stringify(data);
                const response = await fetch(url, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: jsonData
                });
                if (response.status == 201) {
                    const requisition = await response.json();
                    this.feedBackMessage();
                    this.clearForm();
                }
        },

        colorsRule(colors){
            return colors.length > 0 || "choose at least 1 item"
        },

        feedBackMessage(){
            this.requestMessage = "Request made successfully";
            setTimeout(() => this.requestMessage = "", 3000);
        },
    },
}
</script>

<style scoped>
span {
    color: #cb8db6;
}
</style>