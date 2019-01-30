<template>
  <div class="app">
    <apexcharts width="80%" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        // xaxis: {
        //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        // },
        title: {
          text: "Earnings Vs Dividends",
          align: "center",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "16px",
            color: "green"
          }
        },
        dataLabels: {
          style: {
            colors: ['#fff']
          }
}
      },
      series: []
    };
  },
  created () {
      this.fetchData()
  },
  watch : {
    '$route' : 'fetchData'
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    },
    fetchData() {
      // this.error = this.company = null;
      // this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      //this.$route.params.id
      // TODO: escape data here
      axios.get("http://localhost:5000/api/v1?id="+this.$route.params.id + "&info=deps")
        .then(response => {
          // JSON responses are automatically parsed.
          //this.loading = false;
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
<style scoped>
button {
  background: #26e6a4;
  border: 0;
  font-size: 16px;
  color: "#fff";
  padding: 10px;
  margin-left: 28px;
  margin-bottom: 3ch;
}
</style>

