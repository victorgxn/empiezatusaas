"use client";

import type React from "react";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, Zap } from "lucide-react";
import DownloadForm from "@/components/download-form";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0F1E]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2332_1px,transparent_1px),linear-gradient(to_bottom,#1a2332_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Background SVG pattern with dots */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* Radial gradient overlays */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-blue-500/30 blur-[100px]" />
      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute -right-40 top-[600px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10">
        <section className="px-4 py-20 md:py-32 lg:py-40">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-12 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F7DF1F]/30 bg-gradient-to-r from-[#F7DF1F]/20 via-[#FFFE65]/15 to-[#F7DF1F]/20 px-5 py-2 text-sm font-medium text-[#FFFE65] shadow-lg shadow-[#F7DF1F]/10 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-[#F7DF1F]/20">
                <Zap className="h-4 w-4 fill-[#FFFE65]/30" />
                <span>Roadmap completo, 100% gratis</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Lanza tu primer SaaS
                    <br />
                    en{" "}
                    <span className="relative inline-block">
                      <span className="text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#F7DF1F]/80 via-[#FFFE65] to-[#F7DF1F]/80 font-bold inline-block">
                        90 días
                      </span>
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M2 7C43.6667 3.66667 128.2 -1.4 198 7"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#F7DF1F"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="50%"
                              stopColor="#FFFE65"
                              stopOpacity="1"
                            />
                            <stop
                              offset="100%"
                              stopColor="#F7DF1F"
                              stopOpacity="0.8"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </h1>

                <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-gray-300 md:text-2xl">
                  Lo que me hubiese gustado saber antes de lanzar mi primer saas
                  para evitar perder meses en cosas innecesarias.
                </p>
              </div>

              {/* Email Form */}
              <DownloadForm idSuffix="-hero" />

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>+50 descargas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>20 min de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F7DF1F]/20 bg-gradient-to-r from-[#F7DF1F]/10 to-[#FFFE65]/10 px-4 py-1.5 text-sm font-medium text-[#FFFE65]">
                <span>📋</span>
                <span>3 fases • 90 días</span>
              </div>
              <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Contenido del roadmap
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Tu plan completo para lanzar tu primer SaaS
              </p>
            </div>

            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F7DF1F]/20 to-[#FFFE65]/10 p-4 shadow-lg shadow-[#F7DF1F]/10">
                    <img
                      src="/pro-checklist.svg"
                      alt="Validación"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFE65]/20 text-sm font-bold text-[#FFFE65]">
                        1
                      </span>
                      <h3 className="text-3xl font-bold md:text-4xl">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          Validación
                        </span>
                      </h3>
                    </div>
                    <p className="text-base text-gray-400">📅 Días 1–30</p>
                  </div>
                </div>
                <Card className="border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
                  <ul className="space-y-4">
                    {[
                      "Por qué la mayoría de ideas SaaS fracasan",
                      "Cómo encontrar problemas por los que la gente paga",
                      "Microvalidación sin escribir código",
                      "Definir tu propuesta mínima de valor",
                      "Señales para decidir si construir o descartar",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                        <span className="leading-relaxed text-gray-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Phase 2 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-4 shadow-lg shadow-blue-500/10">
                    <img
                      src="/pro-bulb.svg"
                      alt="Construcción del MVP"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                        2
                      </span>
                      <h3 className="text-3xl font-bold md:text-4xl">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          Construcción del MVP
                        </span>
                      </h3>
                    </div>
                    <p className="text-base text-gray-400">📅 Días 31–60</p>
                  </div>
                </div>
                <Card className="border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
                  <ul className="space-y-4">
                    {[
                      "Qué aprender y qué NO aprender",
                      "Stack técnico mínimo para lanzar rápido",
                      "Construir un MVP sin perfeccionismo",
                      "Testeo temprano y feedback real",
                      "Checklist de lanzamiento inicial",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                        <span className="leading-relaxed text-gray-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Phase 3 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-4 shadow-lg shadow-purple-500/10">
                    <img
                      src="/pro-chat.svg"
                      alt="Primeros clientes"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-300">
                        3
                      </span>
                      <h3 className="text-3xl font-bold md:text-4xl">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          Primeros clientes
                        </span>
                      </h3>
                    </div>
                    <p className="text-base text-gray-400">📅 Días 61–90</p>
                  </div>
                </div>
                <Card className="border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
                  <ul className="space-y-4">
                    {[
                      "Cómo conseguir los primeros usuarios gratis",
                      "Hablar con clientes reales y aprender",
                      "Iterar sin romper el producto",
                      "Métricas iniciales que sí importan",
                      "Qué haría distinto si empezara hoy",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                        <span className="leading-relaxed text-gray-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5 px-4 py-20 backdrop-blur-sm md:py-28">
          <div className="mx-auto max-w-3xl">
            <Card className="border-white/10 bg-white/5 p-10 shadow-sm backdrop-blur-sm">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
                  <Image
                    src="/yo.webp"
                    alt="Victor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-balance text-lg leading-relaxed text-gray-200">
                    Soy Víctor González, programador de 23 años especializado en
                    desarrollo fullstack. Estoy creando mi primera startup y
                    documentando todo el proceso para que puedas aprender de mis
                    aciertos y evitar los errores que cometa en el camino.
                  </p>
                  <p className="text-balance text-lg leading-relaxed text-gray-200">
                    Actualmente estoy creando mi startup{" "}
                    <a
                      href="https://www.crealo.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#FFFE65] underline transition-colors hover:text-[#F7DF1F]"
                    >
                      crealo.io
                    </a>{" "}
                    y documentando todo el proceso en{" "}
                    <a
                      href="https://victorgxn.com/startup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#FFFE65] underline transition-colors hover:text-[#F7DF1F]"
                    >
                      victorgxn.com/startup
                    </a>
                    .
                  </p>
                  <p className="text-balance text-lg font-medium leading-relaxed text-gray-400">
                    Building in public.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-10 space-y-6">
              <h2 className="text-balance text-4xl font-bold md:text-5xl">
                <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Empieza hoy tu camino hacia tu primer{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F7DF1F]/80 via-[#FFFE65] to-[#F7DF1F]/80">
                      SaaS
                    </span>
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 5C20 3 80 2 98 5"
                        stroke="url(#gradient-saas)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient-saas"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#F7DF1F"
                            stopOpacity="0.8"
                          />
                          <stop
                            offset="50%"
                            stopColor="#FFFE65"
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor="#F7DF1F"
                            stopOpacity="0.8"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-300">Descarga inmediata</p>
            </div>

            <DownloadForm idSuffix="-cta" />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 px-4 py-10">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm text-gray-400">© 2025 empiezatusaas.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
