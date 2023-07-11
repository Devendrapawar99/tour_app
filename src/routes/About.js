import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import nightImg from '../assets/night.jpg';
import Footer from './../components/Footer';
import AboutUs from "../components/AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={nightImg}
                title="About"
                btnClass="hero-text .hide"
            />
            <AboutUs />
            <Footer />
        </>
    );
}

export default About;