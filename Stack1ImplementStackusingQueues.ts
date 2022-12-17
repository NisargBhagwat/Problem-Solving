// https://leetcode.com/problems/implement-stack-using-queues/
export { }

class MyStack {
    queue1: number[];
    queue2: number[];
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x: number): void {
        this.queue1.push(x);
    }

    pop(): number {
        if (this.queue2.length) return this.queue2.shift()!;

        const length = this.queue1.length;
        for (let i = length - 1; i >= 0; i--) {
            this.queue2.push(this.queue1[i]);
        }
        this.queue1.length = 0;
        return this.queue2.shift()!;
    }

    top(): number {
        if (this.queue2.length) return this.queue2[0];
        else return this.queue1[this.queue1.length - 1]
    }

    empty(): boolean {
        return this.queue1.length == 0 && this.queue2.length == 0;
    }
}

let obj = new MyStack();
console.log(obj.push(1), obj.push(2), obj.top(), obj.pop(), obj.empty());
