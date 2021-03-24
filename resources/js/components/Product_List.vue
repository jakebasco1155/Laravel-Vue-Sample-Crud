<template>
    <div data-app>
      <v-card color="#3d6b99" class="white--text">
          <v-card-title class="headline">
            <v-col cols="6">
              <h2>PRODUCTS</h2>
            </v-col>
             <v-col cols="2">
             <v-btn color="primary" @click="clear">Clear Filter</v-btn>
             </v-col>
             <v-col cols="2">
             <v-select
                v-model="category"
                label="Category" 
                :items="categories"
                item-text="value"
                item-value="value"
                required
              />
             </v-col>
            <v-col cols="2">
              <v-text-field
                color="white"
                v-model="search"
                filled
                prepend-inner-icon="mdi-account-search"
                label="Filter"
              />

             
            </v-col>
          </v-card-title>

          <v-card-text>
    <v-simple-table class="table-striped">
 <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Date and Time</th>
                   
                     <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">

                    <td>{{product.name}}</td>
                    <td>{{product.category}}</td>
                    <td v-html="product.description">  
                    </td>
                    <td>{{product.date_time}}</td> 
                    <td>
                    <v-btn color="success" @click = "view(product.id)">VIEW</v-btn>
                    <v-btn color="primary" @click = "edit(product)">EDIT</v-btn>
                    <v-btn color="red" @click="deleteProduct(product.id)">DELETE</v-btn>

                    </td>
                </tr>

              </tbody>
              

    </v-simple-table>
    <v-pagination
              v-model="page"
              :length="total"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </v-card-text>
    </v-card>

      <v-snackbar
      v-model="snackbar"
      bottom
      rounded="pill"
      :color="error ? 'red' : 'success'"
      outlined
    >
      {{ this.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>


    <v-dialog v-model="show" persistent>
        <v-card>
        <v-card-title>Images</v-card-title>
        <v-card-text>
        
        <div v-if="length==0">
        No Image Found
        </div>
        <v-row>
        <div v-for="(photo, key) in images" :key="photo.name">
        <v-spacer></v-spacer>
        
        <img class="ma-4" height="200" width="200" :src="photo.image_url" />

        </div>
        </v-row>
        </v-card-text>
        <v-card-actions>
             <v-btn color="red"   @click="show = false">
          Close
        </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
    
    </div>
</template>


<script>
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
Vue.use(Loading);
export default {
    mounted() {
            console.log('Product Component mounted.')
        },
        data() {
            return {
                products : [],
                page: 1,
                total : 0,
                search: "",
                awaitingSearch: false,
                show:false,
                error: false,
                snackbar: false,  
                message: "",
                val: {},
                images:[],
                length:0,
                edit_product:false,
                category:"",
                categories : [
                            {id:1,value:'Category1'},
                            {id:2,value:'Category2'},
                            {id:3,value:'Category3'},
                            {id:4,value:'Category4'},
                            {id:5,value:'Category5'},

                ]
            }},
        created(){

              this.getData();
        },

        watch: {
    category:function(val){
        if(val == '')return true;
            this.axios
                .get("/api/search_category?category=" + val)
                .then(response => {
                   this.products = response.data.data;
                   this.page = response.data.current_page;
         this.total = response.data.last_page;  
                });
    },        
    page: function() {
      if (typeof this.page === "undefined") {
        this.page = 1;
      }

      // Using vue-resource as an example
      this.axios
        .get("/api/get_products?page=" + this.page)
        .then(response => {
          this.products = response.data.data;
        });
    },
        search: function(val) {
            if(val == '')return true;
          if (!this.awaitingSearch) {
            setTimeout(() => {
              if (typeof this.page === "undefined") {
                this.page = 1;
              }

              this.axios
                .get("/api/search_product?search=" + this.search)
                .then(response => {
                   this.products = response.data.data;
                   this.page = response.data.current_page;
                   this.total = response.data.last_page;  
                });

              this.awaitingSearch = false;
            }, 1000); // 1 sec delay
          }
          this.awaitingSearch = true;
        }
  },
        methods:{
            clear(){
                    this.search = '';
                    this.category= '';
                    this.getData();     
            },
            edit(product){
              
                  
                    this.$router.push({
                    name: 'CreateProduct',
                    params: { data: product}
                    });

            },
            async view(productID){
                     let loader = this.$loading.show({
                    loader: "spinner"
                });
                    await this.axios.get("/api/get_images/"+productID).then(response =>{
                            
                            if(response.data.error == false){ 
                           this.images =response.data.images;
                           this.show = true;
                           this.length = this.images.length;
                        }else{
                             this.message = "No Image Found";
                            this.error = true;
                            this.snackbar = true;   

                        }

                    });




                loader.hide();

            },
            async deleteProduct(productID){
                 let loader = this.$loading.show({
                    loader: "spinner"
                });
                  await this.axios.post("/api/delete_product",{params:{id:productID}}).then(response =>{

                        if(response.data.error == false){
                            this.message = "Product Deleted Successfully";
                            this.error = false;
                            this.snackbar = true;
                            this.getData()
                        }else{
                             this.message = "Product Deletion UnSuccessful";
                            this.error = true;
                            this.snackbar = true;   

                        }

                    });
                loader.hide();
            },
           async getData(){
        
        await this.axios.get("/api/get_products").then(response =>{
         this.products = response.data.data;
         this.page = response.data.current_page;
         this.total = response.data.last_page;  



        });



            }


        }
}
</script>