import Header from './Components/Header';
import SectionOne from './Components/section1';
import SectionThree  from './Components/section3';
import SectionTwo from './Components/section2';
import './App.css';

function App() {
  return (<div style={{display:"flex", flexDirection:'column'}}>
   <Header />
   <SectionOne />
   <SectionTwo />
   <SectionThree />
   </div>
  );
}

export default App;
