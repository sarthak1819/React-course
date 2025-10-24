import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {

  
  
  const containerRef = React.useRef(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const speed = 0.5 // tweak to change scroll speed

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let rafId
    let last = performance.now()

    const contentWidth = () => el.scrollWidth / 1 // because we duplicate content

    const step = (now) => {
      const delta = now - last
      last = now
      if (!isPaused) {
        // make movement framerate-independent
        el.scrollLeft += speed * (delta / 16)
        // seamless loop: when we've scrolled past the first copy, jump back by its width
        if (el.scrollLeft >= contentWidth()) {
          el.scrollLeft -= contentWidth()
        }
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [isPaused, props.user?.length])

  return (
    <div
      id="right"
      ref={containerRef}
      className="h-full w-2/3 p-2 rounded-3xl flex flex-nowrap gap-5 overflow-x-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {(props.user || []).map((elem, idx) => {
        return (
          <RightCard
            img={elem.img}
            para={elem.para}
            key={idx}
            id={idx}
            tag={elem.tag}
          />
        )
      })}
      {/* duplicate items to create a seamless infinite loop */}
      {(props.user || []).map((elem, idx) => {
        return (
          <RightCard
            img={elem.img}
            para={elem.para}
            key={`dup-${idx}`}
            id={idx}
            tag={elem.tag}
          />
        )
      })}
    </div>
  )
      
}

export default Rightcontent