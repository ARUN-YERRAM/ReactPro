// import { Link } from "react-router-dom";

// const MyNav = () => {
//     return (
//         <>
//         <header>
//             <h1 class="pad">NYAAY SAHAAYAK</h1>
//         </header>
        
//         <nav>
//             <ul>
//                 <li class="pad1"><Link to="/"><h1>Home</h1></Link></li>
//                 <li class="pad1"><Link to="/serv"><h1>Services</h1></Link></li>
//                 <li class="pad1"><Link to="/about"><h1>About Us</h1></Link></li>
//                 <li class="pad1"><Link to="/contact"><h1>Contact</h1></Link></li>
//             </ul>
//         </nav>
//         </>
//     );
// }

// export default MyNav ;


import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
        <header>
            <h1 class="pad">NYAAY SAHAAYAK</h1>
        </header>
        
        
        <nav class="navbar navbar-expand-sm navbar-light" style={{backgroundColor: 'grey'}}>
            <Link class="navbar-brand" to="/"></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to="/" style={{color: "white"}} aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color: "white"}} to="/serv">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color: "white"}} to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" style={{color: "white"}} to="/contact">Contact Us</Link>
                    </li>
                
                </ul>
            </div>
        </nav>
        
        
        
        
    
        









        {/* <nav>
            <ul>
                <li class="pad1"><Link to="/">Home</Link></li>
                <li class="pad1"><Link to="/serv">Services</Link></li>
                <li class="pad1"><Link to="/about">About Us</Link></li>
                <li class="pad1"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav> */}
        </>
      );
}
 
export default MyNav ;
