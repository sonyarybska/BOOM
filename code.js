//Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
/*
let btn=document.createElement('button');
let text=document.createElement('textarea');
let divka=document.createElement('div');
document.body.appendChild(text);
document.body.appendChild(divka);
divka.appendChild(btn);

btn.innerHTML='Click';
btn.style.height='30px'

btn.onclick=()=>{
    localStorage.setItem('key',text.value);

}
text.innerHTML=localStorage.getItem('key');
*/

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
/*
let forma = document.forms.myForm;

for (const item of forma) {
    forma.oninput = ({target: {type, name, value, checked, id}}) => {
        if (type === 'radio') {
            localStorage.setItem(name, id)
        } else if (type === 'checkbox') {
            localStorage.setItem(name, checked)
        } else {
            localStorage.setItem(name, value)
        }
    }



    if (item.type === "radio") {
        let value = localStorage.getItem(item.name)
        if (item.id === value) {
            item.checked = true;
        }
    } else if (item.type === "checkbox") {
        let bool = localStorage.getItem(item.name)
        item.checked = bool === 'true';

    } else {
        item.value = localStorage.getItem(item.name)
    }
}
 */
//Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

/*
let area = document.querySelector('#area');
let btn=document.querySelector('#btn');
let forward=document.querySelector('#frw');
let back=document.querySelector('#back');
let array=[];
let index=0;
if(!localStorage.getItem('input')){
    localStorage.setItem('input',JSON.stringify(array));
}


 btn.onclick=()=>{
     let text=area.value;
     let mas=JSON.parse(localStorage.getItem('input'))
     mas.push(text);
     localStorage.setItem('input',JSON.stringify(mas));
 }

forward.onclick=()=>{
    let mas=JSON.parse(localStorage.getItem('input'));
    if(index+1<mas.length){
        index++
    }
    else {
        index=0
    }
    area.value=mas[index];
}

back.onclick=()=>{
    let mas=JSON.parse(localStorage.getItem('input'));
    if(index-1>=0){
        index--
    }
    else{
        index=mas.length-1;
    }
    area.value=mas[index];
}
*/

//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


let forma=document.getElementById('myForm');
let save=document.getElementById('save');
let forward=document.querySelector('#frw');
let back=document.querySelector('#back');
let index=0;
if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify([]));
}else{
    let items=JSON.parse(localStorage.getItem('users'));
   index=items.length-1;

}

save.onclick=(e)=>{
    e.preventDefault();
    const obj={};
    for (const item of forma) {
       obj[item.name]=item.value;
    }

    let mas=JSON.parse(localStorage.getItem('users'));
    mas.push(obj);
    localStorage.setItem('users',JSON.stringify(mas));
}
const filldate=(obj)=>{
    for (const item of forma) {
        item.value=obj[item.name]
    }
}

forward.onclick=()=>{
    let mas=JSON.parse(localStorage.getItem('users'));
    if(index+1<mas.length){
        index++
    }
    else {
        index=0
    }
    const obj=mas[index];
    filldate(obj);
}

back.onclick=()=>{
    let mas=JSON.parse(localStorage.getItem('users'));
    if(index-1>=0){
        index--
    }
    else{
        index=mas.length-1;
    }
   const obj=mas[index];
    filldate(obj);
}




