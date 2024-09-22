// function mulby2(arr){
//     // return arr.map(x=>x*2)
//     const narr = arr.map(x=>x*x)
//     return narr
// }
// let op = mulby2([1,2,3,4,5])
// console.log(op)

// console.log(mulby2([1,2,3,4,5]))

// function getEVen(arr){
//     return arr.filter(x=>x%2==0)
// }
// console.log(getEVen([1,2,3,4,5]))

// function getEVen(arr){
//     return arr.filter(x=>x%2!==0)
// }
// console.log(getEVen([1,2,3,4,5]))

// function getSum(arr){
//    return arr.reduce((acc,cur)=>acc+cur,10)

// }
// console.log(getSum([1,2,3,4,5]))

// function evenSum(arr){
//     let evenArr = arr.filter(x=>x%2==0)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(evenSum([1,2,3,4,5,6]))

// function evenSum(arr){
//     return arr.filter(x=>x%2==0).reduce((acc,cur)=>acc+cur,0)
    
// }

// console.log(evenSum([1,2,3,4,5,6]))

// function unpackArr(arr){
//     return arr.flat(2)
// }

// console.log(unpackArr([1,2,[[3,4],[5,6]],[7,8]]))

// arr = [1.2,3,4,[3,4,5],[7,8,9]]
// arr2 = [].concat(...arr)
// console.log(arr2);

// function getFreq(arr){
//     const freq = {}
//     arr.forEach(items =>{
//         freq[items] = (freq[items] || 0) + 1;
//     })
//     return freq

// }

// console.log(getFreq(["apple","apple","orange","apple","apple","banana","apple","banana"]))

// function getFreq(arr){
//     return arr.reduce((acc,item)=>{
//         acc[item] = (acc[item] || 0) + 1
//         return acc;
//     }, {})
// }

// console.log(getFreq(["apple","apple","orange","apple","apple","banana","apple","banana"]))

// function getChunk(arr, key){
//     let res = []
//     for(let i =0; i<arr.length; i+=key){
//         res.push(arr.slice(i,i+key))

//     }
//     return res

// }
// console.log(getChunk([1,2,3,4,5,6,7],2))

// let arr = [1,2,3,4,54,6,7,3]
// console.log(Math.min(...arr))

// let num = [3, 5, 7, 2, 8, 1];

// let max = num.reduce((m, current) => {
//   return current > m ? current : m;
// }, num[0]); 

// console.log(max);


// function sMax(arr){
//     let mx =-1;
//     let sMax = -1;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]> mx){
//             sMax = mx
//             mx = arr[i]
//         }
//        else if(arr[i]> sMax && arr[i] <mx ){
//         sMax = arr[i]

//        }
//     }
//     return sMax;
// }
// console.log(sMax([10,5,20,20,15]))

// function customMap(arr,cb){
//     let res = []
//     for(let i =0; i<arr.length; i++){
//         // let op1 = cb(arr[i])
//         // res.push(op1)
//         res.push(cb(arr[i]))
//     }
//     return res;

// }

// // console.log(customMap([1,2,3,4,5],x=>x*2))

// let op = customMap([1,2,3,4,5],x=>x*2)
// console.log(op)

// function customFilter(arr, cb){
//     let res = []
//     for(let i=0; i<arr.length;i++){
//         if(cb(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }

// console.log(customFilter([1,2,3,4,5],x=>x%2==0))

// function customReduce(arr, cb,init){
//     let acc = init;
//     for(let i=0; i<arr.length; i++){
//         acc = cb(acc,arr[i])
//     }
//     return acc
// }
// console.log(customReduce([1,2,3,4,5],(acc,x)=>acc+x, 10))

// function chunkArr(arr,k){
//     let res = []
//     for(let i=0; i<arr.length; i+=k){
//         res.push(arr.slice(i,i+k))
//     }
//     return res;
// }
// console.log(chunkArr([1,2,3,4,5,6,7],3))

// function commonElement(arr1,arr2){
//     return arr1.filter(val=>arr2.includes(val))
// }
// console.log(commonElement([1,2,3,4,5],[3,4,5,6,7,8]))

function getFreq(arr){
    return arr.reduce((acc,val)=>{
        acc[val] = (acc[val] || 0) + 1
        return acc;

    },{})
}
console.log(getFreq(['a','b','c','a','b']))