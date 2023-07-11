import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Udaypur1 from "../assets/13.jpg";
import Udaypur2 from "../assets/14.jpg";
import Goa1 from "../assets/15.jpg";
import Goa2 from "../assets/16.jpg";

import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tour give you the opportunity to see a lot, within a time frame</p>
            <DestinationData
                className="first-des"
                heading="Udaypur, Rajasthan-The city of lake"
                text="Udaipur, also known as the City of Lakes, is the crown jewel of the state of Rajasthan.
                 It is surrounded by the beautiful Aravalli Hills in all directions, making this city as lovely
                  as it is. This 'Venice of the East' has an abundance of natural beauty, mesmerising temples and
                   breathtaking architecture which makes it a must-visit destination in India.  A boat ride through 
                   the serene waters of Lake Pichola will be enough to prove to you why Udaipur is the pride of Rajasthan."
                img1={Udaypur1}
                img2={Udaypur2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Goa-India"
                text="Goa is a popular tourist destination located on the western coast of India.
                 Known for its beautiful beaches, vibrant nightlife, and rich cultural heritage,
                  it attracts visitors from all over the world. Goa has a diverse mix of Portuguese 
                  and Indian influences, with many historic landmarks and museums showcasing its 
                  fascinating history. Visitors can explore the stunning churches and temples, or 
                  take part in water sports like parasailing and windsurfing. The state also boasts
                   a thriving food scene, with a variety of delicious seafood and local dishes on 
                   offer. Goa truly has something for everyone, making it an ideal destination for
                    a relaxing or adventurous holiday."
                img1={Goa1}
                img2={Goa2}
            />

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Taal Volcano is a complex volcano located in the province of Batangas,
            Philippines. It is considered one of the most active volcanoes in the
            country, with 34 recorded eruptions since 1572. The volcano is situated
            on an island within a lake, creating a unique and picturesque landscape.
            The last eruption occurred in January 2020, resulting in ashfall and the
            evacuation of thousands of residents in nearby towns. Despite its
            dangerous activity, Taal remains a popular tourist destination, attracting
            visitors who want to witness its beauty and natural wonders. The Philippine
            government continues to closely monitor the volcano to ensure the safety
            of the people living in its vicinity."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Mt. Daguldul is a majestic mountain located in the southern part of Batangas,
             Philippines. Its name is derived from the word 'dulul' which means 'steep' in the 
             local language. With an elevation of 670 meters above sea level, it offers 
             breathtaking views of the surrounding landscapes and the nearby Verde Island Passage.
              Trekking to the summit takes around 2-3 hours, passing through lush forests, streams,
               and rocky terrains. The mountain is also home to various flora and fauna, including
                endemic species such as the Philippine tarsier and the Palawan bearcat. Mt. Daguldul
                 is a popular destination for adventure-seekers and nature enthusiasts alike, providing
                  a unique and memorable experience."
                img1={Mountain3}
                img2={Mountain4}
            />


        </div>
    );
};

export default Destination;


//If you want to add another destination the just copy this "<DestinationData/>" component and paste here and add the new data only