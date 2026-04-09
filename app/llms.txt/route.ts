export const dynamic = "force-static";

export function GET() {
  const content = `# Hassan Mango

> Forward Deployed Engineer & Solutions Architect at Prairie Shields Tech. Knox College alum — B.S. Computer Science, minor in Finance. Italian-Jordanian.

## About

Hassan Mango is a software engineer based on the web. He builds scalable software and AI-driven projects. Ranked 4th globally on Coding Kattis for DragonMaid.py. Currently sharpening skills in Go.

Hobbies: food tours, working out, mixing music, soccer (Knox College Men's Soccer alum).

## Work Experience

- **Prairie Shields Tech** — Forward Deployed Engineer & Solutions Architect (2025–present)
- **JB Painting** — Frontend Developer & Painter (2024–2025)
- **Wajeez** — Full Stack Developer Intern (2022–2023)
- **Clear Profits DM** — Web Developer (2021–2022)
- **Freelance** — Web Developer & Designer (2020–2021)
- **IBM** — Data Scientist Intern (2019)

## Projects

- **LeadSouq** — Lead generation platform
- **n8n Leads Scraper** — Automated scraping workflow with n8n
- **TrumpGPT** — GPT-powered chatbot
- **Chat with PDFs** — RAG-based PDF chat app
- **MarketFlow** — Market data visualization tool
- **Rusty Gas Prices** — Gas price tracker built in Rust
- **Global Countries Quiz** — Geography quiz app

## Links

- Website: https://hassanmango.website
- Resume: https://hassanmango.website/docs/CVHassanMango.pdf
- Music: https://hassanmango.website/music
- Sitemap: https://hassanmango.website/sitemap.xml
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
