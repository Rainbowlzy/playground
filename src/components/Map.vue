<template>
  <div style="width:1480px; height:800px;">
    <div id="container" style="width:1480px; height:800px;"></div>
  </div>
</template>
<script>
  export default {
    name:"Map",
    components:{},
    mounted: function () {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 14,
        layers: [
          new AMap.TileLayer.Satellite(),
//                                new AMap.TileLayer.RoadNet()
        ],
        center: [119.042806, 32.146854]
      });
    }
  }
</script>
<style scoped>
  #container{
    margin:0px 0px;
  }
</style>
