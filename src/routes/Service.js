import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import nightImg from '../assets/night.jpg';
import Footer from "../components/Footer";
import Trip from './../components/Trip';


function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={nightImg}
                title="Service"
                btnClass="hero-text .hide"
            />
            <Trip />
            <Footer />
        </>
    );
}

export default Service;