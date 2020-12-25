class _Node {
  constructor(value, next) {
    this.value = value,
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  makeLinkedList(words){
    this.head = new _Node(words[0], null)  
    let currentNode = this.head
    for(let i = 1; i< words.length; i++){
      currentNode.next = new _Node(words[i], null)
      currentNode = currentNode.next
    }

    return this.head
  }

  checkGuess(word, guess){
    if(this.head.value.translation === guess) {
      this.head.value.correct_count++;
      console.log(this.head.value.memory_value, 'before')
      this.head.value.memory_value*2;
      console.log(this.head.value.memory_value, 'after')
      
    } else {
      this.head.value.incorrect_count--;
      this.head.value.memory_value = 1
    }
  }

}

module.exports = LinkedList