This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

Configureer de volgende variabelen in `.env.local` (lokaal) en in de Vercel project settings (productie):

- `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` — Google Analytics 4 measurement ID. Aanmaken via [Google Analytics](https://analytics.google.com/) → Admin → Data streams.
- `NEXT_PUBLIC_WHATSAPP_NUMBER=31613818383` — WhatsApp-nummer (incl. landcode, zonder `+` of `00`) voor de WhatsApp-knop.
- `NEXT_PUBLIC_BING_VERIFICATION=...` — Verificatiecode voor Bing Webmaster Tools. Aanmaken via [Bing Webmaster Tools](https://www.bing.com/webmasters) → site toevoegen → meta tag-verificatie, alleen de `content`-waarde overnemen.
- `RESEND_API_KEY=re_...` — API key voor [Resend](https://resend.com/) (verzenden van bevestigings- en notificatiemails).
- `ANTHROPIC_API_KEY=sk-ant-...` — API key voor de Anthropic API (genereren van persoonlijk AI-advies bij nieuwe leads).
- `INDEXNOW_KEY=...` — Willekeurige 32-tekens hexadecimale sleutel voor [IndexNow](https://www.indexnow.org/). Moet exact overeenkomen met de bestandsnaam `public/<key>.txt`.

Nadat `NEXT_PUBLIC_GA_ID` en `NEXT_PUBLIC_BING_VERIFICATION` zijn ingevuld met echte waarden, opnieuw deployen zodat de wijzigingen live komen.
