const url="https://raw.githubusercontent.com/sandrogeneroso/2024-API-VIL-ES/refs/heads/main/api-VIL%C3%95ES-.JSON"

async function vizualizainfo(){
    const res=await fetch(url)
    const dados= await res.json()

    console.log(dados)
    const viloes=Object.keys(dados)
    const viloesMaisVotados=viloes[0]
    const quantidadedeVotos=Object.values(dados)[0]

    console.log(viloesMaisVotados)
    console.log(quantidadedeVotos)
}

vizualizainfo()