// https://leetcode.com/problems/merge-two-sorted-lists/
export { }

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let list: ListNode | null = null;
    let current: ListNode | null = null;

    if (list1.val <= list2.val) {
        list = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        list = new ListNode(list2.val);
        list2 = list2.next;
    }
    current = list;

    while (list1 && list2) {
        let num: number;
        if (list1.val <= list2.val) {
            num = list1.val
            list1 = list1.next;
        }
        else {
            num = list2.val;
            list2 = list2.next;
        };

        const newNode = new ListNode(num);
        current!.next = newNode;
        current = newNode;
    }

    if (list1) current!.next = list1;
    if (list2) current!.next = list2;
    return list;
};

const list1: number[] = [1, 2, 4];
const list2: number[] = [1, 3, 4];

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

mergeTwoLists(l1, l2);