"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumbs as MaterialBreadcrumbs, Typography } from "@mui/material";
import { NuamThemeWrapper } from "@/app/providers";

export interface IBreadcrumbLink {
  name: string;
  path: string;
}

interface IDynamicLinks {
  links?: never;
}

interface ICustomLinks {
  links: IBreadcrumbLink[];
}

type IBreadcrumbsProps = IDynamicLinks | ICustomLinks;

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const Breadcrumbs = ({ links }: IBreadcrumbsProps) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = React.useMemo(() => {
    if (links?.length) {
      return links;
    }

    const breadcrumbLinks: IBreadcrumbLink[] = [];
    let accumulatedPath = "";

    pathSegments.forEach((segment: string) => {
      accumulatedPath += `/${segment}`;
      breadcrumbLinks.push({
        name: capitalize(segment),
        path: accumulatedPath,
      });
    });

    return breadcrumbLinks;
  }, [pathname, links, pathSegments]);

  return (
    <NuamThemeWrapper>
      <div role="presentation" style={{ marginBottom: 20 }}>
        <MaterialBreadcrumbs maxItems={2} aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) =>
            index < breadcrumbs.length - 1 ? (
              <Link
                key={breadcrumb.path}
                href={breadcrumb.path}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {breadcrumb.name}
              </Link>
            ) : (
              <Typography
                key={breadcrumb.path}
                sx={{
                  color: "var(--mui-palette-primary-main)",
                  borderBottom: "1px solid red",
                }}
              >
                {breadcrumb.name}
              </Typography>
            )
          )}
        </MaterialBreadcrumbs>
      </div>
    </NuamThemeWrapper>
  );
};
