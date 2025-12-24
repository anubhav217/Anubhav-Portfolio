import React from 'react'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section id="about" className="relative w-full min-h-screen overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: 'right center' }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.35) 70%)'
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex w-full min-h-screen">
          {/* Left half: Text */}
          <div className="w-full lg:w-1/2 flex items-center p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-[720px] text-white">

              {}
              <h1
                className="
                font-serif
                font-light
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-[58px]
                xl:text-[72px]
                leading-[1.0]
                tracking-tight
                "
              >
              Hi👋,
              <br />
              I&apos;m Anubhav
              </h1>


                <p className="mt-6 text-lg hero-sub">
                  Software Engineer
                </p>

            </div>
          </div>

          {/* Right spacer */}
          <div className="flex-1" />
        </div>
      </section>

      {/* About Content Section */}
      <section className="mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h3 className="text-sm text-gray-400 dark:text-gray-500">ABOUT</h3>
          <h2 className="text-2xl sm:text-3xl font-serif mt-2 mb-4 dark:text-gray-100">Who am I?</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I am a Software Engineer with experience building scalable web systems and cloud migrations. I enjoy building customer-facing products and automating workflows. This portfolio is a concise summary of my work and skills.
          </p>
        </div>
      </section>
    </>
  )
}
