const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }


// class ListNode {
//      constructor(x) {
//        this.value = x;
//        this.next = null;
//      }
//    }

   

function  removeKFromList(l,k) {


  console.log("l",l)

  function listLength(list) {
    let tmp = list;
    let i = 0;
  
    while (tmp) {
      tmp = tmp.next;
      ++i;
    }

    return i
  
  }

  function getValues(list) {
    let out = []
    let tmp = list;
    let i = 0;
  
    while (tmp) {
      out.push(tmp.value)
      tmp = tmp.next;
      ++i;
    }

    return out
  
  }

  function getBadIndexies(list) {
    let out = []
    let tmp = list;
    let i = 0;
  
    while (tmp) {
      if (tmp.value == k) out.push(i)
      tmp = tmp.next;
      ++i;
    }

    return out
  
  }

   function getNexts(list) {
    let out = []
    let tmp = list;
    let i = 0;
  
    while (tmp) {
      out.push(tmp.next)
      tmp = tmp.next;
      ++i;
    }

    return out
  
  }

 
  function printList(list) {

    console.log("list.value", list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }


  function generateArray(list, correctlength){
    let tmp = list
    let outArray = []
    let pair = []
    let flag2 = 0
    let flag3 = 1

    if (bads.includes(0))
    {
      pair = [tmp.next.value, tmp.next.next];
      outArray.push([...pair])     
      flag2 = 3

      pair = []
    }
    

 
      console.log("outArray after 0 = ",outArray)

      for (let i = 0+flag2; i < (correctlength+flag2); ++i){
      console.log("i= ",i)     

              console.log("correctlength >>>>>>>>>>>>> ", correctlength)
            if (bads.includes(correctlength) && i == correctlength-1)
            {
              console.log("ENterrrrrrrrrrr")
              if (i==1) {pair = [tmp.next.value, null]; console.log("1111", tmp.next);}
              if (i==2) {pair = [tmp.next.next.value, null]; console.log("2222");}
              if (i==3) {pair = [tmp.next.next.next.value, null];console.log("3333");}
              if (i==4) {pair = [tmp.next.next.next.next.value, null];console.log("4444");}
              outArray.push([...pair])     
              flag3 = 0
              pair = []
            }
      
      if (flag3){
      if (bads.includes(i)) {
        
        if (i==2) pair = [tmp.next.value, tmp.next.next.next];
        if (i==3) pair = [tmp.next.next.value, tmp.next.next.next.next];
        if (i==4) pair = [tmp.next.next.next.value, tmp.next.next.next.next.next];
        if (i==5) pair = [tmp.next.next.next.next.value, tmp.next.next.next.next.next.next];
        //if (i==6) pair = [tmp.next.next.next.next.next.value, tmp.next.next.next.next.next.next.next];
        console.log("current bad i = " + i, "pair = " , pair)
        outArray.push([...pair])       
      }
      else{

        if (i==0) pair = [tmp.value, tmp.next];
        if (i==1) pair = [tmp.next.value, tmp.next.next];
        if (i==2) pair = [tmp.next.next.value, tmp.next.next.next];
        if (i==3) pair = [tmp.next.next.next.value, tmp.next.next.next.next];
        if (i==4) pair = [tmp.next.next.next.next.value, tmp.next.next.next.next.next];
        if (i==5) pair = [tmp.next.next.next.next.next.value, tmp.next.next.next.next.next.next];      
        console.log("current good i = " + i, "pair = " , pair)
        outArray.push([...pair])     
      }
      pair = []
    }
    
  }
   


    return outArray

  }


  function arrayToList (l,arr) {
    let tmp = l
    for (let i = 0; i < (values.length-bads.length); i++){
      if (i==0) {tmp.value = arr[i][0]; tmp.next = arr[i][1];}
      if (i==1) {tmp.next.value = arr[i][0]; tmp.next.next = arr[i][1];}
      if (i==2) {tmp.next.next.value = arr[i][0]; tmp.next.next.next.next = arr[i][1];}
      if (i==3) {tmp.next.next.next.value = arr[i][0]; tmp.next.next.next.next.next = arr[i][1];}
    }
    return tmp
  }


  // function editList(list) {
  //   let tmp = list 
  //   let i = 0;

  //   // while (tmp) {
      
  //   //   tmp.value;
  //   //   tmp = tmp.next;
  //   //   console.log( )
  //   // }

  //   for (let i = 0; i < (values.length); i++) {
  //     if (bads.includes(i)){
  //       tmp.value = values[i+1] 
  //       tmp.next = nexts[i+1]       
  //       console.log("Enter with i = ", i, "Do action!" )
  //       break
  //     }
  //     // else{
  //     //    console.log("Enter with i = ", i, "Do action!" )
  //     //   tmp.value = values[i] 
  //     //   tmp.next = nexts[i]
  //     //   break
  //     // }
  //   }

  //   return tmp
  // }

  // function editList(list) {
  //   let tmp = list 
  //   tmp.next = null
  //   console.log("tmp = ",tmp)
  //   console.log("typeof tmp = ",typeof tmp)
  //   let i = 0;

  //   // while (tmp) {
      
  //   //   tmp.value;
  //   //   tmp = tmp.next;
  //   //   console.log( )
  //   // }

  //   for (let i = 0; i < (values.length); i++) {

  //     if (nexts[i] == null) 
  //     {
  //       console.log("Exit from loop with i = ",i)
  //       break; 
  //     }
      
  //     if (values[i] == 3){
  //       if (i==0) {tmp.value = values[i+1];tmp.next = nexts[i+1];++i;}
  //       // if (i==1) {tmp.next.value = values[i+1];tmp.next.next = nexts[i+1];++i;}
  //       // if (i==2) {tmp.next.next.value = values[i+1];tmp.next.next.next = nexts[i+1];++i;}
  //       // if (i==3) {tmp.next.next.next.value = values[i+1];tmp.next.next.next.next = nexts[i+1];++i;}
  //       // if (i==4) {tmp.next.next.next.next.value = values[i+1];tmp.next.next.next.next.next = nexts[i+1];++i;}
  //       // if (i==5) tmp.next.next.next.next.next.value = values[i+1];tmp.next.next.next.next.next.next = nexts[i+1]}
             
  //       console.log("Enter with i = ", i, "Do Spechal action!" )
        
  //     }
  //     else{
  //       if (i==0) {tmp.value = values[i];tmp.next = nexts[i]}
  //       // if (i==1) {tmp.next.value = values[i];tmp.next.next = nexts[i]}
  //       // if (i==2) {tmp.next.next.value = values[i];tmp.next.next.next = nexts[i]}
  //       // if (i==3) {tmp.next.next.next.value = values[i];tmp.next.next.next.next = nexts[i]}
  //       // if (i==4) {tmp.next.next.next.next.value = values[i];tmp.next.next.next.next.next = nexts[i]}
  //       // if (i==5) {tmp.next.next.next.next.next.value = values[i];tmp.next.next.next.next.next.next = nexts[i]}
             
  //       console.log("Enter with i = ", i, "Do Normal action!" )
  //     }

  //     console.log('PART 2 ',i,'--------------------------------------------')

  //     if (i> 0 && values[i+1] == 3){
        
  //       if (i==1) {tmp.next.value = values[i];tmp.next.next = nexts[i+1];++i;}
  //       if (i==2) {tmp.next.next.value = values[i];tmp.next.next.next = nexts[i+1];++i;}
  //       if (i==3) {tmp.next.next.next.value = values[i];tmp.next.next.next.next = nexts[i+1];++i;}
  //       if (i==4) {tmp.next.next.next.next.value = values[i];tmp.next.next.next.next.next = nexts[i+1];++i;}
  //       // if (i==5) tmp.next.next.next.next.next.value = values[i+1];tmp.next.next.next.next.next.next = nexts[i+1]}
             
  //       console.log("Enter with i = ", i, "Do Spechal action!" )
        
  //     }
  //     else{
       
  //       if (i==1) {tmp.next.value = values[i];tmp.next.next = nexts[i]}
  //       if (i==2) {tmp.next.next.value = values[i];tmp.next.next.next = nexts[i]}
  //       if (i==3) {tmp.next.next.next.value = values[i];tmp.next.next.next.next = nexts[i]}
  //       if (i==4) {tmp.next.next.next.next.value = values[i];tmp.next.next.next.next.next = nexts[i]}
  //       // // if (i==5) {tmp.next.next.next.next.next.value = values[i];tmp.next.next.next.next.next.next = nexts[i]}
             
  //       console.log("Enter with i = ", i, "Do Normal action!" )
  //     }





  //     console.log('tmp= ',tmp,'')
  //     console.log('i= ',i,'--------------------------------------------')
     
  //   }

  //   return tmp
  // }


  
  printList(l)

  let length = listLength(l)
  console.log("listLength = ",length)

  let values = getValues(l)
  console.log("Values = ",values)

  let bads = getBadIndexies(l)
  console.log("Bads = ",bads)

  let nexts = getNexts(l)
  console.log("Nexts = ",nexts)

  // let out = editList(l)
  // console.log("Out = ",out)

  function printList(list) {
    let tmp = list;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    while (tmp) {
      console.log("tmp.value",tmp.value," | tmp.next",tmp.next);
      console.log("-----------");
      tmp = tmp.next;
    }
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
  
  }

  out = generateArray(l,values.length-bads.length)

  console.log("out = ", out)
  console.log("outout[1][1] = ", out[1][1])

  return arrayToList(l,out)
  
  // printList(out);


  // function newEditList(list) {
  //   let tmp = list;
  //   let i = 0;
  
  //   while (tmp) {
  //     console.log("tmp.value = " ,tmp.value)
  //     console.log("tmp.next = ",  tmp.next)
  //     if (bads.includes(i-1)){
  //       tmp = nexts[i+1]
  //     } else {
  //       tmp = tmp.next;}
  //     ++i;
  //   }

  //   return tmp
  
  // }

  // values = getValues(l)
  // console.log("Values 2 = ",values)

  // bads = getBadIndexies(l)
  // console.log("Bads 2 = ",bads)

  // nexts = getNexts(l)
  // console.log("Nexts 2 = ",nexts)

  // out = newEditList(l)
  // console.log("Out 2 = ",out)
  

  // console.log('-----------------------------------------')
  // console.log("l output",out)
  // printList(out)

  }



module.exports = {
  removeKFromList
};
