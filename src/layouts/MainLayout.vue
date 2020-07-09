<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white bg-black">
      <q-toolbar>
        <q-btn color="white" v-if="$q.screen.xs || $q.screen.sm" dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-space></q-space>
        <div class="row">
          <q-icon name="store" color="negative" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold" color="white">
            Dealer Quasar
          </q-toolbar-title>
        </div>
        <q-btn round flat class="q-pa-xs">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
            <q-menu>
            <q-list style="min-width: 100px">
              <q-separator />
              <q-item clickable :to="{ name: 'Tentang' }" v-close-popup>
                <q-item-section>Tentang</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="logout()">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
            </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-black text-white"
    >
      <q-scroll-area class="fit">
        <q-list>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'Tentang'}">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section>Tentang Aplikasi</q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'dataMobil'}">
          <q-item-section avatar>
            <q-icon name="directions_car" />
          </q-item-section>

          <q-item-section>Data Mobil</q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'dataUser'}">
          <q-item-section avatar>
            <q-icon name="supervisor_account" />
          </q-item-section>

          <q-item-section>
            Data User
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'inputMobil'}">
          <q-item-section avatar>
            <q-icon name="input" />
          </q-item-section>

          <q-item-section>
            Input Mobil
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'dataTransaksi'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>Dashboard Transaksi</q-item-section>
        </q-item>
        <q-item clickable @click="logout()">
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            Log out
          </q-item-section>
        </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-4">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      miniState: true
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
