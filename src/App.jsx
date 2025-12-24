import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    ArrowUpRight,
    Twitter,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Github,
    Instagram,
    Mail
} from 'lucide-react';
const MorphingText = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const characters = '01#X@%&$!?<>{}[]';

    useEffect(() => {
        let iterations = 0;
        const duration = 3000;
        const intervalTime = 50;
        const totalSteps = duration / intervalTime;
        const increment = text.length / totalSteps;

        const interval = setInterval(() => {
            setDisplayText(prev =>
                prev.split('')
                    .map((char, index) => {
                        // Morph numbers 0, 1 and letters O (to be safe)
                        if (!['0', '1', 'O'].includes(text[index])) return char;

                        if (index < iterations) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += increment;
        }, intervalTime);

        return () => clearInterval(interval);
    }, [text]);

    return <>{displayText}</>;
};

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline-block border-r-2 border-bg-dark pr-1 animate-pulse">
            {displayedText}
        </span>
    );
};


const Header = () => {
    const headerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"]
    });

    const nameScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
    const nameOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

    return (
        <header ref={headerRef} className="p-4 md:p-6 min-h-screen flex flex-col">
            <div className="flex-1 accent-pattern rounded-[40px] md:rounded-[80px] relative overflow-hidden flex flex-col justify-between p-8 md:p-16">
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden"
                    style={{
                        scale: nameScale,
                        opacity: nameOpacity,
                        zIndex: 5
                    }}
                >
                    <div className="mb-6 text-bg-dark font-bold tracking-[0.4em] text-xs md:text-sm lg:text-base uppercase text-center">
                        <TypingText text="FULLSTACK WEB3 DEVELOPER" />
                    </div>
                    <h1 className="text-[22vw] font-display leading-[0.7] text-bg-dark/5 whitespace-nowrap -translate-y-12">
                        <MorphingText text="0HEHAEBIB1" />
                    </h1>
                    <h1 className="text-[22vw] font-display leading-[0.7] text-bg-dark whitespace-nowrap">
                        <MorphingText text="0HEHAEBIB1" />
                    </h1>
                    <h1 className="text-[22vw] font-display leading-[0.7] text-bg-dark/5 whitespace-nowrap translate-y-12">
                        <MorphingText text="0HEHAEBIB1" />
                    </h1>
                </motion.div>

                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300"
                    style={{
                        zIndex: 100
                    }}
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-dark/30 shadow-2xl">
                            <img
                                src="/profile.png"
                                alt="Elshaddai Oheha"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 lg:bottom-16 z-20">
                    <div className="flex gap-3 justify-center">
                        <a href="https://github.com/elshaddaioheha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:elshaddaioheha@gmail.com" className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="https://x.com/0hehaebib1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="https://instagram.com/0hehaebib1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </header>
    );
};

