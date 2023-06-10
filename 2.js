class ListNode {
    constructor(val, node){
        this.val = (val===undefined ? 0 : val)
        this.next = node
    }
}

const l1a = new ListNode(2)
const l1b = new ListNode(4)
const l1c = new ListNode(3)

l1a.next = l1b
l1b.next = l1c

const l2a = new ListNode(5)
const l2b = new ListNode(6)
const l2c = new ListNode(4)


l2a.next = l2b
l2b.next = l2c


var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const newVal = (n1.val || 0) + (n2.val || 0) + rest;
    const nextNode = iter(n1.next, n2.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
   }
   return iter(l1, l2);
};

console.log(addTwoNumbers(l1a, l2a))

