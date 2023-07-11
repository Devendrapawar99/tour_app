import Navbar from "../components/Navbar";
import Hero from './../components/Hero';
import image12 from '../assets/12.jpg';
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={image12}
                title="Your Journy Your Story"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    );
}

export default Home;


//Note: if i change component to arrow function then this component wont work here 