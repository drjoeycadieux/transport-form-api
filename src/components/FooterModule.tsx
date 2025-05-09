// components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyles}>
            <div style={footerContentStyles}>
                <h4 style={titleStyles}>My Website</h4>
                <div style={linksContainerStyles}>
                    <Link href="/about" style={linkStyles}>
                        About
                    </Link>
                    <Link href="/contact" style={linkStyles}>
                        Contact
                    </Link>
                </div>
                <p style={emailStyles}>Email: contact@mywebsite.com</p>
            </div>
        </footer>
    );
};

const footerStyles: React.CSSProperties = {
    backgroundColor: '#f4f4f9',
    color: '#2e3a59',
    padding: '40px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Arial', sans-serif",
};

const footerContentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '20px 0',
};

const titleStyles: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2e3a59',
    marginBottom: '10px',
};

const linksContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
    marginTop: '20px',
};

const linkStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#2e3a59',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
};

const linkHoverStyles: React.CSSProperties = {
    color: '#3498db',
};

const emailStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#777',
    maxWidth: '700px',
    margin: '0 auto',
    marginTop: '30px',
};

export default Footer;
