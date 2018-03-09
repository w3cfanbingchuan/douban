<template>
  <div class="more">
    <h3> {{ $store.state.movies }} </h3>
    <div class="movies" ref="menuWrapper">
      <ul>
        <li v-for="item in msg.subjects">
          <a :href="item.alt">
            <dl>
              <dt><img :src="item.images.small"></dt>
              <dd>
                <p> {{ item.title }} </p>
                <p> {{ item.rating.average }} </p>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name:"more",
  data(){
    return {
      msg:''
    }
  },
    created(){
      const _this = this;
      const url = 'https://api.douban.com//v2/movie/top250';
      $.ajax({
          url:url,
          dataType:"jsonp",
          success:function(e){
           _this.msg = e;
           _this.$nextTick(() =>{
             new BScroll(_this.$refs.menuWrapper, {
                click: true
              }); 
           })
           
          },error:function(e){
            console.log(e)
          }
      })
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/more.scss";
</style>
