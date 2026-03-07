import { useState, useEffect } from 'react'

export function useActiveSection(ids: string[]) {
    const [activeSection, setActiveSection] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight
            const scrollHeight = document.documentElement.scrollHeight
            const scrollY = window.scrollY
            const isAtBottom = scrollY + viewportHeight >= scrollHeight - 20

            // Reading line at 20% of viewport height
            const readingLine = viewportHeight * 0.2

            let currentActive: string | null = null

            // Find the last section that has its top above the reading line
            ids.forEach((id) => {
                const element = document.getElementById(id)
                if (!element) return

                const rect = element.getBoundingClientRect()

                if (rect.top <= readingLine) {
                    currentActive = id
                }
            })

            // Special case for bottom of page: if we're at the bottom, 
            // the last visible section should be active even if its top is below reading line
            if (isAtBottom) {
                for (let i = ids.length - 1; i >= 0; i--) {
                    const id = ids[i]
                    const element = document.getElementById(id)
                    if (element) {
                        const rect = element.getBoundingClientRect()
                        if (rect.top < viewportHeight) {
                            currentActive = id
                            break
                        }
                    }
                }
            }

            setActiveSection(currentActive)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [ids])

    return activeSection
}
