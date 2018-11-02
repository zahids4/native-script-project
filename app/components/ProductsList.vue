<script src="http://localhost:8098"></script>
<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Log Out"/>
    </ActionBar>
    <StackLayout>
      <Label class="label" text="Products" fontSize="22" fontWeight="bold" textAlignment="center" />
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
    </StackLayout>
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
  props: {
    title: String
  },
  mounted() {
    axios.get(shopifyApiUrl).then(({data}) => {
      this.products = data.products
    })
  },
  methods: {
    productClicked(event) {
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


<style scoped>
	.label {
    margin-top: 2rem;
    margin-bottom: 2rem;
		border-bottom-width: 0.5;
    border-color:black;
	}
</style>



