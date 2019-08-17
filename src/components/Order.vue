<template>
  <v-app>
    <Header />
    <v-content><v-container>
      <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="10"
      class="elevation-1"
    >
    <template v-slot:item.id="{ item }">
      <v-icon style="cursor: pointer;" @click="downloadPDF(item.id)">cloud_download</v-icon>
    </template>
    </v-data-table>
    </v-container></v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Header from './adminlayout/Header';  
  import Footer from './adminlayout/Footer';  
  
  export default {
    components: {
      Header, Footer
    },
    data: () => ({
      title:'Order',
      color:'green',
      headers:[
        { text: 'Tanggal', value: 'tanggal_pickup_show' }
        ,{ text: 'Nama', value: 'nama' }
        ,{ text: 'Email', value: 'email' }
        ,{ text: 'HP', value: 'hp' }
        ,{ text: 'Tujuan', value: 'tujuan' }
        ,{ text: 'Drop off', value: 'drop_off' }
        ,{ text: 'Merk mobil', value: 'merk_mobil' }
        ,{ text: 'Pesan', value: 'pesan' }
        ,{ text: '', value: 'id' }
      ],
      orders:[],
    }),
    methods: {
      refreshOrder() {
        var vue = this;
        fetch(process.env.VUE_APP_API_URL+'data-order').then(response => response.json()).then(data => {
          vue.orders = data;
        });
      },
      downloadPDF(id) {
        window.open(process.env.VUE_APP_API_URL+'get-pdf?id='+id);
      }
    },
    props: {
      source: String,
    },
    created() {
      this.$store.state.adminTitle = this.title;
      this.$store.state.adminColor = this.color;
      this.refreshOrder();
    }
  }
</script> 
