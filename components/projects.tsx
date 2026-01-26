import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import {
  highlightProjects as defaultHighlights,
  otherProjects as defaultOthers,
} from "@/lib/data";

interface ProjectsProps {
  variant?: "default" | "grid";
  className?: string;
  highlights?: typeof defaultHighlights;
  others?: typeof defaultOthers;
}

export function Projects({
  variant = "default",
  className,
  highlights = defaultHighlights,
  others = defaultOthers,
}: ProjectsProps) {
  if (variant === "grid") {
    return (
      <section id="projects" className={`space-y-12 ${className}`}>
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            A curated collection of scalable systems, AI experiments, and
            full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      {project.url && (
                        <Link
                          href={project.url}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-white/5 hover:bg-white/10 text-xs border-transparent"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="bg-white/5 text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-2xl font-bold">selected projects & tools</h2>

      {/* Highlights */}
      <div className="space-y-4">
        <h3 className="text-sm text-accent font-medium">highlights</h3>
        <div className="space-y-6">
          {highlights.map((project, index) => (
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
          {others.map((project, index) => (
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
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          currently tinkering with:
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">typescript</Badge>
          <Badge variant="secondary">javascript</Badge>
          <Badge variant="secondary">react</Badge>
          <Badge variant="secondary">next.js</Badge>
          <Badge variant="secondary">tailwindcss</Badge>
          <Badge variant="secondary">postgresql</Badge>
          <Badge variant="secondary">react native</Badge>
          <Badge variant="secondary">expo go</Badge>
          <Badge variant="secondary">node.js</Badge>
          <Badge variant="secondary">python</Badge>
          <Badge variant="secondary">golang</Badge>
          <Badge variant="secondary">rust</Badge>
          <Badge variant="secondary">mcps</Badge>
          <Badge variant="secondary">claude</Badge>
          <Badge variant="secondary">railway</Badge>
        </div>
      </div>
    </section>
  );
}
