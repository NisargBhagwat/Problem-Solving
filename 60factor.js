function fectorOf60(no) {
    let sum = 0;
    const number = no;
    let noOfZero = 0;
    while(no){
        const reminder = no%10;
        if(reminder == 0) noOfZero++;
        sum = sum + reminder;
        no = parseInt(no/10);
    }
    if(number >=60 && noOfZero>0 && sum%3==0){
        console.log(true);
        return;
    }
    console.log(false);
}

fectorOf60(2340);

