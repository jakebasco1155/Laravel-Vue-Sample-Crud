<template>
  <div class="container" data-app>
    <form-wizard
      @on-complete="submit_product"
      no-title
      title="SAVE PRODUCT"
      subtitle=""
      color="#3d6b99"
      ref="formWizard"
      lazy="true"
    >
      <tab-content :before-change="validateForm" icon="mdi mdi-24px mdi-format-align-justify" title="Product details">
        <v-card>
          <v-card-title>Product Form</v-card-title>
          <v-card-subtitle>Save your product here</v-card-subtitle>
          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="val.name"
                label="Name"
                :counter="25"
                type="text"
                :rules="nameRule"
                required
              />
              <v-select
                v-model="val.category"
                label="Category"
                :rules="requiredRule"
                :items="categories"
                item-text="value"
                item-value="value"
                required
              />

              Description:
              <vue-editor
                v-model="val.description"
                label="Description"
                type="text"
                :rules="requiredRule"
                required
              />
            </v-form>
          </v-card-text>
        </v-card>
      </tab-content>
      <tab-content title="Product Images" :before-change="validateImages" icon="mdi mdi-24px mdi-image-area">
        <input
          type="file"
          id="myFileInput"
          accept="image/jpeg"
          @change="selectFile"
          hidden
          multiple
        />
        <v-btn align="center" class="ma-4" @click="choose()" icon>
          <v-icon>mdi mdi-file-image </v-icon>
          UPLOAD IMAGES
        </v-btn>
        <v-row>
          <div v-for="(photo, key) in photos" :key="photo.name">
            <div>
              <v-btn class="btn btn-danger ma-4" @click="remove(key)" icon>
                <v-icon>mdi-window-close</v-icon> </v-btn
              ><img height="150" width="150" class="preview" :ref="'image'" />
            </div>
          </div>
        </v-row>
        <br />
      </tab-content>
      <tab-content title="Date and Time" :before-change="validateDate" icon="mdi mdi-24px mdi-calendar">
        <div class="container">
          Select Date and Time:
          <date-picker v-model="date" type="datetime" valueType="format" :rules="requiredRule"></date-picker>
        </div>
      </tab-content>
    </form-wizard>
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
  </div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { VueEditor } from "vue2-editor";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
Vue.use(Loading);
components: {
  FormWizard, TabContent, VueEditor, DatePicker;
}
export default {
    created() {
   
    if(this.$route.params.data!=undefined){
            this.val = this.$route.params.data;
            this.date= this.val.date_time;
            this.val.edit = true;
    }
},
  data() {
    return {
      val: {},
      categories: [
        { id: 1, value: "Category1" },
        { id: 2, value: "Category2" },
        { id: 3, value: "Category3" },
        { id: 4, value: "Category4" },
        { id: 5, value: "Category5" },
      ],
      photos: [],
      urls: [],
      edit:false,
      imageSelected: false,
      error: false,
      snackbar: false,
      message: "",
      date: null,
      requiredRule: [(v) => !!v || "This fied is required"],
      nameRule: [
        (v) => !!v || "This fied is required",

        (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
      ],
    };
  },

  methods: {
    validateForm() {
      if (!this.$refs.form.validate() || this.val.description==''|| this.val.description==undefined) {
        this.message = "Please Fill out the form Correctly";
        this.error = true;
        this.snackbar = true;
      } else {
        return true;
      }
    },
    validateImages() {
      if (this.photos.length == 0) {
        this.message = "Please Select an Image/s";
        this.error = true;
        this.snackbar = true;
      } else return true;
    },
    validateDate() {
      if (this.date == null) {
        this.message = "Please Choose Date and Time";
        this.error = true;
        this.snackbar = true;
      } else {
        return true;
      }
    },
    choose() {
      document.getElementById("myFileInput").click();
    },
    remove(key) {
      console.log(key);
      if (key > -1) {
        this.photos.splice(key, 1);
      }
      // this.photos.splice(key,1);
      this.message = "Image Removed from selection";
      this.error = false;
      this.snackbar = true;
    },
    async submit_product() {
        let loader = this.$loading.show({
                    loader: "spinner"
                });
      const data = new FormData();
      Object.keys(this.photos).forEach(key => data.append('images[' + key + ']',this.photos[key]));
      data.append("val", JSON.stringify(this.val));
      data.append("date_time", this.date);
        
      await this.axios.post("api/submit_product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(response=>{
          if(response.data.error == false){
                            this.message = "Product Added Successfully";
                            this.error = false;
                            this.snackbar = true; 
                            this.$router.push('/product_list')
                        }else{
                             this.message = "Product not Added";
                            this.error = true;
                            this.snackbar = true;   

                        }

      }

      );

      loader.hide();
    },
    selectFile(event) {
      if (
        this.photos.length + event.target.files.length > 10 ||
        event.target.files.length > 10
      ) {
        this.message = "Maximum 10 Images Only";
        this.error = true;
        this.snackbar = true;
        return false;
      }
      let tmpImg = event.target.files;
      for (let i = 0; i < tmpImg.length; i++) {
        this.photos.push(tmpImg[i]);
      }

      for (let x = 0; x < this.photos.length; x++) {
        let reader = new FileReader();
        reader.addEventListener(
          "load",
          function () {
            this.$refs.image[x].src = reader.result;
          }.bind(this),
          false
        ); 

        reader.readAsDataURL(this.photos[x]);
      }
    },
  },
};
</script>