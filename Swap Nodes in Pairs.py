class Node:
    def __init__(self,val) :
        self.val = val
        self.next = None

    def __str__(self):
        return str(self.val)


node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)


node1.next=node2
node2.next=node3
node3.next=node4


def print_linked_list(head):
    current = head
    while current is not None:
        print(current.val, end=" -> ")
        current = current.next
    print("None")


def swapPairs(head):
        if not head : return head
        prev = None
        cur = head
        ans = head.next
        while cur and cur.next:
            adj = cur.next
            ans.__str__()
            if prev : prev.next = adj
            cur.next = adj.next
            adj.next = cur
            prev = cur
            cur = cur.next
        print_linked_list(ans or head)
        return ans or head


swapPairs(node1)
