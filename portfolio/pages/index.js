import Head from 'next/head'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdWorkOutline, MdSchool } from 'react-icons/md'
import Image from 'next/image'
import heroImg from '../public/hero.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Pavan Santosh | Senior Software Engineer</title>
        <meta name="description" content="Portfolio of Pavan Santosh, Senior Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-slate-50 text-slate-900 dark:bg-brand-dark dark:text-slate-100 min-h-screen font-sans transition-colors duration-300'>
        {/* Navbar */}
        <nav className='px-10 py-5 w-full md:px-20 lg:px-40 flex justify-between items-center sticky top-0 z-50 bg-slate-50/80 dark:bg-brand-dark/80 backdrop-blur-md'>
          <h1 className='text-xl font-burtons bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary'>DevPavanSantosh</h1>
          <ul className='flex items-center gap-6'>
            <li>
              {darkMode ? (
                <BsFillSunFill className='cursor-pointer text-2xl hover:text-brand-accent transition-colors' onClick={() => setDarkMode(!darkMode)} />
              ) : (
                <BsFillMoonStarsFill className='cursor-pointer text-2xl hover:text-brand-primary transition-colors' onClick={() => setDarkMode(!darkMode)} />
              )}
            </li>
            <li>
              <a className='bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-brand-primary/30 transition-all active:scale-95' href="/Resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className='px-10 md:px-20 lg:px-40 pt-20 pb-16 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden'>
          {/* Animated Blob Background */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-primary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:bg-brand-primary/20"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-secondary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:bg-brand-secondary/20"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-accent/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:bg-brand-accent/20"></div>

          <div className='z-10 text-center relative max-w-3xl'>
            <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm border border-brand-primary/20 mb-6 inline-block">
              Available for Opportunities
            </span>
            <h2 className='text-5xl md:text-7xl font-bold py-2 mb-2 tracking-tight'>
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Pavan Santosh</span>
            </h2>
            <h3 className='text-2xl md:text-3xl py-2 font-medium text-slate-600 dark:text-slate-300'>
              Senior Software Engineer
            </h3>
            <p className='text-base md:text-xl py-5 leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
              Full-stack developer with 3.5+ years of experience building highly scalable products at Affinsys AI. 
              Specializing in backend microservices, real-time telephony architectures, and robust frontend dashboards.
            </p>
            
            <div className='flex justify-center gap-8 py-6'>
              <a href="https://www.linkedin.com/in/pavan-santosh/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#0077b5] dark:text-slate-400 dark:hover:text-[#0077b5] transition-colors text-3xl"><AiFillLinkedin /></a>
              <a href="https://github.com/pavansantosh-ps" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors text-3xl"><AiFillGithub /></a>
              <a href="https://www.instagram.com/pavann_santosh/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#E1306C] dark:text-slate-400 dark:hover:text-[#E1306C] transition-colors text-3xl"><AiFillInstagram /></a>
            </div>
            
            <div className='relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-12 rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/20 border border-slate-200 dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500'>
              <Image src={heroImg} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" alt="Developer Illustration"/>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className='px-10 md:px-20 lg:px-40 py-20 bg-slate-100 dark:bg-slate-900/50'>
          <h3 className='text-4xl font-bold mb-12 text-center'>Professional Journey</h3>
          
          <div className="relative border-l border-slate-300 dark:border-slate-700 ml-3 md:ml-6 md:space-y-12 space-y-8">
            
            {/* Role 1 */}
            <div className="mb-8 ml-6 md:ml-10 relative">
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-brand-primary rounded-full ring-4 ring-white dark:ring-slate-900 text-white">
                <MdWorkOutline />
              </span>
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-brand-primary/10 transition-shadow">
                <h3 className="flex items-center mb-1 text-2xl font-bold">Senior Software Engineer <span className="bg-brand-secondary/10 text-brand-secondary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Current</span></h3>
                <time className="block mb-4 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">Affinsys AI • 4 mos</time>
                <p className="mb-4 text-base font-normal text-slate-600 dark:text-slate-300">
                  Spearheading telephony and observability infrastructure.
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 marker:text-brand-primary">
                  <li>Built a telephony service frontend using a SIP client for customer support call handling.</li>
                  <li>Implemented full-stack observability pipelines using SigNoz, ClickHouse, and OpenTelemetry for robust data collection and tracing.</li>
                  <li>Developed an LLM-powered Query Builder utilizing NLQ to generate dynamic charts and drag-and-drop dashboards.</li>
                </ul>
              </div>
            </div>

            {/* Role 2 */}
            <div className="mb-8 ml-6 md:ml-10 relative">
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-brand-secondary rounded-full ring-4 ring-white dark:ring-slate-900 text-white">
                <MdWorkOutline />
              </span>
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-brand-secondary/10 transition-shadow">
                <h3 className="mb-1 text-2xl font-bold">Software Engineer</h3>
                <time className="block mb-4 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">Affinsys AI • 2 yrs 3 mos</time>
                <p className="mb-4 text-base font-normal text-slate-600 dark:text-slate-300">
                  Owned critical microservices and CRM products driving user engagement.
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 marker:text-brand-secondary">
                  <li>Developed the Profile Service (CRM) consolidating complete user details, channel info, and auth data for campaign cohort creation.</li>
                  <li>Built a high-scale Notification Service integrating multiple BSPs (WhatsApp, FB, IG, Email, Line, Viber).</li>
                  <li>Engineered the Campaign Manager microfrontend and scheduled analytics dispatch service (recurring, period, one-time).</li>
                  <li>Developed reusable backend Python packages utilizing threading/async methods and internal Pub/Sub libraries (Redis, RabbitMQ).</li>
                </ul>
              </div>
            </div>

            {/* Role 3 */}
            <div className="mb-8 ml-6 md:ml-10 relative">
              <span className="flex absolute -left-[35px] md:-left-[51px] justify-center items-center w-8 h-8 md:w-10 md:h-10 text-slate-600 bg-slate-200 rounded-full ring-4 ring-white dark:ring-slate-900 dark:bg-slate-700 dark:text-slate-300">
                <MdSchool />
              </span>
              <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="mb-1 text-2xl font-bold">Software Engineer Intern</h3>
                <time className="block mb-4 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">Affinsys AI • 10 mos</time>
                <p className="mb-4 text-base font-normal text-slate-600 dark:text-slate-300">
                  Transitioned from Superset to a custom-built, highly tailored analytics platform.
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 marker:text-slate-500">
                  <li>Migrated analytics off Superset to a custom Django-based backend solution.</li>
                  <li>Developed the frontend counterpart using TypeScript, React, Redux, and RTK Query.</li>
                  <li>Contributed to "EventLogger", a centralized data collector meant for querying complex analytics metadata.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className='px-10 md:px-20 lg:px-40 py-20'>
          <h3 className='text-4xl font-bold mb-12 text-center'>Technical Arsenal</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Backend */}
            <div className='bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/80 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700'>
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <h4 className='text-xl font-bold mb-4'>Backend & Core</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'ASGI', 'Multithreading', 'Asyncio', 'Redis', 'Celery', 'RabbitMQ'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-md font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className='bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/80 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700'>
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className='text-xl font-bold mb-4'>Frontend Dev</h4>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React.js', 'Next.js', 'Redux', 'RTK Query', 'TailwindCSS', 'Microfrontends', 'SIP Clients'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-md font-medium">{skill}</span>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className='bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/80 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700'>
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h4 className='text-xl font-bold mb-4'>Infrastructure & Data</h4>
              <div className="flex flex-wrap gap-2">
                {['ClickHouse', 'SigNoz', 'OpenTelemetry', 'PostgreSQL', 'Docker', 'AWS', 'LLM/NLQ'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-sm rounded-md font-medium">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Side Projects */}
        <section className='px-10 md:px-20 lg:px-40 py-20 bg-slate-100 dark:bg-slate-900/50'>
          <h3 className='text-4xl font-bold mb-4 text-center'>College Side Projects</h3>
          <p className='text-center text-slate-500 mb-12 max-w-2xl mx-auto'>A showcase of earlier learning projects built during my college days focusing on core algorithms and UI functionality.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <a href="https://pavansantosh-ps.github.io/SortingVisualizer/" target="_blank" rel="noreferrer" className='group'>
              <div className='relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700'>
                <Image src={web2} fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover group-hover:scale-105 transition-transform duration-500' alt="Sorting Visualizer"/>
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end'>
                  <h4 className='text-white text-xl font-bold'>Sorting Visualizer</h4>
                  <p className='text-slate-300 text-sm'>React algorithm visualizer</p>
                </div>
              </div>
            </a>
            
            <a href="https://github.com/pavansantosh-ps/MedEx" target="_blank" rel="noreferrer" className='group'>
              <div className='relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700'>
                <Image src={web4} fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover group-hover:scale-105 transition-transform duration-500' alt="MedEx"/>
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end'>
                  <h4 className='text-white text-xl font-bold'>MedEx</h4>
                  <p className='text-slate-300 text-sm'>Healthcare management platform</p>
                </div>
              </div>
            </a>
            
            <a href="https://pavansantosh-ps.github.io/movie-quotes/" target="_blank" rel="noreferrer" className='group'>
              <div className='relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700'>
                <Image src={web1} fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover group-hover:scale-105 transition-transform duration-500' alt="Movie Quotes"/>
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end'>
                  <h4 className='text-white text-xl font-bold'>Movie Quotes</h4>
                  <p className='text-slate-300 text-sm'>React movie database application</p>
                </div>
              </div>
            </a>
            
            <a href="https://pavansantosh-ps.github.io/BankingApplication-TSF/" target="_blank" rel="noreferrer" className='group'>
              <div className='relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700'>
                <Image src={web3} fill sizes="(max-width: 768px) 100vw, 50vw" className='object-cover group-hover:scale-105 transition-transform duration-500' alt="Banking Application"/>
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end'>
                  <h4 className='text-white text-xl font-bold'>Banking App</h4>
                  <p className='text-slate-300 text-sm'>Transactional banking interface</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className='py-8 text-center text-slate-500 text-sm'>
          <p>© {new Date().getFullYear()} Pavan Santosh. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  )
}
