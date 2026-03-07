import { useEffect } from 'react'
import { X } from 'lucide-react'
import type { ProjectVideo } from '@/types/cv'

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videos: ProjectVideo[]
    title: string
}

export default function VideoModal({
    isOpen,
    onClose,
    videos,
    title,
}: VideoModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="relative w-full max-w-4xl bg-background border border-[var(--line)] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-[var(--line)]">
                    <h3 className="text-lg font-semibold text-[var(--sea-ink)]">
                        {title} - Videos
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-[var(--line)] transition-colors text-[var(--sea-ink-soft)]"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <div className="grid gap-8 md:grid-cols-2">
                        {videos.map((video) => (
                            <div key={video.url} className="space-y-3">
                                <h4 className="font-medium text-[var(--sea-ink)] capitalize">
                                    {video.title}
                                </h4>
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-[var(--line)] shadow-lg">
                                    <video
                                        src={video.url}
                                        controls
                                        className="w-full h-full"
                                        poster=""
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    )
}
