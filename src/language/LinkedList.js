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

  checkGuess(guess){
    if(this.head.value.translation === guess) {

      this.head.value.correct_count+=1
      this.head.value.memory_value*=2

      const head = this.shiftWord(this.head.value.memory_value)

      return { correct: true, head }
    } else {

      this.head.value.incorrect_count+=1
      this.head.value.memory_value = 1

      const head = this.shiftWord(this.head.value.memory_value)

      return { correct: false, head }  
    }
  }

  shiftWord(shifts){
    if(this.head.next === null) return

    let current = this.head

    while(shifts > 0 && current.next){
      current = current.next
      shifts--
    }

    current.next = new _Node(this.head.value, current.next)
    this.head = this.head.next

    return this.head.value
  }

}

module.exports = LinkedList