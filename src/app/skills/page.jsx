import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SpinningLogos } from '@/components/SpinningLogo'
import { CardCarousel } from '@/components/CardCarousel'

function SkillSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills',
  description:
    'Here are the key skills that showcase my blend of technical expertise and creative design as a software engineer.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Here are the key skills that showcase my blend of technical expertise and creative design as a software engineer."
      intro="Welcome to my portfolio! I'm a passionate web developer skilled in HTML, CSS, JavaScript, Node.js, express.js and frameworks like React. With a keen eye for design, I create engaging and user-friendly web experiences. Explore my skills to see how I blend creativity with technical expertise."
    >
      <div className="space-y-20">
        <SpinningLogos />
        <SkillSection title="Programming Languages">
          <Appearance
            href="#"
            title="JavaScript"
            description="A powerful scripting language used to create dynamic and interactive web content. Skilled in DOM manipulation, event handling, and utilizing ES6+ features for efficient coding."
          />
          <Appearance
            href="#"
            title="HTML"
            description=" The foundational language for structuring web content. Proficient in creating semantic, accessible, and well-organized markup to ensure a strong base for any web project."
          />
          <Appearance
            href="#"
            title="CSS"
            description="The styling language that brings web designs to life. Expert in crafting responsive, visually appealing layouts with CSS."
          />
        </SkillSection>
        <SkillSection title="Frameworks/Libraries">
          <Appearance
            href="#"
            title="React JS"
            description="A powerful library for building dynamic and interactive user interfaces. Proficient in creating reusable components, managing state with hooks, and leveraging the virtual DOM for high-performance web applications."
          />
          <Appearance
            href="#"
            title="Next JS"
            description="A robust framework for server-rendered React applications. Skilled in building fast, scalable web applications with features like static site generation, server-side rendering, and API routes for seamless performance and enhanced SEO."
          />
          <Appearance
            href="#"
            title="Tailwind CSS"
            description=" A utility-first CSS framework for rapid UI development. Experienced in using Tailwind CSS to create responsive, customizable designs with minimal effort and highly maintainable code."
          />
          <Appearance
            href="#"
            title="Node JS"
            description=" A powerful runtime environment for executing JavaScript on the server side. Skilled in building scalable and efficient backend applications, handling asynchronous operations, and utilizing frameworks like Express.js for robust API development."
          />
          <Appearance
            href="#"
            title="Framer Motion"
            description="An advanced animation library for React. Proficient in creating smooth, complex animations and transitions to enhance user experiences, with a focus on performance and ease of use."
          />
          <Appearance
            href="#"
            title="Redux"
            description=" A predictable state container for JavaScript apps. Experienced in managing application state, implementing actions and reducers, and integrating with React to create scalable and maintainable state management solutions."
          />
          <Appearance
            href="#"
            title="Material UI"
            description="A React component library for implementing Google's Material Design. Skilled in using Material-UI to create visually consistent, responsive, and user-friendly interfaces with pre-built components and customization options."
          />
          <Appearance
            href="#"
            title="Express JS"
            description="A fast, minimalist web framework for Node.js. Proficient in building robust server-side applications and APIs, handling routing, middleware, and integrating with databases for efficient backend development."
          />
        </SkillSection>
        <SkillSection title="CS Fundamentals">
          <Appearance
            href="#"
            title="Data Structures"
            description="Fundamental concepts for organizing and managing data efficiently. Experienced in implementing and utilizing various data structures"
          />
          <Appearance
            href="#"
            title="Algorithms"
            description=" Essential procedures for solving computational problems efficiently. Skilled in designing and implementing algorithms for sorting, searching, and optimization, with a focus on performance, scalability, and problem-solving strategies."
          />
          <Appearance
            href="#"
            title="Operating Systems"
            description="The software that manages hardware and software resources on a computer. Knowledgeable in key concepts such as process management, memory management, file systems, and concurrency, with experience in working with various operating systems like Windows, macOS, and Linux."
          />
          <Appearance
            href="#"
            title="Object Oriented Programming"
            description=" A programming paradigm based on the concept of 'objects' which contain data and methods. Proficient in using OOP principles such as encapsulation, inheritance, polymorphism, and abstraction to design modular, reusable, and maintainable code."
          />
          <Appearance
            href="#"
            title="MongoDB"
            description="A NoSQL database known for its flexibility and scalability. Skilled in designing and managing document-oriented databases, performing CRUD operations, and leveraging features like indexing and aggregation for efficient data handling."
          />
        </SkillSection>
        <SkillSection title="Version Control & Tools">
          <Appearance
            href="#"
            title="Git"
            description="A distributed version control system for tracking changes in source code. Proficient in using Git for version control, branching and merging, collaborating on projects, and maintaining a clean and organized codebase."
          />
          <Appearance
            href="#"
            title="GitHub"
            description=" A web-based platform for version control and collaboration. Experienced in using GitHub to host repositories, manage pull requests, collaborate with teams"
          />
          <Appearance
            href="#"
            title="VS Code"
            description="A versatile code editor with a rich ecosystem of extensions. Proficient in using Visual Studio Code for efficient coding, debugging, and version control, leveraging its features to enhance productivity and streamline development workflows."
          />
          <Appearance
            href="#"
            title="Rally"
            description="A powerful project management tool designed for agile development. Experienced in using Rally to track user stories, manage backlogs, plan sprints, and ensure seamless collaboration and project execution."
          />
        </SkillSection>
      </div>
    </SimpleLayout>
  )
}
