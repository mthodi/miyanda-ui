<template>
<div class="col-sm-4">
      <button type="button" class="btn btn-primary btn-sm btn-block">Brief Statement Of Financial Position </button>
      <p class="bg-secondary mb-0 text-center">
          <small class="text-muted">
            <em> Presented in common-size format. All entries are presented as a percentage of total assets.</em></small></p>
          <table class="table table-hover">
            <thead>
                <tr scope="row" v-for="value in data" :key="value.revenue" class="table-secondary">
                 <th scope="col" class="text-warning"> </th> 
                 <th scope="col">{{value.published_date}} </th>
                 <th scope="col">{{value.prev_date}} </th>
                </tr>
            </thead>
            <tbody>
              <tr scope="row" v-for="value in data" :key="value.revenue">
                 <td scope="col" class="text-warning"> Total Assets </td> 
                 <td scope="col">{{value.total_assets | percentage }} </td>
                 <td scope="col">{{value.prev_total_assets | percentage }} </td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                    <td scope="col" class="text-warning"> Working Capital </td> 
                    <td scope="col"> {{value.net_current_assets | percentage }} </td>
                    <td scope="col">{{value.prev_net_current_assets | percentage }}</td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                  <td scope="col" class="text-warning"> Total Liabilities  </td>
                  <td scope="col"> {{value.total_liabilities | percentage }} </td> 
                  <td scope="col"> {{value.prev_total_liabilities | percentage }} </td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                  <td scope="col" class="text-warning"> Total Equity </td>
                  <td scope="col"> {{value.total_equity | percentage }}</td>
                  <td scope="col"> {{value.prev_total_equity | percentage }} </td>
                </tr>
                </tbody>
              </table>
            </div>
</template>
<script>

import axios from 'axios';
import { API_URL } from '../_config'

export default {
  name : 'BalanceSheet',
  data () {
    return {
      data : []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.data = null
    axios.get(API_URL + "/api/v1/company/?ticker=" + this.$route.params.id + "&info=position")
    .then(response => {
      this.data = response.data
    })
    .catch(e => {
        //do something with error
    })
    }
  },
  components : {
      
  }
}
</script>
