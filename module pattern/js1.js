class youtubeChannel{
    constructor(){
        this.subscribers = []
    }
    subscribe(user){
        this.subscribers.push(user)
        user.update("you have subscribed the channel")
    }
    unsubscribe(user){
        this.subscribers=this.subscribers.filter((sub)=>sub!==user)
        user.update("you have unsubscribed the channel")

    }
    notify(msg){
        this.subscribers.forEach((sub)=>sub.update(msg))
    }
}

class User{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name},${data}`);
        
    }
}

let sheryians = new youtubeChannel();
let user1 = new User("ayush");

sheryians.subscribe(user1)
sheryians.notify("WE will go live tonight")