<template>
	<div id="app">
		<header>
			<h1>Vue Voxer</h1>
			<p>Realtime Voice Chat</p>
		</header>

		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { auth } from "./helper/firebase";

console.log(auth);

@Options({
	components: {},
})
export default class App extends Vue {}
</script>

<style lang='scss'>
</style>
