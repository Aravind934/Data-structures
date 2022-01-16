//simple priority queue
//Note : you can build your O(logn) priority queue instead of this
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.values.sort((a, b) => a.priority - b.priority);
    return true;
  }
  dequeue() {
    return this.values.shift();
  }
}

//graph
//Note : edge cases not covered here
class WeightedGraph {
  constructor() {
    this.list = {};
  }
  addVertex(vertex) {
    if (!this.list[vertex]) this.list[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.list[v1].push({ value: v2, weight });
    this.list[v2].push({ value: v1, weight });
  }
  dijkstra(start, finish) {
    let smallest,
      newDistance,
      nextNode,
      distance = {},
      path = [],
      previous = {};
    //setup the initial things
    let pq = new PriorityQueue(); //To get shotest distance node so far we visited
    for (let node in this.list) {
      if (node === start) {
        distance[node] = 0;
        pq.enqueue(node, 0);
      } else {
        distance[node] = Infinity;
        pq.enqueue(node, Infinity);
      }
      previous[node] = null;
    }
    //write the logic
    while (pq.values.length) {
      smallest = pq.dequeue().value;
      if (smallest === finish) {
        //End Up
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      } else {
        //visit the neighbor nodes
        for (let node of this.list[smallest]) {
          //calculate new distance
          newDistance = distance[smallest] + node.weight;
          nextNode = node.value;
          if (newDistance < distance[nextNode]) {
            distance[nextNode] = newDistance;
            previous[nextNode] = smallest;
            pq.enqueue(nextNode, newDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

//To make a graph

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
