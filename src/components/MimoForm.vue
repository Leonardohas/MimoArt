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
                        v-model="requestData.name" 
                        label="Client name" 
                        variant="underlined" 
                        :rules="[rules.name]"
                        />

                        <span>Choose your cloth:</span>
                        <v-select 
                        label="Cloths"
                        :items="getCloths()"
                        v-model="requestData.cloth"
                        variant="underlined"
                        />

                        <span>Choose your impress:</span>
                        <v-select 
                        label="Impress"
                        :items="getImpress()"
                        v-model="requestData.impres"
                        variant="underlined"
                        />
                        <span>Choose a color:</span>
                    </v-col>
                <!-- TODO: corrigir espaçamentos dos checkboxes -->
                </v-row>
                <v-row class="mt-0">                 
                    <v-col
                    cols="6"
                    justify-center
                    v-for="color in colors" 
                    :key="color.id"
                    >
                        <v-checkbox                        
                        :label="color.tipo"
                        :value="color.tipo"
                        v-model="requestData.color"
                        color="#cb8db6"
                        hide-details="auto"   
                        multiple  
                        class="v-input__control"       
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
                            :color="isHovering ? 'orange' : '#cb8db6'"
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
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "MimoForm",
    // secondary color : #8499b4
    data(){
        return {
            requestData: {
                name: "",
                cloth: "",
                impres: "",
                color: [],
                status: "Solicitado",
                orderDate: "",
                orderTime: "",
            },
            cloths: [],
            impress: [],
            colors: null,
            valid: true,
            rules: {
                name: (name) => this.nameRules(name),
            }
        }
    },

    mounted() {
        this.getMaterials();
    },

    methods: {
        submit(){
            this.capitalLetter();
            this.validateForm();
            this.createOrder();
            this.getOrderDate();
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

        clearForm(){
            this.$refs.requestDataForm.reset();
            this.requestData = {
                name: "",
                cloth: "",
                impres: "",
                color: [],
            }
        },

        nameRules(name){
            return !!name || "Must type a name!"
        },

        async validateForm(){
            const { valid } = await this.$refs.requestDataForm.validate();
            if (valid) {
                alert("valid form")
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

        getOrderDate(){
            const date = new Date();
            var currentDate = date.toLocaleDateString();
            var currentTime = date.toLocaleTimeString().slice(0, -3);
            this.requestData.orderDate = currentDate;
            this.requestData.orderTime = currentTime;
        },

        async createOrder(event) {
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
            const requisition = await response.json();
            this.clearForm();
        },
    },
}
</script>

<style scoped>
span {
    color: #cb8db6;
}
.v-input__control {
    display: flex;
    justify-content: center;
}
</style>