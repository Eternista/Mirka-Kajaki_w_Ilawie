import { Banner } from './Components/Banner';
import { InfoSection } from './Components/InfoSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const App = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Banner />
      <InfoSection />
      <footer className="container text-center">Copyright {year}</footer>
    </>
  );
};

export default App;
