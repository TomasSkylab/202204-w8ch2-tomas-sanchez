"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Waiter = exports.Cleaner = void 0;
class Robot {
    constructor(name, type, message) {
        this.name = name;
        this.type = type;
        this.message = message;
        this.battery = 100;
    }
    reset() { }
    work() {
        console.log(this.message);
    }
}
class Cleaner extends Robot {
    constructor(name) {
        super(name, "Cleaner", "Larala larita, I clean my little house");
        this.name = name;
    }
}
exports.Cleaner = Cleaner;
class Waiter extends Robot {
    constructor(name) {
        super(name, "Waiter", "Do you feel like a mini of fuet?");
        this.name = name;
    }
}
exports.Waiter = Waiter;
class Developer extends Robot {
    constructor(name) {
        super(name, "Developer", "JavaScript is cool - I develop with JavaScript -> I'm cool");
        this.name = name;
    }
}
exports.Developer = Developer;
exports.default = Robot;
