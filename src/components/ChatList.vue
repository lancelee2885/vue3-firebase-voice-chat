<template lang="">
  <div>
    <ul>
      <li v-for="chat of chats" :key="chat.uid">
        {{chat.id}}
      </li>
    </ul>
    <button @click="createChatRoom()">Create A Chat Room</button>
  </div>
</template>
<script>
import { db } from '../helper/firebase';
export default {
  props: {
    uid: String,
  },
  async setup(props) {
    const ref = await db.collection('chats').where('owner', '==', props.uid).get();
    const chats = ref.docs.map((d) => {
      return {
        id: d.id,
        ...d.data(),
      }
    });
    console.log(chats);
    async function createChatRoom() {
      const ref = db.collection('chats');
      await ref.add({
        createdAt: Date.now(),
        owner: props.uid,
        members: [props.uid],
      })
    }
    return {
      createChatRoom,
      chats,
    }
  },

}
</script>
<style lang="">
  
</style>