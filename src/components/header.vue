<template>
  <div class="hello">
   <ul>
     <li>
       <router-link to="/movies/" class="movies">电影</router-link>
     </li>
     <li>
       <router-link to="/books1/" class="books">图书</router-link>
     </li>
     <li>
       <router-link to="/broadcast/" class="broadcast">广播</router-link>
     </li>
     <li>
       <router-link to="/group/" class="group">小组</router-link>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'Dheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  text-decoration: none;
}
.movies{
  color: #2384E8;
}
.books{
  color: #9F7860;
}
.broadcast{
  color: #E4A813;
}
.group{
  color: #2AB8CC;
}
</style>
