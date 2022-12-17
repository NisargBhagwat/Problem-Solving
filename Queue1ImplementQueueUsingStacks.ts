// https://leetcode.com/problems/implement-queue-using-stacks/
export { }

class MyQueue {
    stack1: number[];
    stack2: number[];
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (this.stack2.length) return this.stack2.pop()!;

        const length = this.stack1.length;
        for (let i = length - 1; i >= 0; i--) {
            this.stack2.push(this.stack1[i]);
        }
        this.stack1.length = 0;
        return this.stack2.pop()!;
    }

    peek(): number {
        if (this.stack2.length) return this.stack2[this.stack2.length - 1];
        else return this.stack1[0];
    }

    empty(): boolean {
        return this.stack1.length == 0 && this.stack2.length == 0;
    }
}