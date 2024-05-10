import HeroSection from '@/sections/HeroSection';
import UsersReviewSection from '@/sections/UsersReviewSection';

export default function Home() {
  return (
    <main className="bg-slate-50">
      <HeroSection />

      <UsersReviewSection />
    </main>
  );
}
