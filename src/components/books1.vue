<template>
  <div>
    <img :src="msg">
  </div>
</template>
<script>
export default {
  name:"books1",
  data(){
    return {
      msg:''
    }
  },
  created(){
    const _this = this;
     var url = 'https://api.douban.com//v2/movie/celebrity/1054395'
      $.ajax({
          url:url,
          dataType:"jsonp",
          success:function(e){
              _this.msg = e.avatars.small;
              _this.$store.commit('showmovies',e.avatars.small);
          }
      })
    
  }
}
</script>
<style>

</style>
