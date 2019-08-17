<template><v-app>
  <Header />
  <v-content><v-container grid-list-md><v-layout wrap>
    <v-flex xs12>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover interval=2000 height="800px" class="hidden-sm-and-down">
        <v-carousel-item v-for="(item,i) in items" :key="i" >
          <img :src="item.src" style="width:100%;height:100%;" alt="gambar" />
        </v-carousel-item>
      </v-carousel>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover interval=2000 height="200px" class="hidden-sm-and-up">
        <v-carousel-item v-for="(item,i) in items" :key="i" >
          <img :src="item.src" style="width:100%;height:100%;" alt="gambar" />
        </v-carousel-item>
      </v-carousel>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover interval=2000 height="320px" class="hidden-lg-and-up hidden-xs-only">
        <v-carousel-item v-for="(item,i) in items" :key="i" >
          <img :src="item.src" style="width:100%;height:100%;" alt="gambar" />
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  
    <v-flex xs12><v-card class="mx-auto">
      <v-alert type="info">Order form</v-alert>
      <v-form ref="kirimForm" v-model="valid" v-show="kirimFormShow"><v-container><v-layout wrap>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-text-field v-model="nama" label="Nama" :rules="requiredRules" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="email" label="Email" :rules="emailRules" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="hp" label="Handphone" :rules="requiredRules" required />
          </v-flex>
        </v-flex>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-menu v-model="tglpickupmenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y full-width min-width="290px" >
              <template v-slot:activator="{ on }">
                <v-text-field v-model="tglpickuptext" label="Tanggal pickup" prepend-icon="event" readonly v-on="on" ></v-text-field>
              </template>
              <v-date-picker v-model="tglpickup" @input="tglpickupmenu = false" locale="id" />
            </v-menu>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="tujuan" label="Tujuan" :rules="requiredRules" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="dropoff" label="Drop off di" :rules="requiredRules" required />
          </v-flex>
        </v-flex>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-text-field v-model="merkmobil" label="Merk mobil" :rules="requiredRules" required />
          </v-flex>
          <v-flex xs12>
            <v-textarea solo name="input-7-4" label="Pesan lain" v-model="pesan" />
          </v-flex>
        </v-flex>
        <v-flex xs12 class="text-right" v-show="showkirim && !loaderShow" v-on:click="showKirim">
          <v-btn color="success" dark large>Kirim</v-btn>
        </v-flex>
        <v-flex xs12 class="text-right" v-show="!showkirim && !loaderShow">
          Apakah data sudah terisi dengan benar ? &nbsp;&nbsp;<v-btn color="success" dark large v-on:click="kirimkan()">Ya</v-btn> &nbsp;&nbsp;&nbsp;<v-btn color="warning" dark large v-on:click="showkirim = !showkirim">Tidak</v-btn>
        </v-flex>
        <v-flex xs12 v-show="loaderShow">
          <v-progress-linear color="light-green darken-4" height="10" indeterminate value="20" striped />
        </v-flex>
      </v-layout></v-container></v-form>
      <v-flex xs12 class="text-center" v-show="!kirimFormShow">
          <v-alert type="success">
            Terima kasih, mohon tunggu info dari kami.
          </v-alert>
        </v-flex>
    </v-card></v-flex>
      
    <v-flex xs12 md4 v-for="(wisata, index)  in wisatas" :key="index"><v-card>
      <v-img  height="250" :src="wisata.gambar" />
      <v-card-title>{{ wisata.title }}</v-card-title>
      <v-card-text>
        <div>{{ wisata.text }}</div>
      </v-card-text>
    </v-card></v-flex>
  
  </v-layout></v-container></v-content>
  <Footer />
  
</v-app></template>
<script>
  export default {
    components: {
      Footer: () => import('./corelayout/Footer'),
      Header: () => import('./corelayout/Header')
    },
    data () {
      return {
        valid: true,kirimFormShow:true,showkirim:true,loaderShow:false,
        nama: '',hp: '',
        email: '',
        tujuan:'',
        dropoff:'',
        merkmobil:'',
        pesan:'',
        bulans:['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        haries:['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        tglpickupmenu:false,tglpickuptext:null,tglpickup:null,
        emailRules: [
          v => !!v || 'Membutuhkan Email',
          v => /.+@.+/.test(v) || 'E-mail harus sesuai',
        ],
        requiredRules: [
          v => !!v || 'Harus di isi',
        ],
        items: [{src: 'slide1d.jpg'}
          ,{src: 'slide2d.jpg'}
          ,{src: 'slide3d.jpg'}
          ,{src: 'slide4d.jpg'}
          ,{src: 'slide5d.jpg'}
          ,{src: 'slide6d.jpg'}
          ,{src: 'slide7d.jpg'}
          ,{src: 'slide8d.jpg'}
          ,{src: 'slide9d.jpg'}
          ,{src: 'slide10d.jpg'}
          ,{src: 'slide11d.jpg'}
        ],
        wisatas:[
          {gambar:'wisata1b.jpg', title:'Thailand', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata2b.jpg', title:'Singapura', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata3b.jpg', title:'Arung jeram', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata4b.jpg', title:'Bromo', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata5b.jpg', title:'Air terjun', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
        ],
      }
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.tglpickup);
      },
    },
    watch: {
      tglpickup () {
        this.tglpickuptext = this.formatDate(this.tglpickup);
      }
    },
    methods: {
      formatDate (tglpickup) {
        if (!tglpickup) return null;
        const [year, month, day] = tglpickup.split('-');
        var mm = parseInt(month) - 1;
        var mydate = new Date(tglpickup);
        return this.haries[mydate.getDay()] +', '+day+' '+this.bulans[mm]+' '+year;
      },
      todays () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = today.getMonth(); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy+'-'+mm+'-'+dd;
      },
      showKirim () {
        if (this.$refs.kirimForm.validate()) {
          this.showkirim = !this.showkirim;
        }
      },
      kirimkan () {
        var vueku = this;
        if (vueku.$refs.kirimForm.validate()) {
          this.loaderShow = true;
          var formData = new FormData();
          formData.append('nama', vueku.nama);
          formData.append('email', vueku.email);
          formData.append('hp', vueku.hp);
          formData.append('tanggal_pickup', vueku.tglpickup);
          formData.append('tujuan', vueku.tujuan);
          formData.append('dropoff', vueku.dropoff);
          formData.append('merkmobil', vueku.merkmobil);
          formData.append('tanggal_pickup_show', vueku.tglpickuptext);
          formData.append('pesan', vueku.pesan);
          fetch(process.env.VUE_APP_API_URL+'kirim', {  body: formData, method: 'POST' }).then(response => response.json()).then(data => {
            if (data.status) {
              vueku.kirimFormShow = false;
              window.scrollTo(0,20)
            } else {
              alert(data.msg);
            }
            this.loaderShow = false;
          });
        }
      }
    },
    created() {
      this.tglpickup = this.todays();
    },
  }
</script>
