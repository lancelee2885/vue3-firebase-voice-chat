<template>
	<div>
		<h3>AppHome</h3>

		<UserPage>
			<template v-slot:user="{ user }">
				<div v-if="user"><UserProfile :user="user" /></div>
				<AppLogin v-else />
			</template>
		</UserPage>
	</div>
</template>
<script>
import AppLogin from "./AppLogin.vue";
import UserPage from "./UserPage.vue";
import UserProfile from "./UserProfile.vue";

export default {
	components: {
		AppLogin,
		UserPage,
		UserProfile,
	},
};
</script>
<style lang="">
</style>