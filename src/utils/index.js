function formatProps(boxProps) {
    let labels = {};
    boxProps.children.forEach(child => {
        labels[child.attributes.name] = child.children[0].value;
    });
    boxProps.labels =labels
    return boxProps;
}

export default { formatProps }