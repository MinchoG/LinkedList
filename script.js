class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  
    show() {
      return this.element;
    }
  
    getNext() {
      return this.next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.pointer = null;
    }
  
    size() {
      return this.length;
    }
  
    getHead() {
      return this.head;
    }
  
    add(element) {
      let newNode = new Node(element);
      if (this.head === null) {
        this.head = newNode;
        this.pointer = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.pointer = newNode;
      }
      this.length++;
    }
  
    removeElement(element) {
      let currentNode = this.head;
      let previousNode;
      if (currentNode.element === element) {
        this.head = currentNode.next;
      } else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          if (currentNode.next) {
            currentNode = currentNode.next;
          } else {
            return console.log('no such element in Linked list');
          }
        }
        previousNode.next = currentNode.next;
        console.log('Element' + element + 'removed');
      }
      this.length--;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
    getItemAt(index) {
      //return element @ index
      let currentIndex = 0;
      let currentNode = this.head;
      while (index !== currentIndex) {
        currentNode = currentNode.next;
        currentIndex++;
        if (currentNode === null) {
          return console.log('no element at this index');
        }
      }
      if(index===currentIndex){
        return console.log('NODE AT INDEX:' + index, currentNode);
      }
      if(currentNode===null) {
        return console.log('no element at this index');
      }
      return console.log('NODE AT INDEX:' + index, currentNode);
    }
  
    removeElementAt(index) {
      //remove element @ index
      let currentIndex = 0;
      let currentNode = this.head;
      let previousNode;
      
      while (index !== currentIndex) {
        previousNode = currentNode;
        // console.log('previousNode = currentNode(previous node is:)', previousNode)
        currentNode = currentNode.next;
        // console.log('currentNode = currentNode.next(current node is:)', currentNode)
        currentIndex++;
        if (currentNode === null) {
          return console.log('no element at this index');
        }
      }
      if (index === currentIndex && currentNode === null) {
        return console.log('no element at this index');
      } else {
        this.head = currentNode.next;
        console.log(currentNode,`is removed at index ${index}`)
      }
      this.length--;
    }
  
    addItemAt(index, element) {
      let node = new Node(element);
      let currentNode = this.head;
      let currentIndex = 0;
      let previousNode;
      if(index===currentIndex) {
        this.head = node;
        node.next = currentNode;
        this.length++;
        return console.log('succesfully added '+ element +' at index ' + index)
      }
      while(index<this.length) {
        previousNode = this.head;
        currentNode = previousNode.next;
        currentIndex++;
        if(index===currentIndex) {
          previousNode.next = node;
          node.next = currentNode;
          this.length++;
          return console.log('succesfully added '+ element +' at index ' + index);
        } 
      }
      return console.log('no such index in the linked list');
    } 
  }
  
  
  
  var z = new LinkedList();
  
  z.add('grandpa');
  z.add('veri');
  z.add('car');
  z.add('tzar');
  console.log(z);
  z.removeElement('grandpa');
  console.log(z);
  z.add('hey');
  
  z.removeElementAt(0);
  console.log(z);
  z.addItemAt(1, 'bob'); //car, bobb, tzar, hey
  console.log(z);
  
  
  
  