import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Badge from '~/components/Badge'
import CTA from '~/components/CTA'
import SocialIcon from '~/components/Socials'
import SubHeading from '~/components/SubHeading'
import Tooltip from '~/components/Tootip'

export interface ContactInfo {
    email: string
    location: string
}

export const contactInfo: ContactInfo = {
    email: 'hello@danielakoko.com',
    location: 'Tampa, Florida',
}

export const works = {
    askKumuyi: "I got wind of this project right after my graduation, in oct '25, during their soft launch / beta test phase and I didn't like how the front end design looked so I built something and I sent it to the team.",
    dlbcTampa: "As a PK --IYKYK-- in a small assembly, you do what you have to to help out when the need arises. Came up with the idea to build this because there's another organization that has a really similar name to ours and a lot of people complain they get misdirected there when navigating to our church location. Had to learn SEO, how gtm works, google business profile, quite a lot. I should writing a book on my experiences :)",
    freeWillPay: "After the Ask-Kumuyi Project was finished, I got the figma files for this fullstack project and I can't say much more as it is still in development",
}

export function AboutMe() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.6, 0.05, 0.01, 0.9],
            },
        }),
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    type SocialType = 'github' | 'linkedin' | 'twitter';

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/tobiakoko',
            icon: 'github' as SocialType,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/daniel-akoko/',
            icon: 'linkedin' as SocialType,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/',
            icon: 'twitter' as SocialType,
        },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="pt-32 pb-24 px-6 md:px-10"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        custom={0}
                        variants={fadeInUp}
                    >
                        <Badge badge={'About Me'} />
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-gray-900">
                            Daniel Akoko
                        </h1>
                        <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                            Software Engineer | Full Stack Developer
                        </p>
                    </motion.div>

                    {/* About Content */}
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Image Column */}
                        <motion.div
                            custom={1}
                            variants={fadeInUp}
                            className="md:col-span-1"
                        >
                            <div className="relative">
                                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* 
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 opacity-50">
                      <img src={Image} alt="Daniel Akoko" className="w-full h-full object-cover object-center" />
                    </div> 
                    */}
                                        <div className="absolute inset-0 bg-blue-600 opacity-3"></div>
                                    </div>
                                </div>

                                {/* Contact Info Cards */}
                                <div className="mt-8 space-y-4 font-futura">
                                    <div className="p-4 bg-white">
                                        <h3 className="text-xs font-medium text-gray-500 mb-2">
                                            Location
                                        </h3>
                                        <p className="text-sm text-gray-900">
                                            {contactInfo.location}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white">
                                        <h3 className="text-xs font-medium text-gray-500 mb-2">
                                            Email
                                        </h3>
                                        <p className="text-sm text-gray-900">
                                            {contactInfo.email}
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white">
                                        <h3 className="text-xs font-medium text-gray-500 mb-2">
                                            Languages
                                        </h3>
                                        <p className="text-sm text-gray-900">
                                            English, React, TypeScript, Java
                                        </p>
                                    </div>

                                    <div className="p-4 bg-white">
                                        <h3 className="text-xs font-medium text-gray-500 mb-2">
                                            Socials
                                        </h3>
                                        <p className="text-sm text-gray-900 flex space-x-4 items-center">
                                            {socialLinks.map((link) => (
                                                <SocialIcon
                                                    key={link.name}
                                                    name={link.name}
                                                    url={link.url}
                                                    icon={link.icon}
                                                />
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            custom={2}
                            variants={fadeInUp}
                            className="md:col-span-2 px-4 md:px-20"
                        >
                            <div className="prose max-w-prose text-sm/6 text-slate-500">
                                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                                    My Story
                                </h2>

                                <p className="mb-4">
                                    Hello and welcome! My name is Daniel 
                                    and I&apos;m currently based in <Tooltip content="I shunt between Tampa, Dallas & LA frequently" position="top" className="decoration-dashed">Tampa, Florida</Tooltip>
                                    {/* 
                                            Abeokuta, Ogun State's capital in southwestern Nigeria, is a 
                                            historic city known for its dramatic granite outcrops, 
                                            particularly the sacred Olumo Rock. Founded in the 1830s as a 
                                            Yoruba settlement, it blends rich cultural heritage with modern 
                                            development, featuring traditional crafts like adire textile 
                                            production alongside educational institutions and the impressive 
                                            Gbadebo royal palace.
                                    */}
                                </p>
                                
                                <p className="mb-4">
                                    I&apos;m a FullStack Engineer working on <Link to="#" className="tip decoration-double"><Tooltip content={works.freeWillPay} className="decoration-double" position="top" >FreeWillPay</Tooltip></Link>.
                                    Before that, I built <Link to="#" className="tip decoration-double"><Tooltip content={works.dlbcTampa} className="decoration-double" position="top" >dlbcTampa</Tooltip></Link>, and 
                                    the frontend UI for <Link to="https://askkumuyi.ai/" className="tip"><Tooltip content={works.askKumuyi} className="decoration-double" position="top" >askKumuyi</Tooltip></Link>.
                                    In a past life, I worked in the hospitality industry, where I honed customer service, attention to detail, and teamwork skills which has influenced my 
                                    approach to software development, emphasizing user-centric design and collaboration.
                                </p>

                                <p className="mb-4">
                                    I care a lot about <span className="">web performance</span>, accessibility and <span className="">customer experience</span> but 
                                    I love exploring topics concerning <span className="">build tools</span> and <span className="">AI integrations</span>. 
                                    I hold a BS in Computer Science from <Link to="https://www.wgu.edu/" target='_blank' className="tip">WGU</Link>,
                                    a BGS in Criminology from <Link to="https://www.usf.edu/" target='_blank' className="tip">USF</Link> and 
                                    an AA in Electrical Engineering from <Link to="https://ccbcmd.edu/" target='_blank' className="tip">CCBC</Link>.
                                </p>

                                <p className="mb-4">
                                    Outside tech and programming, I help run the <span ><Link to="https://www.dlya.org/giving" className="tip">DLYA Fundraising Team</Link></span>{' '}
                                </p>

                                <p className="mb-1 font-medium">Favourite Stack&#58;</p>
                                <p className="mb-4 ml-4">TypeScript, React, Vite, Nodejs, Tailwind CSS, React-Router, MySQL</p>
                                
                                <div className="flex space-x-4 mt-8">
                                    <Link
                                        to="/projects"
                                        className="px-6 py-3 rounded-lg bg-blue-600 text-sm text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                                    >
                                        See My Library
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-24 px-6 md:px-10 bg-gray-50"
            >
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="My Philosophy"
                        description="Core principles that guide my approach to development and design."
                    />

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-[rgba(245,245,253,0.5)] backdrop-blur-sm max-w-2xl mx-auto rounded-2xl [box-shadow:inset_0_0_302px_#8092ff4d] border border-[color:var(--badge-border)] text-[color:var(--badge-text)] font-futura p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <blockquote className="text-center sm:px-7">
                            <p className="font-medium md:text-md md:leading-normal xl:leading-normal p-4 lg:p-10 max-w-prose">
                                
                                &ldquo;I didn&apos;t invent the language or mathematics I used. I make little of my one food, 
                                none of my own clothes. Everything I do depends on other members of our species and the 
                                shoulders that we stand on. And a lot of us want to contribute something back to our species 
                                and to add something to the flow. It&apos;s about trying to express something in the only 
                                way that most of us know how because we can&apos;t write Bob Dylan songs or Tom Stoppard 
                                plays. We try to use the talents we do have to express our deep feelings, to show our 
                                appreciation of all the contributions that came before us, and to add something to 
                                that flow. That&apos;s what has driven me.&rdquo;
                                         
                            </p>
                            <p className="mt-5 italic">&mdash;{' '} Steve Jobs</p>
                        </blockquote>
                    </motion.div>
                    {/*                
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'User-Centered Design',
                                description:
                                    'I believe that exceptional user experiences begin with empathy and understanding. Every design decision I make is informed by user needs and goals.',
                                icon: 'user',
                            },
                            {
                                title: 'Clean, Maintainable Code',
                                description:
                                    "Writing code that's not only functional but also readable, scalable, and maintainable is central to my development approach.",
                                icon: 'code',
                            },
                            {
                                title: 'Continuous Innovation',
                                description:
                                    'I embrace new technologies and methodologies, constantly expanding my skills to deliver cutting-edge solutions.',
                                icon: 'sparkles',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {item.icon === 'user' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        )}
                                        {item.icon === 'code' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        )}
                                        {item.icon === 'sparkles' && (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        )}
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-[color:var(--badge-text)]">
                                    {item.title}
                                </h3>
                                <blockquote className="text-center p-4 sm:px-7">
                                    <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:leading-normal">
                                        &ldquo;I didn&apos;t invent the language or mathematics I used. I make little of my one food, none of my own clothes. Everything I do depends on other members of our 
                                        species and the shoulders that we stand on. And a lot of us want to contribute something back to our species and to add something to the flow. It&apos;s about trying to 
                                        express something in the only way that most of us know how because we can&apos;t write Bob Dylan songs or Tom Stoppard plays. We try to use the talents we do have to 
                                        express our deep feelings, to show our appreciation of all the contributions that came before us, and to add something to that flow. That&apos;s what has driven me.&rdquo;
                                         
                                    </p>
                                    <p className="mt-5 text-gray-800">&mdash;{' '} Steve Jobs</p>
                                </blockquote>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>*/}
                </div>
            </motion.section>

            {/* Experience & Skills Section */}
            <ExperienceNSkill />

            {/* Call to Action */}
            <CTA />
        </div>
    )
}

export function ExperienceNSkill() {
    return (
        <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-24 px-6 md:px-10 hidden"
            >
                <div className="max-w-6xl mx-auto">
                    <SubHeading
                        title="Experience & Skills"
                        description="My professional journey and technical expertise."
                    />

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-8 text-foreground flex items-center">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-[color:var(--badge-text)] flex items-center justify-center mr-3 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>
                                Work Experience
                            </h3>

                            <div className="space-y-12">
                                {[
                                    {
                                        title: 'Senior Front-End Engineer',
                                        company: 'TechNova Solutions',
                                        period: '2023 - Present',
                                        description:
                                            'Leading the front-end development team in building scalable web applications using React, TypeScript, and modern JavaScript frameworks.',
                                    },
                                    {
                                        title: 'Front-End Developer',
                                        company: 'WebCraft Studios',
                                        period: '2019 - 2022',
                                        description:
                                            'Developed responsive websites and progressive web applications with a focus on performance optimization and accessibility.',
                                    },
                                    {
                                        title: 'UI Developer',
                                        company: 'Digital Minds Agency',
                                        period: '2017 - 2019',
                                        description:
                                            'Implemented pixel-perfect user interfaces from design mockups while ensuring cross-browser compatibility.',
                                    },
                                ].map((job, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 border-l-2 border-gray-100"
                                    >
                                        <div className="absolute w-4 h-4 bg-[color:var(--badge-border)] rounded-full -left-[9px] top-1"></div>
                                        <h4 className="text-base font-semibold mb-1 text-gray-900">
                                            {job.title}
                                        </h4>
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <span className="uppercase">{job.company}</span>
                                            <span className="mx-2">•</span>
                                            <span>{job.period}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {job.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-8 text-foreground flex items-center">
                                <span className="w-8 h-8 rounded-full bg-blue-100 text-[color:var(--badge-text)] flex items-center justify-center mr-3 text-sm">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                        />
                                    </svg>
                                </span>
                                Technical Skills
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        category: 'Front-End Technologies',
                                        skills: [
                                            'React.js',
                                            'TypeScript',
                                            'JavaScript (ES6+)',
                                            'HTML5',
                                            'CSS3/SCSS',
                                        ],
                                    },
                                    {
                                        category: 'Libraries & Frameworks',
                                        skills: [
                                            'Redux',
                                            'Next.js',
                                            'Tailwind CSS',
                                            'Framer Motion',
                                            'React Query',
                                        ],
                                    },
                                    {
                                        category: 'Tools & Platforms',
                                        skills: [
                                            'Git/GitHub',
                                            'Webpack/Vite',
                                            'Jest/Testing Library',
                                            'Figma',
                                            'CI/CD',
                                        ],
                                    },
                                    {
                                        category: 'Best Practices',
                                        skills: [
                                            'Responsive Design',
                                            'Accessibility (WCAG)',
                                            'Performance Optimization',
                                            'SEO',
                                            'Component-Driven Development',
                                        ],
                                    },
                                ].map((category, index) => (
                                    <div key={index} className="mb-8">
                                        <h4 className="text-base font-semibold mb-4 text-gray-900">
                                            {category.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
    );
}