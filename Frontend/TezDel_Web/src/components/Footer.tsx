import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="footer-v2">
         <div className="container">
            <div className="footer-top">
               <div className="footer-logo">TezDel</div>
               <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <select style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                     <option>India</option>
                  </select>
                  <select style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                     <option>English</option>
                     <option>Odia</option>
                  </select>
               </div>
            </div>

            <div className="footer-grid-v2">
               <div className="footer-col">
                  <h4>ABOUT TEZDEL</h4>
                  <ul>
                     <li><Link to="/about">Who We Are</Link></li>
                     <li><Link to="/about">Our Story</Link></li>
                     <li><Link to="/careers">Work With Us</Link></li>
                     <li><Link to="/investor">Investor Relations</Link></li>
                     <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
               </div>
               <div className="footer-col">
                  <h4>TEZDEL SERVICES</h4>
                  <ul>
                     <li><Link to="/food">Food Delivery</Link></li>
                     <li><Link to="/home-chefs">Home Chef Network</Link></li>
                     <li><Link to="/grocery">Grocery Delivery</Link></li>
                     <li><Link to="/food">Festival Specials</Link></li>
                     <li><Link to="/contact">Corporate Lunch</Link></li>
                  </ul>
               </div>
               <div className="footer-col">
                  <h4>LEGAL</h4>
                  <ul>
                     <li><Link to="/legal">Privacy Policy</Link></li>
                     <li><Link to="/legal">Terms & Conditions</Link></li>
                     <li><Link to="/legal">Refund Policy</Link></li>
                     <li><Link to="/legal">Delivery Policy</Link></li>
                  </ul>
               </div>
               <div className="footer-col">
                  <h4>SOCIAL LINKS</h4>
                  <div className="social-links" style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                     <a href="#" style={{ background: 'var(--color-secondary)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                     </a>
                     <a href="#" style={{ background: 'var(--color-secondary)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                     </a>
                     <a href="#" style={{ background: 'var(--color-secondary)', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                     </a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                     <a href="#">
                        <img 
                           src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                           alt="Get it on Google Play" 
                           style={{ height: '40px' }} 
                        />
                     </a>
                     <a href="#">
                        <img 
                           src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                           alt="Download on the App Store" 
                           style={{ height: '40px' }} 
                        />
                     </a>
                  </div>
               </div>
            </div>

            <div className="footer-bottom-text" style={{ borderTop: '1px solid #ddd', paddingTop: '2rem', marginTop: '2rem', fontSize: '0.85rem', color: '#666' }}>
               By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2024-2026 © TezDel™ Ltd. All rights reserved.
            </div>
         </div>
      </footer>
   );
}
