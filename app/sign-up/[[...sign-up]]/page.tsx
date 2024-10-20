import BgGradient from '@/components/common/bggradient';
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="flex items-center py-16 justify-center">
      <BgGradient>
        <SignUp />
      </BgGradient>
    </section>
  );
}