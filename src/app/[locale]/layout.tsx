
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Transition from "./Transition";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <Transition>{children}</Transition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
