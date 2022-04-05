class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    //In this way if we have already have same key it will overwrite it
    this.adjacencyList[vertex] = [];
  }
}
