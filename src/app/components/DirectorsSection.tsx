"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User } from "lucide-react";
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
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {directors.map((director) => (
            <Card
              key={director.id}
              className="group hover:shadow-lg transition-shadow duration-160"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <img
                    src={director.image}
                    alt={director.name}
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
              <button
                onClick={() => toggleDirector(director.id)}
                className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-expanded={expandedDirector === director.id}
                aria-controls={`director-${director.id}-content`}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-poppins text-lg text-secondary text-left">
                        {director.name}
                      </CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {director.role}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-neutralText transition-transform",
                      expandedDirector === director.id && "rotate-180"
                    )}
                  />
                </CardHeader>
              </button>

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
