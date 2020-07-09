
const routes = [
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/registrasi',
    name: 'registerPage',
    component: () => import('pages/guest/Register.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dataTransaksi', component: () => import('pages/admin/Index.vue') },
      { path: 'inputmobil', name: 'inputMobil', component: () => import('pages/admin/InputMobil.vue') },
      { path: 'datauser', name: 'dataUser', component: () => import('pages/admin/DataUser.vue') },
      { path: 'datamobil', name: 'dataMobil', component: () => import('pages/admin/DataMobil.vue') },
      { path: 'formedit/:id', name: 'formEditMobil', component: () => import('pages/admin/FormEdit.vue') },
      { path: 'tentang', name: 'Tentang', component: () => import('pages/guest/Tentang.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'homeUser', component: () => import('pages/user/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/user/MyOrder.vue') },
      { path: 'tentang', name: 'TentangAplikasi', component: () => import('pages/guest/Tentang.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
