import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/hero.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Joshua Smith. A passionate fullstack developer from Chicago, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Joshua Smith. A passionate developer from Chicago, where I
            design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Since I was young the world of tech has forever fascinated me. I
              took apart old computers, devices, and anything else to see how
              they worked. This growing curiosity led me to find my passion in
              computers.
            </p>
            <p>
              I dedicated over 690 hours to mastering coding in JavaScript,
              React.js, Node.js, HTML5, and TailwindCSS, following the BEM
              methodology. This rigorous training not only sharpened my
              technical skills but also enhanced my soft skills in time
              management and problem-solving. I learned to efficiently organize
              tasks and innovate solutions to complex challenges, culminating in
              the development and deployment of dynamic MERN stack web
              applications from scratch.
            </p>
            <p>
              Throughout my journey, Ive acquired a diverse skill set in
              software engineering, encompassing various technologies and
              methodologies. I&apos;m proficient in utilizing frameworks such as
              React.js for front-end development and Node.js with Express.js for
              back-end solutions. My proficiency in these technologies, coupled
              with a commitment to continuous learning and problem-solving,
              positions me as a versatile and capable software engineer ready to
              tackle a wide range of challenges in the field.
            </p>
            <p>
              Now, as I pivot towards my dream career, I&apos;m eager to immerse
              myself further in coding and technology. My aim is to not only
              refine my skills but to also give back to the community that has
              inspired me so much. Through the discipline, innovation, and
              confidence gained from my experiences, I plan to showcase my
              passion for technology and make a meaningful impact.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/JustJoshin12"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/joshua-smith-9b4057245/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:joshdevsmith.97@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              joshdevsmith.97@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
