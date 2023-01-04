// https://leetcode.com/problems/baseball-game/ 
export { }

function calPoints(operations: string[]): number {
    const length = operations.length;
    const stack: number[] = [];

    for (let i = 0; i < length; i++) {
        const stackLength = stack.length;

        switch (operations[i]) {
            case "+":
                const first = stack[stackLength - 1];
                const second = stack[stackLength - 2];
                stack.push(first! + second!);
                break;

            case "D":
                const num = stack[stackLength - 1];
                stack.push(2 * num!);
                break;

            case "C":
                stack.pop();
                break;

            default:
                stack.push(Number(operations[i]));
                break;
        }
    }

    return stack.reduce((prev: number, curr: number) => {
        return prev + curr;
    }, 0);
};

console.log(calPoints(["1","C"]));