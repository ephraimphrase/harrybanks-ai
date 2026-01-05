import React from 'react';
import { motion } from 'framer-motion';

const FounderMsg = () => {
    return (
        <section style={{ padding: '100px 0', background: 'var(--color-surface)', position: 'relative', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    background: 'url(/assets/london-exchange.png) no-repeat center center/cover',
                    opacity: 0.1,
                    maskImage: 'linear-gradient(to right, transparent, black)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black)'
                }}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div className="content" style={{ maxWidth: '800px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '2rem' }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>A Message from Harrison Justin</h3>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '2rem', fontSize: '1.2rem' }}>Founder of Harrybanks Forex AI</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}
                        >
                            <p style={{ marginBottom: '1.5rem' }}>
                                "I spent 14 years inside the London Stock Exchange. I’ve seen how the 'big players' move, and I’ve seen how retail traders lose because they can’t keep up with the speed of the market.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                I didn't build Harrybanks AI to be another 'get rich quick' bot. I built it because I was tired of seeing people follow outdated signals. My algorithm is the leader; others simply follow or retail what we create.
                            </p>
                            <p>
                                We aren't promising magic—we are offering math, experience, and institutional-grade execution. Whether you start with $20 or $20,000, our goal is the same: consistent, organic growth based on the risk level you are comfortable with. It’s time to stop trading with emotion and start trading with an edge."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderMsg;
