<template>
  <div class="intable">
    <SortedTable :values="values" class="table table-hover">
      <thead>
        <tr>
          Company Financials
        </tr>
      </thead>
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.eps">
          <td> EPS: {{ value.eps }}</td>
          <td> EPS Growth 1 Year: {{ value.eps_g_1 }}</td>
          <td> EPS Growth 3 Year: {{ value.eps_g_3 }}</td>
          <td> EPS Growth 5 Year: {{ value.eps_g_5 }}</td>
        </tr>
        <tr v-for="value in sort.values" :key="value.dps">
          <td> DPS: {{ value.dps }}</td>
          <td> DPS Growth 1 Year: {{ value.dps_g_1 }}</td>
          <td> DPS Growth 3 Year: {{ value.dps_g_3 }}</td>
          <td> DPS Growth 5 Year: {{ value.dps_g_5 }}</td>
        </tr>
         <tr v-for="value in sort.values" :key="value.ROA">
          <td> ROE: {{ value.ROE }}</td>
          <td> ROA {{ value.ROA }}</td>
          <td> P/E : 15.9 </td>
          <td> DIV YEILD : 5% </td>
        </tr>
      </tbody>
    </SortedTable>
  </div>
</template>

<script>
import axios from 'axios';

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
    axios.get("http://localhost:5000/api/v1?id=" + this.$route.params.id + "&info=financial")
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
