import { useState, type FC, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Badge from '~/components/Badge'
import { Link } from 'react-router'
import { contactInfo } from './about'

// Define TypeScript interfaces
interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

interface FormStatus {
    submitted: boolean
    error: string | null
}

interface FAQItem {
    id: number
    question: string
    answer: string
}

interface SocialLink {
    id: number
    name: string
    url: string
    icon: string
}

interface ContactInfo {
    email: string
    location: string
}

export const Contacts: FC = () => {
    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        error: null,
    })

    // Contact information
    const contactInfo: ContactInfo = {
        email: 'hello@danielakoko.com',
        location: 'Tampa, Florida',
    }

    // Social links
    const socialLinks: SocialLink[] = [
        {
            id: 1,
            name: 'GitHub',
            url: 'https://github.com/danielakoko',
            icon: 'github',
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/danielakoko',
            icon: 'linkedin',
        },
        {
            id: 3,
            name: 'Twitter',
            url: 'https://twitter.com/danielakoko',
            icon: 'twitter',
        },
    ]

    // FAQ items
    const faqItems: FAQItem[] = [
        {
            id: 1,
            question: 'What types of projects do you work on?',
            answer: 'I specialize in front-end development for web applications, focusing on React-based projects. This includes e-commerce platforms, dashboards, content management systems, and custom web applications.',
        },
        {
            id: 2,
            question: 'What is your typical project timeline?',
            answer: "Project timelines vary based on complexity and scope. A small project might take 2-4 weeks, while larger applications can take 2-3 months. I'll provide a detailed timeline estimate after discussing your specific requirements.",
        },
        {
            id: 3,
            question: 'Do you offer maintenance after project completion?',
            answer: 'Yes, I offer maintenance packages to ensure your application remains up-to-date and secure. These can be tailored to your specific needs and budget.',
        },
        {
            id: 4,
            question: 'How do you handle project collaboration?',
            answer: 'I use tools like Slack, Trello, and GitHub for project management and collaboration. Regular video calls keep everyone aligned on project goals and progress.',
        },
    ]

    // Form handlers
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Simulate form submission
        setFormStatus({ submitted: true, error: null })
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <Badge badge={'Contact Me'} />
                <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let's discuss your project or just say hello. I'm always
                    open to new opportunities.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                {/* Contact Information Column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col gap-10"
                >
                    <motion.div
                        variants={itemVariants}
                        className="contact-section"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 text-sm">
                            I'm always open to discussing new projects, creative
                            ideas, or opportunities to be part of your vision.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-2xl shadow-sm"
                    >
                        <h3 className="text-base font-medium mb-6 text-indigo-600">
                            Contact Information
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-700">
                                    {contactInfo.email}
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-700">
                                    {contactInfo.location}
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white p-6 rounded-2xl shadow-sm"
                    >
                        <h3 className="text-base font-medium mb-6 text-indigo-600">
                            Follow Me
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                                >
                                    <span className="sr-only">{link.name}</span>
                                    <span>
                                        {link.icon.charAt(0).toUpperCase()}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-indigo-50 p-6 rounded-2xl"
                    >
                        <h3 className="text-base font-medium mb-3 text-indigo-700">
                            Availability
                        </h3>
                        <p className="text-sm text-indigo-700/80">
                            I'm currently available for freelance work and
                            project collaborations. My typical response time is
                            within 24 hours.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Contact Form Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-md"
                >
                    {formStatus.submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-20 h-20 bg-green-50 flex items-center justify-center rounded-full mx-auto mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold mb-4">
                                Message Sent!
                            </h2>
                            <p className="text-sm mb-8 text-gray-500 max-w-md mx-auto">
                                Thank you for reaching out. I'll get back to you
                                as soon as possible.
                            </p>
                            <button
                                onClick={() =>
                                    setFormStatus({
                                        submitted: false,
                                        error: null,
                                    })
                                }
                                className="text-sm bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-xs font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-xs font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block mb-2 text-xs font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-xs font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 outline-none resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="faq-section"
            >
                <h2 className="text-xl font-semibold mb-12 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqItems.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="text-sm font-medium mb-3">
                                {item.question}
                            </h3>
                            <p className="text-xs text-gray-600">
                                {item.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}


export const Placeholder: FC = () => {

    // Social links
    const socialLinks: SocialLink[] = [
        {
            id: 1,
            name: 'GitHub',
            url: 'https://github.com/danielakoko',
            icon: 'github',
        },
        {
            id: 2,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/danielakoko',
            icon: 'linkedin',
        },
        {
            id: 3,
            name: 'Twitter',
            url: 'https://twitter.com/danielakoko',
            icon: 'twitter',
        },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

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

    return (
        <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <Badge badge={'Contact Me'} />
                <p className="text-xl md:text-md font-light tracking-tight text-gray-600 mb-8 max-w-2xl mx-auto">
                    Say Hello!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
                >
                <p className="text-md font-light tracking-tight text-gray-600 mb-8 max-w-6xl mx-auto italic">
                You might want to pass across a message or say hello. I&apos;m
                    always open to new opportunities. Send me an email at <span>{contactInfo.email}</span>{' '}
                    and I&apos;ll be sure to respond as soon as possible.
                </p>
                </motion.div>

            <motion.div
                                className="flex flex-wrap gap-4"
                                custom={0.6}
                                variants={fadeInUp}
                            >
                                <Link
                                    to={`mailto:${contactInfo.email}`}
                                    className="px-6 py-3 rounded-lg bg-[color:var(--secondary)] text-[color:var(--accent-foreground)] font-medium font-futura transition-all duration-300 hover:bg-[rgb(186,195,255)] hover:shadow-lg"
                                >
                                    Send me an email
                                </Link>
                            </motion.div>
            
        </div>
    )
}
