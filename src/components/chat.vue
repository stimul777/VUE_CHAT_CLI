<template>
  <div id="app_chat">
    <div class="menu">
      <div class="back"><i class="fa fa-chevron-circle-left fa-lg" @click = 'GoBack'></i></div>
    </div>
  <div class="body_chat"></div>
  <div class="elements_conteiner" >
    <div class="button_add_file">
       <label class="button_add_file_label">
         <span class="button_add_file_title"><i class="fa fa-paperclip fa-2x" ></i></span>
         <input type="file" accept="image/*" id="button_add_img" @input = 'uploadImg'>
      </label>   
     </div> 
     <div class = "enter_message"><input type="text" id = 'send_message_input' @keyup.enter = "sendMessage" placeholder="Введите сообщение..." value=""/> </div>
      <div><img id="img_conteiner_box" src="#" /></div>
  </div>
  </div>
</template>

  <script>
  export default {
  el: '#app_chat',
  // data() {

  // },
  methods: {
    uploadImg() {
      this.file = document.querySelector('#button_add_img').files[0];
      this.previewImg = document.querySelector('#img_conteiner_box');
      this.reader = new FileReader();
      this.reader.onloadend = () => {
      this.previewImg.src = this.reader.result;
     }
      if (this.file) {
        this.reader.readAsDataURL(this.file);
        this.previewImg.style.display = "flex";
      } 
      else {
        this.previewImg.style.display = "none";
      }
    },

    sendMessage() {
    // отправка в чат текстовых сообщений
    this.input_mss = document.querySelector('#send_message_input').value;
    this.body_chat = document.querySelector('.body_chat');

    if(this.input_mss != '') {
      this.sendMessageTxt = document.createElement('p');
      this.sendMessageTxt.className = 'messageSendText';
      this.sendMessageTxt.innerHTML = this.input_mss;
      this.body_chat.append(this.sendMessageTxt);
      document.querySelector('#send_message_input').value = '';
    }

    // отправка картинки в  чат
    else if(this.file){
      this.messageSendImg = document.createElement('img');
      this.messageSendImg.className = 'messageSendBody';
      this.messageSendImg.src = this.previewImg.src;
      this.body_chat.append(this.messageSendImg.cloneNode(false));
      this.previewImg.style.display = "none";
      this.file = null;
    }
    else {
      // document.querySelector('.enter_message').style.border = '1ps solid red';
      console.log("НЕВАЛИДНО!");
         }
      },

    GoBack() {
        window.history.back()
      },
    }  
  }
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);
#app_chat {
  /* display: flex; */
  /* align-content: stretch ; */
  position:relative;
  width: auto;
  max-width: 1000px;
  height: 700px;
  border: 1px solid black;
  background-color:  rgba(147, 255, 147, 0.356);
}

/* Тело чата */
.body_chat {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: inherit;
  width: auto;
  height: 84%;
  border: 1px solid red;
  overflow-x: hidden;
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
    color: black;
    line-height: 50px;
    font-size: 30px;
    padding-left: 10px;
    cursor: pointer;
    background-color: rgb(147, 255, 147);
     border-radius: 10px;
} 

/* Ввод сообщений */
.elements_conteiner {
  display: flex;
  position:absolute; 
	bottom:0; 
  /* margin-top: auto;
  top: 200px; */
  width: 100%;
  /* border: 1px solid  black; */
 background-color: rgb(147, 255, 147);
 
}

#img_conteiner_box {
  display: none;
  width: 100px;
  height: 50px;
  border: 2px solid rgb(0, 173, 0);
  background-color: rgb(147, 255, 147);
  border-radius: 10px;
  filter: blur(1px);
}

.enter_message {
  width: 100%;
}

.messageSendBody {
  margin: 5px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: red;
}

.enter_message input {
    height: 100%;
    width: 100%;
    background: rgb(147, 255, 147);
    border: none;
    outline: none;
    color: #666;
    
}

/* Cообщения в чате*/
  .messageSendText {
    position: relative;
    margin-bottom: 10px;
    margin-left: calc(100% - 240px);
    margin-right: 20px;
    padding: 10px;
    background-color: #f8e896;
    width: 200px;
    height: 50px;
    text-align: left;
    font: 500 .9em 'Open Sans', sans-serif;
    border: 1px solid #dfd087;
    border-radius: 20px;
    
  }

  .messageSendText:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 15px solid #f8e896;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    bottom: 0;
    right: -15px;
}

.messageSendText:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 17px solid #dfd087;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    bottom: -1px;
    right: -17px;
}

/* кнопка добавить файл */
.button_add_file {
    /* bottom: 22px; */
    height: 100%;
    background-repeat: no-repeat;
    /* background-size: cover; */
    /* z-index: 100; */
    cursor: pointer;
    background-color: rgb(147, 255, 147);
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
  display: block;
  width: 10px;
  height: 10px;
  border: 2px dashed grey;
  border-radius: 15px;
  padding: 1.2em;
  transition: border 400ms ease;
  cursor: pointer;
  text-align: center;
  
}

.button_add_file .button_add_file_label:hover{
  border:2px solid #000
  }

.button_add_file .button_add_file_label .button_add_file_title i {
  width: 20px;
  
}
  
</style>
