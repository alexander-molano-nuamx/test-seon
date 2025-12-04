"use client";

import Image from "next/image";
import styles from "@/styles/index.module.css";
import RoleSelector from "./RoleSelector";
import { Box } from "@mui/material";
import IsotypeName from "./IsotypeName/IsotypeName";

export function RoleSelectorView() {
  return (
    <>
      <div className={styles.idKcHeader}>
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
      <div className={styles.cardPf}>
        <RoleSelector />
      </div>
    </>
  );
}
