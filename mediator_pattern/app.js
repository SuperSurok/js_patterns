const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if (to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].recieve(message, from)
                    }
                }
            }
        }
    }
}

const pasha = new User('Pasha');
const masha = new User('Masha');
const sasha = new User('Sasha');

const chatroom = new Chatroom();
chatroom.register(pasha);
chatroom.register(masha);
chatroom.register(sasha);

pasha.send('Hello, Masha', masha);
masha.send('Hello, Pasha', pasha);
sasha.send('Hello Everyone!!!');