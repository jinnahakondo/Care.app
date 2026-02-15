import LoginHero from "@/components/auth/LoginHero";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Sign In - Care.xyz",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-[#f6f7f8] dark:bg-[#101922]">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
