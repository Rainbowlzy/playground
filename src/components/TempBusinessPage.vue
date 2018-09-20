<template>
  <div id="tempBusinessPage">
    <vue-table :schema="[
      {
        title:'标题',field:'MCCaption'
      }
      ]" method="getmenuconfigurationlist"
               :PageSize="10"
               :search="'我的'"></vue-table>
  </div>
</template>

<script>
  import VueTable from '@/components/VueTable.vue'

  export default {
    name:'TempBusinessPage',
    components:{
      VueTable,
    }
  }
</script>
