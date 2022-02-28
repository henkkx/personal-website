interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <img src="/images/logo.svg" className={className} />;
}
