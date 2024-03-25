import React from 'react'
import { motion } from 'framer-motion'

function MotionComp(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ once: true }}
            transition={{ duration: .1 * 15 }}
        >
            {props.children}
        </motion.div>
    )
}

export default MotionComp