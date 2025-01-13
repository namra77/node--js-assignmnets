let abc=process.argv.slice(2);
 console.log(abc);

 console.log("{")
 abc.forEach(element => {
    let object=element.split("=");

    let[key,value]=object;
    // console.log(key.replace("--",""),value.replace(",", ":"))
    console.log(key.replace("--","")+":",":"+value.replace(",", ":")) ;
 }

);

console.log("}")


    