const botaoBar = document.getElementById('botaoBar')
const corpoBar = document.getElementById('corpoBar')
corpoBar.style.display = 'none'
     
botaoBar.addEventListener('click', () => {
    if(corpoBar.style.display == 'none')  {
        corpoBar.style.display = 'block'
    } else {
        corpoBar.style.display = 'none'
    }
})