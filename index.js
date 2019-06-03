import { createGitgraph } from "@gitgraph/js";

// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");
const graphOptions = {
  author: 'Chris <chrisgopher@rietta.com>',
  orientation: 'horizontal'
}

// Instantiate the graph.
const gitgraph = createGitgraph(graphContainer, graphOptions);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("master");
master.commit('Initial Commit');
master.commit("1");
master.commit("2");
master.commit('3(squashed commit)');
//master.commit('4');

//const featureBranch = gitgraph.branch("feature-branch");
//featureBranch.commit("3");
//featureBranch.commit("4");
//master.merge(featureBranch)
