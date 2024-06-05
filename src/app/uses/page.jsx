import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I'm frequently approached with questions about the tools I rely on for software development and staying productive. To address these inquiries comprehensively, I've compiled an extensive list encompassing all of my favorite resources and tools."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Custom Built PC">
            The PC boasts robust specifications tailored perfectly to meet my
            requirements. Equipped with a 1070Ti graphics card, an i5 9600K CPU,
            32GB of RAM, a 2TB SSD, and 4TB HDD, it delivers swift and
            dependable performance for all my computing needs.
          </Tool>
          <Tool title="Acer XF270H B">
            The screen features a standard dynamic range color space, ensuring
            accurate and vibrant visuals. Its impressive 144 Hz refresh rate
            enhances the viewing experience, making it ideal for coding sessions
            where clarity and smoothness are paramount.
          </Tool>
          <Tool title="Cooler Master SK650 Mechanical Keyboard">
            The keyboard is extremely nice. It even comes with 2 complet sets of
            buttons. One set is flat. You can barely notice the keys as your
            fingers shift. It makes it great for fast finger movement
          </Tool>
          <Tool title="Dell SE2717H">
            Just a standard Dell monitor, its addition as a second screen has
            significantly boosted my productivity across various tasks. This
            setup facilitates effective multitasking, allowing me to seamlessly
            switch between applications and work more efficiently.
          </Tool>
          <Tool title="Logitech G Pro">
            I&apos;ve opted for a sleek and ergonomic mouse that offers both style
            and comfort. With vibrant RGB lighting and two programmable side
            buttons, it enables me to customize mouse binds for enhanced
            productivity
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code Editor">
            VS Code streamlines coding with its intuitive interface and vast
            extension library, boosting developer productivity and
            collaboration.
          </Tool>
          <Tool title="Postman">
            I rely on Postman for testing the RESTful APIs I develop. Its
            intuitive interface and robust features streamline the testing
            process, ensuring the efficiency and reliability of my APIs.
          </Tool>
          <Tool title="Git/GitHub">
            I utilize Git and GitHub for version control and collaborative
            development, ensuring seamless tracking of changes and effective
            team collaboration.
          </Tool>
          <Tool title="Node Package Manager">
            I utilize Node Package Manager (NPM) to manage dependencies and
            package installations for my Node.js projects.
          </Tool>
          <Tool title="MongoDB Compass">
            MongoDB Compass serves as my go-to tool for visually exploring and
            interacting with MongoDB databases. Its intuitive interface and
            powerful features simplify database management tasks, allowing me to
            efficiently analyze and manipulate data.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Discord">
            Discord is my preferred platform for communication and
            collaboration, offering a versatile environment for real-time
            messaging, voice calls, and community building.
          </Tool>
          <Tool title="Notion">
            Notion is my go-to platform for organizing, planning, and
            collaborating on various projects and tasks. Its flexible and
            customizable interface allows me to create databases, wikis, notes,
            and more, all in one place.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
