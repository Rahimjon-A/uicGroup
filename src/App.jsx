import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Portfolio/>
      <Services title={"Services"} desc={'OUR'} />
      <Partners/>
      <Footer/>
    </>
  );
};

export default App;
