import { ArrowUpRight } from "lucide-react";

const workExperience = [
  {
    company: "Prairie Shields Tech",
    role: "Forward Deployed Engineer & Solutions Architect (2025)",
    period: "current",
    url: "https://www.prairieshieldstech.com/",
  },
  {
    company: "JB Painting",
    role: "Frontend Developer & Painter (2024-2025)",
    period: "previous",
    url: "https://jbpainting.us/",
  },
  {
    company: "Wajeez",
    role: "Full Stack Developer Intern (2022-2023)",
    period: "previous",
    url: "https://wajeez.com/",
  },
  {
    company: "Clear Profits DM",
    role: "Web Developer (2021-2022)",
    period: "previous",
    url: "https://clearprofitsdm.com/",
  },
  {
    company: "Freelance",
    role: "Web Developer + Designer (2020-2021)",
    period: "previous",
  },
  {
    company: "IBM",
    role: "Data Scientist Intern (2019)",
    period: "previous",
    url: "https://ibm.com",
  },
];

export function Work() {
  return (
    <section id="work" className="space-y-6">
      <h2 className="text-2xl font-bold">work</h2>

      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <a
            key={index}
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block space-y-1 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{job.company}</h3>
                  {/* if there's a url, show the arrow up..  */}
                  {job.url && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{job.role}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                {job.period}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-4">
        <a
          href="/docs/CVHassanMango.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          View My Resume
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
