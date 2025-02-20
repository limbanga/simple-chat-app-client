import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {
  return (
    <>
      <Button
        onClick={() => signIn("google",{ callbackUrl: "/" })} 
        className="w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-100"
      >
        <FcGoogle size={20} /> Đăng nhập bằng Google
      </Button>
    </>
  );
}
