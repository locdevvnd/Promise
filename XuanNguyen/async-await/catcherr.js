const checkarr = () =>{
    return arr=['xuan','long','tuan','loc','binh']; 
}
 async function catcherr(){
     try {
         var check = await checkarr();
         var arr1 = Array.from(check);
        
         for(let i =0; i<arr.length;i++){
            if(arr1[i]==='tuan'){arr1.splice(i,1)}
         }console.log(arr1);
     } catch(error){
        console.log(error);
     }
 } catcherr();
