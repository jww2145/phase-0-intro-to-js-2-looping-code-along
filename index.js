function writeCards(names, events){
    let messages = []
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return messages;
}

function countDown(int){
    let i = int;
    while(i >= 0){
        console.log(i)
        i--
    }
}