import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import LoginButton from "@/app/components/LoginButton";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-96 shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-center text-xl">Đăng nhập</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            <Button className="w-full mt-2" type="submit">
              Đăng nhập
            </Button>
          </form>

          <LoginButton />
          <div className="text-center mt-4 text-sm">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-blue-600">
              Đăng ký
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
