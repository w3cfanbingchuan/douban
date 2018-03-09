<template>
  <div>
    <div class="movies">
      <h3>{{msg1.title}} <router-link to="/movies/More">更多</router-link></h3>
      <ul>
        <li v-for="item in msg1.subjects">
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
      <h3>{{ msg2.title }}</h3>
      <ul>
        <li v-for="item in msg2.subjects">
          <a :href="item.alt">
            <dl>
              <dt><img :src="item.images.small"></dt>
              <dd>
                <p>{{item.title}}</p>
                <p>{{item.rating.average}}</p>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:"movies",
  data(){
    return {
      msg1:'',
      msg2:''
    }
  },
  created(){
    const _this = this;
     var url = 'https://api.douban.com//v2/movie/in_theaters'
      $.ajax({
          url:url,
          dataType:"jsonp",
          success:function(e){
            _this.msg1 = e;
            _this.$store.commit('showmovies',e.title);
          },error:function(e){
            console.log(e)
          }
      })
      var url1 = 'https://api.douban.com//v2/movie/coming_soon';
      $.ajax({
            url:url1,
            dataType:"jsonp",
            success:function(e){
              _this.msg2 = e;
            }
        })
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/movies.scss";
</style>
