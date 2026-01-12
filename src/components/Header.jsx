import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(10,10,10,0.8)',
                backdropFilter: 'blur(10px)',
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                top: 0
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <span className="text-gold">HarryBanks</span> AI
                </div>

                {/* <a
                    href="https://t.me/harrybanksai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-telegram"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--color-primary)',
                        color: '#000',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'transform 0.2s'
                    }}
                >
                    <FaTelegramPlane size={18} />
                    <span>Join Telegram</span>
                </a> */}
            </div>
        </motion.header>
    );
};

export default Header;
