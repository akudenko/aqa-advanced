function recursionExample(num){
    console.log(num);
    if(num > 0){
        recursionExample(num - 1);
    }
}

recursionExample(5);