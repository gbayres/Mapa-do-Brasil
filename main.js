var data = {
    "AC":2,
    "AL":5,
    "AP":6,
    "AM":18,
    "BA":14,
    "CE":239,
    "DF":42,
    "ES":23,
    "GO":79,
    "MA":22,
    "MT":18,
    "MS":45,
    "MG":67,
    "PA":55,
    "PB":60,
    "PR":43,
    "PE":29,
    "PI":15,
    "RJ":122,
    "RN":33,
    "RS":42,
    "RO":38,
    "RR":31,
    "SC":25,
    "SP":456,
    "SE":45,
    "TO":90
}

//PEGA O MAIOR VALOR DO OBJETO
const getMax = (data) => {
    var valores = Object.values(data);
    return Math.max(...valores);    
}

const MAX = getMax(data); 

//RETORNA UM INDICE ENTRE 0 E 255

const indice = (num, MAX) => ( 
    parseInt(num*255/MAX)
)


// PARA CADA ESTADO, DEFINE UMA COR CORRESPONDENTE AO INDICE
for (item in data) {
    var estado = document.getElementsByClassName(item)[0];

    var index = indice(data[item], MAX)
    
    estado.style.fill = "rgb(" + index + ",0,55)";
}