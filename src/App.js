import NavBar from "./navBar/navBar"
import ItemListContainer from "./itemListContainer/itemListContainer"



function App() {

  const listaNombres = [
    {Nombre:"Alfonso", Apellido: "Martinez"},
    {Nombre:"Raul", Apellido: "Juarez"},
    {Nombre:"Miguel", Apellido: "Gomez"},
  ]
  return (
    <>
      <header className="App-header">
      <nav>
      <NavBar />
      </nav>
      </header>
      
        <div>
          <ItemListContainer greeting={listaNombres[2].Nombre}/>
        </div>
      
    </>
  );
}

export default App;
