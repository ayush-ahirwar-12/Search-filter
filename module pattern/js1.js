class youtubeChannel {
  constructor() {
    this.subscribers = [];
  }
  subscribe(user) {
    this.subscribers.push(user);
    user.update(`You have subscribed the channel`);
  }
  unsubscribe(user){
    this.subscribers = this.subscribers.filter((sub)=>sub!==user)
    user.update(`you have unsubscribed the channel`)
  }
  notify(msg){
    this.subscribers.forEach((sub)=>sub.update(msg));
  }
}

class user {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(`${this.name} ${data}`);
  }
}

let sheryians = new youtubeChannel();
let user1 = new user("ayush");
let user2= new user("harsh")

sheryians.subscribe(user1)
sheryians.subscribe(user2)

sheryians.notify("New video is now uploaded")
sheryians.unsubscribe(user2)
sheryians.notify("We are going live tonight")