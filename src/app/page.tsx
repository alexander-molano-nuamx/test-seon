"use client";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import { LoginForm } from "@/components/LoginForm";
import { useMediaQuery, useTheme } from "@mui/material";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { MainForm } from "@/components/MainLogin";

const Login: NextPage = () => {
  const theme = useTheme();

  // Detecta si está en tablet o mobile (<= md en MUI son 960px)
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
