import Header from "@/components/Header";
import AboutDetails from "./components/AboutDetails";
import AbouteServices from "./components/AboutServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShinodaLabs | Sobre Min",
  description: "Generated by create next app",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title="Sobre mim" description="Conheça quem sou" />
      <AboutDetails />
      <AbouteServices />
    </div>
  );
}