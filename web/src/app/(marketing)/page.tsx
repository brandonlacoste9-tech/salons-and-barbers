"use client";

import { useState, useEffect } from "react";
import { PhoneCall, Scissors, CalendarDays, Moon, Sun, Languages } from "lucide-react";
import { VapiWebCallButton } from "@/components/vapi-web-call-button";
import { AiPhoneFrame } from "@/components/marketing/ai-phone-frame";
import { useTheme } from "next-themes";

const content = {
  en: {
    title: "The Classic",
    subtitle: "Barbershop",
    demo: "AI Concierge Demo Environment",
    h1_1: "Never Miss a ",
    h1_2: "New Client.",
    desc: "How many clients are you losing when the barbers are busy cutting hair? Meet your new digital concierge, trained specifically to book your chairs and answer questions instantly.",
    howTo: "How to test this concierge:",
    test1: "Click the button above to start a live voice call directly from your browser.",
    test2: "Ask the AI about a Skin Fade or Hot Towel Shave. It understands barber services.",
    test3: "Tell it you want a haircut tomorrow. Notice how smoothly it books the slot.",
    greeting: "Welcome to The Classic Barbershop! Bonjour, bienvenue au barbershop classique! Are you looking to book a fresh cut, a fade, or a hot towel shave today?",
    promptLanguage: "Speak strictly in English."
  },
  fr: {
    title: "The Classic",
    subtitle: "Barbershop",
    demo: "Environnement de Démo IA",
    h1_1: "Ne Manquez Jamais un ",
    h1_2: "Nouveau Client.",
    desc: "Combien de clients perdez-vous lorsque les barbiers sont occupés à couper des cheveux ? Découvrez votre nouveau concierge numérique, formé spécifiquement pour gérer vos rendez-vous instantanément.",
    howTo: "Comment tester ce concierge :",
    test1: "Cliquez sur le bouton ci-dessus pour démarrer un appel vocal en direct depuis votre navigateur.",
    test2: "Demandez à l'IA des renseignements sur un Dégradé ou un Rasage à la serviette chaude. Elle comprend les services de barbier.",
    test3: "Dites-lui que vous voulez une coupe de cheveux demain. Remarquez avec quelle fluidité elle réserve le créneau.",
    greeting: "Bonjour, bienvenue au barbershop classique ! Welcome to The Classic Barbershop! Cherchez-vous à réserver une coupe fraîche, un dégradé ou un rasage à la serviette chaude aujourd'hui ?",
    promptLanguage: "Speak strictly in French."
  }
};

export default function BarbershopDemoPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = content[lang];

  const systemPrompt = `You are a cool, professional barber concierge for The Classic Barbershop.
${t.promptLanguage}
Your goal is to book appointments and answer basic questions.
You can book: Classic Haircuts, Skin Fades, Hot Towel Shaves, and Combos.

CRITICAL INSTRUCTIONS FOR BOOKING:
Before confirming any appointment, you MUST ask the caller:
1. If they are a returning client or a new client.
2. For their full name.
3. For their best callback phone number.
Do not ask for all this information at once. Gather it conversationally.

Keep your responses concise, confident, and smooth.`;

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-slate-900 font-sans transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b border-slate-200 px-6 lg:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 shadow-lg shadow-slate-900/20 dark:bg-slate-800">
            <Scissors className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title} <span className="font-light text-slate-500 dark:text-slate-400">{t.subtitle}</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden text-sm font-medium text-slate-500 sm:block dark:text-slate-400">
            {t.demo}
          </div>
          
          <div className="flex items-center gap-2 border-l border-slate-200 pl-6 dark:border-slate-800">
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="flex h-9 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Languages className="h-4 w-4" />
              <span>{lang.toUpperCase()}</span>
            </button>
            {isMounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-12 lg:pb-32 lg:pt-28">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white transition-colors duration-300 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950" />

          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {t.h1_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-300 dark:to-white">{t.h1_2}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
              {t.desc}
            </p>

            <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <AiPhoneFrame 
                name="James" 
                title="Barber AI Concierge"
              >
                <VapiWebCallButton 
                  assistantOverrides={{
                    name: "The Classic Barbershop",
                    services: [
                      { id: "bb_haircut", name: "Classic Haircut", duration_minutes: 30, price_cents: 3500 },
                      { id: "bb_fade", name: "Skin Fade", duration_minutes: 45, price_cents: 4500 },
                      { id: "bb_shave", name: "Hot Towel Shave", duration_minutes: 30, price_cents: 4000 },
                      { id: "bb_combo", name: "Haircut & Beard Trim Combo", duration_minutes: 60, price_cents: 6500 }
                    ],
                    voiceGreeting: t.greeting,
                    systemPrompt: systemPrompt,
                    voice: {
                      provider: "openai",
                      voiceId: "onyx"
                    }
                  }}
                />
              </AiPhoneFrame>
            </div>

            <div className="mx-auto mt-24 max-w-3xl border border-slate-200 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{t.howTo}</h3>
              <ul className="mt-6 space-y-5 text-left text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <PhoneCall className="h-5 w-5 text-slate-900 dark:text-white" />
                  </div>
                  <span className="mt-2">{t.test1}</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <Scissors className="h-5 w-5 text-slate-900 dark:text-white" />
                  </div>
                  <span className="mt-2" dangerouslySetInnerHTML={{ __html: t.test2.replace("Skin Fade", "<strong>Skin Fade</strong>").replace("Hot Towel Shave", "<strong>Hot Towel Shave</strong>").replace("Dégradé", "<strong>Dégradé</strong>").replace("Rasage à la serviette chaude", "<strong>Rasage à la serviette chaude</strong>") }} />
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <CalendarDays className="h-5 w-5 text-slate-900 dark:text-white" />
                  </div>
                  <span className="mt-2" dangerouslySetInnerHTML={{ __html: t.test3.replace("haircut tomorrow", "<strong>haircut tomorrow</strong>").replace("coupe de cheveux demain", "<strong>coupe de cheveux demain</strong>") }} />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
