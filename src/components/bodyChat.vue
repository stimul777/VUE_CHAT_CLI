<template>
  <div id="app_chat">
    <toolBar />
    ХХ
  </div>
</template>

<script>
  import toolBar from '../components/toolBar.vue'

  export default {
    name: 'bodyChat',
    components: {
      // startScreen,
      toolBar,
      // adminPanel,
      // bodyChat,
    },
  }
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

/* Тело чата */
#app_chat {
  margin: 0 auto;
  position:relative;
  width: auto;
  height: 95vh;
  max-width: 1000px;
  background-color:  rgba(147, 255, 147, 0.356);
  border-radius: 20px;
}

.body_chat {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  width: auto;
  height: 84%;
  overflow-x: auto;

}

/* кастомный скролл */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

</style>
