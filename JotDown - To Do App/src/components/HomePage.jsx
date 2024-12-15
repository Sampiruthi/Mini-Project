import React from 'react';
import '../css/HomePage.css';
import logo from '../images/logo.jpg';
import instagram from '../images/insta.jpeg';
// import twitter from '../assets/twitter.png';
import facebook from '../images/facebook.jpg';
import youtube from '../images/youtube.jpeg';
// import google from '../assets/google.png';
import tasks from '../images/homepage.jpg';

const HomePage = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="/" className="logo">
                        <img src={logo} alt="Website Logo" style={{ width: '150px' }} />
                    </a>
                    <ul className="nav-links">
                        <li><a href="/login">Features</a></li>
                        <li><a href="/login">Pricing</a></li>
                        <li><a href="/login">Templates</a></li>
                        <li><a href="/login">Contact</a></li>
                        <li><a href="/signup" className="btn">Sign Up</a></li>
                        <li><a href="/login" className="btn">Log In</a></li>
                    </ul>
                </div>
            </nav>

            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            All Your Work in One Place
                        </h1>
                        <p className="hero-subtitle">
                            A simple, flexible, and powerful way to organize your work and life. Whether you're planning your day, week, or year, we've got you covered.
                        </p>
                        <a href="/login" className="cta-btn">Get Started</a>
                    </div>
                    <div className="hero-image">
                        <img src={tasks} alt="Note Tasks" style={{ width: '550px', height: 'auto' }} />
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="container">
                    <div className="feature">
                        <img src="https://cdn.shopify.com/s/files/1/0789/0453/files/20160823_114105-01_1024x1024.jpeg?v=1476280667" alt="Organize Everything" height="300px" width="400px"/>
                        <h3>Organize Everything</h3>
                        <p>From tasks and projects to long-term planning, you can organize everything seamlessly.<br></br>Our tool is built to handle your personal to-dos and professional deadlines, ensuring that nothing falls through the cracks.<br></br>You can create, prioritize, and track tasks effortlessly, keeping everything in one place.<br></br>Stay ahead with smart reminders and seamless collaboration for teams or individuals.</p>
                    </div>
                    <div className="feature">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.7OjvtOqnv1sWKwBWyaLNlwAAAA&pid=Api&P=0&h=180" alt="Collaborate in Real-Time" height="300px" width="400px"/>
                        <h3>Collaborate in Real-Time</h3>
                        <p>With real-time collaboration, you and your team can work on projects together, assign tasks, and share notes without missing a beat. You can see changes as they happen, making team projects more efficient and connected.</p>
                    </div>

                    <div className="feature">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.uBhudfw4ERHsGZipN5Z9ygHaFO&pid=Api&P=0&h=180" alt="Access Anywhere" height="300px" width="400px"/>
                        <h3>Access Anywhere</h3>
                        <p>No matter where you are, stay connected to your work. Our platform is accessible from any device—desktop, tablet, or mobile—so you're never out of the loop. Work on the go with seamless cross-device synchronization.</p>
                        <br></br>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container footer-grid">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#security">Security</a></li>
                            <li><a href="#status">Status</a></li>
                            <li><a href="#terms">Terms & privacy</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Download</h4>
                        <ul>
                            <li><a href="#ios">iOS & Android</a></li>
                            <li><a href="#mac-windows">Mac & Windows</a></li>
                            <li><a href="#calendar">Calendar</a></li>
                            <li><a href="#web-clipper">Web Clipper</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#help">Help center</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#community">Community</a></li>
                            <li><a href="#integrations">Integrations</a></li>
                            <li><a href="#templates">Templates</a></li>
                            <li><a href="#affiliates">Affiliates</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>JotDown for</h4>
                        <ul>
                            <li><a href="#enterprise">Enterprise</a></li>
                            <li><a href="#small-business">Small business</a></li>
                            <li><a href="#personal">Personal</a></li>
                        </ul>
                    </div>
                </div>

                <div className="social-media">
                    <a href="#instagram"><img src={instagram} alt="Instagram" /></a>
                    {/* <a href="#twitter"><img src={twitter} alt="Twitter" /></a> */}
                    <a href="#facebook"><img src={facebook} alt="Facebook" /></a>
                    <a href="#youtube"><img src={youtube} alt="YouTube" /></a>
                    {/* <a href="#linkedin"><img src={google} alt="LinkedIn" /></a> */}
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Jotdown-like. All Rights Reserved.</p>
                    <p>Do Not Sell or Share My Info</p>
                    <p><a href="#cookie-settings">Cookie settings</a></p>
                    <p>&copy; 2024 Jotdown Labs, Inc.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;