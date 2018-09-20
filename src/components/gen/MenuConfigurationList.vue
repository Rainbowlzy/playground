<template>
<div class="table-background">
    <table id="tableMenuConfiguration" data-toolbar="#toolbar"
         data-search="true"
         data-show-refresh="true"
         data-show-toggle="true"
         data-show-columns="true"
         data-show-export="true"
         data-pagination="true"
         data-page-list="[10, 25, 50, 100, ALL]"
         data-page-size="5"
         data-id-field="id"
         data-method="get"
         data-url="/BaoHua/DefaultHandler.ashx?method=getmenuconfigurationlist"
         data-side-pagination="server"></table>
</div>
</template>

<script>

import jQuery from 'jquery'
  import boot from 'bootstrap-table'

//获取table高度
  function getHeight() {
    return $(window).height() - $("h1").innerHeight(true) - $("#container").innerHeight(true);
  }

  function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {
      html.push("<p><b>" + key + ":</b> " + value + "</p>");
    });
    return html.join("");
  }

  function imgFormatter(col) {
    return function (value, row, index) {
      if (row[col] && row[col].indexOf(',') != -1)return [row[col] ? row[col].split(',').map(function (i) {
        return '<img src="' + i + '" width="40" height="40" />';
      }).join('') : '']
      return [row[col] ? '<img src="' + row[col] + '" width="40" height="40" />' : '']
    }
  }
  function linkFormatter(col) {
    return function (value, row, index) {
      ;
      return [row[col] ? $('<a></a>').attr('href', row[col]).text(strlimit(row[col], 30)).get(0).outerHTML : '']
    }
  }

    
  function strlimit(s, len) {
      if (s && s.length < len)return s;
      var slen = len / 2 - 2;
      return s.substr(0, slen) + '...' + s.substr(s.length - slen, slen);
  }

  function limitFormatter(col) {
    return function (value, row, index) {
      ;
      return [row[col] ? strlimit(row[col], 20) : '']
    }
  }
  //操作图标
  function operateFormatter(value, row, index) {
    var statusButton = "";
    var k = '';
    row.address = row[k];
    var positionurl = '/BaoHua/2_map/full_map.html?data=' + encodeURIComponent(JSON.stringify(row))
    if (row.address) {
      var positionbutton = [
        '<a class=" position am-btn"   href="', positionurl,
        '"  title="位置" >',
        '<i class="glyphicon glyphicon-globe"></i>位置',
        '</a>'
      ].join("")
    }
    return [
      statusButton,
      positionbutton,
      '<a class=" edit am-btn"   href="javascript:void(0)"  title="编辑" >',
      '<i class="glyphicon glyphicon-edit"></i>编辑',
      '</a>',

      /*
       '<a class="remove am-btn" href="javascript:void(0)" title="删除">',
       '<i class="glyphicon glyphicon-remove"></i>删除',
       '</a>'
       */

    ].join("");
  }

  //操作日期
  function dateformat(value, row, index) {
    return [
      (changeDateFormat(row.date) || "").substr(0, 10)
    ].join("");
  }

  //具体操作：打开网页，编辑，删除
  window.operateEvents = {
    //编辑
    'click .edit': function (e, value, row, index) {
      for (var p in row) {
        if (row[p] && row[p][0] === '/' && row[p].indexOf('/Date') === 0) row[p] = slashDate2yyyyMMdd(row[p])
      }
      window.location.href = "/BaoHua/gen/MenuConfiguration.html?table=MenuConfiguration&data=" + encodeURIComponent(JSON.stringify(row));
    },
    'click .transfer': function (e, value, row, index) {
      var statusButton = "";

    },
    //删除
    'click .remove': function (e, value, row, index) {
      //前台删除
      $table.bootstrapTable("remove", {
        field: "id",
        values: [row.id]
      });
      //后台删除
      $.call('DeleteMenuConfiguration', row, function (data) {
        $table.bootstrapTable("refresh");
      })
    }
  };

  export default{
    name: 'MenuConfigurationList',
    mounted: function () {
      let $table = $('#tableMenuConfiguration');
        $table.bootstrapTable({
          striped: true,
          height: getHeight(),
          columns: [[{
            field: "MCCaption",
            title: "标题",
            sortable: true,
            align: "center"
          },
            {
              formatter: linkFormatter('MCLink'),
              field: "MCLink",
              title: "链接",

              sortable: true,
              align: "center"
            },
            {
              formatter: imgFormatter('MCPicture'),
              field: "MCPicture",
              title: "图片",

              sortable: true,
              align: "center"
            },
            {
              formatter: limitFormatter('MCParentTitle'),
              field: "MCParentTitle",
              title: "父级标题",

              sortable: true,
              align: "center"
            },
            {
              field: "MCMenuType",
              title: "菜单类型",

              sortable: true,
              align: "center"
            },
            {
              field: "MCSequence",
              title: "顺序",

              sortable: true,
              align: "center"
            },
            {
              field: "operate",
              title: "操作",
              align: "center",
              events: operateEvents,
              formatter: operateFormatter
            }
          ]
          ]
        });
    }
  }
</script>

<style>
.table-background{
  background: white;
}
</style>
