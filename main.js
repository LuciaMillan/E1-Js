// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function parOimpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " " + "es numero par");
  } else {
    console.log(numero + " " + "es un numero impar");
  }
}

parOimpar(8);
parOimpar(15);

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " " + "es mayor que" + " " + numero2);
  } else if (numero2 > numero1) {
    console.log(numero1 + " " + "es menor que" + " " + numero2);
  } else {
    console.log(numero1 + " " + "y" + " " + numero2 + " " + "son iguales");
  }
}

compararNumeros(8, 15);
compararNumeros(15, 8);
compararNumeros(8, 8);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiplo(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " " + "es multiplo de 5");
  } else {
    console.log(
      "aprendete las tablas," + " " + numero + " " + "no es multiplo de 5"
    );
  }
}

multiplo(15);
multiplo(8);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function numerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function nPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

nPalabra("Messi", 10);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const miArray = [8, 15, "Messi", "Racing"];
imprimirArray(miArray);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function exceptoQuinto(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 5) {
      console.log(array[i]);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exceptoQuinto(arr);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
const multiArr = (array, numero) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
};

multiArr(arr, 8);
