import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', background: 'var(--color-surface)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ textAlign: 'center', opacity: 0.5 }}>
                <p>&copy; {new Date().getFullYear()} HarryBanks AI. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Trading involves risk. Invest responsibly.</p>
            </div>
        </footer>
    );
};

export default Footer;
