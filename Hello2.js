const item = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    ];
  
  
  let sum = 0;
  
  for (let index = 0; index < item.length; index++) {
    sum += item[index].price;
  }
  
  console.log('total sum:'+sum);