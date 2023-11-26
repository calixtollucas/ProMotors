    const imgFinanc = document.querySelector('img#imgFinanc');
    imgFinanc.src = localStorage.getItem('selectedCar')

    document.getElementById('formFinanc').addEventListener('submit',(e)=>{
        e.preventDefault()
        window.location.href = 'agradece.html'
    })
