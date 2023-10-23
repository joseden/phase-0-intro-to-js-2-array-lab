const cats = ["Milo", "Otis", "Garfield"];

//destructively appends a cat to the end of the cats array
function destructivelyAppendCat(string){
    //const catsnew = cats
    //catsnew.push("Ralph");
    cats.push("Ralph");
    
}

//destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(string){
    //const catsnew = cats
    //catsnew.unshift("Bob");
    cats.unshift("Bob");
}

//removes the last cat from the cats array
function destructivelyRemoveLastCat(string){
    //const catsnew = cats
    //catsnew.pop();
    cats.pop();
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat(string){
    cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(string){
    const catsnew = [...cats, "Broom"];
    return catsnew;
}

appendCat(cats);

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(string){
    const catsnew = ["Arnold",...cats];
    return catsnew;
}

prependCat(cats);

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(string){
    const lesscats = cats.slice(0,-1);
    return lesscats;
}

removeLastCat(cats);

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(string){
    const lesscats = cats.slice(1);
    return lesscats;
}

removeFirstCat(cats);








