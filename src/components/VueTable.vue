
<template>
    <div id="table">
        <div class="table-header">
            <div class="table-header-info"><b>{{message}} 共查询到{{total||0}}条信息</b></div>
            <div class="table-buttons">
                <div @click="deleteSelection">
                    <div class="table-delete"></div>
                    删除
                </div>
                <div @click="refresh">
                    <div class="table-refresh"></div>
                    刷新
                </div>
                <div @click="updateLine">
                  <div class="table-update"></div>
                  修改
                </div>
                <div @click="newline">
                  <div class="table-plus"></div>
                  新增
                </div>
            </div>
        </div>
        <div class="table-body">
            <div class="table-body-header">
                <div class="table-field">
                    选择
                </div>
                <div class="table-field" v-for="field in schema">
                    <span>{{field.title}}</span>
                </div>
                <div class="table-field">
                    操作
                </div>
            </div>
            <div class="table-body-row">
                <div class="table-row" v-for="row in rows">
                    <div class="table-field table-selection">
                      <div class="table-no-selected" @click="select(row)"></div>
                    </div>
                    <div class="table-field" v-for="field in schema" @click="cellClick(row,row[field.field],field.field)">
                        {{row[field.field]}}
                    </div>
                    <div class="table-field table-action">
                        <div @click="review(row)">
                            <div class="table-review"></div>
                            查看
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-footer">
            <div class="table-footer-body">
                <b class="paging-info">共查询到{{total||0}}条信息</b>
                <div class="paging-previous" @click="pagingPrevious">&lt;</div>
                <template v-if="total>6">
                    <div class="paing-num" v-bind:class="i===current_table_index?'active':''" v-for="i in 6" @click="paingNum(i)">{{i}}</div>
                </template>
                <template v-else>
                    <div class="paing-num" v-bind:class="i===current_table_index?'active':''" v-for="i in total" @click="paingNum(i)">{{i}}</div>
                </template>
                <div class="paging-next" @click="pagingNext">&gt;</div>
                <b class="paging-info">每页{{rows_len||0}}条</b>
                <div class="paging-info">跳至<input type="text" @change="val=>paingNum(val)"/>页</div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
    export default{
        name: "vue-table",
        props:['method','schema','search','PageIndex','PageSize'],
        methods: {
            cellClick: function (row,val,field) {
                console.log(row,val,field)
            },
            pagingPrevious: function () {

            },
            paingNum: function (i) {
                console.log(i);
            },
            pagingNext: function () {

            },
            newline: function () {

            },
            updateLine: function () {

            },
            deleteSelection: function () {

            },
            refresh: function () {

            },
            review: function (row) {

            },
            select: function (row) {
                var idx = this.$store.table.selection.find(row);
                if(!idx){
                    this.$store.table.selection.push(row);
                }else{
                    delete this.$store.table.selection[idx];
                }
            }
        },
      computed: {
        rows_len:function(){
          let rows = this.$data.rows;
          if(!rows) return 0;
          return rows.length;
        },
        ...mapGetters(['current_table_index'])
      },
        data: function () {
          var store = this.$store;
          store.commit("init_table",this);
          var table = store.state.table;
          return {
                total:table.total,
                rows:table.rows,
                message:table.message
            };
        }
    }
</script>

<style scoped>
    .paging-info > input {
        width: 40px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        height: 17px;
    }
    #table {
        background: #ffffff;
        width: 100%;
        clear: both;
    }
    .active{
      font-weight: bold;
      background: #39b3c8;
      color: #ffffff;
      width:25px;
      -webkit-border-radius: 15px;;
      -moz-border-radius: 15px;;
      border-radius: 15px;;
    }
    .table-header, .table-body, .table-footer {
        clear: both;
    }

    .table-selection>input{
        border: lightblue 1px solid;
        width: 20px;
        height: 20px;;
    }
    .table-header {

    }

    .table-body {
        border-top: lightgray 1px solid;
        border-bottom: lightgray 1px solid;
    }

    .table-footer {
        height: 40px;
    }

    .table-footer-body {
        float: right;
    }
    .table-row {
        clear: both;
        height: 51px;
        line-height: 51px;
        border-top: lightgray 1px solid;
    }
    .table-selected, .table-no-selected {
      height: 21px;
      line-height: 51px;
      width: 21px;
      margin:14px auto;
    }
    .table-action{
        color:blue;
    }
    .table-field {
        float: left;
        /*margin:0px 20px;*/
        text-align: center;
        width:10%;
    }

    .table-buttons, .table-buttons > div {
        float: right;
        margin: 5px 20px;
        cursor: pointer;
    }
    .table-header-info{
        float: left;
        margin: 5px 20px;
    }

    .paging-info, .paging-previous, .paing-num, .paging-next {
        float: left;
        margin: 5px 10px;
        cursor: pointer;
    }

    .table-body-header{
        font-size: 14px;
        color: #999999;
        text-align: left;
        height:40px;
        line-height:40px;
        background: #F9F9F9;
    }
    .table-row:nth-child(even){
        background: #F9F9F9;
    }

  .table-delete{
    background: url("../assets/dark_theme/table-delete.png");
  }
  .table-refresh{
    background: url("../assets/dark_theme/table-refresh.png");
  }
  .table-update{
    background: url("../assets/dark_theme/table-update.png");
  }
    .table-plus{
      background: url("../assets/dark_theme/table-plus.png");
    }
    .table-selected{
      background: url("../assets/dark_theme/table-selected.png");
    }
    .table-no-selected{
      background: url("../assets/dark_theme/table-no-selected.png");
    }
    .table-delete,.table-refresh,.table-update,.table-plus{
      width:21px;
      height:21px;
      float: left;
      margin: 0px 10px;
    }

</style>
