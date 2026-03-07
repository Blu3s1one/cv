import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'
import HeroSection from '@/components/resume/HeroSection'
import SkillsSection from '@/components/resume/SkillsSection'
import JobsSection from '@/components/resume/JobsSection'
import ProjectsSection from '@/components/resume/ProjectsSection'
import EducationSection from '@/components/resume/EducationSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import { useCV } from '@/hooks/useCV'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const cv = useCV()

  return (
    <>
      <Header />
      <main className="page-wrap px-4 pb-24 pt-8 sm:pb-8">
        <HeroSection
          name={cv.name}
          title={cv.title}
          profile={cv.profile}
          email={cv.email}
          links={cv.links}
        />

        <Separator className="my-10 bg-[var(--line)]" />
        <SkillsSection skills={cv.skills} />

        <Separator className="my-10 bg-[var(--line)]" />
        <JobsSection jobs={cv.jobs} />

        <Separator className="my-10 bg-[var(--line)]" />
        <ProjectsSection projects={cv.projects} />

        <Separator className="my-10 bg-[var(--line)]" />
        <EducationSection education={cv.education} />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
