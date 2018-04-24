function Dynamic(){
}

function Constructed(x,y){
  this.x = x;
  this.y = y;
}

function dynamicProperties(){
  const a = new Date().getTime();

  for(var i = 0; i < 100000000; i++){
    let a = new Dynamic();
    a.x = 1;
    a.y = i;
  }

  const b = new Date().getTime();
  return b - a; 
}

function constructorProperties(){
  const a = new Date().getTime();

  for(var i = 0; i < 100000000; i++){
    let a = new Constructed(1,i);
  }

  const b = new Date().getTime();
  return b - a;
}

let test = 0;
for (var i = 0; i < 100; i++){
  if(dynamicProperties() - constructorProperties() > 0){
    test++;
  }
}

console.log(test + '/100');
