//random number generator 
const randomNumGen = (num) => {
    return Math.floor(Math.random() * num)
};
//random message component in a poperty of string
const randomMessage = {
    signComp: ['bright', 'dark', 'totally dark', 'well enough'],
    fortuneComp: ['good', 'bad', 'very bad', 'ok', 'fine'],
    adviseComp: ['no one', 'all', 'one of them']
}

//variable for taking all message
let allMessage = [];


//message generator function and set some output on allMessage
for (let comp in randomMessage) {
    const numFromRandnum = randomNumGen(randomMessage[comp].length);
    const compPostitionPoperty = randomMessage[comp];
    if (compPostitionPoperty === 0) {
        allMessage.push(`Your sign is ${randomMessage[comp][numFromRandnum]} .`)
    } else if (compPostitionPoperty === 1) {
        allMessage.push(`You are having ${randomMessage[comp][numFromRandnum]} luck.`)
    } else if (compPostitionPoperty = 2) {
        allMessage.push(`You should "trust ${randomMessage[comp][numFromRandnum]}.`)
    } else {
        allMessage.push('An error occurrd. Try again after sometime.')
    }
}