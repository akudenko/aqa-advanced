// Create a method to see whether the string is ALL CAPS

function isAllUppercase(text){
    return console.log(text === text.toUpperCase());
}

isAllUppercase("ALL CAPS HERE");
isAllUppercase("NOT All CAPS HERE");