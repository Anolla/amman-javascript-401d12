class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        // each map object will have start vertex and an array of edges
        this.adjacencyList.set(vertex, [/* edge with the end vertex*/]);
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)
            || !this.adjacencyList.has(endVertex)) {
            console.error('not found!!');
            return;
        }


        const list = this.adjacencyList.get(startVertex);
        list.push(new Edge(endVertex, weight));
    }

    printAll() {
        console.log(graph.adjacencyList);
        for(const [vertex, edge] of graph.adjacencyList.entries()) {
            console.log(vertex, edge);
        }
    }
}

/// this code is to test the graph
const graph = new Graph();
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);

graph.addDirectedEdge(one, three, 5);
graph.addDirectedEdge(one, six);
graph.addDirectedEdge(one, seven);
graph.addDirectedEdge(one, eight);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(seven, eight);
graph.addDirectedEdge(eight, three, 5);
graph.addDirectedEdge(three, two, 5);

graph.printAll();
