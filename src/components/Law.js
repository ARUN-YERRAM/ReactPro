// import { Routes,Route } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import MySearch from "./MySearch";
const Law = () => {
    return ( 
        <>
        <MyCarousel/>
        <MySearch/>
        <div>

        <main>

            {/* <section class="services">
                <h2>Our Services</h2>
                <ul align="left" >
                    <li class="pad1">Legal Consultation</li>
                    <li class="pad1">Contract Review</li>
                    <li class="pad1">Legal Research</li>
                    <li class="pad1">Document Preparation</li>
                </ul>
            </section> */}

<section class="container">
            <h2 class="text-center" style={{marginBottom:"20px"}}>Key Features</h2>
            <div class="row">
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Real-time Legal Advice Logo" />
                    <h3>Real-time Legal Advice</h3>
                    <p>Connect with a licensed legal professional via live video call for personalized advice.</p>
                </div>
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="On-demand Legal Documents Logo" />
                    <h3>On-demand Legal Documents</h3>
                    <p>Obtain pre-drafted legal documents such as wills, power of attorney, and more.</p>
                </div>
                <div class="col-md-4"style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Know Your Rights Logo" />
                    <h3>Know Your Rights</h3>
                    <p></p>
                </div>
                <div class="col-md-4"style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Ethics Review Logo" />
                    <h3>Latest Legal News</h3>
                    <p>Get updated with legal information</p>
                </div>
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="AI Assistant Logo" />
                    <h3>AI Assistant</h3>
                    <p>Explore AI-powered solutions to simplify your legal processes and make informed decisions.</p>
                </div>
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Online Marketplace Logo" />
                    <h3>Laws</h3>
                    <p>Different types of laws and their info.</p>
                </div>
{/*                 <!-- Additional features --> */}
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Integrated Case Management Logo" />
                    <h3>Integrated Case Management</h3>
                    <p>Access and manage your legal cases through a centralized platform, reducing complexity and confusion.</p>
                </div>
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Automated Legal Filing Logo" />
                    <h3>Automated Legal Filing</h3>
                    <p>Automate the legal filing process with a dedicated legal expert handling all your case updates and modifications.</p>
                </div>
                <div class="col-md-4" style={{marginBottom:"20px"}}>
                    <img src="https://via.placeholder.com/150" alt="Online Appointment Booking Logo" />
                    <h3>Online Appointment Booking</h3>
                    <p>Book a consultation with a legal expert through our secure and user-friendly online platform.</p>
                </div>
            </div>
    </section>

    
            </main>
            <footer>
            <p>&copy; 2023 Virtual Legal Assistant</p>
        </footer>
        </div>
        </>
    );
}

export default Law;