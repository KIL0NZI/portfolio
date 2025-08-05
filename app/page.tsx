import { Button } from "@/components/ui/button"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, MapPin, Calendar, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingAnimation } from "@/components/typing-animation"
import { SkillBar } from "@/components/skill-bar"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"

const projects = [
  {
    id: 1,
    title: "Restaurant Reservation Website",
    description:
      "Full-stack reservation system with React, and Django. Features include reservation processing, and admin dashboard.",
    image: "/savoria.png",
    technologies: ["React","Typescript", "Next.js", "Django", "Tailwind CSS"],
    githubUrl: "https://github.com/KIL0NZI/restaurant-reservation-site",
    liveUrl: "https://savoria-whmv.onrender.com",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Web Chat Application",
    description:
      "TopicTalk, as it is called is a real-time chat application with user authentication, group chats, and file sharing. My final year project that became costly to host.",
    image: "/topictalk.png",
    technologies: ["Next.js", "TypeScript", "Django", "Tailwind CSS"],
    githubUrl: "https://github.com/KIL0NZI/TopicTalk",
    liveUrl: "",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Weather Application",
    description:
      "Real-time weather Application with location-based weather data using OpenWeather APIs. My first Flutter Android project",
    image: "/Nairobi weather information.jpeg",
    technologies: ["Flutter", "Dart", "OpenWeather API"],
    githubUrl: "https://github.com/KIL0NZI/Flutter/tree/main/weather_app",
    // liveUrl: "",
    category: "mobile",
  },
  {
    id: 4,
    title: "Team Building Website",
    description:
      "A website for a client who ran a team building company. It *would* feature a booking system, and user testimonials but due to payment related disagreements left unfinished.",
    image: "/teambuilding.png",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/KIL0NZI/team-building-site",
    liveUrl: "https://teamsbuilder.netlify.app",
    category: "frontend",
  },
  {
    id: 5,
    title: "Mobile Steps Tracker App",
    description:
      "Android mobile app for fitness tracking with daily, weekly and all time steps as well as a leaderboard to keep track of your friends and other users, featuring user authentication and real time steps update from on device sensors. In the prototype stage.",
    image: "/homescreen.jpeg",
    technologies: ["Flutter", "Firebase", "Dart"],
    githubUrl: "https://github.com/KIL0NZI/steps_tracker",
    // liveUrl: "https://example.com",
    category: "mobile",
  },
  {
    id: 6,
    title: "Cocktail Recipe App",
    description:
      "A simple android cocktail recipe application that uses the CocktailDB API to fetch and display cocktail recipes. It features a search functionality and a favorites list.",
    image: "/CHomescreen.jpeg",
    technologies: ["Flutter", "Dart", "CocktailDB"],
    githubUrl: "https://github.com/KIL0NZI/hehe",
    // liveUrl: "https://example.com",
    category: "mobile",
  },
]

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Various Clients.",
    period: "2022 - Present",
    description:
      "Developed a host of software solutions including web applications, mobile apps, and custom software for clients across different industries.",
  },
  {
    title: "Video Editor",
    company: "Brian Syuki - YouTube",
    period: "2021 - 2025",
    description:
      "Edited and produced engaging video content for a popular YouTube channel, focusing on fitness through home workouts.",
  },
  {
    title: "UI/UX Designer",
    company: "WordAndLearn",
    period: "June 2024 - Sep 2024",
    description:
      "Designed the user interface and user experience for a language learning platform website, focusing on usability and accessibility.",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Martin Kilozi
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Martin👋</span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  I'm a{" "}
                  <TypingAnimation
                    texts={[
                      "Full Stack Developer",
                      "React Specialist",
                      "3D Artist",
                      "Video Editor",
                      "UI/UX Enthusiast",
                      "Problem Solver",
                    ]}
                  />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                  Passionate software engineer with 2+ years of experience building scalable web and android applications and
                  other digital solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>
                <a href="/CVMartinKilonzi.pdf" download>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/KIL0NZI" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/martin-kilonzi-019439254" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:martinkilonzi748@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-4">
                    <Image
                      src="/me.jpeg"
                      alt="Alex Johnson"
                      width={300}
                      height={300}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full animate-bounce">
                  <Code className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm a passionate software engineer who loves creating efficient, scalable solutions and connecting with other
              developers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="h-4 w-4" />
                <span>2+ Years Experience</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies. My experience spans from frontend 
                development with React and TypeScript to backend services with Node.js and Python. 
                I'm also an Android engineer and a 3D artist, with a strong passion for software and 
                staying up to date with the latest technology trends.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts,
                or exploring the latest developments in AI and machine learning. Apart from coding, I enjoy creating 3D art editing videos, which allows me 
                to express my creativity in different ways, as well as playing the guitar and in my free time indulging in video games.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
              <SkillBar skill="JavaScript/TypeScript" percentage={95} color="bg-yellow-500" />
              <SkillBar skill="Flutter" percentage={95} color="bg-blue-500" />
              <SkillBar skill="React/Next.js" percentage={90} color="bg-green-500" />
              <SkillBar skill="Python/Django" percentage={85} color="bg-purple-500" />
              {/* <SkillBar skill="PostgreSQL/MongoDB" percentage={85} color="bg-indigo-500" /> */}
              <SkillBar skill="AWS/Docker" percentage={75} color="bg-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in different technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/KIL0NZI?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey in software development</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">kilonzi.dev@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/martinkilonzi</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                      <p className="text-gray-600 dark:text-gray-300">github.com/KILONZI</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/KIL0NZI" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/martin-kilonzi-019439254" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:martinkilonzi748@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  )
}
