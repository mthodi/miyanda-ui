<template>
  <div class="jumbotron">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="company" class="content">
        <br>
        <div class="card bg-secondary">
        <div class="card-body" v-for="val in company" :key="val.shares">
          <h4 class="card-title">{{val.company_name}}</h4>
          <h6 class="card-subtitle mb-0 text-muted">{{val.exchange_name}} : {{val.ticker}}</h6>
          <p class="card-text mb-3"><label>Market Cap :</label>{{val.shares}}</p>
          <h3 class="card-title">567.00 MWK</h3><h6 class="card-subtitle">+0.87</h6>
        </div>
        </div>
        <!-- <span v-for="val in company" :key="val.shares">
            <h2>{{ val.ticker }}</h2> Listed On : {{val.exchange_name}}
            Outstanding shares : {{ val.shares }}
            Price : MWK 728
        </span> -->
         <Chart />
        <CompanyFiancials />
       
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import CompanyFiancials from './CompanyFinancials.vue'
import Chart from './EarningsChart.vue'
import { API_URL } from '../_config'

export default {
  name : 'CompanyDetailed',
  data () {
    return {
      loading: false,
      company: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.company = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      //this.$route.params.id
      // TODO: escape data here
    axios.get(API_URL + "/api/v1?id=" + this.$route.params.id + "&info=none")
    .then(response => {
      // JSON responses are automatically parsed.
      this.loading = false
      this.company = response.data
      //console.log(response.data)
    })
    .catch(e => {
        this.loading = false
        this.error = e
    })
    }
  },
  components : {
      CompanyFiancials,
      Chart
  }
}
</script>
