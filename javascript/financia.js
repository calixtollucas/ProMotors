    const imgFinanc = document.querySelector('img#imgFinanc');
    //altera o src da imagem para o caminho guardado anteriormente no localStorage
    imgFinanc.src = localStorage.getItem('selectedCar')

    //muda a tela para agradece.html quando o evento submit é enviado.
    document.getElementById('formFinanc').addEventListener('submit',(e)=>{
        e.preventDefault();
        window.location.href = 'agradece.html'
    })