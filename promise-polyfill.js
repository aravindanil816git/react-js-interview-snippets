var p1 = new Promise(function(resolve, reject){
    resolve(1)
})

var p2 = new Promise(function(resolve, reject){
    reject(2)
})

var p3 = new Promise(function(resolve, reject){
    resolve(3)
})


function myAll(promises){
  const result = [];
  return new Promise(function(resolve, reject) {
    for(let i = 0; i< promises.length; i++) {
      promises[i].then(res => {
        result.push(res)
        if(result.length  === promises.length) {
          resolve(result)
        }
      }).catch(res => {
         reject(res);
      })
    }
  })
}


function myRace(promises){
  return new Promise(function(resolve, reject) {
    for(let i = 0; i< promises.length; i++) {
      promises[i].then(res => {
        resolve(res)
      }).catch(res => {
        reject(res);
      })
    }
  })
}


myAll([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(res => {
  console.log(res)
})
