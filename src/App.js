import { Header } from './components/Header';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Competence } from './components/Competence';
import { Projet } from './components/Projet';
import { Contact } from './components/Contact';
import { Parallax } from './components/Parallax';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const cheminParallax = 'img/i9iqra3s5y111.jpg';
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    axios.get('/resumeData.json').then((res) => {
      setResumeData(res.data);
      console.log(resumeData);
    }).catch((err) => {
      console.log(err);
    })
  }, []);



  return (
    <div>
      <Header data={resumeData.main} />
      <Description data={resumeData.main} />
      {/* <Parallax cheminImage={'img/7065648.png'} /> */}
      <Competence data={resumeData.resume} />
      <Projet data={resumeData.portfolio} />
      <Parallax cheminImage={cheminParallax} />
      <Contact />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
