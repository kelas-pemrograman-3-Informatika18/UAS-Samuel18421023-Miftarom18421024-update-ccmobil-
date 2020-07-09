<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue"></div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Tentang Aplikasi</div>
              <div>Aplikasi Penjualan Mobil Dealer App Quasar</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <q-table
        flat
        :data="data1"
        :columns="columns1"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="prop" :props="props">
                {{ props.row.prop }}
            </q-td>
            <q-td key="keterangan" :props="props">
              <div style="max-width: 800px; white-space: normal">
                {{ props.row.keterangan }}
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
    <div class="row q-mb-md q-mt-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue"></div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Data Admin</div>
              <div>Data Akun User Aplikasi</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <q-table
        flat
        :data="data"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="username" :props="props">
                {{ props.row.username }}
            </q-td>
            <q-td key="namaLengkap" :props="props">
                {{ props.row.namaLengkap }}
            </q-td>
            <q-td key="email" :props="props">
                {{ props.row.email }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'username', align: 'left', label: 'Username', field: 'username', sortable: true },
        { name: 'namaLengkap', align: 'left', label: 'Nama Lenngkap', field: 'namaLengkap', sortable: true },
        { name: 'email', align: 'left', label: 'E-Mail', field: 'email' }
      ],

      data: [],
      columns1: [
        { name: 'prop', align: 'left', label: 'Prop', field: 'prop', sortable: true },
        { name: 'keterangan', align: 'left', label: 'Keterangan', field: 'keterangan', sortable: true }
      ],

      data1: [
        {
          prop: 'Nama App',
          keterangan: 'Dealer Quasar App'
        },
        {
          prop: 'Deskripsi App',
          keterangan: 'Jadi usaha jual mobil bekas ini di didirikan oleh 2 orang sahabat yang sama sama kuliah di Universitas Bandar Lampung (UBL) jurusan Informatika yang sama sama menyukai dunia otomotif terutama mobil , kami berdua menyadari pembelian mobil bekas dari tahun ke tahun semakin meningkat maka dari itu kami mendirikan usaha ini(nama website).  Selain dari website kami juga menjual di toko kami jadi konsumen bisa langsung melihat dan mengecek mobil yang disukai'
        },
        {
          prop: 'Pkg quasar',
          keterangan: 'v.1.9.16'
        },
        {
          prop: 'Pkg @quasar/app',
          keterangan: 'v.1.7.4'
        },
        {
          prop: 'App URL',
          keterangan: 'http://localhost:4019'
        },
        {
          prop: 'Desain Interface',
          keterangan: 'Samuel Gunawan'
        },
        {
          prop: 'Coding Front-end Interface',
          keterangan: 'Miftarom Rahmawn'
        },
        {
          prop: 'Coding Refference',
          keterangan: 'MovieApp / Dika Hastanto'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('user/getalladmin')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
<style>
.left {
  width: 5px;
  height: 100%;
  background-color: rgb(0, 255, 42);
}

</style>
