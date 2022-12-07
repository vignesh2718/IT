let data=[]
function createlist()
{
    let array = ['HTML','CSS','REACT','JS','VUE'];
    let list = document.getElementById('arraylist');
    for(let l of array)
    {
        list.innerHTML += "<li>"+l+"</li>";
    }
}
const addItem=()=>{
    let item = document.getElementById("item");
    data.push(item.value)
    item.value=""
    showItems()
}
const remove=i=>{
    data.pop(i)
    showItems()
}
const showItems=()=>{
    let displaySection = document.getElementsByClassName("displaySection")[0];
    displaySection.innerHTML=``
    for(let i=0;i<data.length;i++){
        displaySection.innerHTML+=`<div class="items" id="${i}"><li>${data[i]}
        <button onClick="remove(${i})">Remove</button>
        </li></div>`
    }
}
