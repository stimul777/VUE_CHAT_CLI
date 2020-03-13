<template>
  <div id="app_chat">
    <div class="menu">
      <div class="back"> <img src="" draggable="false" /></div>
    </div>
  <div class="body_chat"></div>
  <div class="elements_conteiner" >
    <div class="button_add_file">
       <label class="button_add_file_label">
         <span class="button_add_file_title">+</span>
         <input type="file" accept="image/*" id="button_add_img" @input = 'uploadImg'>
      </label>   
     </div> 
     <div class="enter_message"><input type="text" id = 'send_message_input' @keyup.enter = "sendMessage" placeholder="Введите сообщение..." value=""/> </div>
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
     this.previewImg = false;
     this.reader = '';
     this.file = '';
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
    console.log(this.input_mss);
    this.sendMessageTxt = document.createElement('p');
    this.sendMessageTxt.className = 'messageSendText';
    this.sendMessageTxt.innerHTML = this.input_mss;

    console.log(this.sendMessageTxt);
    document.querySelector('.body_chat').append(this.sendMessageTxt);
    document.querySelector('#send_message_input').value = ' ';

    // отправка картинки в  чат
    if(this.file){
    let messageSendBody = document.createElement('img');
    messageSendBody.className = 'messageSendBody';
    messageSendBody = this.previewImg;
    // messageSendBody.cloneNode(true);
    document.querySelector('.body_chat').append(messageSendBody.cloneNode(true));
    // messageSendBody.remove();
    // this.previewImg = '';
    // document.querySelector('.body_chat').cloneNode(messageSendBody);
        }
      }
    }  
  }
  
</script>


<style>
#app_chat {
  /* display: flex; */
  /* align-content: stretch ; */
  
  position:relative;
  width: auto;
  max-width: 1000px;
  height: 700px;
  border: 1px solid black;
}

/* Тело чата */
.body_chat {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
  width: auto;
  height: 84%;
  border: 1px solid red;
}

/* сообщения */
  .messageSendText {
    display: flex;
    width: 60px;
    height: 20px;
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
  /* border: 1px solid  black; */
 background-color: rgb(147, 255, 147);
}

#img_conteiner_box {
  display: none;
  width: 100px;
  height: 50px;
  border: 1px solid red;
  background-color: rgb(80, 78, 78);
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

.button_add_file {
    bottom: 22px;
    background-image: url(https://fonts.googleapis.com/icon?family=Material+Icons); 
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
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

.button_add_file .button_add_file_label:hover{
  border:2px solid #000
  }
  
</style>
