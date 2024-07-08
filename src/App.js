import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import  Home  from "./components/Home";
import NavBar from "./components/NavBar";
import { Project } from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Project/> 
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
