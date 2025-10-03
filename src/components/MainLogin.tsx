"use client";

import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";
import styles from "@/styles/index.module.css";

export function MainForm() {
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
            Sistema de Emisiones y OPES
          </div>
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
