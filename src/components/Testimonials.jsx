import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "Mateo Silva", country: "🇧🇷 Brazil", quote: "I started with just $50 to test the waters. Harrybanks AI is different; the signals are surgical." },
    { name: "Isabella García", country: "🇲🇽 Mexico", quote: "The consistency is what shocked me. In Mexico, we see many scams, but Harrison’s LSE background shows in every trade." },
    { name: "Lachlan White", country: "🇦🇺 Australia", quote: "Finally, a bot that doesn't blow accounts. The risk management is the best I've seen in Oceania." },
    { name: "Camila Rojas", country: "🇨🇱 Chile", quote: "I’ve followed other 'gurus,' but they all seem to copy Harrybanks. I went straight to the source. Instant results." },
    { name: "Kiara Te Ata", country: "🇳🇿 New Zealand", quote: "Started with $200 and the growth has been organic and steady. This is a professional tool, not a gamble." },
    { name: "Diego Fernández", country: "🇦🇷 Argentina", quote: "Harrison knows the market cycles. The AI picks up on things I would have missed manually. 10/10." },
    { name: "Ximena Ortiz", country: "🇲🇽 Mexico", quote: "The ease of use with IQ Option is incredible. I fund, I follow the AI, and I watch the growth." },
    { name: "Arana Vaka", country: "🇫🇯 Fiji", quote: "Incredible signals. The accuracy rate is higher than anything else available in the South Pacific." },
    { name: "Thiago Santos", country: "🇵🇪 Peru", quote: "You can tell this was built by someone who actually worked in the Stock Exchange. It’s institutional quality." },
    { name: "Santiago Méndez", country: "🇺🇾 Uruguay", quote: "My account has grown 40% in two months without high-stress risks. Harrybanks AI is the leader for a reason." }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationId;
        const scroll = () => {
            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0;
            } else {
                el.scrollLeft += 0.8; // Slightly slower than features
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    // Duplicate for infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section style={{ padding: '100px 0', background: 'var(--color-surface)' }}>
            <div className="container" style={{ overflow: 'hidden' }}>
                <motion.h2
                    aria-label="What Our Global Community Says"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}
                >
                    What Our <span className="text-gold">Global Community</span> Says
                </motion.h2>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '2rem',
                        paddingBottom: '2rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>{`
                        div::-webkit-scrollbar { display: none; }
                    `}</style>
                    {duplicatedTestimonials.map((t, i) => {
                        // Split flag and country name - assuming format like "🇧🇷 Brazil"
                        const firstSpaceIndex = t.country.indexOf(' ');
                        const flag = t.country.substring(0, firstSpaceIndex);
                        const countryName = t.country.substring(firstSpaceIndex + 1);

                        return (
                            <div
                                key={i}
                                style={{
                                    background: 'var(--color-bg)',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    minWidth: '350px',
                                    flex: '0 0 auto',
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                    <div>
                                        <h4 style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{t.name}</h4>
                                        <span style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{countryName}</span>
                                    </div>
                                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>{flag}</span>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: '1.6' }}>"{t.quote}"</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
