import { Contacts, Placeholder } from '~/welcome/contact'
import type { Route } from './+types/contact'

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
            href: "/favicon.ico",
            type: "image/png"
        }
    ]
}
export default function Contact() {
    return (
        <Placeholder />
    )
}
// export function meta({}: Route.MetaArgs) {
//     return [
//         { title: "Contact" },
//         { name: "description", content: "Contact me for inquiries or collaborations." },
//     ];
// }
