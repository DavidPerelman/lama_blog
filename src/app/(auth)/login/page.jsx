"use client";

import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, login } from "@/lib/action";
// import { auth } from "@/lib/auth";
import styles from "./login.module.css";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const session = await auth();
  // console.log(session);

  return (
    <>
      {isClient ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <form action={handleGithubLogin}>
              <button className={styles.github}>Login with Github</button>
            </form>
            <LoginForm />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginPage;
