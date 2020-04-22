<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <p>eee</p>
                    <line-chart :chart-data="data" :height="100" :options="{responsive: true, maintainAspectRatio: true}"></line-chart>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from "LineChart";
    export default {
        components: {
            LineChart
        },
        comments:{
            LineChart
        },
        data : function(){
            return {
                data:[],
            }
        },
        mounted() {
            this.update()
        },
        methods:{
            update: function () {

                axios.get('/start/data-chart').then((response) =>{
                    this.data = response.data
                });
            }
        }

    }

</script>
