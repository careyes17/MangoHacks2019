<template>
  <div id="webcam">
  <video ref="video" id="video" width="640" height="480" autoplay></video>
  </div>
</template>

<script>
export default {
  name: 'WebCam',
  data () {
    return {
      video: {},
      canvas: {},
      captures: []
    }
  },
  mounted () {
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        this.video.src = window.URL.createObjectURL(stream)
      })
    }
  }
}
</script>

<style>
#video {
background-color: #000000;
}

li {
display: inline;
padding: 5px;
}
</style>
