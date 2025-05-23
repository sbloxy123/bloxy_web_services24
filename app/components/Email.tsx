// Email.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
  Img,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
  currentWebsite: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  message,
  phone,
  currentWebsite,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              You got a message! on BLOXIE.CO.UK
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Stuart,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{name}</strong>.
              <br />
              <br />
              <span className="bold uppercase">details:</span> <br />
              <span className="underline">Email address:</span> {email}
              <br />
              <span className="underline">Current Website:</span>{" "}
              {currentWebsite}
              <br />
              <br />
              <span className="underline">Contact number:</span> {phone}.
              <br />
              <br />
              <span className="underline">
                <strong>Message:</strong>
              </span>{" "}
              <br />
              {message} <br />
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
