<template>
<div class="container mt-2">
    
</div>

</template>

<script>

//var Tabulator = require('tabulator-tables');
import Tabulator from 'tabulator-tables';

export default {
    name : 'FinancialTable',
    data () {
        return {
            tabledata : [
            {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"14/05/1982"},
            {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982"},
            ],
            table : [
            {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"14/05/1982"},
            {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982"},
            ]
            

        }
    },
    mounted() {
        this.loadTable()
        //this.loadSecond()
    },
    methods : {
        loadTable() {
            //var tabledata = 
            var table_id = this.$refs["example"];
            var table = new Tabulator(table_id, {
                data: this.tabledata,           //load row data from array
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the table
                tooltips:true,            //show tool tips on cells
                addRowPos:"top",          //when adding a new row, add it to the top of the table
                history:true,             //allow undo and redo actions on the table
                // pagination:"local",       //paginate the data
                // paginationSize:7,         //allow 7 rows per page of data
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                    {column:"name", dir:"asc"},
                ],
                columns:[                 //define the table columns
                    {title:"Name", field:"name", width:150},
	 	            {title:"Age", field:"age", align:"left", formatter:"progress"},
	 	            {title:"Favourite Color", field:"col"},
	 	            {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
                ],
            });
        },
        loadSecond(){
            var financial_table = this.$refs["financial"]
            var fin_table = new Tabulator(financial_table, {
                data: this.table,           //load row data from array
                layout:"fitColumns",      //fit columns to width of table
                responsiveLayout:"hide",  //hide columns that dont fit on the table
                tooltips:true,            //show tool tips on cells
                addRowPos:"top",          //when adding a new row, add it to the top of the table
                //history:true,             //allow undo and redo actions on the table
                // pagination:"local",       //paginate the data
                // paginationSize:7,         //allow 7 rows per page of data
                movableColumns:true,      //allow column order to be changed
                resizableRows:true,       //allow row order to be changed
                initialSort:[             //set the initial sort order of the data
                    {column:"name", dir:"asc"},
                ],
                columns:[                 //define the table columns
                    {title:"Name", field:"name", width:150},
	 	            {title:"Age", field:"age", align:"left", formatter:"progress"},
	 	            {title:"Favourite Color", field:"col"},
	 	            {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
                ],
            });
        }
    }
}
</script>

