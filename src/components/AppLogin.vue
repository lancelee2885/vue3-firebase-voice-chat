<template>
	<aside>
		<h3>Sign in Anonumously</h3>
		<button @click="auth.signInAnonymously()">Sign In</button>

		<input v-model="email" placeholder="email" type="email" class="input" />
		{{ email }}
		<input v-model="password" type="password" placeholder="password" class="input" />
		{{ password }}
	</aside>
</template>
<script>
import { auth } from "../helper/firebase";
import { ref } from "vue";

/**
 * 
 */
export default {
	// data() {
	//		return {
	//			auth,
	//		};
	//	},
	setup() {
		const email = ref('');
		const password = ref('');
		return {
			auth,
			email,
			password,
		}
	}
};
</script>