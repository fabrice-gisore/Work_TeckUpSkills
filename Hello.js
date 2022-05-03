const item = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    ];
  
  function findBy(arr, key, comparatorFn) {
    return arr.reduce(function(prev, curr, index, arr) { 
      return comparatorFn.call(arr, prev[key], curr[key]) ? prev : curr; 
    });
  }
  
  function minComp(prev, curr) {
    return prev < curr;
  }
  
  function maxComp(prev, curr) {
    return prev > curr;
  }
  
  console.log('name:'+findBy(item, 'price', minComp).name+' price:'+findBy(item, 'price', minComp).price);
  console.log('name:'+findBy(item, 'price', maxComp).name+' price:'+findBy(item, 'price', maxComp).price);