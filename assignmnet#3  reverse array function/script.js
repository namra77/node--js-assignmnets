print=(str,num)=>{
    let result=str.slice(-num)+str.slice(0, -num);
    console.log(result);
}
print("javascript",2)