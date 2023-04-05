<template>
    <div>
        <v-form ref="requestDataForm">
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

                        <span>Choose your bread:</span>
                        <v-select 
                        label="Bread" 
                        variant="underlined"
                        />

                        <span>Choose your meat:</span>
                        <v-select 
                        label="Meat" 
                        variant="underlined"/>

                        <span>Choose a color:</span>
                        <v-checkbox 
                        label="Red" 
                        color="#cb8db6" 
                        hide-details="auto"
                        />                        
                    </v-col>
                </v-row>
                <v-row justify="center" >
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
                            @click="showUserRequestData()"
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
                bread: "",
                meat: "",
            },
            valid: true,
            rules: {
                name: (name) => this.nameRules(name),
            }
        }
    },
    methods: {
        showUserRequestData(){
            this.capitalLetter();
            this.validateForm();
            console.log(this.requestData);
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
                bread: "",
                meat: "",
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
    },
}
</script>

<style scoped>
span {
    color: #cb8db6;
}
</style>