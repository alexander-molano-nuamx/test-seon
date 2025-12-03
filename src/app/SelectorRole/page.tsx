"use client";

import type { NextPage } from "next";
import styles from "@/styles/index.module.css";
import { useMediaQuery } from "@mui/material";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { RoleSelectorView } from "@/components/RoleSelection";

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
