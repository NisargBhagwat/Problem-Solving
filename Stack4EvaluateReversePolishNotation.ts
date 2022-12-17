// https://leetcode.com/problems/evaluate-reverse-polish-notation/
export { }



console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));function evalRPN(tokens: string[]): number {
    let stack: number[] = [];

    for (let token of tokens) {
        if (token != "+" && token != "-" && token != "*" && token != "/") {
            stack.push((Number(token)));
        } else {
            const val1 = stack.pop()!;
            const val2 = stack.pop()!;

            if (token == "+") {
                stack.push(val1 + val2);
            } else if (token == "-") {
                stack.push(val2 - val1);
            } else if (token == "*") {
                stack.push(val1 * val2);
            } else {
                stack.push(Math.trunc(val2 / val1));
            }
        }
    }
    return stack[0];
};