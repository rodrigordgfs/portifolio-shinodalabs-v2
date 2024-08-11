import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Shinoda Labs",
  description:
    "Entre em contato com a Shinoda Labs para saber mais sobre nossos serviços de design e desenvolvimento web. Estamos aqui para transformar suas ideias em soluções digitais inovadoras.",
  keywords: [
    "contato Shinoda Labs",
    "fale conosco",
    "serviços de design",
    "desenvolvimento web",
    "soluções digitais",
    "atendimento ao cliente",
    "suporte Shinoda Labs",
  ],
  authors: [
    {
      name: "Shinoda Labs",
      url: "https://shinodalabs.com.br",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contato - Shinoda Labs",
    description:
      "Entre em contato com a Shinoda Labs para saber mais sobre nossos serviços de design e desenvolvimento web. Estamos aqui para transformar suas ideias em soluções digitais inovadoras.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Contato com a equipe da Shinoda Labs para soluções digitais",
      },
    ],
    url: "https://shinodalabs.com.br/contato",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato - Shinoda Labs",
    description:
      "Entre em contato com a Shinoda Labs para saber mais sobre nossos serviços de design e desenvolvimento web. Estamos aqui para transformar suas ideias em soluções digitais inovadoras.",
    images: [
      {
        url: "/seo.png",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title="Contato" description="Minhas redes sociais" />
    </div>
  );
}
