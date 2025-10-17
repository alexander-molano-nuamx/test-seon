"use client";

import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/index.module.css";

export function RestrictedDevice() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        textAlign: "center",
        p: 3,
        m: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Box mb={2} display="flex" justifyContent="center">
          <Image
            src="/Alert-Icon.svg"
            alt="Dispositivo restringido"
            width={132}
            height={132}
          />
        </Box>
        <div className={styles.restrictedCard}>
          <h2 className={styles.restrictedTitle}>Dispositivo restringido</h2>
          <p className={styles.restrictedText}>
            El acceso a este sitio desde dispositivos móviles o tablets está
            restringido por políticas de la empresa nuam. Por favor, ingresa
            desde un computador.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
