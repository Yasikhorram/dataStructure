class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    //use the last element indx to find the parent
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
}
let heap = new MaxBinaryHeap();
heap.insert(55);
