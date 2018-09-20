<template>
  <div id="playground">
    <div class="container">
      <div class="row"><h1>THIS IS A PLAYGROUND</h1></div>
      <div class="row">
        <table id="table"
               data-toolbar="#toolbar"
               data-search="true"
               data-show-refresh="true"
               data-show-toggle="true"
               data-show-columns="true"
               data-show-export="true"
               data-pagination="true"
               data-page-list="[10, 25, 50, 100, ALL]"
               data-page-size="5"
               data-id-field="id"
               data-url="http://localhost/XiangXi/DefaultHandler.ashx?method=getPolicyDocumentList"
               data-side-pagination="server"></table>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import jQuery from 'jquery'
  import boot from 'bootstrap'
  import bootstrapTable from 'bootstrap-table'

  export default {
    name: 'Playground',
    mounted: function () {
      $("#table").bootstrapTable({
        striped: true,
        height: $(window).height() - $("h1").innerHeight(true) - $("#container").innerHeight(true),
        columns:[
          {
            title:"姓名",field:"PDCaption"
          },
          {
            title:"姓名",field:"PDContent"
          },
          {
            title:"姓名",field:"PDAuthor"
          },
        ]
      })
    }

  }
</script>
<style scoped>
#playground{
  background: #ffffff;
}
</style>
