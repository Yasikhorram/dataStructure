class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //In this way if we have already have same key it will overwrite it
    // this.adjacencyList[vertex] = [];
    //If we want only add the key if we dont have the key already then we check first
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}
