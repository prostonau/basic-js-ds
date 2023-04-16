let list = {
  value: 3,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
		    value: 4,
		    next: {
			    value: 4,
			    next: null
			  }
		}
      }
    }
  }
};

console.log(list)

let data = []

 //data = ['[next][next][next][value]', '[next][next][next][next][value]']
  data = ['[next][next][value]']

 list[data[0]] = 1111
//list[data[1]] = 2222

// list.next.next.next.value = 788888
// list.next.next.next.next = null
console.log(list)



