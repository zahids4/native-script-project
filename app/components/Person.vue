<script src="http://localhost:8098"></script>
<template>
  <Page>
    <ActionBar class="action-bar" title="Person" />
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="form" row="0" col="0">
        <StackLayout class="input-field">
          <Label text="First Name" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.firstname" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
          <Label text="Last Name" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.lastname" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <GridLayout rows="auto, auto" columns="*, *">
          <Button text="Save" @tap="save" class="btn btn-primary" row="0" col="0" />
          <Button text="Load" @tap="load" class="btn btn-primary" row="0" col="1"  />
          <Button text="Clear" @tap="clear" class="btn btn-primary" row="1" col="0" colSpan="2"  />
        </GridLayout>
      </StackLayout>
      <ListView for="person in $store.state.data" class="list-group" row="1" col="0">
        <v-template>
          <StackLayout class="list-group-item">
              <Label v-bind:text="person.firstname + ' ' + person.lastname" />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>


<script>
import { mapFields } from 'vuex-map-fields';
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      input: {
        firstname: "",
        lastname: ""
      }
    }
  },
  computed: mapFields([
		'database'
	]),
  methods: {
    ...mapActions([
      'insert',
      'query'
    ]),
    save() {
      this.insert(this.input)
    },
    load() {
      this.query()
    },
    clear() {
      this.input.firstname = "";
      this.input.lastname = "";
    }
  }
};
</script>