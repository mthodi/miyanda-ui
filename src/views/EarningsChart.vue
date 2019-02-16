<template>
  <div class="app">
    <apexcharts width="95%" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
  import VueApexCharts from "vue-apexcharts";
  import axios from "axios";
  import {
    API_URL
  } from '../_config'
  
  export default {
    name: "Chart",
    components: {
      apexcharts: VueApexCharts
    },
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: "financials-chart"
          },
          yaxis: {
            tickAmount: 3,
            labels: {
              formatter: function(val, index) {
                var len = val.toString().length
                var formatted = 0;
                 if (len < 7) {
                   formatted = val/ 1000;
                  return formatted.toString() + " K";
                }
                if (len == 7) {
                  formatted = val/1000000;
                  return formatted.toString() + " Mln";
                } if (len >= 10) {
                  formatted = val/1000000000;
                  return formatted.toString() + " Bln";
                }
              }
            }
          },
          title: {
            text: "Financials at a glance",
            align: "center",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize: "16px",
              color: "black",
              fontWeight : "bold"
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          dataLabels: {
            enabled: false,
            style: {
              colors: ['#fff']
            }
          },
          markers: {
            colors: ['black']
          },
          tooltip: {
            theme: "dark"
          },
          legend: {
            show: true,
            horizontalAlign: 'right',
          }
        },
        series: []
      };
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
  
      fetchData() {
        axios.get(API_URL + "/api/v1/company/?ticker=" + this.$route.params.id + "&info=chart")
          .then(response => {
            this.series = response.data;
            //console.log(response.data)
          })
          .catch(e => {
            //this.loading = false;
            this.error = e;
          });
      }
    }
  };
</script>



