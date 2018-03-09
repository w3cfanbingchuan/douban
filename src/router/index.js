import Vue from 'vue'
import Router from 'vue-router'
import movies from  '@/components/movies'
import More from '@/components/More'
import books1 from   '@/components/books1'
import broadcast from '@/components/broadcast'
import group from '@/components/group'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: movies,
      children:[{
        path: '/movies/More',
        name: 'more',
        component: More
      }]
    },
    {
      path: '/books1',
      name: 'books1',
      component: books1
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '*',
      name: 'movies',
      component: movies
    }
  ]
})
