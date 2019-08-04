<template><v-app>
  <Header />
  <v-content><v-container grid-list-md><v-layout wrap>
    <v-flex xs12>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in items" :key="i">
          <img :src="item.src" style="width:1880px;height:500px;"/>
        </v-carousel-item>
      </v-carousel></v-flex>
  
    <v-flex xs12><v-card class="mx-auto">
      <v-alert type="info">Order form</v-alert>
      <v-form><v-container><v-layout wrap>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-text-field v-model="nama" label="Nama" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="email" label="Email" :rules="emailRules" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="handphone" label="Handphone" required />
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
            <v-text-field v-model="tujuan" label="Tujuan" required />
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="dropoff" label="Drop off di" required />
          </v-flex>
        </v-flex>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-text-field v-model="merkmobil" label="Merk mobil" required />
          </v-flex>
          <v-flex xs12>
            <v-textarea solo name="input-7-4" label="Pesan lain" />
          </v-flex>
        </v-flex>
        <v-flex xs12 class="text-right">
          <v-btn color="success" dark large>Kirim</v-btn>
        </v-flex>
      </v-layout></v-container></v-form>
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
        nama: '',
        handphone: '',
        email: '',
        tujuan:'',
        dropoff:'',
        merkmobil:'',
        bulans:['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        haries:['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        tglpickupmenu:false,tglpickuptext:null,tglpickup:null,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        kotapilihan: [],
        items: [{src: 'slide1b.jpg'}
          ,{src: 'slide2b.jpg'}
          ,{src: 'slide3b.jpg'}
          ,{src: 'slide4b.jpg'}
          ,{src: 'slide5b.jpg'}
          ,{src: 'slide6b.jpg'}
          ,{src: 'slide7b.jpg'}
          ,{src: 'slide8b.jpg'}
          ,{src: 'slide9b.jpg'}
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
        return this.formatDate(this.tglpickup)
      },
    },
    watch: {
      tglpickup () {
        this.tglpickuptext = this.formatDate(this.tglpickup)
      },
    },
    methods: {
      loadKota(){
        var vueku = this
        fetch(process.env.VUE_APP_API_URL+'kota').then(response => response.json()).then(data => {
          vueku.kotapilihan = data;
        });
      },
      formatDate (tglpickup) {
        if (!tglpickup) return null
        const [year, month, day] = tglpickup.split('-')
        var mm = parseInt(month) - 1
        var mydate = new Date(tglpickup)
        return this.haries[mydate.getDay()] +', '+day+' '+this.bulans[mm]+' '+year
      },
      todays () {
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0')
        var mm = today.getMonth(); //January is 0!
        var yyyy = today.getFullYear()
        return this.haries[today.getDay()] +', '+dd+' '+this.bulans[mm]+' '+yyyy
      }
    },
    created() {
      //this.loadKota();
      this.tglpickuptext = this.todays()
    }
  }
</script>
