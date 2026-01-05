import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaChartLine, FaBolt, FaShieldAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaBuilding size={30} />,
        title: "Institutional Intelligence",
        desc: "Built by a former LSE trader with 14 years of market experience."
    },
    {
        icon: <FaChartLine size={30} />,
        title: "Total Scalability",
        desc: "Fund your IQ Option account with anywhere from $20 to $20,000+."
    },
    {
        icon: <FaBolt size={30} />,
        title: "Instant Results",
        desc: "Real-time signals delivered directly to your device."
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: "Risk-Managed Growth",
        desc: "This isn't a scheme; it’s a disciplined platform for long-term success."
    }
];

const Features = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationId;
        const scroll = () => {
            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0;
            } else {
                el.scrollLeft += 1; // Speed of scroll
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    // Duplicate features for infinite scroll effect
    const duplicatedFeatures = [...features, ...features, ...features];

    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container" style={{ overflow: 'hidden' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why <span className="text-gold">Harrybanks AI?</span></h2>
                    <p className="text-green" style={{ fontWeight: '600' }}>Trade with my daily during my interactive live sessions!</p>
                </motion.div>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto', // Allow manual scroll interaction if grabbed, but hide bar
                        gap: '2rem',
                        paddingBottom: '2rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        cursor: 'grab'
                    }}
                >
                    <style>{`
                        div::-webkit-scrollbar { display: none; }
                    `}</style>
                    {duplicatedFeatures.map((feature, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--color-surface)',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                minWidth: '300px',
                                flex: '0 0 auto',
                            }}
                        >
                            <div style={{
                                color: 'var(--color-primary)',
                                marginBottom: '1.5rem',
                                background: 'rgba(212, 175, 55, 0.1)',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="https://affiliate.iqoption.net/redir/?aff=801347&aff_model=revenue&afftrack="
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            background: 'transparent',
                            border: '1px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = 'var(--color-primary)';
                            e.target.style.color = '#000';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--color-primary)';
                        }}
                    >
                        Start Trading Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;
