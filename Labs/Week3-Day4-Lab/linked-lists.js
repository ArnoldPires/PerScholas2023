/*
Learning Objectives

Students Will Be Able To:

Define linked lists
Explain the time complexity of linked list operations
Compare and contrast linked lists to Arrays
Visualize a linked list
Traverse a singly linked list
Remove nodes from a singly linked list
*/

//Linked lists are a foundational, "array-like" data structure which appears in other complex data structures
//Linked lists are collection of nodes
//Nodes are also seen in other data structures, but for linked lists, they contain:
//A "data" property, that stores the node's value
//A "next" property, also known as the pointer, which points to the next item in the linked list.
//The last node will have a "next" property set "null", so it is sometimes referred to as the null next node, or the tail
//Because of the pointers, the order of nodes within a linked list are not given by their physical placement in memeory

//Big O notation:
//Is a collection of functions. A function f(n) 
//It helps us analyze and compare algorithms, making it easier to choose the most efficient one for a particular task.
//It's a powerful tool for understanding and optimizing code performance.

//Review of JS Class Syntax
//If you were to implement a linked list, you would create instances of linked lists, much like you create instances of arrays and objects.
//Although we are used to using literals to create arrays([]) and objects ({}), remember that we are able to instantiate them using "classess" as well.

let myArr = new Array();
let myObj = new Object();
//Your goal will be to create a "LinkedList" class, which you would then be able to invoke with the below syntax to create shiny new linked list objects.

//let myLinkedList = new LinkedList();

//JS Class Syntax
//The easiest way for us to create JS classes is to use the class declaration
class LinkedList {

}
//Now you have a class which can be used to create shiny new objects that are instances of our LinkedList class.
//However, if we were to create an instance of this class, it would just be an empty object.
//If we want our objects to hold properties, we will use the "constructor" method to assign properties to them.

//The "constructor" is a method that you add to your class, in which you provide the properties for your objects to have.
//You should always use the "this" keyword to define the property, and then the value can be whatever you want it to be.
class LinkedListTwo {
  constructor() {
    this.head = null;
  }
}
//Well, what if you wanted your properties to have values that can be provided when instantiated? A typical example of this
//would be assigning a name to an instance of the Human class. Or for linked lists, our nodes would have data.
//For that, we will create parameters for the constructor!
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let myNode = new Node(4);

//One thing to note here is that you can call your parameters whatever you want. If you wanted to define the parameter as dinosaur,
//that would be totally fine. You would then say "this.data = dinosaur". But how are multiple parameters assigned from arguments? Positionally!
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let me = new Human('Shaw', 34);

//Finally, let's talk about "instance methods." Some famous instance methods you know might be the array.push() and array.pop() methods.
//These are functions that you invoke on specific instances of your class, and they can be defined like this:
class HumanTwo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old!`)
  }
}
let meTwo = new HumanTwo('Shaw', 34);
meTwo.speak();
//If you ever need to refer to properties of the object that we are using, you must preface the property name with "this"!


//Visualizing a Linked List
//When we create a linked list, we initialize it with a "head" property, which will refer to the first node.
//When you initialize a linked list, head will not point to anything yet, so it will point to "null".
//The easiest place to add more nodes to the linked list is at the end of the list

//Linked List(Head) --> Node(Data, Next) --> (Data, Next) --> null

//Traversing a Linked List with the Walker
//We are aware that accessing a node in a linked list has linear time complexity
//This is because we have to traverse (or walk through) the list until we get to the node we are looking for
//Since we are walking through the linked list, we often call our iterator "walker"

//In order to traverse a linked list, we will need to start at "head", and use the "next" pointers to iterate through the list
let walker = this.head;
while (walker.next) {
  walker = walker.next;
}