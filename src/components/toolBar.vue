<template>
    <section>
        <div class="toolBar">
            <div class="toolBar__el-menu">
                <i class="fa fa-chevron-circle-left fa-lg"> </i>
                <i class="fa fa-refresh" 
                    @click = 'Reload'
                ></i>
                <i class="fa fa-user fa-lg"
                    @click = 'adminPanel'
                ></i>
            </div>
        </div>

        <div class="messageBar">
            <div class="button_add_file">
                <label class="button_add_file_label">
                    <span class="button_add_file_title"><i class="fa fa-paperclip fa-2x" ></i></span>
                    <input type="file" accept="image/*" id="button_add_img"
                        @change="uploadImg"
                    >
                </label>   
            </div> 
            <div class = "enter_message">
                <input type="text" id = 'send_message_input' placeholder="Введите сообщение..."
                    @keyup.enter = "sendMessage" 
                    v-model = "messageText"
                 >
            </div>
            <img id="img_conteiner_box" src="#" >
        </div>
    </section>
</template>

<script >
    export default {
        data() {
           return {
                messageText: '',
                image: this.image,
           }
        },
        components: {

        },
        methods: {
             Reload() {
                location.reload();
            },

             sendMessage() {
                 console.log(this.messageText)
                },

             uploadImg(event) {
                 event.preventDefault();
                 this.image = event.target.files[0];
                 console.log( this.image);
                },

                adminPanel() {
                    this.StartScreenVisible = true
                    console.log(this.StartScreenVisible)
                },
            }
        }
</script>

<style lang="less" >

    /* Шапка  */
    .menu {
    width: 100%;
    height: 50px; 
    // background: rgba(82,179,217,0.9);
    z-index: 100;
    border-radius: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  
    }

    .toolBar__el-menu {
    display: flex;
    width: 150px;
    height: 50px;
    padding: 10px;
    left: 0px;
    color: black;
    line-height: 50px;
    font-size: 30px;
    padding-left: 10px;
    background-color: rgb(147, 255, 147);
    border-radius: 10px;

        .fa-refresh {
            padding-left: 15px;
            cursor: pointer;
        }

        .fa-lg {
            cursor: pointer;
        }

        .fa-user {
            padding-left: 15px;
        }

    } 

    

    /* Ввод сообщений */
    .messageBar {
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