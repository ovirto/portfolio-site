"use client";

import {useEffect, useState} from "react";

export default function HeroSection(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-pink-950 text-white">
            <div className="text-center">
                <h1 className={`text-5xl font-bold mb-4 ${isVisible ? 'fade-in' : ''}`}>
                    Hi, I'm Ozie Virto
                </h1>
                <p className={`text-xl mb-8 ${isVisible ? 'fade-in fade-in-delay-900' : ''}`}>
                    Full-Stack Developer | React | Typescript | Azure | C#
                </p>
            </div>
        </section>
    );
}

export function AboutMe(){
    return (
        <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/profile-pic.jpeg"
                        alt="Ozie Virto picture"
                        className="rounded-full w-75 h-75 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">
                        I’m a recent Computer Science graduate passionate about building
                        scalable web apps with React, TypeScript, and Azure.
                    </p>
                    <p className="mb-4">
                        When I’m not coding, I love playing chess, reading, and playing guitar.
                    </p>
                    <a
                        href="/resume.pdf"
                        className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </section>
    );
}

export function FeaturedProjects(){
    return (
        <section id="featured" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">"Wurdle"</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/wurdle-demo.jpg"
                        alt="A demo screenshot of my project called Wurdle"
                        className="rounded-full w-75 h-75 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">

                    </p>
                    <p className="mb-4">
                        After witnessing the growing popularity of the New York Time's daily puzzle game Wordle,
                        I thought it would be a great opportunity for me to put what I'd learned in school to the test and
                        program the game myself using the Java console by giving my best guess as to how the game is coded.
                    </p>
                    <p className="mb-4">
                        I called the end result: Wurdle.
                    </p>
                    <p className="mb-4">
                        I used asterisks to represent the game board instead of squares while still maintaining color-coded
                        feedback based on user guesses. A correct letter in the correct position will be highlighted green, a correct
                        letter in an incorrect position will be highlighted yellow, and an incorrect letter will be highlighted grey.
                    </p>
                    <a
                        href="https://github.com/ovirto/Wurdle" // TODO: Wurdle for Android? Make it in browser? Both??
                        className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                    >
                        See Wurdle
                    </a>
                </div>
            </div>
        </section>
    );
}

export function Skills(){
    return (
        <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">Web Dev</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/stripe_logo.avif"
                        alt="A demo screenshot of my web development experience"
                        className="rounded-full w-75 h-75 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">
                        I got most of my web development experience from my senior capstone project at Dominican University.
                        I worked on a team of 8 developers along with our professor to transition the Chicago Code Camp Website into its new
                        and improved Windy City Conference branding. The site is for a non-profit that hosts virtual and in-person Computer Science conferences
                        all over the Chicagoland area.
                    </p>
                    <p className="mb-4">
                        For the first semester of class I got to experience the complete agile development cycle; I completed my first sprint,
                        performed a code review with my professor and classmates, and unit tested serverless, RESTful, APIs. We developed the backend using Azure functions
                        with C#. My second semester was dedicated to development on the frontend using React with Typescript as well as creating and completing
                        tickets for different issues and requirements issued to us by our professor.
                    </p>
                    <p className="mb-4">
                        The most notable feature I worked on during this project was the integration of payments using Stripe checkout. While the site is a
                        nonprofit, we learned that people are more likely to attend an event if they have incentive. We offered free and
                        paid ticket options. Paid options included a swag-bag or lunch to encourage event attendance.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Technologies(){
    return (
        <section id="technologies" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Technologies</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">IDEs</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/jetbrains_logo.png"
                        alt="A demo screenshot of technologies I'm familiar with"
                        className="rounded-full w-75 h-75 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">

                    </p>
                    <p className="mb-4">
                        Like many aspiring developers, I got my start on Eclipse. Our Intro to Programming professor recommended
                        this IDE since it was the one he was most comfortable teaching. I used it to complete my first "Hello World"
                        in java and stuck with it for the remainder of my first programming class.
                    </p>
                    <p className="mb-4">
                        During my second semester, I took a course on Windows Forms Applications where I got familiar with the Visual Studio IDE. I also took
                        an intro to web development course where we used Visual Studio code to create basic HTML websites, along with CSS and Javascript at the end
                        of the course.
                    </p>
                    <p className="mb-4">
                        At this point, I also grew interested in developing my own personal programs. I had an assignment for my Nutrition class where I had
                        to calculate BMI and got the idea to write a program to help me complete the calculations. My classmate liked my idea and introduced
                        me to the JetBrains IDE IntelliJ. I really enjoyed the clean look and ease of use it had to offer, so I
                        still use it to this day, along with Pycharm, Rider, Android Studio, and WebStorm.
                    </p>
                </div>
            </div>
        </section>
    );
}

export function Connect(){
    return (
        <section id="connect" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Want to learn more about me? Lets connect!</h2>
            <div className="text-xl text-center">
                <p className="mb-4">
                    I respond fastest through email, but regularly check out Linkedin as well.
                    I've also included my Github in case you'd like to check out some of the other stuff I'm
                    working on.
                </p>
                <a
                    href=""
                    className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                    Send me an Email
                </a>
                <a
                    href="https://www.linkedin.com/in/ozievirto919/"
                    className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                    Message me on LinkedIn
                </a>
                <a
                    href="https://github.com/ovirto"
                    className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                    Check out my Github
                </a>
            </div>
        </section>
    );
}