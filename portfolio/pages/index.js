import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MdSchool, MdWorkOutline } from "react-icons/md";
import heroImg from "../public/hero.png";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const skillHoverStyles = {
  Python:
    "hover:border-[#3776AB] hover:text-[#3776AB] dark:hover:border-[#3776AB] dark:hover:text-[#3776AB] hover:bg-[#3776AB]/5",
  Go: "hover:border-[#00ADD8] hover:text-[#00ADD8] dark:hover:border-[#00ADD8] dark:hover:text-[#00ADD8] hover:bg-[#00ADD8]/5",
  Django:
    "hover:border-[#092E20] hover:text-[#092E20] dark:hover:border-[#44B78B] dark:hover:text-[#44B78B] hover:bg-[#44B78B]/5",
  FastAPI:
    "hover:border-[#009688] hover:text-[#009688] dark:hover:border-[#009688] dark:hover:text-[#009688] hover:bg-[#009688]/5",
  ASGI: "hover:border-slate-500 hover:text-slate-500 dark:hover:border-slate-400 dark:hover:text-slate-400 hover:bg-slate-500/5",
  Redis:
    "hover:border-[#DC382D] hover:text-[#DC382D] dark:hover:border-[#DC382D] dark:hover:text-[#DC382D] hover:bg-[#DC382D]/5",
  RabbitMQ:
    "hover:border-[#FF6600] hover:text-[#FF6600] dark:hover:border-[#FF6600] dark:hover:text-[#FF6600] hover:bg-[#FF6600]/5",
  NATS: "hover:border-[#27AE60] hover:text-[#27AE60] dark:hover:border-[#27AE60] dark:hover:text-[#27AE60] hover:bg-[#27AE60]/5",
  "Spring Boot":
    "hover:border-[#6DB33F] hover:text-[#6DB33F] dark:hover:border-[#6DB33F] dark:hover:text-[#6DB33F] hover:bg-[#6DB33F]/5",

  TypeScript:
    "hover:border-[#3178C6] hover:text-[#3178C6] dark:hover:border-[#3178C6] dark:hover:text-[#3178C6] hover:bg-[#3178C6]/5",
  "React.js":
    "hover:border-[#61DAFB] hover:text-[#61DAFB] dark:hover:border-[#61DAFB] dark:hover:text-[#61DAFB] hover:bg-[#61DAFB]/5",
  "Next.js":
    "hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
  Redux:
    "hover:border-[#764ABC] hover:text-[#764ABC] dark:hover:border-[#764ABC] dark:hover:text-[#764ABC] hover:bg-[#764ABC]/5",
  "RTK Query":
    "hover:border-[#764ABC] hover:text-[#764ABC] dark:hover:border-[#764ABC] dark:hover:text-[#764ABC] hover:bg-[#764ABC]/5",
  TailwindCSS:
    "hover:border-[#06B6D4] hover:text-[#06B6D4] dark:hover:border-[#06B6D4] dark:hover:text-[#06B6D4] hover:bg-[#06B6D4]/5",
  Microfrontends:
    "hover:border-brand-primary hover:text-brand-primary dark:hover:border-brand-primary dark:hover:text-brand-primary hover:bg-brand-primary/5",
  "SIP UIs":
    "hover:border-brand-secondary hover:text-brand-secondary dark:hover:border-brand-secondary dark:hover:text-brand-secondary hover:bg-brand-secondary/5",

  ClickHouse:
    "hover:border-[#FFCC01] hover:text-[#FFCC01] dark:hover:border-[#FFCC01] dark:hover:text-[#FFCC01] hover:bg-[#FFCC01]/5",
  PostgreSQL:
    "hover:border-[#4169E1] hover:text-[#4169E1] dark:hover:border-[#4169E1] dark:hover:text-[#4169E1] hover:bg-[#4169E1]/5",
  SigNoz:
    "hover:border-[#F4A800] hover:text-[#F4A800] dark:hover:border-[#F4A800] dark:hover:text-[#F4A800] hover:bg-[#F4A800]/5",
  OpenTelemetry:
    "hover:border-black hover:text-black dark:hover:border-slate-300 dark:hover:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5",
  Docker:
    "hover:border-[#2496ED] hover:text-[#2496ED] dark:hover:border-[#2496ED] dark:hover:text-[#2496ED] hover:bg-[#2496ED]/5",
  Kubernetes:
    "hover:border-[#326CE5] hover:text-[#326CE5] dark:hover:border-[#326CE5] dark:hover:text-[#326CE5] hover:bg-[#326CE5]/5",
  AWS: "hover:border-[#FF9900] hover:text-[#FF9900] dark:hover:border-[#FF9900] dark:hover:text-[#FF9900] hover:bg-[#FF9900]/5",
  "LLM/NLQ":
    "hover:border-brand-accent hover:text-brand-accent dark:hover:border-brand-accent dark:hover:text-brand-accent hover:bg-brand-accent/5",
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Pavan Santosh | Senior Software Engineer</title>
        <meta name="description" content="Portfolio of Pavan Santosh, Senior Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-transparent text-slate-900 transition-colors duration-300 min-h-screen font-sans">
        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-10 py-5 w-full md:px-20 lg:px-40 flex justify-between items-center sticky top-0 z-50 bg-slate-50/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-transparent dark:border-white/5"
        >
          <h1 className="text-xl font-burtons bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            DevPavanSantosh
          </h1>
          <ul className="flex items-center gap-6">
            <li>
              {darkMode ? (
                <BsFillSunFill
                  className="cursor-pointer text-2xl hover:text-brand-accent transition-colors text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl hover:text-brand-primary transition-colors text-slate-900"
                  onClick={() => setDarkMode(!darkMode)}
                />
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-brand-primary/30 transition-all active:scale-95"
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* Hero Section */}
        <section className="px-10 md:px-20 lg:px-40 pt-20 pb-16 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
          {/* Animated Blob Background */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:bg-brand-primary/20 pointer-events-none"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-secondary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:bg-brand-secondary/20 pointer-events-none"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-accent/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:bg-brand-accent/20 pointer-events-none"></div>

          <div className="z-10 text-center relative max-w-3xl">
            <motion.span
              custom={1}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm border border-brand-primary/20 mb-6 inline-block shadow-sm"
            >
              Building systems for 3.5+ Years
            </motion.span>

            <motion.h2
              custom={2}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="text-5xl md:text-7xl font-bold py-2 mb-2 tracking-tight dark:text-white text-slate-900"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Pavan Santosh
              </span>
            </motion.h2>

            <motion.h3
              custom={3}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="text-2xl md:text-3xl py-2 font-medium text-slate-600 dark:text-slate-300"
            >
              Senior Software Engineer
            </motion.h3>

            <motion.p
              custom={4}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="text-base md:text-xl py-5 leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            >
              Full-stack developer at Affinsys AI. I build highly scalable backend microservices,
              real-time telephony architectures, and robust frontend AI dashboards.
            </motion.p>

            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="flex justify-center gap-8 py-6"
            >
              <a
                href="https://www.linkedin.com/in/pavansantosh-ps/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#0077b5] dark:text-slate-400 dark:hover:text-[#0077b5] transition-colors text-3xl"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/pavansantosh-ps"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-3xl"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.instagram.com/pavann_santosh/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-[#E1306C] dark:text-slate-400 dark:hover:text-[#E1306C] transition-colors text-3xl"
              >
                <AiFillInstagram />
              </a>
            </motion.div>

            <motion.div
              custom={6}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-primary/20 border border-slate-200 dark:border-white/10 dark:shadow-[0_30px_80px_rgba(20,184,166,0.15)] transform rotate-2 hover:rotate-0 transition-transform duration-700 hover:scale-105"
            >
              <Image
                src={heroImg}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                alt="Developer Illustration"
              />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-10 md:px-20 lg:px-40 py-24 bg-slate-100 dark:bg-slate-900/50">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-center dark:text-white text-slate-900"
          >
            Professional Journey
          </motion.h3>

          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 md:space-y-16 space-y-12 pb-4">
            {/* Role 1 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={reveal}
              className="mb-8 ml-6 md:ml-10 relative group"
            >
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-brand-primary rounded-full ring-4 ring-slate-100 dark:ring-[#0b1626] text-white z-10 transition-transform duration-300 group-hover:scale-110">
                <MdWorkOutline />
              </span>
              <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1 dark:hover:border-brand-primary/30">
                <h3 className="flex flex-wrap items-center mb-1 text-2xl font-bold dark:text-white text-slate-900">
                  Senior Software Engineer{" "}
                  <span className="bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full ml-4 shadow-sm">
                    Current
                  </span>
                </h3>
                <time className="block mb-5 text-sm font-medium uppercase tracking-widest leading-none text-slate-500 dark:text-slate-400">
                  Affinsys AI • Sep 2025 - Present • Bengaluru
                </time>
                <p className="mb-5 text-base font-normal text-slate-600 dark:text-slate-300">
                  Leading frontend development for telephony services and driving observability
                  initiatives across the platform.
                </p>
                <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-300 space-y-3 marker:text-brand-primary font-medium opacity-90">
                  <li className="leading-relaxed">
                    Built a telephony service frontend enabling SIP-powered customer support
                    workflows.
                  </li>
                  <li className="leading-relaxed">
                    Driving observability initiatives across 10+ microservices with OpenTelemetry,
                    SigNoz, and ClickHouse.
                  </li>
                  <li className="leading-relaxed">
                    Built an NLQ analytics builder that converts natural language prompts into
                    queries and dynamic drag-and-drop dashboards.
                  </li>
                  <li className="leading-relaxed">
                    Developed reusable backend packages adopted across multiple services to improve
                    speed and consistency.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Role 2 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              variants={reveal}
              className="mb-8 ml-6 md:ml-10 relative group"
            >
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-brand-secondary rounded-full ring-4 ring-slate-100 dark:ring-[#0b1626] text-white z-10 transition-transform duration-300 group-hover:scale-110">
                <MdWorkOutline />
              </span>
              <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-secondary/10 hover:-translate-y-1 dark:hover:border-brand-secondary/30">
                <h3 className="mb-1 text-2xl font-bold dark:text-white text-slate-900">
                  Software Engineer
                </h3>
                <time className="block mb-5 text-sm font-medium uppercase tracking-widest leading-none text-slate-500 dark:text-slate-400">
                  Affinsys AI • Jul 2023 - Sep 2025 • Bengaluru
                </time>
                <p className="mb-5 text-base font-normal text-slate-600 dark:text-slate-300">
                  Owned critical microservices and CRM products scaling to 80+ notifications per
                  second and millions of profiles.
                </p>
                <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-300 space-y-3 marker:text-brand-secondary font-medium opacity-90">
                  <li className="leading-relaxed">
                    Built a multi-channel notification service supporting WhatsApp, Email, Facebook,
                    Instagram, LINE, and Viber.
                  </li>
                  <li className="leading-relaxed">
                    Engineered a centralized CRM profile platform with JSONB/GIN indexing for
                    sub-second filtering on 1M+ users.
                  </li>
                  <li className="leading-relaxed">
                    Implemented event-driven delivery using RabbitMQ and Redis Pub/Sub.
                  </li>
                  <li className="leading-relaxed">
                    Engineered the Campaign Manager microfrontend, reducing average query creation
                    time from 20 minutes to 5 minutes.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Role 3 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={3}
              variants={reveal}
              className="mb-8 ml-6 md:ml-10 relative group"
            >
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 text-slate-600 bg-slate-300 rounded-full ring-4 ring-slate-100 dark:ring-[#0b1626] dark:bg-slate-700 dark:text-slate-300 z-10 transition-transform duration-300 group-hover:scale-110">
                <MdSchool />
              </span>
              <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-white/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="mb-1 text-2xl font-bold dark:text-white text-slate-900">
                  Software Engineer Intern
                </h3>
                <time className="block mb-5 text-sm font-medium uppercase tracking-widest leading-none text-slate-500 dark:text-slate-400">
                  Affinsys AI • Oct 2022 - Jun 2023 • Bengaluru
                </time>
                <p className="mb-5 text-base font-normal text-slate-600 dark:text-slate-300">
                  Transitioned from Superset to a custom-built, highly tailored analytics platform.
                </p>
                <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-300 space-y-3 marker:text-slate-500 font-medium opacity-90">
                  <li className="leading-relaxed">
                    Contributed to an in-house analytics platform after working with Apache
                    Superset.
                  </li>
                  <li className="leading-relaxed">
                    Built internal analytics dashboards with Django REST, React, TypeScript, Redux,
                    and RTK Query.
                  </li>
                  <li className="leading-relaxed">
                    Engineered an event logging service aggregating 10+ data sources, improving read
                    performance by 30%.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-10 md:px-20 lg:px-40 py-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-center dark:text-white text-slate-900"
          >
            Technical Arsenal
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Backend */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-[#0a121f] p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(15,23,42,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/5 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-primary/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 dark:text-white text-slate-900 tracking-tight">
                Backend Systems
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Python",
                  "Go",
                  "Django",
                  "FastAPI",
                  "ASGI",
                  "Redis",
                  "RabbitMQ",
                  "NATS",
                  "Spring Boot",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 text-slate-800 dark:text-slate-200 text-sm rounded-xl font-semibold tracking-wide transition-all duration-300 ${
                      skillHoverStyles[skill] || "hover:border-brand-primary"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-[#0a121f] p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(15,23,42,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/5 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-secondary/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 dark:text-white text-slate-900 tracking-tight">
                Frontend Dev
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Redux",
                  "RTK Query",
                  "TailwindCSS",
                  "Microfrontends",
                  "SIP UIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 text-slate-800 dark:text-slate-200 text-sm rounded-xl font-semibold tracking-wide transition-all duration-300 ${
                      skillHoverStyles[skill] || "hover:border-brand-secondary"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={3}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-[#0a121f] p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(15,23,42,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/5 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-accent/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 dark:text-white text-slate-900 tracking-tight">
                Infrastructure & Data
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "ClickHouse",
                  "PostgreSQL",
                  "SigNoz",
                  "OpenTelemetry",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "LLM/NLQ",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-slate-100 dark:bg-white/5 border border-transparent dark:border-white/5 text-slate-800 dark:text-slate-200 text-sm rounded-xl font-semibold tracking-wide transition-all duration-300 ${
                      skillHoverStyles[skill] || "hover:border-brand-accent"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Selected Side Projects */}
        <section className="px-10 md:px-20 lg:px-40 py-24 bg-slate-100 dark:bg-slate-900/50">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-center dark:text-white text-slate-900"
          >
            Personal Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-slate-500 mb-16 max-w-2xl mx-auto text-lg"
          >
            Selected open-source libraries and platforms I've built outside of work.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 flex flex-col"
            >
              <h4 className="text-3xl font-display font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
                GoChrono
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base mb-8 leading-relaxed flex-grow">
                An open-source task scheduler in Go built around NATS, acknowledgements, consumers,
                and goroutine-powered concurrency.
              </p>
              <div className="flex gap-2.5 flex-wrap mt-auto">
                {["Go", "NATS", "Concurrency"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary text-xs rounded-lg font-bold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-secondary/10 hover:border-brand-secondary/30 flex flex-col"
            >
              <h4 className="text-3xl font-display font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
                NetRequest
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base mb-8 leading-relaxed flex-grow">
                A Go HTTP client library with support for REST verbs, custom headers, query params,
                retry logic, and endpoint abstractions.
              </p>
              <div className="flex gap-2.5 flex-wrap mt-auto">
                {["Go", "HTTP", "Retry Logic"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-brand-secondary/10 text-brand-secondary text-xs rounded-lg font-bold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={3}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10 hover:border-brand-accent/30 flex flex-col"
            >
              <h4 className="text-3xl font-display font-bold dark:text-white text-slate-900 mb-4 tracking-tight">
                PyAgile
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base mb-8 leading-relaxed flex-grow">
                A task management platform built with FastAPI, SQLAlchemy, async Python, and a React
                + TypeScript frontend.
              </p>
              <div className="flex gap-2.5 flex-wrap mt-auto">
                {["FastAPI", "React", "TypeScript"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-brand-accent/10 text-brand-accent text-xs rounded-lg font-bold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certs & Languages */}
        <section className="px-10 md:px-20 lg:px-40 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              variants={reveal}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-[#0a121f] p-10 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-white/5"
            >
              <h4 className="text-3xl font-bold mb-8 dark:text-white text-slate-900 tracking-tight">
                Certifications
              </h4>
              <ul className="space-y-6">
                {[
                  "Virtual Experience Program Participant at AWS",
                  "HTML and CSS Certification for Beginners",
                  "React (Basics) Certificate",
                  "AWS Academy Cloud Foundations",
                ].map((cert, index) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <svg
                      className="w-6 h-6 text-brand-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-snug">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={2}
              variants={reveal}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-[#0a121f] p-10 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-white/5"
            >
              <h4 className="text-3xl font-bold mb-8 dark:text-white text-slate-900 tracking-tight">
                Languages
              </h4>
              <ul className="space-y-6">
                {[
                  "Telugu - Native",
                  "English - Professional",
                  "Hindi - Professional",
                  "Tamil - Elementary",
                ].map((lang, index) => (
                  <motion.li
                    key={lang}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    <svg
                      className="w-6 h-6 text-brand-secondary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="leading-snug">{lang}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-10 md:px-20 lg:px-40 py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={reveal}
            className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 rounded-[3rem] p-12 md:p-20 text-center border border-brand-primary/20 dark:border-white/5 relative overflow-hidden"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-72 h-72 bg-brand-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900 tracking-tight relative z-10">
              Let's build something great.
            </h3>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
              I'm currently open to new opportunities. Whether you have a question, a project idea,
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:pavansantosh@example.com"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/20 transition-all duration-300 relative z-10 group"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Say Hello
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Pavan Santosh. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </>
  );
}
