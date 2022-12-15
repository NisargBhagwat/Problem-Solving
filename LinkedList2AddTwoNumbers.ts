// https://leetcode.com/problems/add-two-numbers/
export { }

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum: ListNode | null = null;
    let current: ListNode | null = null;
    let carry: number = 0;

    while (l1 || l2) {
        let tempSum = 0;

        if (l1 && l2) tempSum = l1.val + l2.val + carry;
        if (l1 && !l2) tempSum = l1.val + carry;
        if (!l1 && l2) tempSum = l2.val + carry;

        if (tempSum > 9) {
            tempSum = tempSum % 10;
            carry = 1;
        } else {
            carry = 0;
        }

        const newNode = new ListNode(tempSum);
        if (!sum) {
            sum = newNode;
            current = newNode;
        }
        else {
            current!.next = newNode;
            current = newNode;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current!.next! = new ListNode(carry);
    }
    return sum;
};

const list1: number[] = [2, 4, 3];
const list2: number[] = [5, 6, 4];

let l1: ListNode | null = null;
let l2: ListNode | null = null;
let l1Pointer: ListNode | null = null
let l2Pointer: ListNode | null = null;

list1.forEach((node: number) => {
    const newNode = new ListNode(node);
    if (!l1) {
        l1 = newNode;
        l1Pointer = newNode;
    }
    else {
        l1Pointer!.next! = newNode;
        l1Pointer = newNode;
    };
});

list2.forEach((node: number) => {
    const newNode = new ListNode(node);
    if (!l2) {
        l2 = newNode;
        l2Pointer = newNode;
    }
    else {
        l2Pointer!.next! = newNode;
        l2Pointer = newNode;
    };
});

addTwoNumbers(l1, l2);