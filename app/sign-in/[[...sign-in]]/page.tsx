import BgGradient from '@/components/common/bggradient';
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="flex items-center py-16 justify-center">
      <BgGradient>
        <SignIn />
      </BgGradient>
    </section>
  );
}