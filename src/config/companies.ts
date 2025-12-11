/**
 * Company configuration and logo mapping
 * Maps company names to their respective logo assets
 */

export interface CompanyConfig {
  name: string;
  logo: string;
  location?: string;
}

export const COMPANY_LOGOS: Record<string, string> = {
  BBVA: "/assets/BBVA-2.svg",
  Inteligo: "/assets/inteligo-1.svg",
  "BTG Pactual SAB": "/assets/btg-pacta.svg",
  "Credicorp Capital SAB": "/assets/credicorp-logo.svg",
  "Kallpa SAB": "/assets/kallpa-avatar.png",
  SEON: "/assets/isotype.svg",
  "BNB Valores SAB": "/assets/bnb.svg",
};

/**
 * Get the logo path for a company
 * @param companyName - The name of the company
 * @returns The logo path or a default logo
 */
export function getCompanyLogo(companyName: string): string {
  return COMPANY_LOGOS[companyName] || "/assets/isotype.svg";
}

/**
 * Get company configuration
 * @param companyName - The name of the company
 * @returns Company configuration object
 */
export function getCompanyConfig(companyName: string): CompanyConfig {
  return {
    name: companyName,
    logo: getCompanyLogo(companyName),
    location: "Perú", // Default location, can be customized per company
  };
}
