import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import type { Metadata } from "next";
import ProgressBar from "./components/ProgressBar";

export const metadata: Metadata = {
  title: "Resumo da Shinoda Labs - Visão Geral e Serviços",
  description:
    "Descubra a Shinoda Labs em um resumo abrangente: nossos principais serviços, conquistas, e áreas de especialização em soluções digitais inovadoras. Explore como transformamos ideias em realidade com criatividade e tecnologia.",
  keywords: [
    "resumo Shinoda Labs",
    "serviços principais",
    "conquistas",
    "soluções digitais",
    "inovação tecnológica",
    "design web",
    "desenvolvimento de software",
  ],
  authors: [
    {
      name: "Shinoda Labs",
      url: "https://shinodalabs.com.br",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Resumo da Shinoda Labs - Visão Geral e Serviços",
    description:
      "Descubra a Shinoda Labs em um resumo abrangente: nossos principais serviços, conquistas, e áreas de especialização em soluções digitais inovadoras. Explore como transformamos ideias em realidade com criatividade e tecnologia.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Visão geral dos serviços e conquistas da Shinoda Labs",
      },
    ],
    url: "https://shinodalabs.com.br/resumo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resumo da Shinoda Labs - Visão Geral e Serviços",
    description:
      "Descubra a Shinoda Labs em um resumo abrangente: nossos principais serviços, conquistas, e áreas de especialização em soluções digitais inovadoras. Explore como transformamos ideias em realidade com criatividade e tecnologia.",
    images: [
      {
        url: "/seo.png",
      },
    ],
  },
};

const skills = [
  { skill: "HTML/CSS", percentage: 95 },
  { skill: "React JS", percentage: 90 },
  { skill: "Web Design", percentage: 80 },
  { skill: "Express.js", percentage: 95 },
  { skill: "JavaScript", percentage: 90 },
  { skill: "TypeScript", percentage: 80 },
];

export default function ResumePage() {
  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-20 relative py-10">
      <Header title="Resumo" description="Conheça minhas habilidades" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 gap-10">
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-2xl mb-6">Educação</h2>

          <div className="divide-y divide-zinc-700 border-l-lime-400 border-l-4">
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-2xl mb-6">Experiência</h2>

          <div className="divide-y divide-zinc-700 border-l-lime-400 border-l-4">
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
            <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
              <h3 className="font-medium text-xl">
                Análise e desenvolvimento de sistemas
              </h3>
              <p className="font-normal text-sm">Unicid 2024 / 2026</p>
              <p className="font-normal text-sm">
                Id ea dolor duis officia culpa et ipsum Lorem eiusmod velit sunt
                ad. Cupidatat cillum incididunt in aute amet enim proident
                exercitation dolor laborum proident quis sunt consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col max-w-6xl w-full mx-auto px-4 gap-10">
        <SubHeader
          title="Minhas habilidades"
          description="Meu conhecimento com algumas ferramentas"
        />

        <div className="flex flex-col max-w-6xl w-full mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {skills.map((item, index) => (
              <div key={index}>
                <ProgressBar skill={item.skill} percentage={item.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
