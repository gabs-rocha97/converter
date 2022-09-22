var euroEmDolar = 0.98;
var euroEmReal = 5.07;
var dolarEmEuro = 1.02;
var dolarEmReal = 5.17;
var realEmDolar = 0.19;
var realEmEuro = 0.2;

function Converter() {
  var valorelemento = document.getElementById("valor"); //getElementByID = captura tag HTML pelo ID
  var valor = valorelemento.value; //value = captura o valor inserido na tag

  var elementovalorentrada = document.getElementById("entrada").value;
  var elementovalorsaida = document.getElementById("saida").value;

  // fazer IFS para seleção
  if (valor > "0") {
    if (elementovalorentrada == "euro") {
      if (elementovalorsaida == "dolar") {
        converterEuroEmDolar(valor);
      } else if (elementovalorsaida == "real") {
        converterEuroEmReal(valor);
      } else {
        alert("selecione moedas diferentes para converter");
      }
    } else if (elementovalorentrada == "dolar") {
      if (elementovalorsaida == "euro") {
        converterDolarEmEuro(valor);
      } else if (elementovalorsaida == "real") {
        converterDolarEmReal(valor);
      } else {
        alert("selecione moedas diferentes para converter");
      }
    } else if (elementovalorentrada == "real") {
      if (elementovalorsaida == "dolar") {
        converterRealEmDolar(valor);
      } else if (elementovalorsaida == "euro") {
        converterRealEmEuro(valor);
      } else {
        alert("selecione moedas diferentes para converter");
      }
    } else {
      alert("Selecione um valor de entrada");
    }
  } else {
    alert("Insira um valor válido");
  }
}

function converterEuroEmDolar(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * euroEmDolar;

  var convertidoPara = "Dolar U$";

  exibirResultado(valorconvertido, convertidoPara);
}
function converterEuroEmReal(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * euroEmReal;

  var convertidoPara = "Real R$";

  exibirResultado(valorconvertido, convertidoPara);
}

function converterDolarEmEuro(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * dolarEmEuro;

  var convertidoPara = "Euro €";

  exibirResultado(valorconvertido, convertidoPara);
}

function converterDolarEmReal(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * dolarEmReal;

  var convertidoPara = "Real R$";

  exibirResultado(valorconvertido, convertidoPara);
}

function converterRealEmDolar(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * realEmDolar;

  var convertidoPara = "Dolar U$";

  exibirResultado(valorconvertido, convertidoPara);
}

function converterRealEmEuro(valor) {
  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

  var valorconvertido = valorconverter * realEmEuro;

  var convertidoPara = "Euro €";

  exibirResultado(valorconvertido, convertidoPara);
}

function exibirResultado(valorconvertido, convertidoPara) {
  var elementovalorconvertido = document.getElementById("valorConvertido"); //Captura tag HTML por ID
  var textovalorconvertido =
    "O resultado em " + convertidoPara + ": " + valorconvertido.toFixed(2); // Gera texto completo com valor convertido
  elementovalorconvertido.innerHTML = textovalorconvertido; // Inclui variavel valorconvertido no elemento da TAG.
}

//codigo velho ======================================================================
//function converterEmReal(valor) {
//  var valorconverter = parseFloat(valor); //parsefloat = converte valor para tipo Float

//  var valorconvertido = valorconverter / 5;

//  var elementovalorconvertido = document.getElementById("valorConvertido"); //Captura tag HTML por ID
//  var valorconvertido = "O resultado em dólar é U$" + valoremdolar; // Gera texto completo com valor convertido
//  elementovalorconvertido.innerHTML = valorconvertido; // Inclui variavel valorconvertido no elemento da TAG.
//}

//function ConverterEmEuro(valor) {
//  var valoremdolar = parseFloat(valor); //parsefloat = converte valor para tipo Float

//  var valorembitcoin = valoremdolar * 20;

//  var elementovalorconvertido = document.getElementById("valorConvertido"); //Captura tag HTML por ID
//  var valorconvertido = "O resultado em BitCoin é B$" + valorembitcoin; // Gera texto completo com valor convertido
//  elementovalorconvertido.innerHTML = valorconvertido; // Inclui variavel valorconvertido no elemento da TAG.
//}
// codigo velho ==========================================================