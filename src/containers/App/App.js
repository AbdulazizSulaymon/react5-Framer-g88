import Cards from '../Cards';
import Footer from '../Footer';
import './App.css';
import data from "../../data/footerData"

function App() {
  return (
    <div className="App">
      <Cards />
      <Footer data={data} />
    </div>
  );
}

export default App;
