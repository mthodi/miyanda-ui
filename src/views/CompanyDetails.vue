<template>
    <div class="jumbotron">
       <p>{{company.ticker}} <label> Listed On:</label> {{company.exchange_name}} </p>
       <p><label>Outstanding shares : </label> {{company.shares}}</p>
       <p>Price : MWK 728 YTD</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CompanyDetails",
  data() {
    return {
      companies : [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:5000/api/v1?id=10&info=none`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.companies = response.data
      //console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>
