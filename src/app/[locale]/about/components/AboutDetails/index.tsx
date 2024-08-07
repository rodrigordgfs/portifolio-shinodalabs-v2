"use client";

import { Github, InstagramIcon, LinkedinIcon, Mail } from "lucide-react";
import { dayjs } from "@/libs/dayjs";
import { useTranslations } from "next-intl";

export default function AboutDetails() {
  const t = useTranslations("AboutPage");

  const ageInYears = dayjs().diff(dayjs("1997-11-28"), "year");

  return (
    <div className="flex flex-col-reverse md:flex-row max-w-6xl w-full mx-auto px-4 gap-5">
      <div className="w-full h-80 md:h-auto md:max-w-72 bg-me bg-no-repeat bg-cover rounded-md shadow" />
      <div className="flex-1 space-y-6">
        <h2 className="text-lime-400 text-center md:text-start font-semibold text-2xl">
          {t("who_am_i")}
        </h2>
        <h3 className="text-3xl font-bold text-center md:text-start text-zinc-100">
          {t("subtitle")}
        </h3>
        <p className="font-normal text-sm text-zinc-400 text-center md:text-start">
          {t("description")}
        </p>
        <div className="w-full h-[2px] bg-zinc-600" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
          <li className="font-normal text-sm text-zinc-400">
            <span className="text-zinc-200">{t("name")}:</span>{" "}
            {t("name_value")}
          </li>
          <li className="font-normal text-sm text-zinc-400">
            <span className="text-zinc-200">{t("age")}:</span> {ageInYears}{" "}
            {t("years")}
          </li>
          <li className="font-normal text-sm text-zinc-400">
            <span className="text-zinc-200">{t("email")}:</span>{" "}
            {t("email_value")}
          </li>
          <li className="font-normal text-sm text-zinc-400">
            <span className="text-zinc-200">{t("city")}:</span>{" "}
            {t("city_value")}
          </li>
        </ul>

        <div className="flex flex-col md:flex-row gap-3 items-center">
          <a
            href="https://rniscvxztrspzsoduaqy.supabase.co/storage/v1/object/public/portifolio/curriculo.pdf?t=2024-08-07T03%3A21%3A53.735Z"
            download="curriculo.pdf"
          >
            <button className="bg-lime-500 text-zinc-950 px-6 py-2 w-full md:w-auto rounded-full hover:bg-lime-400 transition-all">
              {t("download_cv")}
            </button>
          </a>
          <div className="w-[2px] md:w-16 md:h-[2px] h-6 bg-zinc-400" />
          <ul className="flex flex-row items-center gap-2">
            <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
              <a
                href="https://www.linkedin.com/in/shinoda-labs/"
                target="_blank"
              >
                <LinkedinIcon size={18} />
              </a>
            </li>
            <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
              <a href="https://www.instagram.com/mr_shinodaa" target="_blank">
                <InstagramIcon size={18} />
              </a>
            </li>
            <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
              <a href="https://www.github.com/rodrigordgfs" target="_blank">
                <Github size={18} />
              </a>
            </li>
            <li className="h-7 w-7 rounded-lg hover:bg-lime-400 hover:text-zinc-950 flex items-center justify-center transition-all cursor-pointer">
              <a href="mailto:shinodalabs@gmail.com">
                <Mail size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
