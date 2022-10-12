function isFormTrangle(a,b,c){
    if(a+b>=c && a+c>=b && b+c>=a){
        console.log(true)
        return;
    }
    console.log(false);
}

isFormTrangle(7, 10, 5);