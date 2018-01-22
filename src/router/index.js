import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import Read from '@/components/Read'
import Update from '@/components/Update'
import Delete from '@/components/Delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/delete',
      name: 'Delete',
      component: Delete
    },
  ]
})
