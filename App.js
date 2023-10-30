const heading=React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child1'},[
    React.createElement('h2',{id:'header1'},'Printed using React'),
    React.createElement('h2',{id:'header2'},'Used React CDN Links')
]),React.createElement('div',{id:'child2'},[
    React.createElement('h2',{id:'header1'},'Created an Element'),
    React.createElement('h2',{id:'header2'},'Created a React Nested Elements')
])]
);
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)