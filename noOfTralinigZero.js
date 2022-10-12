function tralingZero(no){
    let sum = 0;
    while(true){
        no = no/5;
        if(Number.isInteger(no)){
            sum += no;
        }
        else{
            break;
        }
    }    
    console.log(sum);
}

tralingZero(5);
