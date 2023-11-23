/*
Name : Vaibhav Gaikwad
Div : A
ROllNo. : 2301045
*/

class Graph 
{
  constructor() 
  {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) 
  {
    if (!this.adjacencyList.has(vertex))
     {
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdge(vertex1, vertex2) 
  {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) 
    {
      this.adjacencyList.get(vertex1).push(vertex2)
      this.adjacencyList.get(vertex2).push(vertex1) // For an undirected graph
    }
  }

  depthFirstTraversal(startingVertex, visited = new Set()) 
  {
    visited.add(startingVertex)
    console.log(startingVertex)

    var neighbors = this.adjacencyList.get(startingVertex)
    for (const neighbor of neighbors) 
    {
      if (!visited.has(neighbor)) 
      {
        this.depthFirstTraversal(neighbor, visited)
      }
    }
  }

  breadthFirstTraversal(startingVertex) 
  {
    var queue = [startingVertex]
    var visited = new Set()
    visited.add(startingVertex)

    while (queue.length > 0) 
    {
      const currentVertex = queue.shift()
      console.log(currentVertex)

      const neighbors = this.adjacencyList.get(currentVertex)
      for (const neighbor of neighbors) 
      {
        if (!visited.has(neighbor))
         {
          queue.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log('Depth-First Traversal:');
graph.depthFirstTraversal('A');

console.log('\nBreadth-First Traversal:');
graph.breadthFirstTraversal('A');
