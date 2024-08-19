"use client";

import styles from "./register.module.css";
import { useEffect, useState } from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <RegisterForm />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RegisterPage;
