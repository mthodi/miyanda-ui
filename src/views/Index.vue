<template>
  <div class="intable mt-3 mb-3">
    <div class="loading" v-if="loading">Loading data ..</div>
    <div class="error" v-if="error">{{error}}</div>
    <div v-if="values" class="mb-3">
      <p class="bg-secondary mb-0 text-center">
        <!-- <small class="text-white"> -->
        <em>Click on the ticker for detailed information about a company.</em>
      </p>

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
            <td>
              <router-link :to="'/company/'+ value.ticker">{{ value.ticker }}</router-link>
            </td>
            <td>{{ value.company_name }}</td>
            <td>{{ value.sector }}</td>
            <td>{{value.currency_symbol}} {{ value.market_cap | abbreviate }}</td>
            <td>{{value.currency_symbol}} {{ value.net_income | abbreviate }}</td>
            <td>{{value.currency_symbol}} {{ value.close }}</td>
            <td>{{ value.change }}</td>
            <td>{{ value.volume | separator }}</td>
          </tr>
        </tbody>
      </SortedTable>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "../_config";

export default {
  name: "Index",
  data() {
    return {
      values: [],
      error: null,
      loading: false
    };
  },
  // Fetches posts when the component is created.
  created() {
    this.fetchData();
  },
  watch : {
    '$route' : 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.values = null;
      this.loading = true;
      axios
        .get(API_URL)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loading = false;
          this.values = response.data;
          //console.log(response.data)
        })
        .catch(e => {
          this.loading = false;
          this.error = JSON.parse([
            { Error: "Something went wrong. Try reloading the page" }
          ]);
        });
    }
  }
};
</script>
