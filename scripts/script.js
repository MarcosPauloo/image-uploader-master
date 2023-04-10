function uploadImage(){
    let caixaUpload = document.querySelector('.caixaUpload');
    let sucessfully = document.querySelector('.sucessfully');
    let loading = document.querySelector('.loading');

    const inputPicture = document.querySelector('#inputPicture');
    const imgPicture = document.querySelector('.imagemCarregada');
    const labelCaminho = document.querySelector('.caminhoLabel');
    const file = inputPicture.files[0];

    if(file){
        const reader = new FileReader();
        reader.onprogress = (event)=>{
            caixaUpload.style.display = "none";
            loading.style.display = "flex";
        }
        reader.addEventListener('load', (e)=>{
            const readerTarget = e.target;

            imgPicture.src = readerTarget.result;
            labelCaminho.innerHTML = readerTarget.result;   
            setTimeout(()=>{ //gambiarra só para mostrar a tela de carregamento
                loading.style.display = "none";
                sucessfully.style.display = "flex";
            },2000)
        });
        reader.readAsDataURL(file);
    }else{
        console.log("f");
    }
};

function copyText(){
    const labelCaminho = document.querySelector('.caminhoLabel');
    console.log(labelCaminho.innerHTML);
};

function handleDrop(event){
    let div = document.querySelector('.picture');
    div.addEventListener('dragstart', (e)=>{
        e.style.opacity = '0.4';
    });
    div.addEventListener('dragend', handleDragEnd);
}
