<template>
  <div class="intable mt-3 mb-3">
    <SortedTable :values="values" class="table table-hover">
      <thead>
        <tr>
          <th scope="col">
            <SortLink name="ticker">Ticker</SortLink>
          </th>
          <th scope="col">
            <SortLink name="name">Name</SortLink>
          </th>
          <th scope="col">
            <SortLink name="sector">Sector</SortLink>
          </th>
          <th scope="col">
            <SortLink name="shares">Market Cap</SortLink>
          </th>
          <th scope="col">
            <SortLink name="net_income">Earnings</SortLink>
          </th>
          <th scope="col">
            <SortLink name="price">Price</SortLink>
          </th>
          <th scope="col">
            <SortLink name="price">Change</SortLink>
          </th>
          <th scope="col">
            <SortLink name="volume">Volume</SortLink>
          </th>
         
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.close">
          <td>{{ value.ticker }}</td>
          <td>{{ value.company_name }}</td>
          <td>{{ value.sector }}</td>
          <td>{{value.currency_symbol}}  {{ value.market_cap }}</td>
          <td>{{value.currency_symbol}} {{ value.net_income }}</td>
          <td>{{value.currency_symbol}} {{ value.close }}</td>
          <td>{{ value.change }}</td>
          <td>{{ value.volume }}</td>
        </tr>
      </tbody>
    </SortedTable>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../_config'

export default {
  name: "Index",
  data() {
    return {
      values: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(API_URL)
    .then(response => {
      // JSON responses are automatically parsed.
      this.values = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>
