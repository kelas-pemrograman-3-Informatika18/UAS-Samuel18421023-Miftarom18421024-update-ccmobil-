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
              <div class="text-h6">Data Pesanan Saya</div>
              <div>Data Transaksi Pembelian dan Pemesanan Anda</div>
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
            <q-td key="merekMobil" :props="props">
              {{ props.row.dataMobil[0].merekMobil }}
            </q-td>
            <q-td key="harga" :props="props">
              {{ props.row.dataMobil[0].harga }}
            </q-td>
            <q-td key="jumlah" :props="props">
              {{ props.row.jumlah }}
            </q-td>
            <q-td key="total" :props="props">
              {{ props.row.total }}
            </q-td>
            <q-td key="status" :props="props">
              <q-badge v-if="props.row.status === 1" color="orange" class="q-oa-sm">
                Belum dikonfirmasi
              </q-badge>
              <q-badge v-if="props.row.status === 2" color="blue" class="q-oa-sm">
                Pembeli bisa datang ke dealer untuk menyelesaikan transaksi
              </q-badge>
              <q-badge v-if="props.row.status === 3" color="green" class="q-oa-sm">
                Transaksi selesai
              </q-badge>
            </q-td>
            <q-td key="aksi" :props="props">
              <q-btn :disabled="props.row.status !== 2" @click="confirm(props.row._id)" label="Konfirmasi" color="green" class="q-ml-sm" unelevated/>
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
        { name: 'merekMobil', align: 'left', label: 'Merek Mobil', field: 'merekMobil', sortable: true },
        { name: 'harga', align: 'left', label: 'Harga', field: 'harga', sortable: true },
        { name: 'jumlah', align: 'left', label: 'Jumlah Beli', field: 'jumlah', sortable: true },
        { name: 'total', align: 'left', label: 'Total', field: 'total', sortable: true },
        { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
        { name: 'aksi', align: 'left', label: 'Aksi', field: 'aksi' }
      ],
      data: [],
      detail: false,
      activeData: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(`order/getorderbyuser/${this.$q.localStorage.getItem('dataUser')._id}`)
        .then((res) => {
          if (res.data.sukses) {
            this.data = res.data.data
          }
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah anda Yakin Sudah Menerima kelengkapan surat mobil dan membawa mobilnya pulang ?',
        cancel: true,
        presistent: true
      }).onOk(() => {
        this.$axios.put(`order/transaksiselesai/${id}`)
          .then((res) => {
            if (res.data.sukses) {
              this.$showNotif(res.data.pesan, 'positive')
              this.getData()
            } else {
              this.$showNotif(res.data.pesan, 'negative')
            }
          })
      })
    }
  }
}
</script>
<style scoped>
.left {
  width: 5px;
  height: 100%;
  background-color: rgb(255, 0, 0);
}

</style>
