let btn_send = document.querySelector('input#btn_enviar')
let tarefa = document.querySelector('input#tarefa')
let lista = document.querySelector('ul#lista')
let todo = []

btn_send.addEventListener('click', send)

function send() {
	if (tarefa.value == '') {
  	window.alert('[ERROR] - Digite alguma tarefa')
  } else {
  	todo.push(tarefa.value)
    lista.innerHTML += `<li><input type="checkbox" onclick="check()"> <a href="#" class="item">${todo}</a> <img src="https://image.flaticon.com/icons/png/512/401/401036.png" alt="Excluir" class="img_x"></li>`
  }
}

function check() {
	let input = document.querySelector('input')
  
  if(input.checked == true){
  	document.querySelector('a.item').style.textDecoration = 'line-through'
  } else {
  	document.querySelector('a.item').style.textDecoration = 'none'
  }
}