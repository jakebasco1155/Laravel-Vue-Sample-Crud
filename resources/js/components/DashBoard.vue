<template>
  <div>
    <v-app>
      <v-navigation-drawer v-model="drawer" absolute>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >

           <v-spacer></v-spacer>
             <v-list-item>
              <router-link to="/product_list">
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>mdi mdi-cart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Products</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item>
            <br>
             <div class="text-center ">
      
          <v-avatar color="primary" size="56">
            <v-img
              class="ml-auto"
              :src="'/images/avatars/default_1.png'"
            ></v-img>
          </v-avatar>
      
        <br />
        <b
          >Hi, <span class="red--text">Admin</span></b
        >
       
      </div>
            <v-list-item>
            
              <router-link to="/product_list">
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>mdi mdi-cart</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Products</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="/product_create">
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>mdi-plus-circle</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Create Product</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item>

            <v-list-item>
              <router-link to="/video_links">
                <v-list-item link>
                  <v-list-item-action>
                    <v-icon>mdi mdi-file-video</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Video Links</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-list-item>

            <v-list-item>
              <v-list-item link @click="logout">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Log-out</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app color="#343A40">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title style="color: white">Home</v-toolbar-title>

        <v-spacer></v-spacer>
         
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <router-view> </router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
   
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
    
  methods: {
    logout() {
      window.location.href = "/api/logout_user";
    },
  },
};
</script>
