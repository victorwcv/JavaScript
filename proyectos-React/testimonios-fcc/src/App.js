
import './App.css';
import  Testimonio  from './componentes/Testimonio.js';
import datos from './datos.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo dicen nuestros alumnos</h1>
        
        <Testimonio 
        nombre= {datos.shawn.nombre}
        pais= {datos.shawn.pais}
        imagen= {datos.shawn.imagen}
        cargo= {datos.shawn.cargo}
        empresa= {datos.shawn.empresa}
        testimonio= {datos.shawn.testimonio} />
        <Testimonio
        nombre= {datos.emma.nombre}
        pais= {datos.emma.pais}
        imagen= {datos.emma.imagen}
        cargo= {datos.emma.cargo}
        empresa= {datos.emma.empresa}
        testimonio= {datos.emma.testimonio}  />
        <Testimonio 
        nombre= {datos.sarah.nombre}
        pais= {datos.sarah.pais}
        imagen= {datos.sarah.imagen}
        cargo= {datos.sarah.cargo}
        empresa= {datos.sarah.empresa}
        testimonio= {datos.sarah.testimonio} />
      </div>
    </div>
  );
}

export default App;
