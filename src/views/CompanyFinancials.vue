<template>
  <div class="intable mt-3">
    <button type="button" class="btn btn-primary btn-lm btn-block">Company Financials</button>
    <div class="alert alert-dismissible alert-info text-center">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Note :</strong> Missing values are shown as zeroes or blank. We are still adding data.
    </div>
    <SortedTable :values="values" class="table table-hover">
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.eps">
          <td> EPS : {{ value.eps | numeral('0.00') }}</td>
          <td> EPS Growth 1 Year : {{ value.eps_g_1 | numeral('0.00') }}</td>
          <td> EPS Growth 3 Year : {{ value.eps_g_3 }}</td>
          <td> EPS Growth 5 Year : {{ value.eps_g_5 }}</td>
        </tr>
        <!-- <tr v-for="value in sort.values" :key="value.dps">
            <td> DPS: {{ value.dps }}</td>
            <td> DPS Growth 1 Year: {{ value.dps_g_1 }}</td>
            <td> DPS Growth 3 Year: {{ value.dps_g_3 }}</td>
            <td> DPS Growth 5 Year: {{ value.dps_g_5 }}</td>
          </tr> -->
        <tr v-for="value in sort.values" :key="value.ROA">
          <td> ROE : {{ value.ROE | percentage }}</td>
          <td> ROA : {{ value.ROA | percentage }}</td>
          <td> P/E : {{ value.PE | numeral('0.00') }} </td>
          <td> P/S : {{ value.PS | numeral('0.00') }} </td>
        </tr>
        <tr v-for="value in sort.values" :key="value.ROA">
          <td> Debt/Assets : {{ value.debt_asset | numeral('0.00') }}</td>
          <td> Debt/Equity : {{ value.debt_equity | numeral('0.00') }}</td>
          <td> Current Ratio : {{ value.current_ratio | numeral('0.00') }} </td>
          <td> Profit Margin : {{ value.PM | percentage }} </td>
        </tr>
      </tbody>
    </SortedTable>
  </div>
</template>

<script>
  import axios from 'axios';
  import {
    API_URL
  } from '../_config'
  
  export default {
    name: 'CompanyFinancials',
    data() {
      return {
        values: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created() {
      axios.get(API_URL + "/api/v1/company/?ticker=" + this.$route.params.id + "&info=financial")
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
