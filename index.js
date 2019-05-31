import { createGitgraph } from "@gitgraph/js";

// Get the graph container HTML element.
const graphContainer = document.getElementById("graph-container");

// Instantiate the graph.
const gitgraph = createGitgraph(graphContainer);

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch("master");
master.commit("Initial commit");
master.commit("1");
master.commit("2");
master.commit('3');
master.commit('4');

/*const featureBranch = gitgraph.branch("feature-branch");*/
/*featureBranch.commit("Add TypeScript");*/
//master.squash(featureBranch).tag("v1.0.1");
