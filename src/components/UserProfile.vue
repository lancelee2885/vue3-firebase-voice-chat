<template>
  <div>
    Logged in as {{ user.uid }}
    <button @click="auth.signOut()">Sign Out</button>
  </div>
</template>
<script>
import { auth } from '../helper/firebase'
export default {
  //data() {
  //  return {
  //    auth,
  //  }
  //},
  //
  props: ['user'],
  setup() {
    return { auth, }
  }
}
</script>
<style lang="">
  
</style>