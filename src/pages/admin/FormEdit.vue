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
              <div class="text-h6">Form Edit</div>
              <div>Edit Data Mobil</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
      <q-card-section class="row">
        <q-form
        @submit="onSubmit"
          class="q-col-gutter-md q-col-lg-6 col-md-6 col-xs-12"
        >
          <q-input
            filled
            v-model="form.merekMobil"
            label="Merek Mobil *"
            :rules="[ val => val && val.length > 0 || 'mohon isi merek Mobil']"
          />
          <q-input
            filled
            v-model="form.harga"
            label="Harga Mobil *"
            :rules="[ val => val > 0 || 'mohon isi harga mobil']"
          />
          <q-input
            filled
            v-model="form.tahun"
            label="tahun mobil *"
            :rules="[ val => val && val.length > 0 || 'mohon isi tahun']"
          />
          <q-select
          filled
          v-model="form.warna"
          :options="optionWarna"
          label="warna Mobil *"
          />
          <div class="flex">
            Pilih rating
            <q-rating
            v-model="form.rating"
            :max="5"
            class="q-ml-md"
            size="32px"
            color="red"
            icon="star_border"
            icon-selected="star"/>
          </div>
          <q-input
          filled
          v-model="form.deskripsi"
          type="textarea"
          label="Deskripsi Mobil"
          />
          <q-file accept=".jpg, image/*" color="teal" filled v-model="image" label="Upload Gambar">
            <template v-slot:prepend>
              <q-icon name="cloud_upload"/>
            </template>
          </q-file>

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      form: {
        merekMobil: null,
        harga: 0,
        tahun: null,
        warna: null,
        rating: 0,
        deskripsi: null
      },
      optionWarna: [
        'Merah',
        'Kuning',
        'Hijau',
        'Hitam',
        'Putih',
        'Silver'
      ],
      image: null
    }
  },
  created () {
    this.getData()
  },

  methods: {
    getData () {
      this.$axios.get(`mobil/getbyid/${this.$route.params.id}`)
        .then(res => {
          if (res.data.sukses) {
            this.form = res.data.data
          } else {
            this.$router.push({ name: 'dataMobil' })
          }
        })
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.put(`mobil/edit/${this.$route.params.id}`, formData)
        .then(res => {
          if (res.data.sukses) {
            this.$showNotif(res.data.pesan, 'positive')
            this.$router.push({ name: 'dataMobil' })
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    },

    onReset () {}
  }
}
</script>
<style scoped>
.left {
  width: 5px;
  height: 100%;
  background-color: rgb(229, 245, 0);
}
</style>
