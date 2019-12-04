<template>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>


export default {
    props : ['propsdata'],
    mounted() {
        console.log(this.propsdata);
        
        var ctx = this.$refs.barChart.getContext('2d');
        var myChart = new this.$_Chart(ctx, {
            type: 'bar',
            data : {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                onClick() {
                    this.$emit('refresh:chart')
                }
            }
        });
    }
}
</script>

<style>

</style>