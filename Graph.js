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
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1
    );
  }
  removeVertex(v) {
    console.log("=----->", this.adjacencyList[v].length);

    for (var i = this.adjacencyList[v].length - 1; i >= 0; i--) {
      console.log("what is adjacencylis[v][i] ", this.adjacencyList[v][i]);
      this.removeEdge(v, this.adjacencyList[v][i]);
      console.log(
        "this.adjacencyList[v][i]--------> ",
        this.adjacencyList[v][i]
      );
    }
    delete this.adjacencyList[v];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Tehran");
g.addVertex("Austin");
g.addVertex("Rome");

g.addEdge("Tokyo", "Austin");
g.addEdge("Tehran", "Austin");

console.log("before remove", g);

g.removeVertex("Tehran");
console.log("after remove", g);
