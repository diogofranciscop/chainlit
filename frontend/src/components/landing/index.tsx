import { Logo } from '../Logo';
import { LandingCard } from './LandingCard';

export function Landing() {
  return (
    <div className="flex flex-row min-w-full min-h-screen">
      <LandingCard />
      <Logo />
    </div>
  );
}
