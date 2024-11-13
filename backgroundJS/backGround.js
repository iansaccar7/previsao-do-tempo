const { addListener } = require("commander");

const accessKey = 'oYwpa9LzZysKGV_MrcBny29YDXSCluPbvdwsAnGOVfQ';

function updateBackgroundImage() {
    fetch(`https://api.unsplash.com/photos/random?query=landscape&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].urls.regular;
            document.body.style.backgroundImage = `url(${imageUrl})`;
        })
        .catch(error => console.error('Erro ao carregar imagem:', error));
}

// Atualiza a imagem imediatamente ao carregar a página
updateBackgroundImage();