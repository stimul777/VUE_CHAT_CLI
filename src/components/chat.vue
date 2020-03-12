<template>
  <div id="app_chat">
    <div class="menu">
      <div class="back"> <img src="" draggable="false" /></div>
    </div>
 

  
 <!-- <div><button v-on:click = 'sendImg'>Send</button></div> -->

  <div class="elements_conteiner" >
    <div class="button_add_file">
       <label class="button_add_file_label">
         <span class="button_add_file_title">+</span>
         <input type="file" accept="image/*" id="button_add_img" @input = 'uploadImg'>
      </label>   
     </div> 
     <div class="enter_message"><input  type="text" placeholder="Введите сообщение..."/> </div>
      <div><img id="img_conteiner_box" src="#" /></div>
  </div>

 

  </div>
</template>

  <script>
  export default {
  name: '#app_chat',
  data() {
      return {
      }
  },

  methods: {

    uploadImg() {
      const file = document.querySelector('#button_add_img').files[0];
      const previewImg = document.querySelector('#img_conteiner_box');
      const reader = new FileReader();
      
       reader.onloadend = function () {
       previewImg.src = reader.result;
     }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        previewImg.src = "";
      }
    },

    sendImg(previewImg) {
      let xhr = new XMLHttpRequest();
      // отслеживаем процесс отправки
      xhr.upload.onprogress = function(event) {
      console.log(`Отправлено ${event.loaded} из ${event.total}`);
     };

    // Ждём завершения: неважно, успешного или нет
    xhr.onloadend = function() {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };

  xhr.open("POST", "/article/xmlhttprequest/post/upload");
  xhr.send(previewImg);
      }
    }  
  }

</script>


<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Lato:100,300,400,700);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css); */


#app_chat {
  /* display: flex; */
  /* align-content: stretch ; */
  position:relative;
  width: auto;
  max-width: 1000px;
  height: 700px;
  border: 1px solid black;
}

/* Шапка  */
.menu {
    /* position: fixed; */
    /* top: 0px; */
    /* left: 0px; */
    /* right: 0px; */
    width: 100%;
    height: 50px; 
    background: rgba(82,179,217,0.9);
    z-index: 100;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

 .back {
    position: absolute; 
    width: 90px;
    height: 50px;
    top: 0px;
    left: 0px;
    color: #fff;
    line-height: 50px;
    font-size: 30px;
    padding-left: 10px;
    cursor: pointer;
    background-color: rgb(65, 189, 71);
} 

.back img {
    position: absolute;
    top: 5px;
    left: 30px;
    width: 40px;
    height: 40px;
    background-color: rgba(255,255,255,0.98);
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    margin-left: 15px;
    }

.back:active {
    background: rgba(255,255,255,0.2);
}


/* Ввод сообщений, кнопка прикрепление файла */
.elements_conteiner {
  display: flex;
  position:absolute; 
	bottom:0; 
  /* margin-top: auto;
  top: 200px; */
  width: 100%;
  border: 2px solid  black;
}

#img_conteiner_box {
  /* display: flex; */
  width: 100px;
  height: 50px;
  border: 1px solid red;
  background-color: rgb(80, 78, 78);
}

.enter_message {
  width: 100%;
}

.enter_message input {
    height: 100%;
    width: 100%;
    background: hsl(125, 57%, 64%);
    border: none;
    outline: none;
    color: #666;
}

.button_add_file {
    /* position: fixed;
    display: block; */
    bottom: 22px;
    /* left: 1px; */
    /* width: 30px;
    height: 30px; */
    /* background-image: url(https://fonts.googleapis.com/icon?family=Material+Icons); */
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
    cursor: pointer;
}

.button_add_file:active {
    opacity: 0.9;
}

.button_add_file .button_add_file_form-group{
  padding: 1em; margin:1em
}

.button_add_file input[type=file]{
  outline: 0; opacity:0; pointer-events: none; user-select:none;
}

.button_add_file .button_add_file_label{
  width: 10px;
  height: 10px;
  border: 2px dashed grey;
  border-radius: 5px;
  display: block;
  padding: 1.2em;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
}

/* .button_add_file .button_add_file_label i{
  display:block;font-size:42px;padding-bottom:16px
  } */

/* .button_add_file .button_add_file_label i,.button_add_file .button_add_file_label .button_add_file_title{
  color:grey;transition:200ms color
  } */

.button_add_file .button_add_file_label:hover{
  border:2px solid #000
  }
  
/* .button_add_file .button_add_file_label:hover i,.button_add_file .button_add_file_label:hover .button_add_file_title{color:#000} */
</style>
