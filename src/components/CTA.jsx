import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane } from 'react-icons/fa';

const CTA = () => {
    return (
        <section style={{ padding: '120px 0', textAlign: 'center', background: 'linear-gradient(to top, var(--color-surface), var(--color-bg))' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        READY TO <span className="text-gold">GROW FASTER?</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                        The market doesn't wait for anyone. Join thousands of traders who have moved away from retail noise and joined the leader in automated signals.
                    </p>

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
                            padding: '1.2rem 2.5rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            boxShadow: '0 0 30px var(--color-primary-glow)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                    >
                        <FaTelegramPlane size={24} />
                        <span>JOIN THE HARRYBANKS AI TELEGRAM CHANNEL FOR FREE</span>
                    </a>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.6 }}>
                        Join for free signals, market analysis, and organic growth updates.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
