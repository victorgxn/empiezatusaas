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
      <div className="mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-center gap-2 text-gray-900">
          <CheckCircle2 className="h-5 w-5 text-[#F7DF1F]" />
          <p className="font-medium">¡Descarga iniciada! Revisa tus descargas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-3 sm:space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-14 sm:h-12 w-full flex-1 border-gray-300 bg-white text-base text-gray-900 shadow-sm placeholder:text-gray-400"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || !acceptedPrivacy || !email}
            className="h-11 sm:h-12 bg-[#F7DF1F] px-8 text-base font-medium text-gray-900 shadow-sm hover:bg-[#e5cf1c] disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
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
            className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-white text-[#F7DF1F] focus:ring-2 focus:ring-[#F7DF1F]/50"
          />
          <label htmlFor={`privacy-policy${idSuffix}`} className="cursor-pointer text-sm text-gray-700">
            Acepto la{" "}
            <a
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline decoration-[#F7DF1F] decoration-2"
            >
              política de privacidad
            </a>
          </label>
        </div>
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        <p className="text-center text-xs text-gray-500">✓ Sin spam • Descarga inmediata</p>
      </form>
    </div>
  );
}
