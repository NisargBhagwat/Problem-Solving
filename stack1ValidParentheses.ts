// https://leetcode.com/problems/valid-parentheses/
export { }

function isValid(s: string): boolean {
    const length = s.length;
    let stack: string[] = [];

    for (let i = 0; i < length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        } else {
            const topStack = stack[stack.length - 1];
            const char = s[i];

            if (char == ")" && topStack != "(") {
                return false;
            }
            if (char == "]" && topStack != "[") {
                return false;
            }
            if (char == "}" && topStack != "{") {
                return false;
            }
            stack.pop();
        }
    }

    if(stack.length){
        return false;
    }
    return true;
};

console.log(isValid("()"));