"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { subscribe } from "@/app/actions/newsletter";

interface DownloadFormProps {
  idSuffix?: string;
}

export default function DownloadForm({ idSuffix = "" }: DownloadFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!acceptedPrivacy) {
      setError("Debes aceptar la política de privacidad para continuar");
      return;
    }

    if (!email) {
      setError("Por favor, introduce tu correo electrónico");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await subscribe(email);

      if (!result.success) {
        setError(result.error || "Error al procesar la solicitud");
        setIsSubmitting(false);
        return;
      }

      // Descargar el PDF
      const link = document.createElement("a");
      link.href = "/De-Cero-a-SaaS-en-90-Dias.pdf";
      link.download = "De-Cero-a-SaaS-en-90-Dias.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setError("Error inesperado. Por favor, inténtalo de nuevo.");
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 text-white">
          <CheckCircle2 className="h-5 w-5" />
          <p className="font-medium">¡Descarga iniciada! Revisa tu correo</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 flex-1 border-white/10 bg-white/5 text-base text-white shadow-sm backdrop-blur-sm placeholder:text-gray-400"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-12 bg-white px-8 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 disabled:opacity-50"
          >
            {isSubmitting ? "Procesando..." : "Descargar gratis"}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            id={`privacy-policy${idSuffix}`}
            checked={acceptedPrivacy}
            onChange={(e) => setAcceptedPrivacy(e.target.checked)}
            required
            className="h-4 w-4 cursor-pointer rounded border-white/10 bg-white/5 text-[#FFFE65] focus:ring-2 focus:ring-[#FFFE65]/50"
          />
          <label htmlFor={`privacy-policy${idSuffix}`} className="cursor-pointer text-sm text-gray-300">
            Acepto la{" "}
            <a
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFE65] underline hover:text-[#F7DF1F]"
            >
              política de privacidad
            </a>
          </label>
        </div>
        {error && <p className="text-center text-sm text-red-400">{error}</p>}
        <p className="text-center text-xs text-gray-500">✓ Sin spam • Descarga inmediata</p>
      </form>
    </div>
  );
}
