let temperatura;
let Celsius;
let Fahrenheit;
let escala = "";
let resultado;

function conversor(){

    //entrada do conversor seleionado
    escala = document.querySelector('#slcConversor').value;

    //entrada da temperatura digitada
    temperatura = document.querySelector('#temperatura').value;
    
    //verifica se é o conversor é Celsius
    if (escala == 'Celsius') {

        //CALCULO DE CONVERSÃO
        Celsius = (temperatura - 32) / 1.8;

        //EXIBIR O VALOR CONVERTIDO
        resultado = Celsius;
        document.querySelector('#resultado').innerHTML = resultado;
    }

    //verifica se é o conversor é Fahrenheit
    if (escala == 'Fahrenheit') {

        //CALCULO DE CONVERSÃO
        Fahrenheit = temperatura * 1.8 + 32;

        //EXIBIR O VALOR CONVERTIDO
        resultado = Fahrenheit;
        document.querySelector('#resultado').innerHTML = resultado;
    }

} 
//funçao de limpar formulario
function limpar(){

    document.querySelector('#temperatura').value = '';
    document.querySelector('#escala').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    
}
