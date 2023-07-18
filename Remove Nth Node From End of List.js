
class Node {
    constructor(value){
        this.value = value || null
    }
}

class LinkListed {
    constructor(head){
        this.head = head
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const l = new LinkListed(node1)





var removeNthFromEnd = function(head, n) {
    let res = []
    let node = head
    while(node){
        res.push(node.val)
        node = node.next
    }
    if(res.length === 1) return null
     node = head
     let value = res[res.length - n]
     let index = res.length - n
     let previous = new ListNode(0)
     let i = 0
     while (node){
         if(index === 0 && node.val === value){
             head = head.next
             break
         }
         if(node.val === value && index === i){
             previous.next = node.next
             break
         }
         previous = node
         node = node.next
         i++
     }
     return head
};

console.log(removeNthFromEnd(node1,4));




