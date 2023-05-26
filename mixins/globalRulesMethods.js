export default {
    methods: {
        mandatory(field, errortext){
            return !!field || errortext;
        },

        nameRules(name, errortext){
            return !!name || errortext;
        },
    },
}