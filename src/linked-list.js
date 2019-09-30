const Node = require('./node');

class LinkedList {
    constructor() {
       this.length = 0;
       this._head = null;
       this._tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this._head === null) {
          this._head = newNode;
          this._tail = newNode;
        } else {
          newNode.prev = this._tail;
          this._tail.next = newNode;
          this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        if(!this._head) {
            return this._head;
        }
        return this._head.data;
    }

    tail() {
        if(!this._tail) {
          return  this._tail
        }
        return this._tail.data;

    }

    at(index) {
        let targetNode = this._head;
        for (let i = 0; i < index; i++) {
            targetNode = targetNode.next;
        }
        return targetNode.data;
    }

    insertAt(index, data) {
     if (index === 0) {
       this.append(data);
       return this;
     }

        let targetNode = this._head;
        for (let i = 0; i < index; i++) {
            targetNode = targetNode.next;
        }

            let newNode = new Node(data, targetNode.prev , targetNode.prev.next );
            targetNode.prev.next = newNode;
            targetNode.prev = newNode;
            this.length++;
            return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let targetNode = this._head;
        for (let i = 0; i < index; i++) {
            targetNode = targetNode.next;
        }
        if (!targetNode) {
            return this;
        }


        if (targetNode.next) {
            targetNode.next.prev = targetNode.prev;
        }
        if (targetNode.prev) {
            targetNode.prev.next = targetNode.next;
        }

        return this;
        
    }

    reverse() {
    let current = this._head;
    let prev = null;

    while (current) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    this._tail = this._head;
    this._head = prev;
    return this;

    }

    indexOf(data) {
            let targetNode = this._head;
        for (let i = 0; i < this.length; i++) {
            if(targetNode.data === data) {
                return i;
            }
            targetNode = targetNode.next;
        }
           
            return -1;
        }
      
    }

module.exports = LinkedList;
