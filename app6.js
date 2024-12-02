let text = prompt(" reqemli metin daxil edin")
let a = false
for(i=0; i<text.length; i++){
    let b = text[i]
    if(b.match(/[0-9]/)){
    a = true
    break}

    if(a){
        console.log("reqem var")
    }
    else{console.log("reqem yoxdu")}
    }
       