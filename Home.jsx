import React, {useState} from "react";
import './stylesheet/home.css';
import Navbar from "./NavBar";
import services from './images/services.png';
import payment from './images/payment.png';
import form from './images/form.png';
import yojana from './images/yojana.jpg';
import Background from './images/WhatsApp Image 2024-10-02 at 8.13.57 PM.jpeg';
import Atal from './images/atal.jpeg';
import Mgm from './images/mgm.jpg';
import Kc from './images/kc.jpeg';
import Rdm from './images/rdm.jpeg';
import { database } from "../firebase";
import { ref, set, push } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';





const Dashboard = () =>{
    return(
        <div className="dashboard">
            <div className="about">
                <h1>RMC Sewa</h1>
                <p>Welcome to the RMC Sewa, your go-to platform for managing municipal services with ease and convenience. Modeled after the Rajkot Municipal Corporation (RMC) website, we aim to provide all the standard functionalities of accessing services, schemes, and updates—but with a few enhancements to make the user experience even better.</p>
                <p className="boldText">1. Form Demo with Fake Details:-</p>
                <p className="marginText">Struggling with how to fill out forms? No worries! Our platform offers detailed demos of various forms with pre-filled fake details, giving users a clear understanding of how to fill out the required information accurately. This feature ensures that you never have to worry about filling forms incorrectly.</p>
                <p className="boldText">2. Real-time Scheme Notifications:-</p>
                <p className="marginText">Registered for a scheme? You’ll never miss an opportunity! Our platform keeps track of all your registered schemes and instantly notifies you as soon as they open, so you can stay ahead without the hassle of constant checking.</p>
                <p className="boldText">3. Seamless Access to Services:-</p>
                <p className="marginText">Like the official RMC website, we provide easy access to essential services such as property tax payments, birth/death certificates, and other civic amenities. Our user-friendly interface ensures that all services are just a click away.</p>
                <p className="boldText">4. News and Announcements:-</p>
                <p className="marginText"> Stay in the know with our latest news and updates section, covering all relevant municipal announcements, upcoming projects, and new policies.</p>

                <div className="sewas">
                    <div className="services">
                        <img src={services} alt="" />
                        <button className="btn">Services</button>   
                    </div>
                    <div className="payment">
                        <img src={payment} alt="" />
                        <button className="btn">Payment</button> 
                    </div>
                    <div className="form">
                        <img src={form} alt="" />
                        <button className="btn">Form</button> 
                    </div>
                    <div className="yojana">
                        <img src={yojana} alt="" />
                        <button className="btn">Yojana</button> 
                    </div>
                </div>
            </div>

            <div className="note">
                <h2>Announcement:- </h2>
                <p>Announcements</p>
            </div>
        </div>
    )
}

const Service = () =>{
    return(
        <div className="maincon">
            <h1>Our Services</h1>
            <div className="serviceContainer1">
                <div className="item">
                    <img src="https://vmc.gov.in/images/online_payment.svg" alt="" />
                    <Link to="/service"><h3>Citizen Services</h3></Link>
                    {/* <h3>Citizen Services</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/tender.svg" alt="" />  
                    <Link to="/service"><h3>Tender</h3></Link> 
                    {/* <h3>Tender</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/recruitment.svg" alt="" />
                    <Link to="/service"><h3>Recruitment</h3></Link>
                    {/* <h3>Recruitment</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/medical%20facility.svg" alt="" />
                    <Link to="/service"><h3>Hospital Registration</h3></Link>
                    {/* <h3>Hospital Registration</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/waterlevel.svg" alt="" />
                    <Link to="/service"><h3>Water Level Statistics</h3></Link>
                    {/* <h3>Water Level Statistics</h3> */}
                </div>
            </div>
            <div className="serviceContainer2">
                <div className="item">
                    <img src="https://vmc.gov.in/images/AffordableHousing.svg" alt="" />
                    <Link to="/service"><h3>Affordable Housing Cell</h3></Link>
                    {/* <h3>Affordable Housing Cell</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/complain.svg" alt="" />
                    <Link to="/service"><h3>Complaints</h3></Link>
                    {/* <h3>Complaints</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/e_waste.svg" alt="" />
                    <Link to="/service"><h3>E-Waste</h3></Link>
                    {/* <h3>E-Waste</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/news_letter.svg" alt="" />
                    <Link to="/service"><h3>News Letter</h3></Link>
                    {/* <h3>News Letter</h3> */}
                </div>
                <div className="item">
                    <img src="https://vmc.gov.in/images/mobile_application.svg" alt="" />
                    <Link to="/service"><h3>Mobile App</h3></Link>
                    {/* <h3>Mobile App</h3> */}
                </div>
            </div>
        </div>
    )
}

