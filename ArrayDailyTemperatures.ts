// https://leetcode.com/problems/daily-temperatures/
export { }

function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;
    let result: number[] = Array(length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < length; i++) {
        while (
            stack.length !== 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const top = stack.pop()!;
            result[top] = i - top;
        }
        stack.push(i);
    }

    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));