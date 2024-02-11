import { animate, motion, useMotionValue, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const CountUp = ({ upTo }: { upTo: number }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        isInView && animate(count, upTo, { duration: 2 });
    }, [isInView, isInView, upTo])

    return (
        <motion.span
            ref={ref}
            className="d-inline-block"
        >
            {rounded}
        </motion.span>
    )
}
export default CountUp