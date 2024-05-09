import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "./providers/modalProvider";

export const metadata: Metadata = {
  title: "측우기와 측우대",
  description: "측우기와 측우대를 3D 인터렉션을 통해 생동감 있게 보여줍니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pre">
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
