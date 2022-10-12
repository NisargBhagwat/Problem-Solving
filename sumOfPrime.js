function isPrime(no) {
    for(let i = 2; i <= Math.sqrt(no); i++) {
        console.log(i);
        if(no % i === 0){
            return false;
        }
    }
    return true;
}

function sum(no) {
    let n1 = 2;
    while(true){
        let n2 = no - n1;
        if(isPrime(n1) && isPrime(n2)){
            console.log(`${n1}+${n2}`);
            return;
        }
        n1++;
    }
    console.log("not possible");
}

sum(4)