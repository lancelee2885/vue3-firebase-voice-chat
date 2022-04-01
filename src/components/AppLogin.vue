<template>
	<aside>
		<h3>Sign in Anonumously</h3>
		<button @click="auth.signInAnonymously()">Sign In</button>
		<div v-if="newUser">
			<h3>Sign up for a New Account</h3>
			<a href="#" @click="newUser = false">Returning User?</a>
		</div>

		<div v-else>
			<h3>Sign in with Email</h3>
			<a href="#" @click="newUser = true">New User?</a>
		</div>

		<input v-model="email" placeholder="email" type="email" class="input" />
		<input v-model="password" type="password" placeholder="password" class="input" />
		<button
			class="button is-info"
			:class="{ 'is-loading': loading }"
			@click="signInOrCreateUser()"
		>{{ newUser ? 'Sign up' : 'Sign in' }}</button>
		<p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
	</aside>
</template>
<script>
import { auth } from "../helper/firebase";
import { ref } from "vue";

/**
 * 
 */
export default {
	setup() {
		const email = ref('');
		const password = ref('');
		const newUser = ref(false);
		const loading = ref(false);
		const errorMessage = ref('');

		async function signInOrCreateUser() {
			this.loading = true;
			this.errorMessage = '';

			try {
				if (this.newUser) {
					await auth.createUserWithEmailAndPassword(this.email, this.password)
				} else {
					await auth.signInWithEmailAndPassword(this.email, this.password)
				}
			} catch (err) {
				this.errorMessage = err?.message.split(':')[1].split('(')[0].trim();
				console.log(err.message);
			}

			this.loading = false;
		}

		return {
			newUser,
			auth,
			email,
			password,
			signInOrCreateUser,
			loading,
			errorMessage,
		}
	},

};
</script>