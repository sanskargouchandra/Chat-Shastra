import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <section className="h-screen w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <SignIn />
    </div>
    </section>
  );
}