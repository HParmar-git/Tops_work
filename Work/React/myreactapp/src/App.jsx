
import Navbar from "./components/Navbar";

function App() {

    return (
        <>
            <Navbar />

            {/* Home Section */}
            <section
                id="home"
                className="page-section"
            >
                <div className="container">
                    <h1>Home</h1>
                    <p>
                        Welcome to my React website.
                    </p>
                </div>
            </section>


            {/* About Section */}
            <section
                id="about"
                className="page-section"
            >
                <div className="container">
                    <h1>About</h1>
                    <p>
                        This is the About section.
                    </p>
                </div>
            </section>


            {/* Services Section */}
            <section
                id="services"
                className="page-section"
            >
                <div className="container">
                    <h1>Services</h1>
                    <p>
                        These are our services.
                    </p>
                </div>
            </section>


            {/* Contact Section */}
            <section
                id="contact"
                className="page-section"
            >
                <div className="container">
                    <h1>Contact</h1>
                    <p>
                        Contact us for more information.
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;

