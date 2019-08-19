const Queue = {
  new() {
    const queue = []

    return {
      enqueue(val) {
        queue.push(val)
      },

      dequeue() {
        return queue.shift()
      },

      peek() {
        return queue[0]
      }
    }
  },
}

const AnimalShelter = {
  new() {
    const dogQueue = Queue.new()
    const catQueue = Queue.new()
    let id = 0
    const nextID = () => id++

    return {
      enqueue(animal) {
        if(animal.type === "dog") {
          dogQueue.enqueue({animal, id: nextID()})
        }

        if(animal.type === "cat") {
          catQueue.enqueue({animal, id: nextID()})
        }
      },

      dequeueAny() {
        let result

        const dog = dogQueue.peek()
        const cat = catQueue.peek()

        if(dog == null && cat == null) {
          throw new Error("empty queue")
        }

        if(dog == null) {
          result = catQueue.dequeue()
        } else if(cat == null) {
          result = dogQueue.dequeue()
        } else if(dog.id < cat.id) {
          result = dogQueue.dequeue()
        } else {
          result = catQueue.dequeue()
        }

        return result.animal
      },

      dequeueDog() {
        const result = dogQueue.dequeue()

        if(result == null) {
          throw new Error("no dog")
        }

        return result.animal
      },

      dequeueCat() {
        const result = catQueue.dequeue()

        if(result == null) {
          throw new Error("no cat")
        }

        return result.animal
      },
    }
  },
}
/*----------  Test ----------*/
describe("3.6", () => {
  it("should work", () => {
    const s = AnimalShelter.new()
    s.enqueue({type: "dog", name: "dog1"})
    s.enqueue({type: "cat", name: "cat1"})
    s.enqueue({type: "cat", name: "cat2"})
    s.enqueue({type: "dog", name: "dog2"})

    assert.deepEqual(s.dequeueAny(), {type: "dog", name: "dog1"})
    assert.deepEqual(s.dequeueDog(), {type: "dog", name: "dog2"})
    assert.deepEqual(s.dequeueCat(), {type: "cat", name: "cat1"})
    assert.deepEqual(s.dequeueCat(), {type: "cat", name: "cat2"})

    s.enqueue({type: "dog", name: "dog3"})
    s.enqueue({type: "cat", name: "cat3"})
    s.enqueue({type: "dog", name: "dog4"})
    assert.deepEqual(s.dequeueCat(), {type: "cat", name: "cat3"})
    assert.deepEqual(s.dequeueAny(), {type: "dog", name: "dog3"})
    assert.deepEqual(s.dequeueAny(), {type: "dog", name: "dog4"})
  })
})
