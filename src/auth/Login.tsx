import { Button, Label, TextInput } from "flowbite-react";
import { Formik, Form } from "formik";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      const res = await AuthService.login(values);
      if (res.data.token) {
        localStorage.setItem("chat-token", res.data.token);
        localStorage.setItem("chat-user", JSON.stringify(res.data.user));
        navigate("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-[500px] rounded-xl border border-gray-200 bg-gray-200 p-8 dark:border-gray-700 dark:bg-gray-800">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange }) => (
            <Form className="flex max-w-md flex-col gap-4">
              <div className="flex w-full justify-center p-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Đăng nhập
                </h3>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username">Tài khoản</Label>
                </div>
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Mật khẩu</Label>
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row justify-between">
                <a
                  href="/auth/register"
                  className="text-primary-500 font-semibold hover:underline"
                >
                  Đăng ký
                </a>
              </div>

              <Button className="mt-4" type="submit">
                Đăng nhập
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
