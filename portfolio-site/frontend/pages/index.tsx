

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
                        When I’m not coding, I love playing chess, reading, and playing guitar.
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
                        src="/wurdle-demo.jpg"
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
        <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">Web Development</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/example.jpg"
                        alt="A demo screenshot of my web development experience"
                        className="rounded-full w-48 h-48 object-cover mx-auto"
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
    // TODO
    return (
        <section id="technologies" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Technologies</h2>
            <h3 className="text-3xl font-bold mb-6 text-left">IDEs</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                    <img
                        src="/example.jpg"
                        alt="A demo screenshot of technologies I'm familiar with"
                        className="rounded-full w-48 h-48 object-cover mx-auto"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="mb-4">

                    </p>
                    <p className="mb-4">
                        Aenean at neque mauris. Pellentesque vel pretium elit, sed tincidunt ipsum. Nullam tristique, libero eget commodo pulvinar, urna lorem pulvinar tellus, venenatis scelerisque mauris magna eu magna. Praesent eu turpis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eu bibendum magna. Integer egestas arcu sit amet nunc sagittis, sit amet viverra turpis dictum. Duis libero risus, blandit pulvinar ullamcorper ac, condimentum at lorem. Donec viverra magna eu pharetra eleifend.
                    </p>
                    <p className="mb-4">
                        Proin et odio dui. Quisque molestie leo odio, vitae iaculis erat ultrices id. Sed eu auctor mi, hendrerit elementum sem. Phasellus sed tempus lectus. Quisque ex elit, iaculis eu purus maximus, tempus luctus urna. Pellentesque suscipit nulla ut nunc posuere, ut dignissim tortor feugiat. Curabitur odio lectus, pharetra auctor magna vel, molestie dapibus metus. Vestibulum lectus purus, cursus et auctor a, mollis quis lectus.
                    </p>
                    <p className="mb-4">
                        Donec pulvinar sapien quis ante viverra scelerisque. Vivamus rhoncus dolor eu eros cursus rutrum. In at ante gravida, auctor velit quis, tempus eros. Phasellus efficitur odio sed felis pellentesque, et luctus eros accumsan. Nunc vel malesuada felis. Proin magna lacus, rutrum quis posuere sit amet, fringilla quis sapien. Aenean id cursus erat. Donec quis enim dapibus, rhoncus ex sed, ultricies ipsum. Phasellus sodales enim pellentesque pharetra efficitur. Pellentesque finibus rutrum congue. Integer sagittis varius augue vel imperdiet. Etiam luctus tincidunt purus vel pretium. Aenean id pretium urna. Nulla finibus varius orci et scelerisque. Nullam pharetra nunc sit amet libero auctor, vitae fermentum lectus gravida. Donec scelerisque consequat dignissim.
                    </p>
                </div>
            </div>
        </section>
    );
}

