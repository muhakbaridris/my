"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function PageEffects() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const update = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-emerald" style={{ scaleX: scrollYProgress }} />
      {show && (
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition hover:-translate-y-1 dark:bg-emerald">
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
