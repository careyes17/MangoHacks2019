<template>
  <div>
    <web-cam></web-cam>
    <message-list></message-list>
  </div>
</template>

<script lang="ts">
import MessageList from '@/components/MessageList.vue'
import WebCam from '@/components/WebCam.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    MessageList,
    WebCam
  }
})
</script>

<style lang="scss">

</style>
