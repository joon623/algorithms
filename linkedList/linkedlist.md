# Linked List
Linked List는 Node라는 구조체가 연결되는 형식으로 데이터를 저장하는 자료구조이다.
Linked List는 메모리상에서 비연속적으로 저장이 되어 있지만, 각각의 node가 다음 노드의 메모리 주소값을 가리킴으로써 
논리적으로 연속성을 갖게 된다. 즉, Linked list에는 메모리상에서 연속성을 유지하지 않아도
되기 때문에 메모리 사용이 좀 더 자유롭다. 다만, Node에 Address도 저장하기 때문에 
데이터 하나당 메모리 크기가 커지게 된다.

```python
class Node:
    def __init__(self, value = 0, next =None):
        self.value = value
        self.next = next

first = Node(1)
second = Node(2)
third = Node(3)
first.next = second
second.next = third
first.value = 6

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while(current.next):
                current = current.next
            current.next = new_node
            
    def get(self, idx):
        current = self.head
        for _ in range(idx):
            current = current.next
        return current.value
    
    def insert(self, idx, value):
        pass
    
    def remove_at(self):
        pass
            
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)

ll.get(0)
ll.get(1)
ll.get(3)
``` 

