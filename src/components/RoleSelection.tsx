"use client";

import Image from "next/image";
import styles from "@/styles/index.module.css";
import RoleSelector from "./RoleSelector";

export function RoleSelectorView() {
  return (
    <>
      <div className={styles.idKcHeader}>
        <div className={styles.idKcHeaderImage}>
          <Image
            className={styles.logoIcon}
            src="/Logo.svg"
            alt="Logo"
            width={213}
            height={49}
          />
        </div>
        <div className={styles.idKcHeaderText}>
          <div className={styles.sistemaDeEmisiones}>
            seon - Sistema de Emisiones y Operaciones Especiales
          </div>
        </div>
      </div>
      <div className={styles.cardPf}>
        <RoleSelector />
      </div>
    </>
  );
}
