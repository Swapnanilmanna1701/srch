import { motion } from 'framer-motion'

const ShimmerButton = () => {
  return (
    <motion.button
      className="inline-flex overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#FF98A4_calc(var(--shimmer-button-x)-25%),#f6f6f6_var(--shimmer-button-x),#FF98A4_calc(var(--shimmer-button-x)+25%))] [--shimmer-button-x:0%]"
      initial={
        {
          scale: 1,
          '--shimmer-button-x': '-100%',
        } as any
      }
      animate={
        {
          '--shimmer-button-x': '200%',
        } as any
      }
      transition={{
        stiffness: 500,
        damping: 20,
        type: 'spring',
        '--shimmer-button-x': {
          duration: 3,
          repeat: Infinity,
          ease: [0.445, 0.05, 0.55, 0.95],
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <span className="m-[0.125rem] rounded-3xl bg-[#7825ff] px-12  py-5 text-xs text-[#f6f6f6] backdrop-blur-sm h-7 w-">
        Srch!
      </span>
    </motion.button>
  )
}

export default ShimmerButton