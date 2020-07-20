<template>
  <div id="app">
    <startScreen />
    <bodyChat />
    <!-- <toolBar /> -->
  </div>
</template>

<script>
import startScreen from './components/startScreen.vue'

// import adminPanel from './components/adminPanel.vue'
import bodyChat from './components/bodyChat.vue'


export default {
  name: 'app',
  components: {
    startScreen,
    // toolBar,
    // adminPanel,
    bodyChat,
  },
}
</script>
