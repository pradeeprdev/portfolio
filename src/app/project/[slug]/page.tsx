"use client";

import { projectItems } from "@/app/Data/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaGlobe, FaTools, FaMobileAlt } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectDetail() {
  const params = useParams();
  const project = projectItems.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-950 text-white">

      {/* HERO */}
      <section className="px-6 pt-28 pb-14 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {project.name}
        </h1>

        <p className="text-yellow-400 mt-4 text-lg font-medium">
          {project.category}
        </p>

        <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* MAIN IMAGE */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.01] transition">
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={700}
            className="w-full h-[300px] md:h-[520px] object-cover"
          />
        </div>
      </section>
{/* SHOWCASE + LINKS (COMBINED SECTION) */}
<section className="max-w-6xl mx-auto px-6 mt-16">

  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
    Project Showcase & Access
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* WEBSITE */}
    <div className="space-y-4">

      <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
        <div className="p-4 text-sm text-gray-300 flex justify-between">
          🌐 Website
          <span className="text-xs text-gray-500">Preview</span>
        </div>

        <Image
          src={project.images?.website || "/placeholder.png"}
          alt="Website"
          width={600}
          height={400}
          className="w-full h-[200px] object-cover"
        />
      </div>

      <Link href="https://www.vklaundry.com/" target="_blank"
        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
        <span>Visit Website</span>
        <HiOutlineExternalLink />
      </Link>

    </div>

    {/* ADMIN */}
    <div className="space-y-4">

      <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
        <div className="p-4 text-sm text-gray-300 flex justify-between">
          🖥 Admin Dashboard
          <span className="text-xs text-gray-500">Control</span>
        </div>

        <Image
          src={project.images?.admin || "/placeholder.png"}
          alt="Admin"
          width={600}
          height={400}
          className="w-full h-[200px] object-cover"
        />
      </div>

      <Link href="https://vklaundry-admin.vercel.app/" target="_blank"
        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
        <span>Open Admin Panel</span>
        <HiOutlineExternalLink />
      </Link>

    </div>

    {/* MOBILE */}
    <div className="space-y-4">

      <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
        <div className="p-4 text-sm text-gray-300 flex justify-between">
          📱 Mobile App
          <span className="text-xs text-gray-500">Android</span>
        </div>

        <Image
          src={project.images?.app || "/placeholder.png"}
          alt="App"
          width={600}
          height={400}
          className="w-full h-[200px] object-cover"
        />
      </div>

      <Link href="https://play.google.com/store/apps/details?id=com.vklaundry.app&hl=en_IN"
        target="_blank"
        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
        <span>Download App</span>
        <HiOutlineExternalLink />
      </Link>

    </div>

  </div>
</section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

        {[
          ["Type", "Full Stack"],
          ["Platform", "Web + App"],
          ["Role", "Developer"],
          ["Status", "Live"],
        ].map(([k, v], i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl">
            <p className="text-gray-400 text-sm">{k}</p>
            <p className="font-semibold mt-1">{v}</p>
          </div>
        ))}

      </section>

      {/* OVERVIEW + TECH */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
          <p className="text-gray-400 leading-relaxed">
            A complete laundry management system including customer app, admin panel, and web platform.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <p className="text-yellow-400">{project.tech}</p>

          <ul className="mt-4 text-gray-400 space-y-1 text-sm">
            <li>• Next.js / React</li>
            <li>• Node.js APIs</li>
            <li>• MongoDB</li>
            <li>• Vercel Deployment</li>
          </ul>
        </div>

      </section>

      {/* MODULES */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-6">

        {[
          ["Customer App", "Book laundry, track orders, payments"],
          ["Admin Panel", "Manage users, orders, analytics"],
          ["Mobile App", "Real-time updates & notifications"],
        ].map(([title, desc], i) => (
          <div key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-400 text-sm mt-2">{desc}</p>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center mt-20 pb-24 px-6">
        <Link
          href="https://www.vklaundry.com/"
          target="_blank"
          className="inline-block px-10 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition"
        >
          🚀 Explore Live Project
        </Link>
      </section>

    </div>
  );
}