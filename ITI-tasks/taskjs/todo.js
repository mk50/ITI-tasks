
    var content=document.getElementById("container");
    var btn=document.getElementById("btn");
var data=[
    {id:1,name:"product1",dec:"bla bla"},
    {id:2,name:"product2",dec:"bla bla"},
    {id:3,name:"product3",dec:"bla bla"},
    {id:4,name:"product4",dec:"bla bla"},
]
function drawdate(item){
    content.innerHTML="";
    item.forEach(function(elem){
        content.innerHTML+=`<div onclick="deleteelem(${elem.id})">${elem.name}</div>`

    })
}
drawdate(data)
btn.addEventListener('click',additem);
function additem(){
    
    var inputadditem=document.getElementById("input_pr");
    if(inputadditem.value =="")alert("please add item");
    var lastid=data.length? data[data.length -1].id:0;
    data.push({id:++lastid, name:inputadditem.value,dec:"bla bla bla"})
    var lastitemadd=data[data.length -1];
    content.innerHTML +=`<div onclick="deleteelem(${lastitemadd.id})">${lastitemadd.name}</div>`
    inputadditem.value="";
}
function deleteelem(id){
var index=data.map(function(i){
return i.id;
}).indexOf(id)
if(index !==-1){
    data.splice(index,1);
    drawdate(data);
}
}




