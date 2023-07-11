import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia is a Southeast Asian country known for its vast archipelago,
                     diverse culture, and stunning natural beauty. With over 17,000 islands, it
                    offers a plethora of experiences ranging from bustling cities to tranquil
                    beaches, ancient temples, and active volcanoes. Its cuisine, history, and 
                    friendly people make Indonesia a must-visit destination for travelers."
                />

                <TripData
                    image={Trip2}
                    heading="Trip in Malashiya"
                    text="Malaysia is a Southeast Asian country known for its vibrant mix of cultures,
                     breathtaking natural beauty, and modern cities. The country boasts a rich history,
                    evident in its ancient temples and colonial architecture. Visitors can explore the
                    bustling capital city of Kuala Lumpur, relax on pristine beaches, or immerse themselves
                    in the lush rainforests."
                />

                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="France is a Western European country known for its rich history, iconic landmarks,
                     and world-renowned cuisine. Visitors can explore the romantic city of Paris, home to the
                    Eiffel Tower and the Louvre Museum, or indulge in the country's famous wine and gastronomy.
                    France is also known for its picturesque countryside, stunning coastline, and vibrant cultural events."
                />
            </div>
        </div>
    );
}
export default Trip;