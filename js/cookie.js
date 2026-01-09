    document.addEventListener('DOMContentLoaded', function() {

        const cookieContainer = document.querySelector('.cookie-container')
        const btnCookie = document.querySelector('.btn-cookie')

        btnCookie.addEventListener('click', ()=>{
            cookieContainer.classList.add('invisible')
        })

    });