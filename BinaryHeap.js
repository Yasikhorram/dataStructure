class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }


  bubbleUp() {//use the last element indx to find the parent
         let idx = this.values.length - 1;
    const element = this.values[idx];
    // Because if say true it will continues even for negative indx so we say while(idx > 0)
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
        break;
      } else {
        //swap
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        //update indx
        idx = parentIdx;
      }
    }
  }
  extractMax(){
    // remove the first element and replace with last element
    const max = this.values[0]
    const last = this.values.pop()
    //edge case: we want to add and sink down only if we have something in the there
    if(this.values.length > 0) {
      this.values[0] = last
    //trickle down
      this.sinkDown();
    }

    return max;

  }
  sinkDown(){
    // sink down from idx of 0
    let idx = 0 ;
    const length = this.values.length;
    const element = this.values[0]
    while (true){
      //children of that idx, indicies
      let childLeftIdx = 2 * values[idx] + 1;
      let childRughtIdx = 2 * values[idx] + 2;
      let leftChild, rightChild;
      //if we make swap
      let swap = null
      //make sure that we have children at these idx so they are in bound
      if(childLeftIdx < length) {
         leftChild = this.values[childLeftIdx]
         if(leftChild > element ){
           swap = childLeftIdx
         }

      } if (rightChild < length) {
            rightChild = this.values[childLeftIdx];
            if(swap === null && rightChild > element) || (swap !== null && rightChild > leftChild){
              swap = childRughtIdx
            }
      }


      // to get ouf the loop is when we never swap
      if(swap === null ){
        break;
      }
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }


  }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
