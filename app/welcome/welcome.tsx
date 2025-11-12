import { useState, useEffect } from 'react'
import { HeroSection } from './sections/HeroSection'
import { ProjectSection } from './sections/ProjectSection'
import CTA from '~/components/CTA'

/**
 * Main welcome/homepage component
 * Follows Tao of React principles: focused, composable, single responsibility
 */
export function Welcome() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="overflow-hidden">
            <HeroSection isLoaded={isLoaded} />
            <ProjectSection />
            <CTA />
        </div>
    )
}
