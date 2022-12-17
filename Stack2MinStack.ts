// https://leetcode.com/problems/min-stack/
export { }

class MinStack {
    stack: Array<[number, number]>
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const length = this.stack.length;
        if (!length) this.stack.push([val, val])
        else {
            const [value, min] = this.stack[length - 1];
            this.stack.push([val, val < min ? val : min]);
        }
    }

    pop(): void {
        this.stack.pop()!;
    }

    top(): number {
        const [val] = this.stack[this.stack.length - 1];
        return val;
    }

    getMin(): number {
        const [value, min] = this.stack[this.stack.length - 1];
        return min;
    }
}

const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
console.log(minStack.push(-1), minStack.top(), minStack.getMin())