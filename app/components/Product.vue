<script src="http://localhost:8098"></script>
<template>
  <Page>
    <ActionBar title="Product">
      <NavigationButton text="Products"/>
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <FlexboxLayout>
        <Image :src="product.image.src" stretch="aspectFit" height="100" width="100"/>
        <Label :text="product.title" fontWeight="bold"/>
      </FlexboxLayout>
        <Label textWrap="true" textAlignment="center">
          <FormattedString>
            <Span text="Product Type: " />
            <Span :text="product.product_type" style="color: green" />
          </FormattedString>
        </Label>
        <Label text="Product Variants" fontWeight="bold" textAlignment="center" />
      <FlexboxLayout>
      </FlexboxLayout>
      <ListView for="variant in product.variants" separatorColor="black" rowHeight="50">
        <v-template>
          <StackLayout orientation="horizontal">
            <Label textWrap="true">
              <FormattedString>
                <Span text="Weight: " />
                <Span :text="variant.weight" style="color: green" />
                <Span text="  " />
                <Span :text="variant.weight_unit" />
              </FormattedString>
            </Label>
          </StackLayout>
        </v-template>
      </ListView>
    </FlexboxLayout>
  </Page>
</template>


<script>
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)


export default {
  props: { product: Object },
}
</script>


