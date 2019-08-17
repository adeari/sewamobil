<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
          <v-form ref="loginForm" v-model="valid">
            <v-card class="elevation-12">
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-toolbar-title>Admin Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                  <v-text-field
                    label="User name"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="username"
                    :rules="requiredRules" required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="passwd"
                    :rules="requiredRules" required
                  ></v-text-field>
                  <v-alert v-show="alertShow" type="error">{{ msgAlert }}</v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-progress-linear color="green" indeterminate height="20" v-show="loderShow" />
                <v-btn color="success" @click="login()" v-show="!loderShow">Login</v-btn>
              </v-card-actions>
            </v-card></v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid:true,
    username:'  ',
    passwd:'  ',
    requiredRules: [
      v => !!v || 'Harus di isi',
    ],
    alertShow:false,loderShow:false,
    msgAlert:'',
  }),
  methods: {
    login() {
      var vueku = this;
      if (vueku.$refs.loginForm.validate()) {
        vueku.alertShow = false;
        vueku.loderShow = true;
        
        var formData = new FormData();
        formData.append('username', vueku.username);
        formData.append('passwd', vueku.passwd);
          
        fetch(process.env.VUE_APP_API_URL+'userlogin', {  body: formData, method: 'POST' }).then(response => response.json()).then(data => {
          vueku.loderShow = false;
          if (data.status) {
            window.location = '/order';
          } else {
            vueku.alertShow = true;
            vueku.msgAlert = data.msg;
          }
          
        });
      }
    }
  }
}
</script>
