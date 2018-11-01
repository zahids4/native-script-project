<template>
	<Page>
		<ActionBar>
			<Image src="~/assets/images/edata_logo.png" width="300" height="34" verticalAlignment="center" />
		</ActionBar>
		<FlexboxLayout flexDirection="column" justifyContent="center">
			<Label text="Welcome!" fontSize="24" fontWeight="bold" textAlignment="center"/>
			<Label class="label" text="Username" />
			<TextField class="input input-border" keyboardType="email" v-model="username"/>
			<Label class="label input input-border" text="Password"/>
			<TextField class="input input-border" v-model="password" :secure="true"/>
			<Button class="btn btn-primary btn-active" text="Sign in" @tap="signInPressed"  :isEnabled="enableSignIn"/>
			<FlexboxLayout justifyContent="center">
				<Label class="label" text="Remember Me" />
				<Switch v-model="persistCredentials"/>
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
			persistCredentials: false,
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
					if (this.persistCredentials == false) {
						this.username = ''
						this.password = ''
					}
				});
			}
		}
	}
}
</script>

<style scoped>
	ActionBar {
		background-color: white;
		color: lightblue;
	}
	TextField {
		border-width: 0.5;
		margin-bottom: 1rem;
    border-color:green;
		width: 0.1;
		margin-left: 10rem;
		margin-right: 10rem;
	}
	.label {
		margin-left: 10rem;
		text-align: left;
		margin-bottom: 1rem;
	}
	Label {
    color:green;
	}
	Switch {
		margin-left: 6rem;
	}
</style>


