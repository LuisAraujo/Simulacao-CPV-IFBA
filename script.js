cpv = 
[
    ['Barreiras',2],
    ['Brumado',3],
    ['Camaçari',1],
    ['Euclides',6],
    ['Eunápolis',1],
    ['Feira de Santana',1],
    ['Ilhéus',0],
    ['Irecê',0],
    ['Jacobina',5],
    ['Juequié',1],
    ['Juaziero',0],
    ['Lauro de Freitas',0],
    ['Paulo Afonso',1],
    ['Porto Seguro',0],
    ['Santo Antônio de Jesus',3],
    ['Santo Amaro',4],
    ['Salvador',0],
    ['Seabra',1],
    ['Simòes Filho',0],
    ['Ubaitaba',0],
    ['Valença',6],
    ['Vitória da Conquista',0]
]

strbird = `Alberto Vianna Dias da Silva;CIÊNCIA DA COMPUTAÇÃO;Jacobina;Camaçari;Lauro de Freitas;15-05-2018
Alexandre da Costa e Silva Franco;CIÊNCIA DA COMPUTAÇÃO;Santo Amaro;Lauro de Freitas;-;01-01-2010
Allan Sergio Goncalves Alves;CIÊNCIA DA COMPUTAÇÃO;Ubaitaba;Ilhéus;-;14-08-2018
Ana Carla Moura Araujo Dantas;CIÊNCIA DA COMPUTAÇÃO;Brumado;Vitória da Conquista;-;16-08-2021
Ana Carolina Sokolonski Anton;CIÊNCIA DA COMPUTAÇÃO;Feira de Santana;Feira de Santana;-;01-01-2010
Antonio Mauricio da Silva Pitangueira;CIÊNCIA DA COMPUTAÇÃO;Santo Antônio de Jesus;Santo Antônio de Jesus;-;29-09-2010
Benedito Rodrigues Barbosa Filho;CIÊNCIA DA COMPUTAÇÃO;Seabra;Jequié;Barreiras;08-06-2020
Bruno Souza de Jesus;CIÊNCIA DA COMPUTAÇÃO;Ubaitaba;Jequié;Salvador;16-09-2020
Ciro Esteves Lima Sobral;CIÊNCIA DA COMPUTAÇÃO;Jacobina;Ilhéus;-;31-08-2018
Cleber Jorge Lira de Santana;CIÊNCIA DA COMPUTAÇÃO;Eunápolis;Feira de Santana;Santo Amaro;25-06-2013
Daniel dos Anjos Costa;CIÊNCIA DA COMPUTAÇÃO;Euclides de Cunha;Santo Amaro;Feira de Santana;29-10-2020
Danilo Santos Souza;CIÊNCIA DA COMPUTAÇÃO;Euclides de Cunha;Euclides de Cunha;-;05-10-2018
Djalma Almeida Lima Filho;CIÊNCIA DA COMPUTAÇÃO;Barreiras;Santo Amaro;Santo Antônio de Jesus;17-10-2018
Ernando Passos Batista Junior;CIÊNCIA DA COMPUTAÇÃO;Valença;Santo Antônio de Jesus;-;25-10-2018
Fabio Warley da Silva Xavier;CIÊNCIA DA COMPUTAÇÃO;Eunápolis;Camaçari;-;03-11-2010
Flavio Pereira da Silva;CIÊNCIA DA COMPUTAÇÃO;Santo Antônio de Jesus;Santo Amaro;Feira de Santana;25-01-2019
George Madson Dias Santos;CIÊNCIA DA COMPUTAÇÃO;Euclides de Cunha;Santo Antônio de Jesus;Valença;31-03-2020
Gustavo da Silva Quirino;CIÊNCIA DA COMPUTAÇÃO;Barreiras;Lauro de Freitas;Salvador;01-01-2010
Gustavo Falcao Paim da Silva;CIÊNCIA DA COMPUTAÇÃO;Irecê;Feira de Santana;Santo Antônio de Jesus;03-08-2018
Harlei Vasconcelos Rosa;CIÊNCIA DA COMPUTAÇÃO;Santo Amaro;Camaçari;Salvador;04-01-2010
Helio Rodrigues de Oliveira;CIÊNCIA DA COMPUTAÇÃO;Santo Amaro;Paulo Afonso;-;20-11-2020
Ivo Chaves de Franca;CIÊNCIA DA COMPUTAÇÃO;Jacobina;Jacobina;-;13-07-2011
Jaqueline Souza de Oliveira;CIÊNCIA DA COMPUTAÇÃO;Santo Amaro;Camaçari;Simões Filho;13-09-2010
Joao Paulo Just Peixoto;CIÊNCIA DA COMPUTAÇÃO;Valença;Feira de Santana;-;11-05-2018
Jose Dihego da Silva Oliveira;CIÊNCIA DA COMPUTAÇÃO;Salvador;Salvador;Lauro de Freitas;30-08-2010
Jose Souza de Jesus;CIÊNCIA DA COMPUTAÇÃO;Jequié;Santo Amaro;Camaçari;17-07-2018
Lauro Cassio Martins de Paula;CIÊNCIA DA COMPUTAÇÃO;Salvador;Salvador;-;21-01-2019
Lazaro de Souza Silva;CIÊNCIA DA COMPUTAÇÃO;Euclides de Cunha;Santo Amaro;Santo Antônio de Jesus;22-06-2022
Marcos Pereira dos Santos;CIÊNCIA DA COMPUTAÇÃO;Brumado;Vitória da Conquista;Jequié;21-07-2017
Maria Teresinha Tamanini Andrade;CIÊNCIA DA COMPUTAÇÃO;Simões Filho;Lauro de Freitas;-;01-01-2010
Michel Ferreira Batista;CIÊNCIA DA COMPUTAÇÃO;Juazeiro;Juazeiro;-;03-12-2019
Nelson Valente Dias;CIÊNCIA DA COMPUTAÇÃO;Valença;Salvador;Lauro de Freitas;01-06-2010
Paulo Andre da Rocha Perris;CIÊNCIA DA COMPUTAÇÃO;Irecê;Paulo Afonso;-;07-01-2019
Raimundo Carvalho Rabelo Filho;CIÊNCIA DA COMPUTAÇÃO;Feira de Santana;Lauro de Freitas;Salvador;27-08-2014
Ricardo Sena Carvalho;CIÊNCIA DA COMPUTAÇÃO;Barreiras;Santo Amaro;Santo Antônio de Jesus;26-07-2018
Stefani Silva Pires;CIÊNCIA DA COMPUTAÇÃO;Irecê;Salvador;-;14-08-2012
Thiago Souto Mendes;CIÊNCIA DA COMPUTAÇÃO;Santo Amaro;Vitória da Conquista;Lauro de Freitas;25-05-2010
Toni Alex Reis Borges;CIÊNCIA DA COMPUTAÇÃO;Jacobina;Feira de Santana;Santo Antônio de Jesus;07-05-2013
Aline Silva Ramos;Sistemas de Computação;Ilhéus;Vitória da Conquista;-;01-09-2010
Dalton Andrade Paixao;Sistemas de Computação;Salvador;Simões Filho;-;01-01-2010
Francisco Jose da Silva Borges de Santana;Sistemas de Computação;Santo Amaro;Lauro de Freitas;-;01-01-2010
Herbert Monteiro Souza;Sistemas de Computação;Santo Amaro;Lauro de Freitas;Salvador;13-09-2010
Luanna Azevedo Cruz;Sistemas de Computação;Seabra;Porto Seguro;Ilhéus;15-03-2019`;


