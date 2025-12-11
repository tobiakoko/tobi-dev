import { AboutMe } from '~/welcome/about'
import type { Route } from './+types/about'
import Loading from '~/components/LoadingScreen'

export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko'},
        { title: 'Daniel Akoko Website' },
        { name: 'description', content: "Daniel Akoko's Portfolio website"},
        { name: 'description', content: "Daniel Akoko is a Full Stack Software Engineer based in Dallas, Texas, specializing in React, TypeScript, Next.js, and modern web technologies. Experienced in building enterprise platforms, AI-powered solutions, and performant, accessible web applications." },
    ]
}

export function links() {
    return [
        {
            rel: "icon",
            href: "/Logo-dark.ico",
            type: "image/png"
        }
    ]
}

export default function About() {
    return (
        <Loading OGComponent={AboutMe} />
    )
}
