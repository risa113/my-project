import './App.css'
// import Nav from './components/Nav'
import Card from './components/card'


function App() {
  const student = [{ name: "Thariq", description: "React Developer" },
  { name: "Kameel", description: "React Developer" },
  { name: "Nowfal", description: "React Developer" }]

  return (
    <>
      <div className="container">
        <div className="abb">
          <img src="https://tmdigitalgrow.com/mohamed_thariq.png" alt="Thariq" />

          <Card
            title="Thariq"
             description="React Developer"
          
          /> </div>
        <div className="new">
          <Card
            title="Kameel"
            description="React Developer"
          />
        </div>
        <div className="bot">
          <Card
            title="Nowfal"
            description="React Developer"
          />
        </div>
      </div>
      {student.filter((student) => student.name === "Thariq").map((student) => (
        <Card
          title={student.name}
          description={student.description}
        />
      ))}
      {student.map((student) => (
        <Card
          title={student.name}
          description={student.description}
        />
      ))}
    </>
  )
}

export default App