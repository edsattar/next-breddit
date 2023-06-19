import { Icons } from "@/components/Icons";
import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        {/* prettier-ignore */}
        <p className="text-sm max-w-xs mx-auto">By continuing, you are setting up a Breadit account and agree to our <Link href="/" className="hover:underline">User Agreement</Link> and <Link href="" className="hover:underline">Privacy Policy.</Link></p>
      <UserAuthForm />
      {/* prettier-ignore */}
      <p className="px-8 text-center text-sm text-muted-foreground">New to Breaddit? <Link href="/sign-up" className="hover:text-brand text-sm underline underline-offset-4">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
