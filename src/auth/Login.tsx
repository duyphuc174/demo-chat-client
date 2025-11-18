import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-[500px] rounded-xl border-1 border-gray-200 bg-gray-200 p-8 dark:border-gray-700 dark:bg-gray-800">
        <form className="flex max-w-md flex-col gap-4">
          <div className="flex w-full justify-center p-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Đăng nhập
            </h3>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Tài khoản</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Mật khẩu</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" checked />
              <Label htmlFor="remember">Lưu tài khoản</Label>
            </div>
            <a
              href="/auth/register"
              className="text-primary-500 dark:text-primary-500 font-semibold hover:underline"
            >
              Đăng ký
            </a>
          </div>
          <Button className="mt-4" type="submit">
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  );
}
