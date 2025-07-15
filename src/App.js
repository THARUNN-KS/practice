import logo from './logo.svg';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Maincontent from './maincontent.jsx';
function App() {
  return (
    <div className="App">
      <main>
         <Header />
        <img src={logo} alt="logo" ></img>
        <Maincontent />
         <Footer />
      </main>
              <p>{hello()}</p>
    </div>
  );
}

 function hello(){
  console.log("Hello, World!");
  return "Hello, World!";
 }
 
 
export default App;