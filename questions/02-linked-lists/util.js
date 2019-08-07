const newNode = (val, next) => ({
  val,
  next,
})

exports.newNode = newNode

// append l2 to l1
exports.concatList = (l1, l2) => {
  while(l1.next != null) {
    l1 = l1.next
  }
  l1.next = l2
}

exports.arrayToList = arr => {
  if(arr.length === 0) return null

  let node = null

  for(let i = arr.length - 1; i >= 0; i--) {
    node = newNode(arr[i], node)
  }

  return node
}

// handle circulation
exports.listToArray = list => {
  if(list == null) return []
  const result = []
  const seen = new Set()

  do {
    seen.add(list)
    result.push(list.val)
    list = list.next
  } while(list != null && !seen.has(list));

  return result
}
