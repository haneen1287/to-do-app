// let form=document.getElementsByClassName('form')[0]
let addBtn=document.getElementsByClassName('add')[0]
let input=document.getElementById('input')
let removeBtn=document.getElementsByClassName('deleteItem')
let listItem=document.getElementsByClassName('item')
let ul=document.getElementsByClassName('todos')[0]


//remove from list
for(let i=0;i<removeBtn.length;i++){
    removeBtn[i].addEventListener('click',removeFromList)
}

function removeFromList(event){
   let removeBtn=event.target
   removeBtn.parentElement.remove()
}


//linethrough list
for(let i=0;i<listItem.length;i++){
    listItem[i].addEventListener('click',finishList)
}

function finishList(event){
    let listItem=event.target
    listItem.style.textDecoration='line-through'
    listItem.style.opacity='0.5'
}

//add list item
addBtn.addEventListener('click',addToList)

function addToList(){
    let li=document.createElement('li')
    li.classList.add('todos')
    let content=`
    <li class="item"> <button class="deleteItem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></button>
${input.value}
</li>
    `
    li.innerHTML=content
    ul.appendChild(li)

    li.getElementsByClassName('deleteItem')[0].addEventListener('click',removeFromList)
    li.getElementsByClassName('item')[0].addEventListener('click',finishList)
}
    
    
    



const myForm = document.querySelector('#form');
myForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
});