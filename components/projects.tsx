import { Badge } from "@/components/ui/badge";
import { url } from "inspector";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { title } from "process";

const highlightProjects = [
  {
    title: "N8N Leads Scraper",
    description:
      "1000 Free Leads/Month - Automated lead generation system built with N8N workflows",
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
    url: "/projects/n8n-leads-scraper",
  },
  {
    title: "MarketFlow",
    description: "Discord bot for financial market analysis + SEC insights",
    tags: [
      "golang",
      "python",
      "discord",
      "openai",
      "deepseek",
      "edgar API",
      "alpaca",
    ],
    url: "/projects/marketflow",
  },
  {
    title: "Trump GPT",
    description:
      "AI chatbot using finetuned LLM to emulate conversational style",
    tags: [
      "$170K ATH marketcap",
      "solana",
      "memecoin",
      "machine learning",
      "ai finetuning",
      "react",
    ],
    url: "/projects/trump-gpt",
  },
  {
    title: "Chat with PDFs",
    description: "Interactive PDF chatbot using OpenAI API for document Q&A",
    tags: [
      "typescript",
      "pinecone",
      "role-based auth",
      "pdf parsing",
      "framer-motion",
      "tailwindcss",
    ],
    url: "/projects/chat-with-pdfs",
    github: "https://github.com/illyangz/chat-with-pdf",
  },
  {
    title: "Rusty Gas Prices",
    description:
      "Gas price monitoring and analysis system with location-based data retrieval, price trends visualization, and pattern detection across US cities",
    tags: ["rust", "graphql", "reqwest", "serde", "tokio", "data analysis"],
    url: "/projects/rusty-gas-prices",
  },
];

const otherProjects = [
  {
    title: "JB Painting Website",
    description: "Professional painting service website for JB Painting",
    tags: [
      "javascript",
      "typescript",
      "react",
      "tailwindcss",
      "railway",
      "postgresql",
    ],
    url: "https://jbpainting.us/",
  },
  {
    title: "XBotter CLI",
    description: "AI Twitter bot command-line interface with Twitter Auth V2",
    tags: ["node.js", "typescript", "javascript", "twitter auth v2"],
    github: "https://github.com/illyangz/xbotter",
    url: "https://xbotter.vercel.app",
  },

  {
    title: "Solana Token Aggregator CLI",
    description:
      "Command-line tool for aggregating Solana token launches and metrics",
    tags: [
      "golang",
      "typescript",
      "solana blockchain",
      "rest apis",
      "websockets",
    ],
  },

  //i want to add a link instead of the github for this one
  {
    title: "Nitr0 Typer",
    description:
      "a lightweight and fun typing test game designed to help users improve their typing speed and accuracy",
    tags: ["react", "typescript", "vite", "tailwindcss"],
    url: "https://nitr0-typer.vercel.app/",
  },
  {
    title: "CSV Parser",
    description: "Web-based CSV grapher and parser with data visualization",
    tags: ["react", "javascript", "nextjs", "tailwindcss", "vercel"],
    url: "https://csv-interpreter.vercel.app/",
  },
  {
    title: "Finetuning an LLM",
    description:
      "Custom language model training and optimization for object detection in images",
    tags: ["python", "ai", "machine learning", "llm", "jupyter"],
    github: "https://github.com/illyangz/cs-at-knox",
  },
  {
    title: "Pacman AI",
    description:
      "UC Berkley AI capstone project based on implementing game strategies with graph search algorithms",
    tags: [
      "python",

      "search",
      "reinforcement learning",
      "bayes nets",
      "markov",
      "q-learning",
    ],
    url: "https://inst.eecs.berkeley.edu/~cs188/fa24/projects/",
  },
  {
    title: "LinkTree Clone",
    description:
      "Personal link aggregation platform similar to LinkTree but my rendition with multiple themes and language support",
    tags: ["react", "nextjs", "tailwindcss", "typescript", "railway"],
    url: "https://hassanmango-links.up.railway.app",
  },
  {
    title: "TuneMate",
    description: "Music based dating app prototype",
    tags: ["react native", "expo", "javascript"],
  },
  {
    title: "TaskMaster",
    description: "Marketplace for outsourcing chores and tasks",
    tags: ["react", "firebase", "javascript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold">selected projects & tools</h2>

      {/* Highlights */}
      <div className="space-y-4">
        <h3 className="text-sm text-accent font-medium">highlights</h3>
        <div className="space-y-6">
          {highlightProjects.map((project, index) => (
            <div
              key={index}
              className="space-y-3 pb-6 border-b border-border last:border-0"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    {project.url && (
                      <Link
                        href={project.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-4">
        <h3 className="text-sm text-muted-foreground font-medium">
          other projects
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="space-y-3 p-4 rounded-lg border border-border hover:border-muted-foreground transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-sm">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    )}
                    {project.url && (
                      <Link
                        href={project.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
