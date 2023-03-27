const Footer = (props) =>{
    return (
        <footer  className={`${props.mode?'bg-dark':'bg-white'} py-3`}>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className={`nav-link px-2 ${props.mode?'text-white':'text-dark'}` }>Home</a></li>
            <li className="nav-item"><a href="#" className={`nav-link px-2 ${props.mode?'text-white':'text-dark'}` }>Features</a></li>
            <li className="nav-item"><a href="#" className={`nav-link px-2 ${props.mode?'text-white':'text-dark'}` }>Pricing</a></li>
            <li className="nav-item"><a href="#" className={`nav-link px-2 ${props.mode?'text-white':'text-dark'}` }>FAQs</a></li>
            <li className="nav-item"><a href="#" className={`nav-link px-2 ${props.mode?'text-white':'text-dark'}` }>About</a></li>
            </ul>
            <p className={`${props.mode?'text-dark':'text-white'} text-center` }>© 2023 Company, Inc</p>
        </footer>
    )
}
export default Footer;