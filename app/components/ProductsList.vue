<template>
  <Page>
    <ActionBar title="Detail"/>
    <ListView for="product in products" @itemTap="productClicked" rowHeight="50">
      <v-template>
        <StackLayout orientation="horizontal">
          <Image :src="product.image.src" stretch="aspectFit" height="50"/>
          <StackLayout>
            <Label :text="product.title" fontWeight="bold"/>
            <Label :text="product.vendor"/>
          </StackLayout>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>


<script>
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)

const axios = require('axios')
const shopifyApiUrl = 'https://shopicruit.myshopify.com/admin/products.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6'

export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get(shopifyApiUrl).then(({data}) => {
      this.products = data.products
    })
  },
  methods: {
    productClicked() {

    }
  }
}
</script>

