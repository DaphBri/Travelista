new Vue({
    el: "#main",
    
    data() {
        return{
            hollys:[],
            france:[],
            spain:[],
            belgium:[],
            hideValue:true,
            popValue:true
        }
    },
    methods:{
        showBlock(){
            this.hideValue = false
        },
        showSel(){
            this.popValue = false
        },
        filter(type) {    
            
            if(type==='France'){
                this.hollys = this.france; 
            }        
            else if(type === 'Spain'){
                this.hollys = this.spain;
            }
            else if(type === 'Belgium'){
                this.hollys = this.belgium;
            }                                  
        }

    },

    mounted() {
        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
        .then(response => {
            this.hollys = response.data;         //response data in axios, under #main!
            this.france = this.hollys.filter(t => t.countryName ==='France');       //select list France'
            this.spain = this.hollys.filter(t => t.countryName ==='Spain');       //select list Spain'
            this.belgium = this.hollys.filter(t => t.countryName ==='Belgium');       //select list Belgium'
        })
    }
})

