
import luc from './Images/main.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Dreamteam from './components/Dreamteam';
import Forgalaxy from './components/Forgalaxy';
import Footer from './components/Footer';
function App() {
  return (
    <div classNameName='container-fluid'>
    <Header/>
    <main className="clearfix">
        <section className="float-start me-3 w-25">
            <img className="w-100" src={luc} alt="Luke Skywalker"/>
        </section>
        <Dreamteam />
        <Forgalaxy/>
    </main>
<Footer/>
</div>
  );
}

export default App;
