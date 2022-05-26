"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Robot {
    constructor(name, type, message) {
        this.name = name;
        this.type = type;
        this.message = message;
        this.battery = 100;
    }
    work() {
        console.log(this.message);
    }
    reset() { }
}
exports.default = Robot;
