function formatProps(boxProps) {
  let labels = {};
  boxProps.children.forEach(child => {
    labels[child.attributes.name] = child.children[0].value;
  });
  boxProps.labels = Object.keys(labels)
    .sort()
    .reduce((a, v) => {
      a[v] = labels[v];
      return a;
    }, {});
  return boxProps;
}

export default { formatProps };
