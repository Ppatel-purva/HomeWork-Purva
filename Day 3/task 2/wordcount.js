function checkNumberOfWords() {
    let sentence = document.getElementById("readword").value;
    let numOfWords = 0
    if (sentence.length > 0){
        numOfWords++;
    }

    for(let i=0; i < sentence.length;  i++) {
        if (sentence[i] == " ") {
            numOfWords++;
        }
    }
    console.log(numOfWords)
}