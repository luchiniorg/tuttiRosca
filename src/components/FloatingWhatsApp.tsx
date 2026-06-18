"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

/** Botón flotante de WhatsApp, presente en toda la web. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribinos por WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-4 right-4 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] transition-all hover:gap-2 hover:pr-5"
        >
          <WhatsappLogo className="size-7 shrink-0" weight="fill" aria-hidden="true" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[160px]">
            Escribinos
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