const Nav = () => (
    <nav className="py-12 bg-bg-dark">
        <div className="container flex justify-center gap-8 md:gap-16">
            {['About', 'Experience', 'Works', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-accent/60 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-accent transition-colors">
                    {item}
                </a>
            ))}
        </div>
    </nav>
);

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="about" className="py-24 bg-bg-dark overflow-hidden">
            <div className="container">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="md:w-1/3">
                        <h2 className="text-[12vw] font-display leading-[0.8] mb-12 md:mb-0">about</h2>
                        <div className="mt-8 text-accent/60 font-bold uppercase tracking-widest text-sm flex flex-col gap-2">
                            <span>Jos, Plateau, Nigeria</span>
                            <span>+234 703 660 5065</span>
                        </div>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-8 md:pl-20">
                        <p className="text-xl md:text-2xl text-accent leading-[1.4] font-medium opacity-90">
                            Versatile and technically rigorous Software Engineer with over 4 years of version control experience. Specializes in building scalable full-stack applications using the MERN Stack, Next.js, and Web3 technologies.
                        </p>
                        <p className="text-lg text-accent/70 leading-relaxed">
                            Currently driving backend infrastructure for a biotech startup and leading digital strategy for non-profit initiatives. Backed by a strong foundation in Data Analytics (Google) and Computer Science (Harvard CS50), with a proven ability to deliver production-grade solutions for the African and global market.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {['MERN Stack', 'Next.js', 'Web3', 'Solidity', 'Docker', 'TypeScript'].map(skill => (
                                <span key={skill} className="px-4 py-2 border border-accent/20 rounded-full text-xs font-bold uppercase tracking-widest text-accent/80">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            company: 'AZ-Genes',
            role: 'Backend Developer',
            period: 'Oct 2025 – Present',
            location: 'Remote / Jos, Nigeria',
            desc: 'Architecting secure server-side logic using Node.js and Supabase for a genetic testing platform. Engineered custom mock API servers and implemented rigorous RLS/RBAC policies.'
        },
        {
            company: 'The Oloja Foundation',
            role: 'Lead Full Stack Engineer',
            period: 'Nov 2025 – Present',
            location: 'Remote / Abuja, Nigeria',
            desc: 'Developed official platform using Next.js. Achieved near-perfect Lighthouse scores through SSR and Image Optimization. Designed seamless donation routing and newsletter systems.'
        },
        {
            company: 'Freelance / Contract',
            role: 'Full Stack Software Engineer',
            period: 'Jan 2025 – Present',
            location: 'Remote',
            desc: 'Deploying high-performance MERN applications and Solidity smart contracts. Utilizing Docker for consistent development environments and streamlining CI/CD pipelines.'
        }
    ];

    return (
        <section ref={ref} id="experience" className="py-24 bg-bg-dark border-t border-accent/5">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[12vw] font-display leading-[0.8] mb-16">experience</h2>
                    <div className="grid gap-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="group border-b border-accent/10 pb-12 hover:border-accent transition-colors duration-500">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display text-accent">{exp.role}</h3>
                                        <p className="text-lg text-accent/60 font-bold uppercase mt-2">{exp.company} • {exp.location}</p>
                                    </div>
                                    <span className="text-accent font-bold opacity-40">{exp.period}</span>
                                </div>
                                <p className="mt-6 text-accent/70 text-lg leading-relaxed max-w-4xl">
                                    {exp.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Works = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            year: 'LIVE',
            title: 'Agbejo',
            desc: 'Decentralized Escrow Platform. Implemented a trustless multi-signature arbitration system using Next.js, Hedera Hashgraph, and Solidity.',
            link: 'https://agbejo.vercel.app'
        },
        {
            year: 'LIVE',
            title: 'SwenAutos',
            desc: 'Blockchain-Backed Automotive Marketplace leveraging blockchain immutability for verifiable chain of custody using Hardhat and Solidity.',
            featured: true,
            link: 'https://swen-autos.vercel.app'
        },
        {
            year: 'LIVE',
            title: 'Àyàn Collection',
            desc: 'Programmatic NFT Minting script developed for the Hedera Africa Hackathon. Authored scripts for automated distribution of digital assets.',
            link: 'https://ayan-collection-nextjs.vercel.app/'
        },
    ];

    return (
        <section ref={ref} id="works" className="py-24 bg-bg-dark border-t border-accent/5">
            <div className="container">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div>
                        <h2 className="text-[12vw] font-display leading-[0.8]">works</h2>
                        <div className="mt-8 flex gap-4">
                            <span className="px-4 py-2 bg-accent/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20">Featured Projects</span>
                        </div>
                    </div>
                    <p className="max-w-[350px] text-accent/60 font-medium leading-[1.5] mt-8 md:mt-0">
                        A selection of full-stack and Web3 solutions, from decentralized escrow platforms to blockchain-backed marketplaces.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-20 border-t border-accent/10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {projects.map((p, i) => (
                        <div key={i} className={`work-item ${p.featured ? 'featured' : ''} group`}>
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
                                <div className="md:col-span-1 text-lg font-bold opacity-60">{p.year}</div>
                                <div className="md:col-span-8">
                                    <h4 className="text-3xl md:text-5xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">{p.title}</h4>
                                    <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-xl">{p.desc}</p>
                                </div>
                                <div className="md:col-span-3 flex justify-end">
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={`btn-pill ${p.featured ? 'bg-bg-dark text-accent border-bg-dark' : 'text-accent border-accent/30 hover:border-accent'}`}>
                                        View Live <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Gallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="gallery" className="py-24 bg-bg-dark border-t border-accent/5">
            <div className="container">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="max-w-[400px]">
                        <p className="text-accent/60 font-medium leading-[1.6] mb-4 md:mb-0">
                            Driving digital innovation for non-profits and biotech startups. A glimpse into the architecture and execution of high-impact digital products.
                        </p>
                    </div>
                    <div className="w-full md:w-auto">
                        <h2 className="text-[12vw] md:text-[10vw] font-display leading-[0.8] text-left md:text-right mb-4 md:mb-0">gallery</h2>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="group aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-accent/10 relative">
                        <img src="/gallery-swenautos.png" className="gallery-img" alt="SwenAutos Platform" />
                        <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="text-accent font-display text-2xl">SwenAutos</span>
                        </div>
                    </div>
                    <div className="group aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-accent/10 relative">
                        <img src="/gallery-agbejo.png" className="gallery-img" alt="Agbejo Escrow" />
                        <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="text-accent font-display text-2xl">Agbejo</span>
                        </div>
                    </div>
                    <div className="group aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-accent/10 relative">
                        <img src="/gallery-oloja.png" className="gallery-img" alt="Oloja Foundation" />
                        <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="text-accent font-display text-2xl">Oloja Foundation</span>
                        </div>
                    </div>
                    <div className="group aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-accent/10 relative">
                        <img src="/gallery-ayan.png" className="gallery-img" alt="Àyàn Collection" />
                        <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="text-accent font-display text-2xl">Àyàn Collection</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="contact" className="py-24 bg-bg-dark">
            <div className="container">
                <motion.div
                    className="accent-pattern rounded-[40px] md:rounded-[80px] p-12 md:p-20 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                            <h2 className="text-[12vw] md:text-[8vw] font-display leading-[0.8] text-bg-dark mb-8 md:mb-0">hire me</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-bg-dark text-xl md:text-2xl font-medium leading-[1.4] mb-8">
                                    I am currently available for new opportunities. Let's build the next generation of digital infrastructure together.
                                </p>
                                <div className="flex flex-col gap-6">
                                    <a href="mailto:elshaddaioheha@gmail.com" className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline">
                                        <Mail size={24} />
                                        elshaddaioheha@gmail.com
                                    </a>
                                    <div className="flex gap-4">
                                        <a href="https://github.com/elshaddaioheha" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                                            <Github size={24} />
                                        </a>
                                        <a href="https://x.com/0hehaebib1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                                            <Twitter size={24} />
                                        </a>
                                        <a href="https://instagram.com/0hehaebib1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors">
                                            <Instagram size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-bg-dark/20 bg-bg-dark">
                                    <img
                                        src="/profile.png"
                                        alt="Elshaddai Oheha"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-24 bg-bg-dark border-t border-white/5">
        <div className="container text-center">
            <h3 className="text-[22vw] font-display leading-none opacity-5 whitespace-nowrap overflow-hidden select-none pointer-events-none uppercase">
                0HEHAEBIB1 • 0HEHAEBIB1
            </h3>
        </div>
    </footer>
);

export default function App() {
    return (
        <div className="bg-bg-dark min-h-screen text-accent selection:bg-accent selection:text-bg-dark">
            <Header />
            <Nav />
            <About />
            <Experience />
            <Works />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
}
