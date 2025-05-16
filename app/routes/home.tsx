import type { Route } from './+types/home'
import { Welcome } from '~/welcome/welcome'
import Loading from '~/components/LoadingScreen'
import favico from '/Logo-dark.ico'

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
            href: favico,
            type: "image/x-icon"
        }
    ]
}


export default function Home() {
    return (
        <Loading OGComponent={Welcome} />
    )
}

/* 
FUTURE IMPROVEMENTS
- Add a loading state to the welcome component
- Add a loading state to the meta function
- Add a loading state to the route function
- Add a loading state to the page function
- 

-- Get Templates of different business needs websites on chatgpt or claude, make it 
   really slick and build a dashboard to manage the template content on the backend for 
   businesses who do not want to tinker with the code. 

- Add a cart and payment system to the website to allow users to purchase
  templates and other products from the site.
  lets say the main url is tobi.dev, the subdomain should be shop.tobi.dev

*/
