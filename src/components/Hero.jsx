import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

const Hero = () => {
    return (
        <section style={{
            padding: '180px 0 100px',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(rgba(10,10,10,0.85), rgba(10,10,10,0.95)), url(/assets/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                <div style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                        }}
                    >
                        The Future of Automated Wealth
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: '700',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            textShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        From the Floor of the London Stock Exchange to Your Smartphone
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                            color: 'var(--color-text-muted)',
                            marginBottom: '3rem',
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        Stop guessing. Start growing. <br />
                        Join the world’s leading automated Forex signal community.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href="https://t.me/+LVEIxZbukL01YTJk"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                background: 'var(--color-primary)',
                                color: '#000',
                                padding: '1rem 3rem',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                boxShadow: '0 0 20px var(--color-primary-glow)'
                            }}
                        >
                            <FaTelegramPlane size={24} />
                            Join Our telegram
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
