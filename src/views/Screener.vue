<template>
<div class="container mt-2 mw-100" id="screener-ui">
    <nav>
        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true">Descriptive</a>
            <a class="nav-item nav-link" id="nav-fundamentals-tab" data-toggle="tab" href="#nav-fundamentals" role="tab" aria-controls="nav-fundamentals" aria-selected="false">Fundamentals</a>
            <a class="nav-item nav-link" id="nav-technical-tab" data-toggle="tab" href="#nav-technical" role="tab" aria-controls="nav-technical" aria-selected="false">Technical</a>
        </div>
    </nav>
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
            <table id="overview-filters" class="table table-sm mt-3">
                <tbody>
                    <tr class="table-secondary">
                    <th scope="row">Exchange</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-exchange" ref="filter-exchange" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                    </td>
                    <td>Sector</td>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-sector" ref="filter-sector" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                    </td>
                    <td>Industry</td>
                    <td><select class="custom-select custom-select-sm" id="filter-industry" ref="filter-industry" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Country</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-country" ref="filter-country" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                    </td>
                    <td>Avg. Volume</td>
                    <td><select class="custom-select custom-select-sm" id="filter-avg-volume" ref="filter-avg-volume" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>  
                        </select>
                    </td>
                    <td>Current Volume</td>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-curr-volume" ref="filter-curr-volume" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>    
                        </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Div. Yield</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-div-yield" ref="filter-div-yield" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>   
                        </select>
                    </td>
                    <td>Index</td>
                    <td><select class="custom-select custom-select-sm" id="filter-index" ref="filter-index" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>    
                        </select>
                        </td>
                    <td>Market Cap</td>
                    <td><select class="custom-select custom-select-sm" id="filter-market-cap" ref="filter-market-cap" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button id="btn-clear-fun" @click="clear_filters()" class="btn btn-danger btn-sm btn-block">Clear all filters</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="tab-pane fade" id="nav-fundamentals" role="tabpanel" aria-labelledby="nav-fundamentals-tab">
            <table id="fundamental-filters" class="table table-sm mt-3">
                <tbody>
                    <tr class="table-secondary">
                        <th scope="row">ROE</th>
                        <td>
                            <select class="custom-select custom-select-sm" id="filter-roe" ref="filter-roe" @change="apply_filter($event)">
                                <option selected value=0>Choose</option>   
                            </select>
                        </td>
                        <td>ROI</td>
                        <td>
                            <select class="custom-select custom-select-sm" id="filter-roi" ref="filter-roi" @change="apply_filter($event)" disabled>
                                <option selected value=0>Choose</option>    
                            </select>
                        </td>
                        <td>ROA</td>
                        <td><select class="custom-select custom-select-sm" id="filter-roa" ref="filter-roa" @change="apply_filter($event)">
                                <option selected value=0>Choose</option>    
                            </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">P/E</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-pe" ref="filter-pe" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>    
                        </select>
                    </td>
                    <td>EPS Growth Past 5 Years</td>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-eps-g-5y" ref="filter-eps-g-5y" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>    
                        </select>
                    </td>
                    <td>EPS Growth this Year</td>
                    <td><select class="custom-select custom-select-sm" id="filter-eps-g-1y" ref="filter-eps-g-1y" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>   
                        </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Payout Ratio</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-payout-ratio" ref="filter-payout-ratio" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>   
                        </select>
                    </td>
                    <td>P/B</td>
                    <td><select class="custom-select custom-select-sm" id="filter-pbv" ref="filter-pbv" @change="apply_filter($event)" disabled>
                            <option selected value=0>Choose</option>    
                        </select>
                    </td>
                    <td>Price/Sales</td>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-ps" ref="filter-ps" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>   
                        </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Profit Margin</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-pm" ref="filter-pm" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>    
                        </select>
                    </td>
                    <td>Debt/Equity</td>
                    <td><select class="custom-select custom-select-sm" id="filter-debt-equity" ref="filter-debt-equity" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                        </td>
                    <td>Gross Margin</td>
                    <td><select class="custom-select custom-select-sm" id="filter-gm" ref="filter-gm" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                        </td>
                    </tr>
                    <tr class="table-secondary">
                    <th scope="row">Current Ratio</th>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-cr" ref="filter-cr" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                    </td>
                    <td>Operating Margin</td>
                    <td>
                        <select class="custom-select custom-select-sm" id="filter-om" ref="filter-om" @change="apply_filter($event)">
                            <option selected value=0>Choose</option> 
                        </select>
                    </td>
                    <td>Revenue Growth this Year</td>
                    <td><select class="custom-select custom-select-sm" id="filter-revenue-g-1y" ref="filter-revenue-g-1y" @change="apply_filter($event)">
                            <option selected value=0>Choose</option>
                        </select>
                    </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type="button" @click="clear_filters()" class="btn btn-danger btn-sm btn-block">Clear all filters</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="tab-pane fade" id="nav-technical" role="tabpanel" aria-labelledby="nav-technical-tab">
            <div class="alert alert-info mt-2 mb-2 text-center">
                <strong> I am still working on technical filters </strong>
            </div>
        </div>
    </div>
    <ul class="nav nav-pills justify-content-center nav-fill mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="pills-overview-tab" data-toggle="pill" href="#pills-overview" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-financial-tab" data-toggle="pill" href="#pills-financial" role="tab" aria-controls="pills-financial" aria-selected="false">Financial</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-valuation-tab" data-toggle="pill" href="#pills-valuation" role="tab" aria-controls="pills-valuation" aria-selected="false">Valuation</a>
        </li>
        <!-- <li class="nav-item">
            <a class="nav-link" id="pills-valuation-tab" data-toggle="pill" href="#pills-valuation" role="tab" aria-controls="pills-valuation" aria-selected="false">Performance</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-valuation-tab" data-toggle="pill" href="#pills-valuation" role="tab" aria-controls="pills-valuation" aria-selected="false">Technical</a>
        </li> -->
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
                <p class="text-center">
                    <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('overview', 'CSV')">Download as CSV</button>
                    <!-- <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('overview', 'PDF')">Download as PDF</button> -->
                    <button type="button" class="btn btn-success btn-sm" @click="download_table_data('overview', 'XLSX')">Download as XLSX</button>
                </p>
            <div id="overview" ref="overview"></div>
        </div>
        <div class="tab-pane fade" id="pills-financial" role="tabpanel" aria-labelledby="pills-financial-tab">
            <p class="text-center">
                    <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('financial', 'CSV')">Download as CSV</button>
                    <!-- <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('financial', 'PDF')">Download as PDF</button> -->
                    <button type="button" class="btn btn-success btn-sm" @click="download_table_data('financial', 'XLSX')">Download as XLSX</button>
            </p>
            <div id="financial" ref="financial"></div>
        </div>
        <div class="tab-pane fade" id="pills-valuation" role="tabpanel" aria-labelledby="pills-valuation-tab">
            <p class="text-center">
                    <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('valuation', 'CSV')">Download as CSV</button>
                    <!-- <button type="button" class="btn btn-success btn-sm mr-1" @click="download_table_data('overview', 'PDF')">Download as PDF</button> -->
                    <button type="button" class="btn btn-success btn-sm" @click="download_table_data('valuation', 'XLSX')">Download as XLSX</button>
                </p>
            <div id="valuation" ref="valuation"></div>
        </div>
    </div>
