import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

// Aviso de privacidad de la app Mi Plan Sarenti. Página oculta: no aparece
// en el menú ni en el sitemap y pide no indexarse. Se abre desde la app y es
// la URL que se da en App Store Connect.
export const metadata: Metadata = {
  title: "Aviso de privacidad | Mi Plan Sarenti",
  description: "Aviso de privacidad de la app Mi Plan Sarenti.",
  robots: { index: false, follow: false },
};

const responsable = "Dra. Gabriela Ponce Paredes";
const correo = "sarenti@hotmail.com";
const domicilio =
  "15 de Mayo 15, Col. Francisco I. Madero, 72130 Heroica Puebla de Zaragoza, Pue.";
const actualizado = "7 de noviembre de 2026";

const sections: Array<{ title: string; body: React.ReactNode }> = [
  {
    title: "Quién es responsable de tus datos",
    body: (
      <p>
        {responsable}, de {siteConfig.name} Medicina estética, es responsable del
        tratamiento de los datos personales relacionados con la app Mi Plan
        Sarenti, con domicilio en {domicilio} Puedes escribirnos a{" "}
        <a href={`mailto:${correo}`}>{correo}</a> o por WhatsApp al{" "}
        {siteConfig.whatsappDisplay}.
      </p>
    ),
  },
  {
    title: "Qué datos usa la app",
    body: (
      <>
        <p>La app solo usa lo que viene en el plan que te da tu doctora:</p>
        <ul>
          <li>Tu nombre, para saludarte.</li>
          <li>
            Tu plan de alimentación: comidas, horarios, indicaciones, alimentos
            a evitar y meta de agua.
          </li>
          <li>
            Lo que tú marcas en la app: comidas, vasos de agua, indicaciones,
            lista de compras y tus preferencias de avisos.
          </li>
        </ul>
        <p>
          Tu plan de alimentación puede considerarse un dato de salud, es decir,
          un dato personal sensible. Por eso la app lo guarda solo en tu
          teléfono.
        </p>
      </>
    ),
  },
  {
    title: "Dónde se guardan",
    body: (
      <p>
        Todo se guarda únicamente en tu teléfono. La app no tiene cuentas, no
        pide correo ni contraseña, no sube tu información a ningún servidor y no
        la envía a {siteConfig.name} ni a nadie más. Tampoco usa publicidad ni
        herramientas de análisis o rastreo.
      </p>
    ),
  },
  {
    title: "Cámara, fotos y avisos",
    body: (
      <ul>
        <li>
          <strong>Cámara:</strong> solo para escanear el QR de tu plan. No se
          toman ni se guardan fotos.
        </li>
        <li>
          <strong>Fotos:</strong> solo para leer la imagen del corazón digital
          que tú eliges. La app no guarda ni comparte esa imagen.
        </li>
        <li>
          <strong>Avisos:</strong> los recordatorios se programan dentro de tu
          teléfono, sin internet. Puedes apagarlos cuando quieras.
        </li>
      </ul>
    ),
  },
  {
    title: "Para qué se usan",
    body: (
      <p>
        Únicamente para mostrarte tu plan, ayudarte a seguirlo día a día y
        enviarte los recordatorios que tú actives. No se usan para ningún otro
        fin.
      </p>
    ),
  },
  {
    title: "Transferencias",
    body: (
      <p>
        No compartimos ni transferimos tus datos a terceros, porque la app no
        los envía fuera de tu teléfono.
      </p>
    ),
  },
  {
    title: "Tus derechos (ARCO)",
    body: (
      <>
        <p>
          Puedes acceder, rectificar, cancelar u oponerte al uso de tus datos.
          Como todo vive en tu teléfono, puedes:
        </p>
        <ul>
          <li>Ver tu información en cualquier momento dentro de la app.</li>
          <li>Pedirle a tu doctora un plan corregido, si algo no está bien.</li>
          <li>
            Borrar todo con <strong>Mi cuenta → Quitar mi plan de este
            teléfono</strong>, o desinstalando la app.
          </li>
        </ul>
        <p>
          Si quieres ejercer estos derechos sobre los datos que {siteConfig.name}{" "}
          tiene por tu consulta, o revocar tu consentimiento, escríbenos a{" "}
          <a href={`mailto:${correo}`}>{correo}</a> con tu nombre y lo que
          solicitas. Te responderemos en un máximo de 20 días hábiles.
        </p>
      </>
    ),
  },
  {
    title: "Cambios a este aviso",
    body: (
      <p>
        Si este aviso cambia, publicaremos la nueva versión en esta misma
        página, con su fecha de actualización.
      </p>
    ),
  },
];

export default function MiPlanPrivacidadPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <p className="kicker text-sm">Mi Plan Sarenti</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight text-sarenti-ink sm:text-4xl">
          Aviso de privacidad
        </h1>
        <p className="mt-4 text-sm text-sarenti-ink/60">
          Última actualización: {actualizado}
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-sarenti-ink sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-sarenti-ink/80 [&_a]:text-sarenti-primary [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
