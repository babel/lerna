"use strict";

module.exports = collectDependents;

const has = Function.call.bind(Object.hasOwnProperty);

const forceDirectDependentUpdate = {
  "@babel/helpers": ["@babel/runtime", "@babel/runtime-corejs2"]
};

function collectDependents(nodes) {
  const collected = new Set();

  nodes.forEach(currentNode => {
    if (has(forceDirectDependentUpdate, currentNode.name)) {
      const forced = forceDirectDependentUpdate[currentNode.name];

      currentNode.localDependents.forEach((dependentNode, dependentName) => {
        if (forced.includes(dependentName)) collected.add(dependentNode);
      });
    }
  });

  return collected;
}
