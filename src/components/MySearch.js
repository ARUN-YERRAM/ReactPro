import { Link } from "react-router-dom";

const MySearch = () => {
    return ( 
        <div>
                <section class="hero">
                <h2>Welcome to Nyaay Sahaayak Platform</h2>
                <p class="pad">We're here to help you with your legal needs.</p>
                <div id="search" class = "search">

                {/* <div class="search-container body1">
                    <form action="https://www.google.com/search" method="GET" target="_blank">
                        <div class="search-box">
                            <input type="text" name="q" placeholder="Search..."/>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div> */}

                <button type="text" id="search-input" placeholder="" class="search1"><Link to="/chatbot" style={{color:"black"}}>CHATBOT</Link>
                        </button> 
                {/* <button id="search-button" class=" cta-button pad1"><Link to="/chatbot" style={{color:"white"}}>CHATBOT</Link></button> */}
                {/* <button class="cta-button pad1"><Link to="/chatbot" style={{color:"white"}}>CHATBOT</Link></button> */}

                </div>
            
                
                <div id="language-selector" class="search3">
                    <label for="language-dropdown" class="pad1">Select Language:</label>
                    <select id="language-dropdown" class="search4">
                        <option value="en">English</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                        <option value="ta">Tamil</option>
                        <option value="kn">Kannada</option>
                    </select> 
                </div>
            </section>
        </div>
    );
}

export default MySearch;