new Vue({
    el: "#main",
    data() {
        return{
            hollys:[]
        }
    },
    mounted() {
        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
            .then(response => {
                this.hollys = response.data;                //response data in axios, under #main!
            })
    }
})

