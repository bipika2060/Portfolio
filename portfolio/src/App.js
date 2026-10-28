import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Footer from "./components/Footer/footer";
import Portfolio from "./components/Portfolio/portfolio";
import Client from "./components/Client/client";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
function App() {
	return (
        <div className="App">
            <Navbar />

            <section id="Intro">
                 <Intro />
            </section>

            <section id="About">
                <About />
            </section>

            <section id="Portfolio">
                <Portfolio />
            </section>

            <section id="Client">
                <Client />
            </section>

            <section id="Contact">
                <Contact />
            </section>

            <Footer />

        </div>
    )
}

export default App;