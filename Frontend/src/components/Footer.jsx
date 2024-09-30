import Config from '../../helpers/config';

const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="i-footer">
            <div className="footer-content">
                <span className="footer-left">
                    &copy; {currentYear} {Config[0].APP_ALLIASE} &lt;&gt; {Config[0].APP_VERSION}
                </span>
                <span className="footer-right">
                    Crafted with <i className="fas fa-heart text-danger"></i> by {Config[0].BRAND_NAME} Team
                </span>
            </div>
        </footer>
    );
}

export default Footer;
