import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import nightImg from '../assets/2.jpg';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={nightImg}
                title="Contact"
                btnClass="hero-text .hide"
            />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;