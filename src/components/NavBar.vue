 <template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link class="navbar-brand" to="/">Miyanda</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse text-center" id="navbarColor03">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/valuation">Valuation</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/ratios">Ratio Analysis</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/screener">Screener</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/backtest">Backtest</router-link>
                    </li>
                     <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                  </ul>
                  <!-- <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search a stock symbol">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search symbol</button>
                  </form> -->
                </div>
    </nav>
    </template>
<script>
export default {
    
}
</script>


    
    