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
        <SkillSection title="Programming Languages/Languages">
          <Appearance
            href="#"
            title="JavaScript"
            description="Developed dynamic, responsive web applications using JavaScript, implementing interactive features such as real-time data updates, form validations, and user authentication to enhance user experience."
          />
          <Appearance
            href="#"
            title="HTML"
            description="Collaborated with designers to translate wireframes and mockups into fully functional web pages, ensuring pixel-perfect implementation and a consistent user interface across different devices."
          />
          <Appearance
            href="#"
            title="CSS"
            description="Styled and maintained responsive web designs using CSS, ensuring consistent and visually appealing layouts across different devices and screen sizes. Utilized media queries, flexbox, and grid to create adaptive designs."
          />
          <Appearance
            href="#"
            title="GraphQL"
            description="Learned key aspects of GraphQL, including schema design, query optimization, and resolving nested queries. This experience enhanced my ability to create flexible and efficient APIs tailored to the needs of various clients."
          />
        </SkillSection>
        <SkillSection title="Frameworks/Libraries">
          <Appearance
            href="#"
            title="React JS"
            description="Optimized application performance by leveraging React's state management, lifecycle methods, and hooks like useState and useEffect, resulting in faster load times and smoother user interactions."
          />
          <Appearance
            href="#"
            title="Next JS"
            description="Developed server-rendered and static websites using Next.js, leveraging its built-in routing and API routes to create fast, SEO-friendly web applications. Utilized static generation and server-side rendering to optimize page load times."
          />
          <Appearance
            href="#"
            title="Tailwind CSS"
            description="Designed responsive and custom UI components using Tailwind CSS, leveraging its utility-first approach to create consistent, scalable styles directly within the HTML markup, resulting in faster development and easier maintenance."
          />
          <Appearance
            href="#"
            title="Node JS"
            description="Built scalable backend services using Node.js, implementing RESTful APIs and handling real-time data processing with WebSockets, enabling efficient communication between the server and client."
          />
          <Appearance
            href="#"
            title="Framer Motion"
            description="Implemented smooth and interactive animations using Framer Motion, enhancing user experience by adding intuitive and responsive animations to React components, such as transitions, hover effects, and complex motion sequences."
          />
          <Appearance
            href="#"
            title="Redux"
            description="Learned advanced Redux concepts, including the use of selectors for efficient state access, normalization of state to avoid redundancy, and integrating Redux with React hooks for a more modern approach to state management."
          />
          <Appearance
            href="#"
            title="Material UI"
            description="Designed and developed user interfaces using Material-UI, implementing responsive and accessible components that adhere to Google's Material Design guidelines, resulting in a cohesive and professional user experience."
          />
          <Appearance
            href="#"
            title="Express JS"
            description="Built RESTful APIs using Express.js, handling routing, middleware, and error handling to create robust and scalable backend services that efficiently serve client requests."
          />
        </SkillSection>
        <SkillSection title="CS Fundamentals">
          <Appearance
            href="#"
            title="Data Structures"
            description="Learned to choose appropriate data structures based on time and space complexity considerations, enhancing the scalability and efficiency of solutions in both frontend and backend development."
          />
          <Appearance
            href="#"
            title="Algorithms"
            description="Learned to evaluate algorithmic efficiency by analyzing time and space complexity, enabling the selection of the most appropriate algorithms for specific tasks and ensuring optimal performance in software applications."
          />
          <Appearance
            href="#"
            title="Operating Systems"
            description="The software that manages hardware and software resources on a computer. Knowledgeable in key concepts such as process management, memory management, file systems, and concurrency, with experience in working with various operating systems like Windows, macOS, and Linux."
          />
          <Appearance
            href="#"
            title="Object Oriented Programming"
            description="Designed and implemented OOP-based applications, using core principles such as encapsulation, inheritance, polymorphism, and abstraction to create modular, reusable, and maintainable code."
          />       
          <Appearance
            href="#"
            title="MongoDB"
            description="Designed and implemented NoSQL databases using MongoDB, structuring data in flexible, schema-less collections that allowed for efficient storage and retrieval of complex, hierarchical data."
          />
        </SkillSection>
        <SkillSection title="Version Control & Tools">
          <Appearance
            href="#"
            title="Git"
            description="Managed code versions using Git, implementing branching and merging strategies to collaborate effectively with team members, ensuring a smooth and conflict-free development process."
          />
          <Appearance
            href="#"
            title="GitHub"
            description="Implemented CI/CD workflows using GitHub Actions, automating testing, building, and deployment processes, which increased the efficiency and reliability of delivering software updates."
          />
          <Appearance
            href="#"
            title="VS Code"
            description="Utilized integrated tools such as Git, terminal, and debuggers within VS Code to streamline the development process, reducing the need to switch between different applications and improving focus and workflow."
          />
          <Appearance
            href="#"
            title="Rally"
            description="Collaborated with cross-functional teams by utilizing Rally's dashboards and reporting tools to monitor progress, identify bottlenecks, and adjust sprint planning as needed, leading to more efficient and successful project outcomes."
          />
          <Appearance
            href="#"
            title="Jira"
            description="Learned to optimize Jira for team collaboration, improving communication and transparency within the team. Gained experience in setting up automations to streamline repetitive tasks, reducing manual workload and increasing efficiency."
          />
          <Appearance
            href="#"
            title="Notion"
            description="Maintained comprehensive project documentation using Notion, creating centralized repositories for project resources, meeting notes, and task lists. This ensured easy access to information for all team members"
          />
          <Appearance
            href="#"
            title="Docker"
            description="Learned Docker best practices, including image optimization, efficient layering, and security considerations, which enhanced the performance and security of deployed applications."
          />
        </SkillSection>
      </div>
    </SimpleLayout>
  )
}
