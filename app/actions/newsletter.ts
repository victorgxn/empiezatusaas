"use server";

import { LoopsClient } from "loops";
import { z } from "zod";

const emailSchema = z.string().email("El formato del email no es válido");

export async function subscribe(email: string) {
  const emailResult = emailSchema.safeParse(email);
  if (!emailResult.success) {
    return {
      success: false,
      error: "Por favor, introduce un email válido",
    };
  }

  if (!process.env.LOOPS_API_KEY) {
    console.error("Error: LOOPS_API_KEY no configurado");
    return {
      success: false,
      error:
        "Error de configuración del servicio. Por favor, inténtalo más tarde.",
    };
  }

  try {
    const loops = new LoopsClient(process.env.LOOPS_API_KEY);

    const response = await loops.createContact({
      email: emailResult.data,
      source: "website",
    });

    if (!response.success) {
      console.error("Error Loops:", response);
      if (response.message?.includes("already")) {
        return {
          success: false,
          error: "Este email ya está suscrito a nuestra lista",
        };
      }

      return {
        success: false,
        error:
          "No se pudo completar tu suscripción. Por favor, inténtalo más tarde.",
      };
    }

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("Error inesperado:", error);
    if (error.message?.includes("already") || error.message?.includes("Contact already exists")) {
      return {
        success: false,
        error: "Este email ya está suscrito a nuestra lista",
      };
    }
    return {
      success: false,
      error: "Error al procesar la solicitud. Por favor, inténtalo más tarde.",
    };
  }
}
