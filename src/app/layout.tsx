import "@/styles/_autoload.scss";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import type { FC, ReactNode } from "react";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Nguyen Hoang Sang (Leo)",
  description:
    "I am a software engineer who loves to build things. I am passionate about web development and mobile development, and I am always looking for new opportunities to learn and grow. I am currently working as a software engineer at a startup in Vietnam.",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={firaCode.className}>
        <span>app layout</span>
        <div>header</div>
        {children}
        <div>footer</div>
      </body>
    </html>
  );
};

export default RootLayout;
