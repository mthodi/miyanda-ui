<template>
<div class="col-sm-4">
      <button type="button" class="btn btn-primary btn-sm btn-block mb-0">Brief Statement of Incomes</button>
      <p class="bg-secondary mb-0 text-center">
          <small class="text-muted">
            <em> Presented in common-size format. All entries are presented as a percentage of revenue.</em></small></p>
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
                 <td scope="col" class="text-warning"> Revenue </td> 
                 <td scope="col">{{value.revenue | percentage }} </td>
                 <td scope="col">{{value.prev_revenue | percentage }} </td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                    <td scope="col" class="text-warning"> EBIT </td> 
                    <td scope="col"> {{value.EBIT | percentage}} </td>
                    <td scope="col">{{value.prev_EBT | percentage }}</td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                  <td scope="col" class="text-warning mr-4"> EBT </td>
                  <td scope="col"> {{value.EBT | percentage}} </td> 
                  <td scope="col"> {{value.prev_EBIT | percentage }} </td>
                </tr>
                <tr scope="row" v-for="value in data" :key="value.revenue">
                  <td scope="col" class="text-warning"> Earnings </td>
                  <td scope="col"> {{value.net_income | percentage }}</td>
                  <td scope="col"> {{value.prev_net_income | percentage}} </td>
                </tr>
                </tbody>
              </table>
            </div>
</template>
<script>

import axios from 'axios';
import { API_URL } from '../_config'

export default {
  name : 'IncomeStatement',
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
    axios.get(API_URL + "/api/v1/company/?ticker=" + this.$route.params.id + "&info=incomes")
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
