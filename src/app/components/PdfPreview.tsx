"use client"

import { useEffect, useState } from "react"

const PREVIEW_QUERY = "(min-width: 768px)"

/**
 * Embedded PDF viewer for wide screens only. A display:none iframe still downloads its document,
 * so on phones (where mobile browsers can't render PDFs in a frame anyway) the iframe is never created.
 * The wrapper reserves the viewer's height on wide screens, so nothing shifts when it mounts.
 */
export default function PdfPreview({ src, title }: { src: string; title: string }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const query = window.matchMedia(PREVIEW_QUERY)
    const update = () => setShow(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return (
    <div className="hidden h-[70vh] min-h-[480px] overflow-hidden rounded-lg border border-neutralDivider bg-neutralBg md:block">
      {show ? <iframe title={title} src={src} loading="lazy" className="h-full w-full" /> : null}
    </div>
  )
}
