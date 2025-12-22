"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WorkItemProps {
  index: string;
  title: string;
  description: string;
  highlight?: string;
  image: string;
  layout: "image-left" | "image-right";
}

export default function WorkItem({
  index,
  title,
  description,
  highlight,
  image,
  layout,
}: WorkItemProps) {
  return (
    <motion.div
      className="py-16 border-b border-gray-500/50 last:border-b-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Index */}
        <div className="md:col-span-1">
          <p className="text-gray-500 text-xl tracking-wider">({index})</p>
        </div>

        {/* IMAGE LEFT LAYOUT */}
        {layout === "image-left" && (
          <>
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={image}
                  alt={title}
                  width={900}
                  height={550}
                  className="object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">{title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>

              {highlight && (
                <p className="text-sm tracking-wide uppercase text-black/60 pt-2">
                  {highlight}
                </p>
              )}
            </div>
          </>
        )}

        {/* IMAGE RIGHT LAYOUT */}
        {layout === "image-right" && (
          <>
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl  font-semibold leading-tight">{title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>

              {highlight && (
                <p className="text-sm tracking-wide uppercase text-black/60 pt-2">
                  {highlight}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={image}
                  alt={title}
                  width={900}
                  height={550}
                  className="object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
