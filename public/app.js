window.onload = function () {    

    buscarProdutos();
    setInterval(buscarProdutos, 10000);
}

function buscarProdutos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //document.querySelector("#produtos").innerHTML =        
        const prod = JSON.parse(this.responseText);
        carregarProdutos(prod);
    }
    xhttp.open("GET", "http://localhost:3000/produtos");
    xhttp.send();
}

function carregarProdutos(produtos) {
    let htmlProdutos = (produtos.length == 0) 
        ? "<h1>Não há produtos cadastrados</h1>"
        : produtos.map (prod => 
            `
            <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                <div class="w3-card">
                    <div class="w3-container w3-center">
                        <img src="${prod.imagem}" style="width: 70%">
                        <h5>${prod.nome}</h5>
                        <h3 class="w3-blue">
                            ${'R$ '+prod.preco.toLocaleString(
                                'pt-br', {minimumFractionDigits: 2})
                            }
                        </h3>
                    </div>
                </div>
            </div>
            `).join(' ');

   /* produtos.forEach( (prod) =>{ 
    //for(let prod of produtos){
        htmlProdutos +=     
            `
            <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                <div class="w3-card">
                    <div class="w3-container w3-center">
                        <img src="${prod.imagem}" style="width: 70%">
                        <h5>${prod.nome}</h5>
                        <h3 class="w3-blue">
                            ${'R$ '+prod.preco.toLocaleString(
                                'pt-br', {minimumFractionDigits: 2})
                            }
                        </h3>
                    </div>
                </div>
            </div>
            `;
    })*/

    document.querySelector("#produtos").innerHTML = htmlProdutos;
}