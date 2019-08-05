const newNode = (val, next) => ({
  val,
  next,
})

exports.newNode = newNode

exports.arrayToList = arr => {
  if(arr.length === 0) return null

  let node = null

  for(let i = arr.length - 1; i >= 0; i--) {
    node = newNode(arr[i], node)
  }

  return node
}

exports.listToArray = list => {
  if(list == null) return []
  const result = []

  do {
    result.push(list.val)
    list = list.next
  } while(list != null);

  return result
}
