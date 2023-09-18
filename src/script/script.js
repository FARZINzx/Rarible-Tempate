document.querySelector('.less-btn').addEventListener('click',()=>{
     document.querySelector('.less-text').style.display = "none"
     document.querySelector('.more-text').style.display = "block"
})

document.querySelector('.more-btn').addEventListener('click',()=>{
     document.querySelector('.less-text').style.display = "block"
     document.querySelector('.more-text').style.display = "none"
})