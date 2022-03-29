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
		{{ email }}
		<input v-model="password" type="password" placeholder="password" class="input" />

		{{ password }}
		<button>{{ newUser ? 'Sign up' : 'Sign in' }}</button>
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
		return {
			newUser,
			auth,
			email,
			password,
		}
	}
};
</script>