<template><span>
  <v-toolbar dark src="@/assets/toolbar-car.png">
    <v-toolbar-title style="overflow:visible;">Surya subur rent car</v-toolbar-title>
    <v-subheader class="ml-4" style="color:#FFF;font-size:15px;">Telp/WA: 085231538298</v-subheader>
  </v-toolbar>
  
  <v-content><v-container grid-list-md><v-layout wrap>
  
    <v-flex xs12>
      <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        />
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
            <v-select :items="kotapilihan" item-text="kota" item-value="id" v-model="tujuan" label="Tujuan" />
          </v-flex>
          <v-flex xs12>
            <v-select :items="kotapilihan" item-text="kota" item-value="id" v-model="dropoff" label="Drop off di" />
          </v-flex>
        </v-flex>
        <v-flex xs12 md4>
          <v-flex xs12>
            <v-select :items="kotapilihan" item-text="kota" item-value="id" v-model="merkmobil" label="Merk mobil" />
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
  
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Telp / Wa : 085231538298</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        @{{ new Date().getFullYear() }}
      </v-card-actions>
    </v-card>
  </v-footer>
  
</span></template>
<script>
  export default {
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
        items: [{src: 'slide1.jpg'}
          ,{src: 'slide2.jpg'}
          ,{src: 'slide3.jpg'}
          ,{src: 'slide4.jpg'}
        ],
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-instagram',
        ],
        wisatas:[
          {gambar:'wisata1.jpg', title:'Gunung bromo', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata2.jpg', title:'Jembatan apa ya', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata3.jpg', title:'Bahari Lamongan ya', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
          ,{gambar:'wisata4.jpg', title:'Bukit kapur', text:'wisata yang terletak di sana ada mereaka pergi wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata wisata' }
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
      this.loadKota();
      this.tglpickuptext = this.todays()
    }
  }
</script>
