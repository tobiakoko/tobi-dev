import { AboutMe } from '~/welcome/about'
import type { Route } from './+types/about'
import Loading from '~/components/LoadingScreen'

export function meta({}: Route.MetaArgs) {
    return [
        { name: 'author', content: 'Daniel Akoko'},
        { title: 'Daniel Akoko Website' },
        { name: 'description', content: "Daniel Akoko's Portfolio website"},
        { name: 'description', content: "Daniel Akoko is a new grad full stack react developer software engineer and project manager with typescript nodejs web development web performance optimization accessibility wcag, restful apis, version control git skills and is based in tampa florida, dallas texas, baltimore md, atlanta georgia and los angeles california" },
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
