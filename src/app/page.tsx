"use client";

import type { NextPage } from "next";
import styles from "@/styles/index.module.css";
import { useMediaQuery } from "@mui/material";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { MainForm } from "@/components/MainLogin";

const Login: NextPage = () => {
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");
  return (
    <div className={styles.login}>
      {isMobileOrTablet ? (
        <RestrictedDevice />
      ) : (
        <>
          <MainForm />
        </>
      )}
    </div>
  );
};

export default Login;
