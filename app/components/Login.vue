<template>
	<Page>
		<ActionBar title="E-Data Now!"/>
		<FlexboxLayout flexDirection="column">
			<Label class="label" text="Username" />
			<TextField class="input input-border" keyboardType="email" textAlignment="center" v-model="username"/>
			<Label class="label input input-border" text="Password"/>
			<TextField class="input input-border" textAlignment="center" v-model="password" :secure="true"/>
			<Button text="Sign in" @tap="signInPressed"  :isEnabled="enableSignIn"/>
			<ActivityIndicator :busy="loading"/>
		</FlexboxLayout>
	</Page>
</template>

<script>
import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import ProductsList from './ProductsList'

Vue.use(VueDevtools)

export default {
	data() {
		return {
			username: '',
			password: '',
			loading: false
		}
	},
	computed: {
		enableSignIn() {
			return this.username != '' && this.password.length > 7
		}
	},
	methods: {
		signInPressed() {
			this.loading = true
			this.$navigateTo(ProductsList, {
				props: {
					title: `Welcome ${this.username}`
				}
			}).then(this.loading = false);
		}
	}
}
</script>

<style scoped>
	ActionBar {
		background-color: green;
		color: lightblue;
	}
	TextField {
		border-bottom-width: 0.5;
    border-color:green;
		width: 0.1;
	}
	.label {
		text-align: center;
	}
</style>


