<template>
  <q-layout view="lHh LpR lFf">
    <q-toolbar unelevated style="height: 80px;" class="text-white bg-negative">

          <q-toolbar-title shrink class="text-weight-boldn text-align-left">
            <div class="q-pa-xx">
              <q-btn
              flat
              no-caps
              no-wrap
              size="extra small"
              dense
              class="q-ml-xs" :to="{ name: 'homeUser' }">
                <q-icon name="store" color="blue" size="28px"
                /> Dealer Quasar
                </q-btn>
            </div>
            <div class="row">
              <div class="col" v-if="$q.screen.md || $q.screen.md || $q.screen.lg || $q.screen.xl">
                <q-btn size="small" :to="{ name: 'homeUser' }" flat>Home</q-btn>
                <q-btn size="small" :to="{ name: 'myOrder' }" flat>Order List</q-btn>
                <q-btn size="small" :to="{ name: 'TentangAplikasi'}" flat>Tentang</q-btn>
              </div>
            </div>
          </q-toolbar-title>
      <q-space/>
      <q-btn size="medium" round icon="shopping_cart" :to="{ name: 'myOrder' }" flat>
        <q-tooltip>Transaksi saya</q-tooltip>
      </q-btn>
      <q-btn size="small" round icon="power_settings_new" @click="logout()" flat v-if="$q.screen.md || $q.screen.md || $q.screen.lg || $q.screen.xl">
        <q-tooltip>Log out</q-tooltip>
      </q-btn>
      <q-btn flat @click="drawer = !drawer" round v-if="$q.screen.xs || $q.screen.sm" icon="menu"></q-btn>
    </q-toolbar>
    <q-drawer v-model="drawer" :width="200" :breakpoint="500" side="right">
      <q-scroll-area class="fit">
        <q-list>
          <q-btn round flat icon="keyboard_arrow_right" @click="drawer = !drawer"></q-btn>
          <q-item active-class="active" exact v-ripple clickable :to="{ name: 'homeUser' }">
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item active-class="active" exact v-ripple clickable :to="{ name: 'TentangAplikasi' }">
            <q-item-section avatar>
              <q-icon name="info"/>
            </q-item-section>
            <q-item-section>
              Tentang
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable @click="logout()">
            <q-item-section avatar>
              <q-icon name="power_settings_new"/>
            </q-item-section>
            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-4">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
<style>
.active {
  color: #ff0000;
  background-color: #E0E0E0;
  padding-right: 10;
}
</style>
