import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Sparkles,
  Wrench,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";

const projectsData = {
  "n8n-leads-scraper": {
    title: "N8N Leads Scraper",
    subtitle: "Automated Google Maps Lead Scraping & Enrichment",
    description:
      "A high-performance N8N workflow for scraping and enriching business leads from Google Maps. Designed for speed, customization, and scale, with built-in enrichment and scoring.",
    image: "/n8ndemo.png",
    images: undefined,
    tags: [
      "node.js",
      "http",
      "n8n",
      "sheets",
      "automation",
      "scraping",
      "rapid-apis",
      "google-maps",
    ],
    liveUrl: "https://buy.stripe.com/fZucN6810fKnaEc5LyfnO03",
    techStack: [
      "N8N Automation",
      "RapidAPI (MapsData)",
      "Google Sheets Export",
      "HTTP / REST APIs",
      "Node.js",
    ],
    keyFeatures: [
      "1,000 free leads per month",
      "Google Maps business scraping",
      "Custom scoring & enrichment logic",
      "Custom pentesting scores according to lead's security posture and tech stack",
    ],
    devProcess: [
      "Optimized for fast batch scraping",
      "Supports 150+ countries",
      "Fully modular workflow",
      "Extensive testing & validation",
    ],
    sections: [
      {
        title: "Deep Customization at Your Fingertips",
        content: [
          "Choose your target location down to the city or zip code - Expandable Country Support with over 150 countries mapped",
          "Specify business categories that matter to you - Adaptable to ANY Business Niche",
          "Set review count and rating thresholds to filter quality leads - Quality Over Quantity",
          "Define pentesting score ranges to focus on high-potential targets - Targeted Cybersecurity Outreach",
          "Easily modify and expand the workflow to suit evolving needs - Evolve with Your Business",
        ],
      },
    ],
    features: [
      "Save Time and Effort",
      "Boost Outreach Effectiveness",
      "Scale Your Lead Generation",
    ],
  },
  "trump-gpt": {
    title: "Trump GPT",
    subtitle: "Memecoin Project - AI Powered Chat Experience",
    description:
      "An AI chat experience launched as a memecoin project & fine-tuned on Donald Trump’s communication style, enabling real-time, character-accurate conversations.",
    image: "/trumpgptsolscan.jpeg",
    images: undefined,
    tags: [
      "$170K ATH marketcap",
      "solana",
      "memecoin",
      "machine learning",
      "ai finetuning",
      "react",
    ],
    liveUrl: "https://www.trumpgpt.meme/",
    techStack: ["Next.js & React", "Node.js & Express", "OpenAI API"],
    keyFeatures: [
      "Dynamic response generation",
      "Context-aware conversations",
      "Mobile-responsive design",
    ],
    devProcess: [
      "Iterative prompt engineering",
      "Character consistency testing",
      "Latency & performance optimization",
    ],
    sections: [
      {
        title: "AI Personality",
        content: [
          "The AI is carefully trained to replicate Trump's unique communication style, including his signature phrases, speech patterns, and tweet format. It understands context and can engage in conversations while maintaining character authenticity.",
        ],
      },
    ],
    features: ["Advanced prompt engineering", "Fast response times"],
  },
  "chat-with-pdfs": {
    title: "Chat with PDFs",
    subtitle: "AI-Powered Document Analysis",
    description:
      "Name is self-explanatory; it's like ChatGPT or Claude, but formatted on documents, PDFs, text files, markdown, etc. Chat with PDFs allows you to have intelligent conversations with your documents using AI.",
    image: "/chatwithpdfsdemo.mp4",
    images: undefined,
    tags: [
      "typescript",
      "pinecone",
      "role-based auth",
      "pdf parsing",
      "framer-motion",
      "tailwindcss",
    ],
    liveUrl: "https://github.com/illyangz/chat-with-pdf",
    techStack: [
      "TypeScript",
      "Next.js & React",
      "Pinecone Vector DB",
      "Clerk Authentication",
      "TailwindCSS",
    ],
    keyFeatures: [
      "Supports multiple document formats",
      "Accurate language parsing",
      "Optimized for responsive, cost-effective performance",
      "LTR & RTL text support",
    ],
    devProcess: [
      "Implemented vector-based retrieval with Pinecone",
      "Optimized OpenAI API usage for cost efficiency",
      "Handled bidirectional text and Arabic shaping",
      "Built role-based authentication flows",
      "Used fonts designed for multilingual support",
      "Ensured all text elements had the correct dir attribute",
    ],
    sections: [
      {
        title: "Development Challenges",
        content: [
          "My biggest challenge was how to make this cost-effective for me. I wanted to make this service free but I had to pay for OpenAI. I ended up figuring out the best package for OpenAI's API plan for my personal use.",
          "Formatting the text correctly was another major challenge, especially for right-to-left languages like Arabic.",
        ],
      },
      {
        title: "Letter Formatting Implementation",
        content: [
          "Character Shaping (Contextual Forms): Arabic requires shaping letters based on their position within a word",
          "Bidirectional (Bidi) Text Handling: Mixed LTR and RTL text needs proper Unicode and CSS properties",
        ],
      },
    ],
    features: [
      "Vector-based document querying",
      "Multilingual text handling",
      "Cost-optimized inference",
      "Secure user access",
    ],
  },
  marketflow: {
    title: "MarketFlow",
    subtitle: "Financial Data Monitoring & Analysis",
    description:
      "A Discord server dedicated to financial data monitoring and analysis. MarketFlow scans market data in real-time to provide insights and facilitate informed financial discussions within our community.",
    image: "/MarketFlow.jpeg",
    images: undefined,
    tags: [
      "golang",
      "python",
      "discord",
      "openai",
      "deepseek",
      "edgar API",
      "alpaca",
    ],
    liveUrl: "https://mf-frontend-production.up.railway.app/",
    techStack: [
      "Go & Python Backend",
      "React & TypeScript Frontend",
      "Discord Integration",
      "Multiple Financial APIs",
    ],
    keyFeatures: [
      "Market data scanning and monitoring",
      "AI-powered market insights and trend analysis",
      "Custom alerts for significant market movements",
      "Community-driven discussion channels",
      "Congress Member Tracker with trade lookups and notifications",
    ],
    devProcess: [
      "Learned Go while building production services",
      "Reverse-engineered financial APIs",
      "Built real-time data pipelines",
      "Monitoring dashboard for system health",
    ],
    sections: [
      {
        title: "AI Integration",
        content: [
          "Using AI to explain what the insights mean to a newbie",
          "AI also pulls and generates news sentiment",
        ],
      },
      {
        title: "Thinking Process",
        content: [
          "Some challenges faced included having to learn Go while building this and working on Python license. However, it actually helped reverse engineer APIs and improve data handling with live streaming and time series data.",
        ],
      },
    ],
    features: [
      "Candlestick charting",
      "Custom news feeds",
      "Websocket powered data streaming",
    ],
  },
  "rusty-gas-prices": {
    title: "Rusty Gas Prices",
    subtitle: "Gas Price Monitoring & Pattern Analysis System",
    description:
      "I was speaking with a friend about having some kind of app to monitor gas prices throughout the year, but moreso throughout shorter time periods, study their patterns in hopes of analyzing gas prices across locations. And I took matters into my own hands to get my friends their optimal gas stations after reading a reddit thread of how someone programmed their home assistant to monitor gas prices.",
    image: "/rusty-prices.mp4",
    images: undefined,
    tags: ["rust", "graphql", "reqwest", "serde", "tokio", "data analysis"],
    liveUrl: undefined,
    techStack: [
      "Rust",
      "GraphQL",
      "Reqwest HTTP Client",
      "Serde JSON Parsing",
      "Tokio Async Runtime",
    ],
    keyFeatures: [
      "Real-time gas price monitoring across US locations",
      "Location-based retrieval with zipcode support",
      "Fuel type comparison (cash vs credit pricing)",
      "Home assistant integration with visual alerts",
    ],
    devProcess: [
      "Nationwide gas price aggregation",
      "Pattern detection and forecasting",
      "Handled large JSON datasets",
      "Implemented efficient location-based queries to fetch gas station information",
      "Preparing native app integration",
    ],
    sections: [
      {
        title: "Challenges",
        content: [
          "Handling complex API responses and identifying reliable fuel price data",
          "Started with small cities in IL, expanded to support any city in the USA or valid zipcode",
        ],
      },
      {
        title: "Data Analysis",
        content: [
          "Home assistant integration with visual alerts (green for cheap, red for expensive)",
          "Pattern detection to forecast future prices",
          "Price analysis for cheapest and most expensive stations",
        ],
      },
    ],
    features: [
      "Price & location polling",
      "Nearly 2GB of structured storage",
      "Zip code-based queries",
    ],
  },
  "global-countries-quiz": {
    title: "Global Countries Quiz",
    subtitle: "Test Your Knowledge of World Geography in 15 Minutes!",
    description:
      "A fun and interactive quiz app that challenges users to identify countries from around the world. Test your geography knowledge with timed challenges and compete on the global leaderboard.",
    image: "/CountriesQuiz.jpeg",
    images: ["/CountriesQuiz.jpeg", "/CountriesQuiz(1).jpeg"],
    tags: [
      "react",
      "typescript",
      "nextjs",
      "railway",
      "postgresql",
      "tailwindcss",
      "framer-motion",
    ],
    liveUrl: "https://globalcountriesquiz.up.railway.app/",
    techStack: [
      "React & Next.js",
      "TypeScript",
      "PostgreSQL",
      "TailwindCSS",
      "Framer Motion",
    ],
    keyFeatures: [
      "Timed geography quiz",
      "Global leaderboard",
      "Over 200 countries & territories",
      "Custom SVG map",
      "Show answers feature",
    ],
    devProcess: [
      "Smooth animation focus",
      "Efficient state management",
      "Performance tuning",
      "Database schema design for difficulties and scores",
    ],
    sections: [],
    features: [
      "Engaging geography quiz",
      "Leaderboard features",
      "Responsive design",
    ],
  },
  leadsouq: {
    title: "LeadSouq",
    subtitle: "AI-Powered B2B Lead Generation Platform",
    description:
      "LeadSouq is an AI-driven B2B lead generation platform that provides businesses with access to over 34 million business profiles.",
    image: "/leadsouqdemo-compressed.mp4",
    images: undefined,
    tags: [
      "golang",
      "typescript",
      "nextjs",
      "railway",
      "scylladb",
      "redis",
      "tailwindcss",
      "framer-motion",
    ],
    liveUrl: undefined,
    techStack: [
      "Golang",
      "Redis",
      "ScyllaDB",
      "Next.js & TypeScript",
      "TailwindCSS",
      "Railway",
    ],
    keyFeatures: [
      "34M+ business profiles",
      "AI-driven lead scoring",
      "Customizable search",
      "Credit based system for lead access and export",
      "User-friendly dashboard",
      "Middle East and North Africa regional focus",
    ],
    devProcess: [
      "Scalable Go backend architecture",
      // something about api design
      "API design and implementation",
      "High-performance ScyllaDB modeling",
      "AI-powered lead scoring pipeline",
    ],
    sections: [],
    features: [
      "Multi-tiered scrapers",
      "Redis-based caching layer",
      "Real-time enrichment",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          back to home
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              {project.subtitle}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Media */}
        <div className="rounded-xl overflow-hidden border border-border bg-muted/20 p-2 md:p-3">
          {project.images ? (
            <div className="space-y-6">
              {project.images.map((media, index) =>
                media.endsWith(".mp4") ? (
                  <video
                    key={index}
                    src={media}
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full rounded-lg"
                  />
                ) : (
                  <img
                    key={index}
                    src={media}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                ),
              )}
            </div>
          ) : project.image?.endsWith(".mp4") ? (
            <video
              src={project.image}
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg"
            />
          )}
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Bento Grid */}
        <div className="space-y-2 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tech Stack (left) */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-5 space-y-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent" />
                <h3 className="text-base font-semibold tracking-tight">
                  Tech Stack
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-[-1]">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features (center, emphasized - spans 2 cols) */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-5 space-y-4 md:col-span-2 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="text-base font-semibold tracking-tight">
                  Key Attributes
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-[-1]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dev Process (spans 2 cols) */}
            <div className="md:col-span-2 rounded-xl border border-border/60 bg-muted/30 p-5 space-y-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-accent" />
                <h3 className="text-base font-semibold tracking-tight">
                  Development Process
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.devProcess.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-[-1]">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features (spans 1 col) */}
            {project.features && project.features.length > 0 && (
              <div className="rounded-xl border border-border/60 bg-muted/30 p-5 space-y-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <h3 className="text-base font-semibold tracking-tight">
                    Core Features
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-[-1]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Additional Sections (if any) */}
        {project.sections.length > 0 && (
          <div className="space-y-10 pt-4">
            {project.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl font-bold">{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {project.liveUrl && (
          <div className="flex justify-center pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-accent-foreground rounded-lg transition-colors font-medium bg-accent hover:bg-accent/90 text-lg"
            >
              Check It Out <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </main>
      <footer className="max-w-3xl mx-auto px-6">
        <Contact />
      </footer>
    </div>
  );
}