const Popular = () =>{    
    const navigate = useNavigate();
    const Place = () =>{
        navigate('/place')
    }
    return(
        <div className="mainp">
            <h1>Most Popular</h1>
            <div className="popular">
                <div className="card">
                    <img src={Atal} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Atal sarovar</h3>
                        <p className="card-description">Atal Sarovar is one of the major lakes identified within the Rajkot Smart City development plan for creating an interventional planned waterfront development which offers an ecologically integrated social and recreational public realm for citizens to enjoy</p>
                        <button onClick={Place} className="card-button">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={Mgm} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Mahatma gandhi musium</h3>
                        <p className="card-description">Mahatma Gandhi Museum is located at Rajkot, Gujarat. The mission of MGM is to present the journey of Gandhiji from "Mohandas" to "Mahatma" by various galleries showing life-events and 3D projection</p>
                        <button className="card-button">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={Kc} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Khambhalida Caves</h3>
                        <p className="card-description">The Khambhalida Caves, also known as Khambhalida Buddhist Caves, are a lesser-known but significant historical and archaeological site located near Rajkot, in the village of Khambhalida, about 60 km away from the city. These caves hold considerable importance due to their Buddhist heritage and unique rock-cut architecture.</p>
                        <button className="card-button">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src={Rdm} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">Rotary Dolls Museum</h3>
                        <p className="card-description">Unique Collection: The museum has over 1,600 dolls from more than 100 countries, displaying diverse cultures, traditions, and clothing styles from across the world.
Special Exhibits: The dolls represent important historical, cultural, and social themes, making it an educational and visually appealing experience for both children and adults.</p>
                        <button className="card-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeedbackForm = () =>{
    const [email, setEmail] = useState("");
    const [sub, setSub] = useState("");
    const [sug, setSug] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const usersRef = ref(database, "sug");

        try {
            const newUserRef = push(usersRef);
            await set(newUserRef, {
                email: email,
                sub: sub,
                sug: sug
            });
            setEmail("");
            setSub("");
            setSug("");
            alert("Feedback Form submit successfully")
        } catch (error) {
            
        }
    };
    return(
        <div className="feedback">
            <img src={Background} alt="image" className="feedback__bg" />
            <form className="feedback__form">
                <h1 className="feedback__title">Feedback Form</h1>
                <div className="feedback__inputs">
                    <div class="feedback__box">
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder="Email"
                            className="feedback__input" />
                        <i className="ri-mail-fill"></i>
                    </div>

                    <div class="feedback__box">
                        <input 
                            type="text"
                            value={sub}
                            onChange={(e) => setSub(e.target.value)}
                            required 
                            placeholder="Subject"
                            className="feedback__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>

                    <div class="feedback__box">
                        <input 
                            type="text"
                            value={sug}
                            onChange={(e) => setSug(e.target.value)}
                            required 
                            placeholder="Suggestion"
                            className="feedback__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="feedback__button">Submit</button>
            </form>
        </div>
    )
}

const Contact = () =>{
    return(
        <div className="contact">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.620644663188!2d70.77500078373055!3d22.28022234482022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca37a22d5529%3A0xb20bb8e16ee0e831!2sRajkot%20Municipal%20Corporation%20West%20Zone!5e0!3m2!1sen!2sin!4v1727869718974!5m2!1sen!2sin" className="mapinfo"></iframe>
            </div>
            <div>
                <FeedbackForm />
            </div>
        </div>
    );
}

const Footer = () => {
    return (
      <footer>
        <div className="footerdiv">
            <div className="footersubdiv">
                <h1>Services</h1>
                <div className="ser">
                    <Link to="/proprtyTax" className="footera">Property Tax</Link>
                    <Link to="/waterCharges" className="footera">Water Charges</Link>
                    <Link to="/electricityCharges" className="footera">Electricity Charges</Link>
                    <Link to="/vehicalTax" className="footera">Vehical Tax</Link>
                    <Link to="/ememoPayment" className="footera">E-memo Payment</Link>
                </div>
            </div>
            <div className="footersubdiv">
                <h1>Forms</h1>
                <div className="ser">
                    <Link to="/birthCertificate" className="footera">Birth Certificate</Link>
                    <Link to="/aadhaar" className="footera">Addhar Card</Link>
                    <Link to="/pan" className="footera">Pan Card</Link>
                    <Link to="/marraigeCertificate" className="footera">Marriage Certificate</Link>
                    <Link to="/busPass" className="footera">Bus Pass</Link>
                </div>
            </div>
            <div className="footersubdiv">
                <h1>Social Media</h1>
                <div className="ser">
                    <Link to="/socialmedia" className="footera">Instagram</Link>
                    <Link to="/socialmedia" className="footera">Youtube</Link>
                    <Link to="/socialmedia" className="footera">Twitter</Link>
                    <Link to="/socialmedia" className="footera">Whatsapp</Link>
                </div>
            </div>
        </div>
      </footer>
    );
  };

const Home = () =>{
    return(
        <div className="container">
            {/* <Header /> */}
            <Navbar />
            <Dashboard />
            <Service/>
            <Popular />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;