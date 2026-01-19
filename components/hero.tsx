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
          {/* i want to put another way to  say active on the web not based in spain*/}
          usually active on the web 🌐
        </p>
      </div>

      <p className="text-foreground/90 leading-relaxed text-pretty max-w-2xl whitespace-pre-line">
        {
          "I'm a Knox College Men's Soccer Alumni with a B.S. in Computer Science and a minor in Finance."
        }
      </p>
      <p className="text-foreground/90 leading-relaxed text-pretty max-w-2xl whitespace-pre-line">
        I enjoy building scalable software solutions and exploring the latest in
        AI technologies. Ranked 4th globally on Coding Kattis for my solution to
        DragonMaid.py & I'm working on my leetcode skills in{" "}
        <a href="https://golang.org" target="_blank">
          <svg
            viewBox="0 0 207 78"
            className="inline w-8 h-8 align-middle mt-auto text-foreground group-hover:text-accent transition-colors"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="m16.2 24.1c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6z" />
              <path d="m1.1 33.3c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6z" />
              <path d="m25.3 42.5c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7z" />
              <g transform="translate(55)">
                <path d="m74.1 22.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7-3.6 0-8.1 0-19.3 0-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7z" />
                <path
                  d="m107.2 77.6c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1z"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </svg>
        </a>
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
