import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from 'react-email';

interface PortfolioEmailProps {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}
function PortfolioEmail({
  name = 'Client Name',
  email = 'client@example.com',
  company = 'Acme Corp',
  projectType = 'Web Development',
  message = 'Hey! I would love to work with you on a new project design.',
}: PortfolioEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio inquiry regarding {projectType} 🚀</Preview>
      <Tailwind>
        <Body className="bg-slate-50 my-auto mx-auto font-sans">
          <Container className="border border-solid border-slate-200 rounded my-10 mx-auto p-5 max-w-116.25 bg-white shadow-sm">
            <Heading className="text-slate-900 text-[24px] font-bold text-center p-0 my-7.5 mx-0">
              💼 New Portfolio Message from {name}
            </Heading>
            
            <Text className="text-slate-700 text-[14px] leading-6">
              Hello! You received a new inquiry from your developer portfolio website. Here are the submission details:
            </Text>

            <Section className="bg-slate-50 p-4 rounded-lg my-5">
              <Text className="text-slate-800 text-[14px] leading-6 my-1">
                <strong>📧 Email:</strong>{' '}
                <a href={`mailto:${email}`} className="text-teal-600 underline">
                  {email}
                </a>
              </Text>
              
              <Text className="text-slate-800 text-[14px] leading-6 my-1">
                <strong>🏢 Company:</strong> {company || 'Not Specified'}
              </Text>
              
              <Text className="text-slate-800 text-[14px] leading-6 my-1">
                <strong>🛠️ Project Type:</strong> {projectType}
              </Text>
            </Section>

            <Section className="my-5">
              <Text className="text-slate-800 text-[14px] font-semibold mb-2">
                💬 Message Details:
              </Text>
              <div className="bg-slate-50 border-l-4 border-teal-500 p-4 text-slate-700 text-[14px] leading-6 italic whitespace-pre-line rounded-r-lg">
                "{message}"
              </div>
            </Section>

            <Hr className="border border-solid border-slate-200 my-6" />
            
            <Text className="text-slate-400 text-[12px] text-center">
              Sent automatically from your portfolio platform.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PortfolioEmail;
