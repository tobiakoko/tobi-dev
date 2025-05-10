import { AboutMe } from '~/welcome/about'
import type { Route } from './+types/about'

export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko'},
        { title: 'Daniel Akoko Website' },
        { name: 'description', content: "Daniel Akoko's Portfolio website"},
        { name: 'description', content: "Daniel Akoko is a Software Engineer and program Manager based in Tampa Florida and is a dedicated problem solver who thrives on learning and building" },
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
    return <AboutMe />
}

// export function links() {
//     return [
//         { rel: "stylesheet", href: "/styles/about.css" },
//     ];
// }
