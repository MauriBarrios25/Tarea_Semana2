


//ocultar o mostrar los divs que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list')

//constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton');//Button

//eliminar el ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');
//eliminar el item seleccionado
const removeItem = document.querySelector('button#removeItem')

var contador = 0
//mostrar y ocultar lista
hide.addEventListener('click', () => {

    if(listDiv.style.display =='none'){
        listDiv.style.display= 'block';
        hide.textContent = '';
    }else{
        listDiv.style.display = 'none';
        hide.textContent = ''
    }
});




//agregar elementos a la lista
addItemButton.addEventListener('click', ()=>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    let input = document.createElement("input")

    
    li.textContent = addItemInput.value;

    input.type = "radio"
    input.id = "cheque"
    
    list.appendChild(li); //agregar elemento a la lista
    li.appendChild(input);
    addItemInput.value="";

    

});



//elimiar ultimo elemento de la lista
removeItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li)
});


//eliminar elemento seleccionado
removeItem.addEventListener('click',() => {
    
   
    let elementos = document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {

        let boton = elementos[i].querySelector("#cheque")

        if(boton.checked == true){
            elementos[i].remove(self)
        }
    }
    
        
    
});


let datos={
    encabezado:"<h1>INTEGRANTE </h1>",
    nombre:"<b>Mauricio Enmanuel Montiel Ruiz Codigo: SMIS952220</b>",
    nombreh2:"<h2><i>Mauricio Enmanuel Montiel Ruiz Codigo: SMIS952220</i></h2>",
    peliculas:[
        {text:'Spider-Man: No Way Home',year:"2021",checked: false},
        {text:'Dragon Ball Super: Broly',year:"2018",checked: false},
        {text:'La era del hielo: choque de mundos',year:"2016",checked: false},
        {text:'Guasón',year:"2019",checked: false}]
}
new Vue({
    el:'#principal',
    data:datos,

    
})




