import Card from "../Card component/Card";

function Main(props) {
  return (
    <main>
      <h2>{props.titolo}</h2>
    <Card colore={props.tema} />
    <Card colore = "dark" />
    </main>
  )
}

export default Main;