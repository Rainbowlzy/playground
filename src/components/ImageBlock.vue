<template>
  <div id="image-block">
    <img :src="`http://localhost/BaoHua/ImageHandler.ashx?label=${title}&bgcolor2=${color}&bgcolor1=${color}&width=400&height=380&icon=${title}.png&shape=trirect&fontSize=30&`"
         :alt="title"
         :width="width||200"
         :height="height||200"
      />
  </div>
</template>

<script>
  export default{
    name:'ImageBlock',
      props:['title','width','height','color']
  }
</script>
<style scoped>

    img {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }
</style>
