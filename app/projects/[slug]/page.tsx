import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";

const projectsData = {
  "n8n-leads-scraper": {
    title: "N8N Leads Scraper",
    subtitle:
      "Unlock a Flood of Perfect Leads: Supercharge Your Outreach with N8N Leads On Steroids!",
    description:
      "Imagine generating 1000 free leads every single month, tailored to your exact needs, and ready for action. What if this powerful lead generation system was incredibly fast, ridiculously easy to set up, and infinitely customizable? Stop dreaming, start doing. This N8N workflow generates leads on steroids – the ultimate lead scraping and enrichment workflow.",
    image: "/n8ndemo.png",
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
    sections: [
      {
        title: "What kinds of leads can you generate?",
        content: [
          "Businesses from Google Maps based on your search criteria",
          "Enriched with websites, contact info, social media links",
          "Additional data like ratings, reviews, and more",
          "Custom pentesting scores and security opportunity levels",
          "Limits and Usage: 1000 Free Requests with a RapidApi MapsData API Key",
        ],
      },
      {
        title: "Get Your Competitive Edge for Just $49.99!",
        content: [
          "One-time purchase of $49.99 for the complete N8N workflow",
          "Instant download of the JSON file to import into your N8N instance",
          "Unlimited use – generate as many leads as you need, whenever you want",
          "Free updates – get access to any improvements or new features added in the future",
          "Dedicated support – help to get the most out of your workflow",
        ],
      },
      {
        title: "Leads on Steroids pt.1",
        content: [
          "This workflow is built for speed. Getting crucial business data like websites, business names, addresses, ratings, reviews, and even pentesting scores.",
          'Integrated custom logic that analyzes each business and assigns a "pentesting score" and "security opportunity" level. Identify high-priority cybersecurity leads with unprecedented accuracy.',
        ],
      },
      {
        title: "Leads on Steroids pt.2",
        content: [
          "Beyond basic lead scraping, this workflow enriches your leads with valuable data points like website URLs, contact info, social media links, and more. This means you get a comprehensive view of each prospect right from the start.",
          "The best part? It's fully customizable. Tailor the workflow to fit your unique lead generation needs and watch your outreach efforts skyrocket.",
        ],
      },
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
      "Save Time and Effort: Automate the tedious process of lead scraping and enrichment",
      "Boost Outreach Effectiveness: Get high-quality, enriched leads that convert better",
      "Stay Ahead of the Competition: Leverage advanced filtering and scoring to target the best prospects",
      "Scale Your Lead Generation: Easily adjust parameters to ramp up lead volume as needed",
    ],
  },
  "trump-gpt": {
    title: "Trump GPT",
    subtitle: "Memecoin Project - AI Powered Chat Experience",
    description:
      "An AI powered and fine tuned on Donald Trump tweets that uses advanced language models to create authentic and interesting conversations. Engage in real-time conversations with an AI that captures Trump's unique communication style and personality.",
    image: "/trumpgptsolscan.jpeg",
    tags: [
      "$170K ATH marketcap",
      "solana",
      "memecoin",
      "machine learning",
      "ai finetuning",
      "react",
    ],
    liveUrl: "https://www.trumpgpt.meme/",
    sections: [
      {
        title: "Advanced Tech Stack",
        content: [
          "Next.js & React for frontend",
          "Node.js & Express backend",
          "OpenAI GPT-4 Integration",
          "TailwindCSS for styling",
          "Vercel for deployment",
        ],
      },
      {
        title: "Key Features",
        content: [
          "Real-time conversation with Trump AI",
          "Dynamic response generation",
          "Character-accurate interactions",
          "Mobile-responsive design",
          "Fast response times",
        ],
      },
      {
        title: "AI Personality",
        content: [
          "The AI is carefully tuned to replicate Trump's unique communication style, including his signature phrases, speech patterns, and tweet format. It understands context and can engage in conversations while maintaining character authenticity.",
        ],
      },
      {
        title: "Development Process",
        content: [
          "Trump GPT was built to provide an entertaining and interactive AI experience that captures Donald Trump's unique communication style. The system was developed iteratively, focusing on fine-tuning the AI responses to match Trump's characteristic patterns, phrases, and mannerisms.",
        ],
      },
    ],
    features: [
      "Advanced prompt engineering to capture Trump's speaking style",
      "Real-time response generation using GPT-4",
      "Context-aware conversations that maintain character consistency",
      "User-friendly interface for natural interactions",
    ],
  },
  "chat-with-pdfs": {
    title: "Chat with PDFs",
    subtitle: "AI-Powered Document Analysis",
    description:
      "Name is self-explanatory; it's like ChatGPT or Claude, but formatted on documents, PDFs, text files, markdown, etc. Chat with PDFs allows you to have intelligent conversations with your documents using AI.",
    image: "/chatwithpdfsdemo.mp4",
    tags: [
      "typescript",
      "pinecone",
      "role-based auth",
      "pdf parsing",
      "framer-motion",
      "tailwindcss",
    ],
    liveUrl: "https://github.com/illyangz/chat-with-pdf",
    sections: [
      {
        title: "Tech Stack",
        content: [
          "Framer-Motion, TypeScript, TailwindCSS",
          "OpenAI API Integration",
          "Pinecone Vectorization",
          "Vercel for hosting, Clerk for authentication",
        ],
      },
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
          "Direction Attribute: Ensured all text elements had the correct dir attribute",
          "Font Selection: Chose fonts designed for multilingual support",
        ],
      },
    ],
    features: [
      "Supports LTR and RTL text with precise letter shaping",
      "Context-aware responses powered by OpenAI and Pinecone",
      "Supports multiple document formats",
      "Accurate language parsing",
      "Optimized for responsive, cost-effective performance",
    ],
  },
  marketflow: {
    title: "MarketFlow",
    subtitle: "Financial Data Monitoring & Analysis",
    description:
      "A Discord server dedicated to financial data monitoring and analysis. MarketFlow scans market data in real-time to provide insights and facilitate informed financial discussions within our community.",
    image: "/MarketFlow.jpeg",
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
    sections: [
      {
        title: "Tech Stack",
        content: [
          "Backend: Go, Python",
          "Frontend: HTML, React, Typescript",
          "Discord packages",
          "Multiple financial APIs, monitors and scrapers",
        ],
      },
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
      {
        title: "Development Process",
        content: [
          "The development focuses on creating efficient data pipelines and meaningful visualizations to help users understand market trends and movements.",
          "Created a congress member trading tracker with a dashboard for monitor health and status checks.",
          "Slash commands for stock ticker lookups, which chart candlesticks on demand.",
          "News feed for administered events, tickers, political members, companies.",
        ],
      },
    ],
    features: [
      "Real-time market data scanning and monitoring",
      "AI-powered market insights and trend analysis",
      "Custom alerts for significant market movements",
      "Community-driven discussion channels",
      "Congress Member Tracker with trade lookups and notifications",
    ],
  },
  "rusty-gas-prices": {
    title: "Rusty Gas Prices",
    subtitle: "Gas Price Monitoring & Pattern Analysis System",
    description:
      "I was speaking with a friend about having some kind of app to monitor gas prices throughout the year, but moreso throughout shorter time periods, study their patterns in hopes of analyzing gas prices across locations. And I took matters into my own hands to get my friends their optimum gas stations after reading a reddit thread of how someone programmed their home assistant to monitor gas prices.",
    image: "/rusty-prices.mp4",
    tags: ["rust", "graphql", "reqwest", "serde", "tokio", "data analysis"],
    liveUrl: undefined,
    sections: [
      {
        title: "Tech Stack",
        content: [
          "Rust programming language for performance and safety",
          "Reqwest HTTP Client for API requests",
          "GraphQL API with Apollo Server",
          "Serde for JSON parsing",
          "Tokio for asynchronous runtime",
          "GasBuddy API integration",
        ],
      },
      {
        title: "Challenges",
        content: [
          "Handling complex API responses and identifying reliable fuel price data",
          "Managing large JSON structures across multiple cities",
          "Started with small cities in IL, expanded to support any city in the USA or valid zipcode",
          "Built to be compatible with any valid US zipcode",
          "Nearly 2GB of storage required for the project data",
        ],
      },
      {
        title: "API Integration",
        content: [
          "Set up GraphQL API using Apollo Server to integrate with GasBuddy API",
          "Fetches gas station data based on user searches",
          "Created functions to parse payload for better user understanding",
          "Built comparison functions for analyzing gas station statistics",
        ],
      },
      {
        title: "Data Analysis",
        content: [
          "Home assistant integration with visual alerts (green for cheap, red for expensive)",
          "Pattern detection to forecast future prices",
          "Location-based gas station data retrieval",
          "Price analysis for cheapest and most expensive stations",
          "Fuel type categorization (cash and credit)",
          "Trends visualization and insights",
        ],
      },
      {
        title: "Technical Decisions",
        content: [
          "Leveraged Rust for strong type safety and efficient performance in networked applications",
          "Used Reqwest for HTTP requests and Serde for JSON handling",
          "Defined GasStation schema with fields like name, address, and price",
          "Resolvers process search parameters like location or fuel type",
          "Streamlined retrieval of precise, filtered gas station information through structured GraphQL queries",
        ],
      },
      {
        title: "Development Process",
        content: [
          "Built using Rust for performance and safety",
          "Scraper utilizes the GasBuddy GraphQL API to fetch and process gas price data efficiently",
          "Working on converting to a native app due to storage requirements",
          "Future plans include enhanced pattern detection and predictive analytics",
        ],
      },
    ],
    features: [
      "Real-time gas price monitoring across US locations",
      "Smart pattern detection for price forecasting",
      "Location-based retrieval with zipcode support",
      "Fuel type comparison (cash vs credit pricing)",
      "Home assistant integration with visual alerts",
      "Comprehensive data analysis and visualization",
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
          <div className="space-y-4">
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

          {/* CTA Button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-accent-foreground rounded-lg transition-colors font-medium bg-accent hover:bg-accent/90 text-lg"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Image/Video */}
        <div className="rounded-lg overflow-hidden border border-border">
          {project.image?.endsWith(".mp4") ? (
            <video
              src={project.image}
              controls
              autoPlay
              loop
              muted
              className="w-full"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full"
            />
          )}
        </div>

        {/* Description */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {project.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground leading-relaxed flex gap-3"
                  >
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core Features */}
        {project.features && (
          <div className="space-y-4 p-6 rounded-lg border border-border bg-muted/30">
            <h2 className="text-2xl font-bold">Core Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-muted-foreground leading-relaxed flex gap-3"
                >
                  <span className="text-accent mt-1.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button Bottom */}
        {project.liveUrl && (
          <div className="flex justify-center pt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-lg"
            >
              Visit Project
              <ExternalLink className="w-5 h-5" />
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
