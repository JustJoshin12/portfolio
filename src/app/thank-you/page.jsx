import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'successfully submitted',
  description: 'Thanks for reaching out!',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for reaching out."
      intro="I'll take a look at your message and reach out if you've included any contact information."
    />
  )
}
