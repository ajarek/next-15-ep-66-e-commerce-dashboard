'use client'
import { motion } from 'framer-motion'

export const fadeUpVariant = {
  initial: { opacity: 0, y: -200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}
const FadeUpAnimation = ({
  children,
  classDiv,
}: {
  children: React.ReactNode
  classDiv: string
}) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial='initial'
      animate='animate'
      className={classDiv}
    >
      {children}
    </motion.div>
  )
}

export default FadeUpAnimation
