"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import SectionHeading from "./SectionHeading";
import { directors } from "../lib/content";
import { cn, getReducedMotion } from "../lib/utils";

export default function DirectorsSection() {
  const [expandedDirector, setExpandedDirector] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(getReducedMotion());
  }, []);

  const toggleDirector = (id: string) => {
    setExpandedDirector(expandedDirector === id ? null : id);
  };

  const expandVariants = reducedMotion
    ? undefined
    : {
        collapsed: { height: 0, opacity: 0 },
        expanded: {
          height: "auto",
          opacity: 1,
          transition: { duration: 0.24 },
        },
      };

  return (
    <section className="py-16 md:py-24 bg-background" id="directors">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Board of Directors"
          subtitle="Experienced leadership committed to governance and transparency"
          centered
        />

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directors.map((director) => (
            <Card key={director.id}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-primary/10 ring-2 ring-primary/10 ring-offset-2">
                  <img
                    src={director.image}
                    // The name is the heading right below; repeating it as alt text would read it twice
                    alt=""
                    width={80}
                    height={80}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-poppins text-xl text-secondary">
                  {director.name}
                </CardTitle>
                <p className="text-sm text-primary font-medium">
                  {director.role}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutralText">{director.shortBio}</p>
                <details className="group/details">
                  <summary className="cursor-pointer text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    Read more
                  </summary>
                  <p className="mt-3 text-sm text-neutralText">
                    {director.fullBio}
                  </p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          {directors.map((director) => (
            <Card key={director.id} className="overflow-hidden">
              {/* Heading wraps the button (not the other way round) so screen readers still list each director as a heading */}
              <h3>
                <button
                  type="button"
                  onClick={() => toggleDirector(director.id)}
                  className="flex w-full items-center gap-4 p-6 pb-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-expanded={expandedDirector === director.id}
                  aria-controls={`director-${director.id}-content`}
                >
                  <span className="w-12 h-12 overflow-hidden rounded-full bg-primary/10 flex-shrink-0">
                    <img
                      src={director.image}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block font-poppins text-lg font-semibold leading-none tracking-tight text-secondary">
                      {director.name}
                    </span>{" "}
                    <span className="mt-1.5 block text-sm font-medium text-primary">
                      {director.role}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-neutralText transition-transform",
                      expandedDirector === director.id && "rotate-180"
                    )}
                  />
                </button>
              </h3>

              <AnimatePresence>
                {expandedDirector === director.id && (
                  <motion.div
                    id={`director-${director.id}-content`}
                    variants={expandVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0 space-y-3">
                      <p className="text-neutralText">{director.shortBio}</p>
                      <p className="text-sm text-neutralText">
                        {director.fullBio}
                      </p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
