import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: async () => Date.now().toString(),
  async redirects() {
    return [
      // Ontdubbeling: de dunnere kosten-duplicate verwijst permanent (308) naar de
      // diepere, canonieke kosten-blog. Zie FASE 0/1 ontdubbel-plan.
      {
        source: "/blog/warmtepomp-kosten-2026-compleet-overzicht",
        destination: "/blog/warmtepomp-kosten-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
