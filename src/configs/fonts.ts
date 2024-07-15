import { Fira_Code, Fira_Sans, Inter } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira'
});

const firaSans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-fira'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const CfgFonts = {
  firaCode,
  firaSans,
  inter
};
