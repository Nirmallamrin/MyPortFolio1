import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]"
        >

            <div className="relative flex items-center justify-center">
                {/* Outer Rotating Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-32 h-32 border-4 border-t-green-500 border-r-transparent border-b-emerald-600 border-l-transparent rounded-full shadow-[0_0_20px_rgba(74,222,128,0.3)]"
                />

                {/* Inner Pulsing Ring */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-24 h-24 border-2 border-green-400/30 rounded-full"
                />

                {/* Center Favicon/Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-16 h-16 flex items-center justify-center bg-black rounded-full border border-white/10 shadow-xl overflow-hidden"
                >
                    <img
                        src="/favicon.png"
                        alt="Logo"
                        className="w-10 h-10 object-contain animate-pulse-slow"
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-16 w-full text-center"
                >
                    <p className="text-green-400 font-bold tracking-[0.3em] text-xs uppercase animate-pulse">
                        Loading...
                    </p>
                </motion.div>
            </div>
        </motion.div>

    );
};

export default LoadingScreen;
