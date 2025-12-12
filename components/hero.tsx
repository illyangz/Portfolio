"use client";

import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-balance">{"Hassan Mango"}</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          🇮🇹|🇯🇴 forward deployed engineer & solutions architect{" "}
          <a
            className="hover:underline hover:text-accent bitcount-prop-single-pst"
            target="_blank"
            href="https://www.prairieshieldstech.com/"
          >
            @PST
          </a>
        </p>
        <p className="text-muted-foreground text-sm">
          based in barcelona, spain 🇪🇸
        </p>
      </div>

      <p className="text-foreground/90 leading-relaxed text-pretty max-w-2xl whitespace-pre-line">
        {
          "Knox College Men's Soccer Alumni with a B.S. in Computer Science and a minor in Finance."
        }
      </p>
      <p className="text-foreground/90 leading-relaxed text-pretty max-w-2xl whitespace-pre-line">
        I enjoy building scalable software solutions and exploring the latest in
        AI technologies. Ranked 4th globally on Coding Kattis for my solution to
        DragonMaid.py.
      </p>

      <p>
        Aside from coding, my hobbies are going on food tours, working out,
        mixing music 🕺🏻 and hitting insane knuckleballs. Below is one of my best
        golazos to date!
      </p>

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
        <div>
          {/* fix mp4 on mobile, let it autoplay and make it slightly bigger on mobile  */}
          <video
            src="/golazo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg border border-muted-foreground/10 mt-14 w-full sm:max-w-full mx-auto sm:rounded-xl  "
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
