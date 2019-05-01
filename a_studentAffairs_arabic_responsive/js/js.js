$(document).ready(function(){
var chatBotUIcontroller=function(){
    //hanndle put message from user or robot
    //handle pop up,down of the bot body 
    //max num of messages are 25
    var messagesNum=0,popedUp=false;
    var DOMelements={
        botBody:"#chatBox .boxBody",
        textArea:"#chatBox textarea",
        send:"#chatBox .fa-chevron-circle-up",
        minus:"#chatBox .fa-minus",
        plus:"#chatBox .fa-plus",
        chatBox:"#chatBox",
        botHeader:"#chatBox  .boxHeader",
        botFooter:"#chatBox .boxFooter"
    };

    //clears the first 10 messages from the bot Body
    function clearSomeMessages(){
        for(var i=0;i<10;i++){
            $(DOMelements.botBody+" div:first-child").remove();
        }
        messagesNum=0;
    }
    //append message to the body of the char
    //type is : user or robot
    function appendMessage(message,type){
        var htmlString;
        if(type==="user"){
            htmlString='<div class="msg col-9 you">%msg%</div>';
            messagesNum++;
        }else if(type==="robot"){
            htmlString='<div class="msg col-9 other">%msg%</div>';
            messagesNum++;
        }
        var botBody=$(DOMelements.botBody);
        htmlString=htmlString.replace("%msg%",message);
        botBody.append(htmlString);
        botBody.scrollTop($(DOMelements.botBody)[0].scrollHeight);
        if(messagesNum>25){
            clearSomeMessages();
        }
    }

    function sendUserMessage(){
        var msg=$(DOMelements.textArea).val();
        if(!/^\s+$/.test(msg)){
            console.log(msg);
            appendMessage(msg,"user");
            $(DOMelements.textArea).val("");
        }
    }
    function popDown(){
        $(DOMelements.botBody).hide("fast");
        $(DOMelements.botFooter).hide("fast");
        $(DOMelements.minus).hide();
        $(DOMelements.plus).show();
        popedUp=false;        

    }
    function popUP(){
        if(popedUp===false){
            $(DOMelements.botBody).show("fast");
            $(DOMelements.botFooter).show("fast");
            $(DOMelements.plus).hide();
            $(DOMelements.minus).show();
            popedUp=true;  
            console.log("in pop up");
        }      
    }
    function SetUpEventListners(){
        $(DOMelements.send).click(sendUserMessage);
        $('body').on('keydown', function(e) {
            if(e.keyCode===13||e.which === 13 ) {
                sendUserMessage();
              }
        });
        $(DOMelements.minus).click(popDown);
        $(DOMelements.plus).click(popUP);


    }
    SetUpEventListners();
    popDown();

    return {
        
        appendMessage:appendMessage,
        popUp:popUP
    }
};
chatBotUIcontroller=chatBotUIcontroller();
$(".head i").click(function(){
    chatBotUIcontroller.popUp();
});
});
