<template>
  <div class="jumbotron mt-1 pt-0">
    <!-- <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div> -->
    <div v-if="company" class="content mt-0">
        <br>
        <div class="card bg-secondary">
        <div class="card-body" v-for="val in company" :key="val.shares">
          <h4 class="card-title">{{val.company_name}}</h4>
          <h6 class="card-subtitle mb-0 text-muted">{{val.exchange_name}} : {{val.ticker}}</h6>
          <p class="card-text mb-3"><label>Market Cap : {{val.currency_symbol}}</label>&nbsp;{{val.market_cap | abbreviate }}</p>
          <h3 class="card-title">{{val.price}} {{val.currency_symbol}}</h3>
          <h6 class="card-subtitle">{{val.currency_symbol}}{{val.change}} &nbsp;&nbsp; {{val.percent_change}}%</h6>
        </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-4 pr-0 pl-0 bg-white text-black">
              <Chart />
            </div>
            <IncomeStatement />
            <BalanceSheet />

        </div>
        <CompanyFiancials />
       
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import CompanyFiancials from './CompanyFinancials.vue'
import IncomeStatement from './IncomeStatement.vue'
import BalanceSheet from './BalanceSheet.vue'
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
    axios.get(API_URL + "/api/v1/company/?ticker=" + this.$route.params.id + "&info=none")
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
      Chart,
      IncomeStatement,
      BalanceSheet
  }
}
</script>