</div>

</template>

<script>

//var Tabulator = require('tabulator-tables');
import Tabulator from 'tabulator-tables';
import { filters } from '../filters'
import { API_URL } from '../_config'

export default {
    name : 'Screener',
    data () {
        return {
            financial_table : null,
            overview_table : null,
            valuation_table : null,
        }
    },
    created(){
        //this.fetchData()
        //this.load_filters();
    },
    mounted() {
        this.load_filters()
        this.overview_table = this.load_overview_table()
        this.financial_table = this.load_financial_table()
        this.valuation_table = this.load_valuation_table()
    },
    methods : {
        load_overview_table() {
            //var tabledata = 
            var table_id = this.$refs["overview"];
            var overview_table = new Tabulator(table_id, {
                ajaxURL : API_URL + "/api/v1/tables/all",
                //data: this.tabledata,           //load row data from array
                placeholder : "Data Not Yet Loaded",
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the table
                tooltips:true,            //show tool tips on cells
                addRowPos:"top",          //when adding a new row, add it to the top of the table
                //history:true,             //allow undo and redo actions on the table
                height : 400,
                // pagination:"local",       //paginate the data
                // paginationSize:7,         //allow 7 rows per page of data
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                    {column:"ticker", dir:"asc"},
                ],
                columns: [ //Define Table Columns
                    //{ title: "No", field: "id", sorter: "number", width: 150 },
                    { title: "Ticker", field: "ticker", sorter: "string" },
                    { title: "Country", field: "country", sorter: "string"},
                    { title: "Company", field: "company_name", sorter: "string" },
                    { title: "Industry", field: "industry", sorter: "string"},
                    { title: "Sector", field: "sector", sorter: "string"},
                     { title: "Currency", field: "currency", sorter: "string" },
                    { title: "Market Cap", field: "market_cap", sorter: "number"},
                    { title: "ROE", field: "ROE", sorter: "number", visible:false },
                    { title: "ROC", field: "ROIC", sorter: "number", visible:false },
                    { title: "ROA", field: "ROA", sorter: "number", visible:false },
                    { title: "GM", field: "GM", sorter: "number", visible:false },
                    { title: "OM", field: "OM", sorter: "number", visible:false },
                    { title: "PM", field: "PM", sorter: "number", visible:false},
                    { title: "CR", field: "current_ratio", sorter: "number", visible:false },
                    { title: "WC", field: "WC", sorter: "number" , visible:false},
                    { title: "Debt/Equity", field: "debt_equity_ratio", sorter: "number" , visible:false},
                    { title: "Debt/Assets", field: "debt_assets_ratio", sorter: "number" , visible:false},
                    { title: "P/E", field: "PE", sorter: "number", visible:false },
                    { title: "Payout Ratio", field: "payout_ratio", sorter: "number", visible:false },
                    { title: "Price", field: "close", sorter: "number" },
                    // { title: "Change", field: "delta", sorter: "number", align: "center" },
                    { title: "Volume", field: "volume", sorter: "number"}
                ]
            });
            return overview_table;
        },
        load_financial_table(){
            var table_id = this.$refs["financial"]
            var fin_table = new Tabulator(table_id, {
                //data: this.table_data,           //load row data from array
                placeholder : "Data not yet loaded",
                ajaxURL : API_URL + "/api/v1/tables/all",
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the 
                height : 400,
                tooltips:true,            //show tool tips on cells
                //addRowPos:"top",          //when adding a new row, add it to the top of the table
                //history:true,             //allow undo and redo actions on the table
                // pagination:"local",       //paginate the data
                // paginationSize:7,         //allow 7 rows per page of data
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                     {column:"ticker", dir:"asc"},
                 ],
                //ajaxFiltering: true,
                columns: [ //Define Table Columns
                    //{ title: "No", field: "id", sorter: "number"},
                    { title: "Ticker", field: "ticker", sorter: "string" },
                    { title: "Market Cap", field: "market_cap", sorter: "number", visible:false },
                    { title: "Country", field: "country", sorter: "string", visible:false},
                    { title: "Company", field: "company_name", sorter: "string",visible:false },
                    { title: "Industry",field: "industry", sorter: "string", visible:false},
                    { title: "Sector", field: "sector", sorter: "string", visible:false},
                    { title: "Currency", field: "currency", sorter: "string" },
                    //{ title: "Dividend", field: "dividends", sorter: "number" },
                    //{ title: "Div. Yield", field: "div_yield", sorter: "number" },
                    { title: "ROE", field: "ROE", sorter: "number" },
                    { title: "ROC", field: "ROIC", sorter: "number" , visible:false},
                    { title: "ROA", field: "ROA", sorter: "number" },
                    { title: "GM", field: "GM", sorter: "number", visible:false},
                    { title: "OM", field: "OM", sorter: "number"},
                    { title: "PM", field: "PM", sorter: "number"},
                    { title: "CR", field: "current_ratio", sorter: "number" },
                    { title: "Payout Ratio", field: "payout_ratio", sorter: "number", visible:true },
                    { title: "Debt/Assets", field: "debt_assets_ratio", sorter: "number" , visible:true},
                    { title: "Debt/Equity", field: "debt_equity_ratio", sorter: "number"},
                    { title: "WC", field: "WC", sorter: "number", visible:false},
                    // { title: "Earnings", field: "earnings", sorter: "number" },
                    { title: "Price", field: "close", sorter: "number" },
                    // { title: "Change", field: "delta", sorter: "number", align: "center" },
                    { title: "Volume", field: "volume", sorter: "number", align: "center" }
                ],
            });
            return fin_table;
        },
        load_valuation_table(){
            //var tabledata = 
            var table_id = this.$refs["valuation"];
            var d_table = new Tabulator(table_id, {
                ajaxURL : API_URL + "/api/v1/tables/all",
                //data: this.tabledata,           //load row data from array
                placeholder : "Data Not Yet Loaded",
                height : 600,
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the table
                tooltips:true,            //show tool tips on cells
                // addRowPos:"top",          //when adding a new row, add it to the top of the table
                // history:true,             //allow undo and redo actions on the table
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                    {column:"ticker", dir:"asc"},
                ],
                columns: [ //Define Table Columns
                    //{ title: "No", field: "id", sorter: "number", width: 150 },
                    { title: "Ticker", field: "ticker", sorter: "string" },
                    { title: "Country", field: "country", sorter: "string"},
                    { title: "Market Cap", field: "market_cap", sorter: "number" },
                    { title: "P/E", field: "PE", sorter: "number" },
                    { title: "P/S", field: "PS", sorter: "number"},
                    { title: "EPS This Yr", field: "EPS", sorter: "number"},
                    //{ title: "EPS Growth Y/Y", field: "EPS_g_1y", sorter: "number"},
                    //{ title: "EPS Growth 5 Yrs", field: "EPS_g_5y", sorter: "number"},
                    { title: "Revenue Growth Y/Y", field: "revenue_g_1y", sorter: "number"},
                    //{ title: "Payout Ratio", field: "payout_ratio", sorter: "number"},
                    { title: "ROE", field: "ROE", sorter: "number", visible:false },
                    { title: "ROC", field: "ROIC", sorter: "number", visible:false },
                    { title: "ROA", field: "ROA", sorter: "number", visible:false },
                    { title: "GM", field: "GM", sorter: "number", visible:false },
                    { title: "OM", field: "OM", sorter: "number", visible:false },
                    { title: "PM", field: "PM", sorter: "number", visible:false},
                    { title: "CR", field: "current_ratio", sorter: "number", visible:false },
                    { title: "WC", field: "WC", sorter: "number" , visible:false},
                    { title: "Debt/Equity", field: "debt_equity_ratio", sorter: "number" , visible:false},
                    { title: "Debt/Assets", field: "debt_assets_ratio", sorter: "number" , visible:false},
                    { title: "Payout Ratio", field: "payout_ratio", sorter: "number", visible:false },
                    // { title: "Market Cap", field: "markcap", sorter: "number" },
                    // { title: "P/E", field: "pe", sorter: "number" },
                    { title: "Price", field: "close", sorter: "number" },
                    // { title: "Change", field: "delta", sorter: "number", align: "center" },
                    { title: "Volume", field: "volume", sorter: "number"}
                ]
            });
            return d_table;
        },
        apply_filter(evt){
            var select_id = evt.currentTarget.id;
            var e = document.getElementById(select_id);
            if (e != null) {
                 var val =  e.options[e.selectedIndex].value;
                if (val == '0') return;
                /** If field is already set, remove it first */
                if(this.financial_table.getFilters().length > 0){
                    var has_filter = (a, obj) => {
                            for (var i = 0; i < a.length; i++) {
                                if (a[i].field === obj[0].field) { return a[i]; }
                            }return -1;
                    };
                    const old_filter = has_filter(this.financial_table.getFilters(), JSON.parse(val))
                    if ( old_filter != -1 ){
                        this.financial_table.removeFilter(old_filter.field, old_filter.type, old_filter.value);
                        this.overview_table.removeFilter(old_filter.field, old_filter.type, old_filter.value);
                        this.valuation_table.removeFilter(old_filter.field, old_filter.type, old_filter.value);
                    }
                }
                this.financial_table.addFilter(JSON.parse(val));
                this.overview_table.addFilter(JSON.parse(val))
                this.valuation_table.addFilter(JSON.parse(val))
            }
            
        },
        clear_filters(){
            this.financial_table.clearFilter();
            this.valuation_table.clearFilter();
            this.overview_table.clearFilter();
        },
        load_filters(){
               filters.forEach(element => {
                if(this.$refs[element.name]){
                    var filter_id = this.$refs[element.name];
                    var filter_options = element.filters;
                    filter_options.forEach( fil => {
                         var option = new Option(fil.text, fil.value);
                         filter_id.add(option);
                     })
                }
            });
        },
        download_table_data(table_reference, output_format){
            if(table_reference == 'overview'){ 
                if(output_format == 'CSV'){ this.overview_table.download("csv", "overview.csv");}
                //if(output_format == 'PDF'){ this.overview_table.download("csv", "overview.csv");}
                if(output_format == 'XLSX'){ this.overview_table.download("xlsx", "overview.xlsx");}
            }
            if(table_reference == 'financial'){ 
                if(output_format == 'CSV'){ this.financial_table.download("csv", "financials.csv");}
                //if(output_format == 'PDF'){ this.financial_table.download("csv", "financials.csv");}
                if(output_format == 'XLSX'){ this.financial_table.download("csv", "financials.csv");}

            }
            if(table_reference == 'valuation'){ 
                 if(output_format == 'CSV'){ this.valuation_table.download("csv", "valuation.csv");}
                //if(output_format == 'PDF'){ this.financial_table.download("csv", "financials.csv");}
                if(output_format == 'XLSX'){ this.valuation_table.download("csv", "valuation.csv");}
            }
        }
    }
}
</script>

<style scoped>

#screener-ui {
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
#fundamental-filters {
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
