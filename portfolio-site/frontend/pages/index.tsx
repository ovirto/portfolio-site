

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
    return (
        <section id="featured" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">"Wurdle"</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/wurlde-demo.jpg"
                        alt="A demo screenshot of my project called Wurdle"
                        className="rounded-full w-48 h-48 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">

                    </p>
                    <p className="mb-4">
                        After a friend recommended I check out the New York Time's daily word puzzle game called Wordle,
                        I thought it would be a great opportunity for me to put what I'd learned in school to the test and
                        make the game myself within the Java console by giving my best guess as to how the game works.
                    </p>
                    <p className="mb-4">
                        I called the end result: Wurdle.
                    </p>
                    <p className="mb-4">
                        I used asterisks to represent the game board instead of squares while still maintaining color-coded
                        feedback based on user guesses. A correct letter in the correct postion will be highlighted green, a correct
                        letter in an incorrect position will be highlighted yellow, and an incorrect letter will be highlighted grey.
                    </p>
                    <a
                        href="https://github.com/ovirto/Wurdle" // TODO: Wurdle for Android
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

