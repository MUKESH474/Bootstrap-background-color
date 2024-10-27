var colors=['pink','red','blue','green','yellow','violet','orange']
var len=colors.length-1;
var buttoncontrol=document.getElementById('btn')
var spancontrol=document.querySelector('.color')


buttoncontrol.addEventListener('click',()=>{
    var index=generatecolor();
    document.body.style.backgroundColor=colors[index]
    spancontrol.textContent=colors[index]
})

function generatecolor(){
    return Math.round(Math.random()*len)
}