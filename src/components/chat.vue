<template>
  <div id="app_chat">
    <div class="menu">
      <div class="el_menu">
        <i class="fa fa-chevron-circle-left fa-lg" @click = 'GoBack'></i>
        <i class="fa fa-refresh" @click = 'Reload'></i>
      </div>
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
     <img id="img_conteiner_box" src="#" />
  </div>
  </div>
</template>

  <script>
  export default {
    methods: {
     uploadImg() {
      // подгружаем картинку в предпросмотр
      this.file = document.querySelector('#button_add_img').files[0];
      this.previewImg = document.querySelector('#img_conteiner_box');
      this.reader = new FileReader();
      this.reader.onloadend = () => {
      this.previewImg.src = this.reader.result;
     }

      if(this.file) {
        this.reader.readAsDataURL(this.file);
        this.previewImg.style.display = "flex";
      } 
    },

    sendMessage() {
      // отправка в чат текстовых сообщений
      this.send_message_input = document.querySelector('#send_message_input');
      this.input_mss = this.send_message_input.value;
      this.body_chat = document.querySelector('.body_chat');
      this.input_mss.value;

      if(this.input_mss != '') {
        this.send_message_input.style.border = '2px solid green';
        this.sendMessageTxt = document.createElement('p');
        this.sendMessageTxt.className = 'messageSendText';
        this.sendMessageTxt.innerHTML = this.input_mss;
        this.body_chat.prepend(this.sendMessageTxt);
        this.send_message_input.value = '';

        // вставка текущего времени в сообщения 
        this.Data = new Date();
        this.Hour = this.Data.getHours();
        this.Minutes = this.Data.getMinutes();
        this.Seconds = this.Data.getSeconds();
        this.sendMsgTxtDate = document.createElement('p');
        this.sendMsgTxtDate.className = 'message_timestamp_right';
        this.sendMsgTxtDate.innerHTML = "Отправлено: "+this.Hour+":"+this.Minutes+":"+this.Seconds;
        this.sendMessageTxt.append(this.sendMsgTxtDate);
      }

      // отправка картинки в  чат
      else if(this.file){
        this.send_message_input.style.border = '2px solid green';
        this.messageSendImg = document.createElement('img');
        this.messageSendImg.className = 'messageSendImg';
        this.messageSendImg.src = this.previewImg.src;
        this.body_chat.prepend(this.messageSendImg.cloneNode(false));
        this.previewImg.style.display = 'none';
        this.file = null;
      }

      // валидация
      else {
        this.send_message_input.style.border = '2px solid red';
          }
        },
    GoBack() {
        window.history.back();
      },
    Reload() {
        location.reload();
      },
    }  
  }
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

#app_chat {
  margin: 0 auto;
  position:relative;
  width: auto;
  height: 95vh;
  max-width: 1000px;
  background-color:  rgba(147, 255, 147, 0.356);
  border-radius: 20px;
}

/* Тело чата */
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

/* Шапка  */
.menu {
  width: 100%;
  height: 50px; 
  background: rgba(82,179,217,0.9);
  z-index: 100;
  border-radius: 20px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

 .el_menu {
  position: absolute; 
  width: 90px;
  height: 50px;
  top: 0px;
  left: 0px;
  color: black;
  line-height: 50px;
  font-size: 30px;
  padding-left: 10px;
  background-color: rgb(147, 255, 147);
  border-radius: 10px;
} 

.el_menu .fa-refresh {
  padding-left: 15px;
  cursor: pointer;
}

.el_menu .fa-lg {
  cursor: pointer;
}

/* Ввод сообщений */
.elements_conteiner {
  display: flex;
  position:absolute; 
	bottom:0; 
  width: 100%;
  background-color: rgb(147, 255, 147);
  border-radius: 20px;
}

#img_conteiner_box {
  display: none;
  width: 100px;
  height: 50px;
  border: 2px solid rgb(0, 173, 0);
  background-color: rgb(147, 255, 147);
  border-radius: 10px;
  filter: blur(0.5px);
}

.enter_message {
  width: 100%;
}

.messageSendImg {
  padding-right: 20px;
  padding-bottom: 20px;
  width: 200px;
  height: 150px;
}

.enter_message input {
    height: 100%;
    width: 100%;
    background: rgb(147, 255, 147);
    border: none;
    outline: none;
    color: #666;
}

#send_message_input {
 border-radius: 10px;
 text-indent: 50px;
 height: 90%;
}

/* Cообщения в теле чата*/
.messageSendText {
    display: flex;
    flex-wrap: wrap;
    word-wrap: inherit;
    position: relative;
    width: 200px;
    height: auto;
    margin-bottom: 15px;
    margin-left: calc(100% - 240px);
    margin-right: 30px;
    padding: 20px;
    background-color: #f8e896;
    text-align: left;
    font: 500 .9em 'Open Sans', sans-serif;
    border: 1px solid #ccb856;
    border-radius: 20px;
  }

.message_timestamp_right {
    position: absolute;
    margin: 4px;
    color: rgba(131, 131, 131, 0.521);
    font-size: 10px;
    bottom: 1px;
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
  height: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  background-color: rgb(147, 255, 147);
  border-radius: 20px;
}

.button_add_file:active {
  opacity: 0.9;
}

.button_add_file input[type=file]{
  outline: 0; opacity:0; pointer-events: none; user-select:none;
}

.button_add_file .button_add_file_label{
  display: block;
  width: 50px;
  height: 50px;
  border: 2px dashed grey;
  border-radius: 15px;
  transition: border 400ms ease;
  cursor: pointer;
}

.button_add_file .button_add_file_label:hover{
  border:2px solid #000;
  }

.button_add_file .button_add_file_label .button_add_file_title i {
  padding: 12px;
  width: 20px;
  color: black;
  padding: -10px;
}

</style>
