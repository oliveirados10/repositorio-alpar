// 1 - Função Push

// const estadios = ['Neo Química Arena', 'Alianz Parque', 'Morumbi'];
// console.log(estadios);

// function pushCustom(arr, ...items) {
//    for (let i = 0; i < items.length; i++) { 
//         arr[arr.length] = items[i];
//     }
    
//     return arr.length;
// }

// pushCustom(estadios, "Vila Belmiro", "Fonte Nova");
// console.log(estadios);


// -------------------------------------------------------------------


// // 2 - Função Pop

// const time = ['Corinthians', 'Santos', 'São Paulo', 'Palmeiras'];
// console.log(popClub(time));

// function popClub(time) {
//     let lastValue = time.length;
//     if (lastValue <= 0) {
//         console.error("A array ficou vazia!");
//     } else {
//         const excluido = time [lastValue - 1];
//         time.length = lastValue - 1;
//         return excluido;
//     }
// }

// console.log(popClub(time));


// -------------------------------------------------------------------

// 3 - Função Shift

// const campeonatos = ['Brasileirão', 'Libertadores', 'Paulistão', 'Copa do Brasil'];

// function shiftChamps(value) {
//     const excluido = value[0];
    
//     for (let i = 0; i < value.length - 1; i++) {
//         value[i] = value[i + 1];
//     }
//     value.length = value.length - 1;
//     return excluido;
// }

// console.log(shiftChamps(campeonatos))
// console.log(campeonatos)



// -------------------------------------------------------------------


// 4 - Função unshift

// function unshiftPaulistas(arr, ...value) {

//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i + value.length] = arr[i];
//     }

//     for (let i = 0; i < value.length; i++) {
//         arr[i] = value[i];
//     }

//     return arr;
// }

// const timesPaulistas = ['Santos', 'Palmeiras', 'São Paulo'];
// console.log(timesPaulistas)
// console.log(unshiftPaulistas(timesPaulistas,'Corinthians', 'Novorizontino'));


// -------------------------------------------------------------------


// 5 - Função slice

// function slice(arr, indexStart, indexEnd) {
//     const newArray = [];
    

//     if (arr.length < indexEnd) {
//         console.error(`Array não possui ${indexEnd} de indices comprimento!`);
//         return;
//     }
//     for (let count = 0; indexStart < indexEnd; indexStart++) {
//         newArray[count] = arr[indexStart];
//         count++;

//     }
//     return newArray;
// }

// const carioca = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo'];
// console.log(carioca);
// console.log(slice(carioca, 0, 3));


// -------------------------------------------------------------------

// 6 - Função splice

// function splice(array, indexStart, deleteCount, ...items) {
//     const arrayToDelete = []
    
//     for (let i = 0; i < array.length; i++) {
//         if (i>= indexStart && i < indexStart + deleteCount) {
//             arrayToDelete.push (array[i]);
//             }      
//         }

//         for (let i = indexStart; i < array.length - deleteCount; i++) { 
//             array[i] = array [i +  deleteCount];
//     }   
//             array.length = array.length - deleteCount;
     
//         for (let i = 0; i < items.length; i++) {
//         array[indexStart + i] = items[i];
//     }

//              return arrayToDelete

// }


// const arr = ['maca', 'banana', 'pera', 'uva', 'manga'] 
// const pedaco = splice(arr, 2, 2, 'abacate', 'coco')
// console.log(arr)
// console.log(pedaco)
    
// -------------------------------------------------------------------

// 7 - Função forEach

// function foreach(clubes, callback) {
//     for (const item of clubes) {
//         callback(item);
//     }
// }

// const clubes = ['Corinthians', 'São Paulo', 'Santos', 'Palmeiras'];
// foreach(clubes,(item) => {
//     console.log(item);
// });



// -------------------------------------------------------------------


// 8 - Função map

// function map(arr, callback) {
//     const newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(callback(arr[i]));
//     }
//     return newArray;
// }

// const arr = ["a", "b", "c", "d"];
// const novaArray = map(arr, (item) => {
//     return item.toUpperCase();
// });

// console.log(novaArray);



// -------------------------------------------------------------------

//9 - Função Filter

// function filter(array, callback) {
// const newArray = []

// for (let i = 0; i <array.length; i++) {
//     if (callback(array[i], i, array)) { 
//     newArray[newArray.length] = array[i]
//         }
//     }
//     return newArray;

//  }

//  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//  console.log(filter(arr, (item) => {
//     if (item > 5) {
//         return true
//     }
//         return false;
//  }))

// -------------------------------------------------------------------

//10 - Função Reduce

//  function reduce(array, callback, initialValue) {
//     let accumulator = initialValue

//     for (let i = 0; i < array.length; i++) {
//         accumulator = callback(accumulator, array[i])
//     }
//         return accumulator
// }
//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const soma = reduce(arr, (accumulator, item)=> {
//     return accumulator + item
//  }, 0)
//  console.log(soma)