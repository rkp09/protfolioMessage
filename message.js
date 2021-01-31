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

    //message generator all property length generator
    const numFromRandnum = randomNumGen(randomMessage[comp].length);
    //conditional for setting message 
    if (comp === 'signComp') {
        allMessage.push(`Your sign is ${randomMessage[comp][numFromRandnum]} .`)
    } else if (comp === 'fortuneComp') {
        allMessage.push(`You are having ${randomMessage[comp][numFromRandnum]} luck.`)
    } else if (comp === 'adviseComp') {
        allMessage.push(`You should "trust ${randomMessage[comp][numFromRandnum]}.`)
    } else {
        allMessage.push('An error occurrd. Try again after sometime.')
    }

};

const formateAllMessage = (argu) => {
    const formatted = argu.join('\n');
    console.log(formatted);
};

//call formateAllMessage to formate all message from allMessage arry
formateAllMessage(allMessage)