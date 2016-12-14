'use strict';

function fancySchmancy(){
  $('#bacon').addClass('iAmFancy');
  return $('#bacon').html();
}

function addText(string){
  $('p:nth-child(2)').append(string);
  return $('p:nth-child(2)').html();
}

function showDolphin(){
  $("#hidden").show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}
function fadeIt(){
  $('#favorite-snacks').fadeIn(100);
}

function fadeItOut(){
  return $('p:nth-child(1)').fadeOut(0);
}

function findItByClass(type){
  return $(type).hasClass('flatironLink');
}

function formValue(){
  return $('input').last().val();

}
