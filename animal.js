/*
 *task 4
 */
//ques2
class Animals{
    constructor(voice="talk"){
        this.voice = voice;
    }
    setVoice(voice){
        this.voice = voice;
    }
    getVoice(){
        return this.voice;
    }
}

export {Animals};
//module.exports.Animal= Animal;