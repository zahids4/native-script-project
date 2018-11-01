<template>
	<Page>
		<ActionBar title="E-Data Now!"/>
		<FlexboxLayout flexDirection="column" justifyContent="center">
			<Label text="Welcome!" fontSize="24" fontWeight="bold" textAlignment="center" style="color: green"/>
			<Label class="label" text="Username" />
			<TextField class="input input-border" keyboardType="email" textAlignment="center" v-model="username"/>
			<Label class="label input input-border" text="Password"/>
			<TextField class="input input-border" textAlignment="center" v-model="password" :secure="true"/>
			<Button text="Sign in" @tap="signInPressed"  :isEnabled="enableSignIn"/>
			<FlexboxLayout justifyContent="center">
				<Label class="label" text="Stay signed in" />
				<Switch />
			</FlexboxLayout>
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
			if (this.username == 'User') {
				alert({
					title: "Error logging in",
					message: "Incorrent username or password",
					okButtonText: "Try again"
				})
				this.loading = false
			} else {
				this.$navigateTo(ProductsList, {
					props: {
						title: `Welcome ${this.username}`
					}
				}).then(() => {
					this.loading = false
					this.password = ''
				});
			}
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
		margin-bottom: 1rem;
    border-color:green;
		width: 0.1;
	}
	.label {
		text-align: center;
		margin-bottom: 1rem;
	}
	Switch {
		margin-left: 6rem;
	}
</style>