bird = strbird.split('\n');
remov = [];
for(i=0;i < bird.length; i++){
    bird[i] = bird[i].split(";");
}

function _console(text){
    body = document.getElementById('body');
    body.innerHTML  =  body.innerHTML + `<div>${text}</div>`;
}

function getDate(date){
    date = date.split("-");
    date = date[2]+"-"+date[1]+ "-"+date[0];
    return date;
}

function simularRodada(opcao){
    //exibir rodada 
    _console(`<h1>Rodada ${opcao}</h1>`);
    //rodada 1 refre-se a coluna 3 do array do bird
    opcao += 2;
    /*para todas as vagas na cpv, analisar os inscritos no bird*/
    for(i = 0; i < cpv.length; i++){
        //array para armazenar concorrencia por campus
        concorrencia = [];
        _console(`<b>Analisando Campus ${cpv[i][0]} - vagas ${cpv[i][1]}</b> `);
        
        //para todas as inscricoes do bird
        for(j = 0; j < bird.length; j++){
            //a opcao é igual a cpv e possui vaga?
            if((bird[j][opcao] == cpv[i][0]) && ( cpv[i][1]>0) ) {
                //ainda não foi transferido
                if(bird[j][opcao] != bird[j][2]){
                    concorrencia.push( bird[j] );
                    concorrencia[concorrencia.length-1].push(j);
                    _console(`  ${bird[j][0]}, campus ${bird[j][2]} para ${cpv[i][0]} - ingresso em ${bird[j][5]}`);
                //ja foi tranferido
                }else{
                    _console(`<span class='remov'> ${bird[j][0]}, campus ${bird[j][2]} para ${cpv[i][0]} - ingresso em ${bird[j][5]}</span>`);
                }
            }
        }
        //Nao ha candidatos inscritos?
        if(concorrencia.length == 0){
            _console("Sem inscrição");

         //ha candidatos inscritos
         }else{
            
            _console(`<b>Concorrencia para o campus ${cpv[i][0]}</b>`);
            //campus sem vaga
            if(cpv[i][1]==0)
                _console("<span class='red'>Campus sem vaga!</span>");
            //campus com vaga
            else{
                //flag para controlar se ainda tem candidatos 
                nao_ha_candidato = true;

                //loop por campus até zerar as vagas ou nao ter mais candidato
                while( parseInt(cpv[i][1]) > 0 && nao_ha_candidato ){
                    //index do mais antigo 
                    antigo = 0;
                    for(j = 1; j < concorrencia.length; j++){
                  
                        date1 = new Date( getDate(concorrencia[antigo][5]) );
                        date2 = new Date( getDate(concorrencia[j][5]));
                        //e mais antigo
                        if(date2 < date1)
                            antigo = j; 
                    }    
                    //caso tenha candidato   
                    if(concorrencia[antigo]!= undefined){
                        _console(`<span class='gree'>Selecionado: ${concorrencia[antigo][0]}</span>`);
                        
                        //remove a vaga na cpv
                        cpv[i][1] = parseInt(cpv[i][1])-1;
                        //busca index da vaga de origem
                        for(l=0; l<cpv.length; l++){
                             if(cpv[l][0] == concorrencia[antigo][2]){
                                //adicionar na vaga de origem
                                cpv[l][1] = parseInt(cpv[l][1])+1;
                                
                                break;
                            }
                        }                
                        //remove candidato da lista bird
                        console.log(concorrencia[antigo])
                        for(l=0; l<bird.length; l++){
                            if(bird[l][0] ==concorrencia[antigo][0] ){
                                removido = bird.splice( l, 1);
                                console.log(removido)
                            }
                        }
                      
                        //remove o candidato da lista de concorrencia
                        concorrencia.splice(antigo, 1);
                        
                        

                    }else
                        nao_ha_candidato = false;

                }
            }
        }

    }
};

function showVagas(){
    _console("<h3>Vagas</h3>");
    for(i=0; i < cpv.length; i++)   
     _console(cpv[i]);
}
function main(){
    
    simularRodada(1);
    showVagas();
    simularRodada(2);
    showVagas();
    simularRodada(1);

};



main();