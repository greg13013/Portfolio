import { Header } from './components/Header';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Competence } from './components/Competence';
import { Projet } from './components/Projet';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Description />
      <Competence />
      <Projet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
