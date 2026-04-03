"use client";

import React from 'react'
import { projectItems } from '../Data/data'
import HomeIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const Projects = () => {

  const router = useRouter();

  return (
    <div className='p-5 pt-60' id='Projects'>
      <div className='flex justify-center'>
        <div className='relative'>
          <p className='text-6xl font-bold'>Our Projects</p>
          <p className='absolute -left-3 top-5 text-8xl opacity-15 font-bold'>Projects</p>
        </div>
      </div>
      <p className='mt-7 text-center'>Developed projects in the field of growing technologies containing ML, Blockchain, Cloud Computing.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {projectItems.map((item, index) => (
          <motion.div
            key={index}
            className="group rounded-2xl overflow-hidden bg-gray-900 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
          >
            {/* Image with hover fade */}
            <div className="relative h-52 overflow-hidden">
              <Image
                className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt={`${item.name} Image`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center px-4 transition-opacity duration-300">
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-yellow-400 text-sm mt-1">{item.category}</p>
              <p className="text-gray-300 text-sm mt-2">
                <span className="font-semibold">Tech Stack:</span> {item.tech}
              </p>

              {item.slug ?
              <button
                onClick={() => router.push(`/project/${item.slug}`)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white 
                bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                shadow-md hover:shadow-lg hover:scale-105 
                rounded-full transition"
              >
                View Project
              </button> :
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white 
                         bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                         shadow-md hover:shadow-lg hover:scale-105 
                         rounded-full transition-transform duration-300 ease-in-out"
              >
                Visit Project <HomeIcon fontSize="small" />
              </a>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects