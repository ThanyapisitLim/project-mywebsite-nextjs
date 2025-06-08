/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function MainImg() {
  return (
          <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1728290838813-9c94d553d988?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background image"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
        {/* Content */}
        <div className="absolute bottom-10 left-10 z-10 text-white space-y-4 bg-black p-10 rounded-2xl">
          <h1 className="text-5xl md:text-6xl font-bold">Hello, I'm Thanyapisit</h1>
          <p className="text-lg md:text-xl">
            Web developer passionate about building beautiful and functional apps.
          </p>
        </div>
      </div>
  );
}