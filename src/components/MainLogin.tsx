"use client";

import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";
import styles from "@/styles/index.module.css";
import { Box } from "@mui/material";
import IsotypeName from "./IsotypeName/IsotypeName";

export function MainForm() {
  return (
    <>
      <div className={styles.idKcHeader}>
        <div className={styles.idKcHeaderText}>
          {/* Logo and Header */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={0.5}
          >
            <IsotypeName
              logoSrc="/assets/isotype.svg"
              projectName="seon"
              variant="horizontal"
              size="md"
              className="logo-container"
              alt="Logo NUAM Platform"
            />
          </Box>
        </div>
      </div>
      <div className={styles.cardPf}>
        <div className={styles.cardBackground}>
          <div className={styles.headerCard3}>
            <h1 className={styles.h1}>Inicia sesión en tu cuenta</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
