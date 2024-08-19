"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./adminUserForm.module.css";
import { useEffect, useState } from "react";

const AdminUserForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [state, formAction] = useFormState(addUser, undefined);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <form action={formAction} className={styles.container}>
          <h1>Add New User</h1>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <select name="isAdmin">
            <option value="false">Is Admin?</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <button>Add</button>
          {state && state.error}
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminUserForm;
