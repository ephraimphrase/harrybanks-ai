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
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                        }}
                    >
                        Join 65,000+ Traders Winning with Harrybanks AI
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                             fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                            fontWeight: '500',
                            lineHeight: '1.5',
                            marginBottom: '1.5rem',
                            textShadow: '0 0 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        Stop guessing and start growing. Over 65,000 everyday people are already using Harrybanks AI to generate daily income—even with zero prior trading experience.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            fontSize: 'clamp(1.5rem, 1.5vw, 2.5rem)',
                            color: 'var(--color-text-muted)',
                            marginBottom: '3rem',
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        If they can do it, you can too. 
                        Our community is designed to help you leverage AI to target $300 – $3,000 weekly directly from your phone.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href="tg://resolve?domain=harrybankssupport_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                background: 'var(--color-primary)',
                                color: '#000',
                                padding: '1rem 1.5rem',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                boxShadow: '0 0 20px var(--color-primary-glow)'
                            }}
                        >
                            <FaTelegramPlane size={24} />
                            Join Our telegram Channel For Free
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
