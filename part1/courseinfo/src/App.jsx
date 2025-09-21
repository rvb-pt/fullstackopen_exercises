const App = () => {

  // Main Object
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React',exercises: 10},
      {name: 'Using props to pass data',exercises: 7},
      {name: 'State of a component',exercises: 14}
    ]
  };

  // Components
  const Header = (props) => <h1>{props.course.name}</h1>
  const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>
  const Content = (props) => (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
  const Total = (props) => {
    const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return <p>TOTAL: {total}</p>
};

  // Layout / Structure (JSX using components)
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
};

export default App
