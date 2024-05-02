const address ={
  city: "blr",
  street: {
    area: {
      locality: "ECity",
      landmark: "HighTower"
    },
    lane:"gallli4"
  },
  pincode: 8999
};

/*
{
  address.city: "blr",
  address.street.area.locality: "ECity",
  address.street.area.landmark: "HighTower"
  address.street.lane:"gallli4"
  address.pincode: 8999
};
*/


const res= {}
function flatten(obj, currentKey) {
  Object.keys(obj).forEach(i => {
    if(typeof obj[i] !== "object")
      res[currentKey+"."+i] = obj[i]
     else {
       flatten(obj[i], currentKey+"."+i)
     }
  })
}

flatten(address, "address")
console.log(res)
