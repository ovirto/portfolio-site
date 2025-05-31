

export default function HeroSection(){
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-pink-950 text-white">
            <div className="text-center">
                <h1 className ="text-5xl font-bold mb-4">Hi, I'm Ozie Virto</h1>
                <p className="text-x1 mb-8">Full-Stack Developer | React | Typescript | Azure | C#</p>
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
                        src="/profile-pic.jpg"
                        alt="Ozie Virto picture"
                        className="rounded-full w-48 h-48 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">
                        I’m a recent Computer Science graduate passionate about building
                        scalable web apps with React, TypeScript, and Azure.
                    </p>
                    <p className="mb-4">
                        When I’m not coding, I love playing chess and contributing to open-source.
                    </p>
                    <a
                        href="/resume.pdf"
                        className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                    >
                        Download Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ozievirto919/"
                        className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/ovirto"
                        className="inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                    >
                        Github
                    </a>

                </div>
            </div>
        </section>
    );
}

export function FeaturedProjects(){
    // TODO
    return (
        <div>
            <main>

            </main>
        </div>
    );
}

export function Skills(){
    // TODO
    return (
        <div>
            <main>

            </main>
        </div>
    );
}

export function Technologies(){
    // TODO
    return (
        <div>
            <main>

            </main>
        </div>
    );
}

