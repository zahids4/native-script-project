<template>
  <Page>
    <ActionBar title="Products"/>
    <ListView for="product in products" @itemTap="productClicked" separatorColor="black" rowHeight="50">
      <v-template>
        <StackLayout orientation="horizontal">
          <Image :src="product.image.src" stretch="aspectFit" height="50"/>
          <StackLayout>
            <Label :text="product.title" fontWeight="bold"/>
            <Label :text="product.vendor"/>
          </StackLayout>
        </StackLayout>
      </v-template>
      <v-template if="$odd">
        <StackLayout orientation="horizontal" backgroundColor="#43b883">
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
import Product from './Product'

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
    productClicked(event) {
      console.log(event, "LAMPRD")
      this.$navigateTo(Product, {
        transition: {
          name: 'slideTop'
        },
        props: {
          product: event.item
        }
      });
    }
  }
}
</script>



