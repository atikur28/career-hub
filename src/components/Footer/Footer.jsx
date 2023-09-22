const Footer = () => {
    return (
        <footer className="bg-[#1A1919] py-14">
            <div className="footer py-20 p-10 text-base-content">
            <aside>
                <h2 className="text-3xl font-bold text-white">CareerHub</h2>
                <p className="text-[#FFFFFFB3]">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
            </aside> 
            <nav className="text-white">
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About Us</a> 
                <a className="link link-hover">Work</a> 
                <a className="link link-hover">Latest News</a> 
                <a className="link link-hover">Careers</a>
            </nav> 
            <nav className="text-white">
                <header className="footer-title">Product</header> 
                <a className="link link-hover">Prototype</a> 
                <a className="link link-hover">Plans & Pricing</a> 
                <a className="link link-hover">Customers</a> 
                <a className="link link-hover">Integrations</a>
            </nav> 
            <nav className="text-white">
                <header className="footer-title">Support</header> 
                <a className="link link-hover">Help Desk</a> 
                <a className="link link-hover">Sales</a> 
                <a className="link link-hover">Become a Partner</a>
                <a className="link link-hover">Developers</a>
            </nav>
            <nav className="text-white">
                <header className="footer-title">Contact</header> 
                <p className="text-sm">524 Broadway , NYC</p>
                <p className="text-sm">+1 777 - 978 - 5570</p>
            </nav>
            </div>
            <div className="mx-10 py-7 border-t border-gray-600 text-white flex justify-between">
               <p className="text-xs">@2023 CareerHub. All Rights Reserved</p>
               <p className="text-xs">Powered by CareerHub</p>
            </div>
        </footer>
    );
};

export default Footer;