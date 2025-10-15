"use client";

import type { NextPage } from "next";
import styles from "@/styles/index.module.css";
import { useMediaQuery } from "@mui/material";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { MainForm } from "@/components/MainLogin";
import { RoleSelectorView } from "@/components/RoleSelection";
import RoleSelector from "@/components/RoleSelector";

const RoleSelectPage: NextPage = () => {
  // Detecta si está en tablet o mobile (<= md en MUI son 960px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");
  return (
    <div className={styles.login}>
      {isMobileOrTablet ? (
        <RestrictedDevice />
      ) : (
        <>
          <RoleSelectorView />
        </>
      )}
    </div>
  );
};

export default RoleSelectPage;
