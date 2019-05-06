const group = ['person', 'car', 'house', 'animate', 'company', 'glass']
function createId(salt, randomLength = 8) {
  return (
    (salt || '') +
    Number(
      Math.random()
        .toString()
        .substr(3, randomLength) + Date.now()
    ).toString(36)
  )
}
function createNodes(num) {
  let datas = []
  for (let i = 0; i < num; i++) {
    let data = {
      id: createId(),
      group: group[Math.floor(Math.random() * group.length)]
    }
    data.label = data.group + '-node' + i
    data.name = data.group + '-node' + i
    datas.push({
      group: 'nodes',
      data,
      id: data.id
    })
  }
  return datas
}
function createEdges(nodes, num) {
  let edges = []
  for (let i = 0; i < num; i++) {
    let target = nodes[Math.floor(Math.random() * nodes.length)].data.id
    let source = nodes.filter(node => node.data.id !== target)[
      Math.floor(Math.random() * (nodes.length - 1))
    ].data.id
    let edge = {
      target,
      source
    }
    edge.label = edge.group + '-edge' + i
    edge.name = edge.group + '-edge' + i
    edges.push({
      data: edge,
      group: 'edges',
      id: edge.id
    })
  }
  return edges
}
function createEdgesFromId(nodes, id) {
  let edges = nodes.map(node => {
    return {
      group: 'edges',
      data: {
        target: node.data.id,
        source: id,
        label: node.data.id + '-' + id,
        name: node.data.id + '-' + id
      }
    }
  })
  return edges
}
function createData(num) {
  let nodes = createNodes(num)
  let edges = createEdges(nodes, num)
  return nodes.concat(edges)
}
function createChildren(id, num) {
  let nodes = createNodes(num)
  let edges = createEdgesFromId(nodes, id)
  return nodes.concat(edges)
}
export default createData(20)
export { createData, createChildren }
