async function example(a){  
    let promise = new Promise(function(resolve,reject) {     
       switch(typeof a){
            case 'number' :
              resolve(console.log('day la so'));
                break;
            case 'string' :
                resolve(console.log('day la chuoi'));
                break;
            case 'function':
                resolve(console.log('day la function'));
                break;
            default:
                reject(console.log('chua ho tro dinh dang'));
        }
      
    });
    let no1 = await promise;
    
    console.log(typeof no1);
    
}
example('mot chuoi');