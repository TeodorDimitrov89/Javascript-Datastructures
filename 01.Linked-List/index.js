function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);

  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }

  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);

  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }

  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return;
  }

  const val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  const val = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return val;
};

LinkedList.prototype.search = function (searchVal) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchVal) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function (value) {
  let currentNode = this.head;
  let currentIndex = 0;
  let indexes = [];

  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

const ll = new LinkedList();

ll.addToTail(100);
ll.addToTail(200);
ll.addToTail(300);
ll.addToTail(300);
ll.addToTail(300);
ll.addToTail(300);

// ll.removeHead(); // 300
// ll.removeHead(); // 200
// console.log(ll.removeHead()); // 100
// ll.addToTail(2344);
// console.log(ll.removeTail());

console.log(ll.indexOf(300));
