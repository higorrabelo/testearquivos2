const fs = require('fs');
var arquivos = [];
var caminho = "C:\\Teste\\";


// faz a checagem da pasta  ainda sem ordenar os elementos do array
function checkFolder(){
    fs.readdir(caminho,function(err,files){
        if(err){
            console.log("Erro na localização de Arquivos")
        }
        files.forEach(function(file,next){
            fs.stat(caminho+file,function(err,infoFile){
                if(err){
                    console.log("Erro em recuperar Informações do Arquivo: "+err);
                }
                insertData(infoFile.mtime.getMilliseconds());             
            });
        });
        
    })
    setTimeout(() => {
        console.log(arquivos)
    }, 3000);
}
function sortFunction(a,b){
    return a-b;
}

//adicionandoelementos no array
function insertData(data){
    // console.log(typeof data)
    if(data == undefined || data==""){
        console.log("Erro na Inserção de Dados: "+"Tipo: "+data);
    }

    arquivos.push(data);
    // console.log(arquivos)
}

//Deleção de Arquivos na Pasta
function deleteFile(file){
    // checa o tamanho do array com o nome dos arquivos ordenados e apaga todos a partir da posição 5
    for(i = 5 ; i<arquivos.length; i++){    
        setTimeout(() => {
            fs.unlink(caminho+arquivos[i],function(err){
                if(err){
                 console.log("Problema na remoção do Arquivo");
                }
                 console.log("Arquivo Removido com Sucesso");
            })
        }, 1000);    
    }   
}

//Cria lotes de Arquivos para Teste
function createTestFiles(){
    for(i = 0 ; i<50 ; i++){
        fs.writeFile(caminho+"Teste"+i+".txt",function(err,data){
            if(err){
                console.log("Problema na remoção do Arquivo");
            }
            data="Conteudo do arquivo";
            console.log("Arquivo Criado com Sucesso");
        })
    }
}
function init(){
    //createTestFiles();
    checkFolder()
    //console.log(arquivos)
}

init();


// função de deleção de arquivos deleteFile("maisnovo.txt");
// criar arquivos txt para teste create();
// checar pasta