"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("./components/LargeComponent"),
  {
    ssr: false,
    loading: () => <p>Cargando componente...</p>,
  }
);

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Bienvenido</h1>
      <Image
        src="/images/seo-image.png"
        width={400}
        height={200}
        alt="Ejemplo de imagen optimizada"
        priority
      />
      <DynamicComponent />

      <h2 style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>sans-serif</code> (Inter)
      </h2>

      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
        Texto global con fuente Inter (debería verse distinta)
      </h2>

      <h2 style={{ fontFamily: "serif", fontSize: "24px", fontWeight: "bold" }}>
        Texto con <code>serif</code> (fuente con serifas)
      </h2>
    </main>
  );
}
