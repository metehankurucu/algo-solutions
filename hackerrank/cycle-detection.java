/*
* For your reference:
*
* SinglyLinkedListNode {
*     int data;
*     SinglyLinkedListNode next;
* }
*
*/
static boolean hasCycle(SinglyLinkedListNode head) {
    ArrayList<SinglyLinkedListNode> nodes = new ArrayList<SinglyLinkedListNode>();
    SinglyLinkedListNode current = head;
    
    while(current != null){
        boolean has = nodes.contains(current);
        if(has) return true;
        
        nodes.add(current);
        current = current.next;
    }
    
    return false;
}