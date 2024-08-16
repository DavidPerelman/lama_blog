"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";

const ContactClientPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill className={styles.img} />
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Email Adress" />
              <input type="text" placeholder="Phone Number (Optional)" />
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContactClientPage;
