$(document).ready(function(){
  $("#enviar_email").click(function(){
    var email = $("#input2").val();
    var mensagem = $("#input4").val();

    if (email != "" && mensagem != "") {
       alert("Seu email foi enviado com sucesso! Em breve estarei entrando em contato com você.");
       $("#input1").val(""); 
       $("#input2").val(""); 
       $("#input3").val(""); 
       $("#input4").val("");
     } else {
      alert("Por favor, preencha no mínimo o campo 'Email' e o campo 'Mensagem' !");
    }
  });

  $("#akins").mouseenter(function(){
    $(this).animate({
      opacity: 0.6
    });
  });

  $("#akins").mouseleave(function(){
    $(this).animate({
      opacity: 1
    });
  });

  $("#kunst").mouseenter(function(){
    $(this).animate({
      opacity: 0.6
    });
  });

  $("#kunst").mouseleave(function(){
    $(this).animate({
      opacity: 1
    });
  });

  $("#joanne").mouseenter(function(){
    $(this).animate({
      opacity: 0.6
    });
  });

  $("#joanne").mouseleave(function(){
    $(this).animate({
      opacity: 1
    });
  });

  $("#input1").focusin(function(){
    $(this).css({"background-color":"#fff" ,  "color": "#000", "border":  "2px solid black"});
  });
  $("#input1").focusout(function(){
    $(this).css({"background-color":"#000" ,  "color": "#fff"});
  });

  $("#input2").focusin(function(){
    $(this).css({"background-color":"#fff" ,  "color": "#000", "border":  "2px solid black"});
  });
  $("#input2").focusout(function(){
    $(this).css({"background-color":"#000" ,  "color": "#fff"});
  });

  $("#input3").focusin(function(){
    $(this).css({"background-color":"#fff" ,  "color": "#000", "border":  "2px solid black"});
  });
  $("#input3").focusout(function(){
    $(this).css({"background-color":"#000" ,  "color": "#fff"});
  });

  $("#input4").focusin(function(){
    $(this).css({"background-color":"#fff" ,  "color": "#000", "border":  "2px solid black"});
  });
  $("#input4").focusout(function(){
    $(this).css({"background-color":"#000" ,  "color": "#fff"});
  });
});