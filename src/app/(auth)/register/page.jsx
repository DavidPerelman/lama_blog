import { register } from "@/lib/action";

const RegisterPage = () => {
  return (
    <div>
      <form action={register}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="password again" name="passwordRepeat" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
