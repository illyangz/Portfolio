import { Mail, Github, Linkedin, XCircleIcon, Coffee } from "lucide-react";
import { RiInstagramLine, RiSoundcloudLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="space-y-6 pb-12">
      <h2 className="text-2xl font-bold">say hello</h2>

      <p className="text-muted-foreground leading-relaxed max-w-xl">
        {
          "I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to work together or just want to chat."
        }
      </p>

      <div className="flex flex-col gap-3 text-sm">
        <a
          href="https://buymeacoffee.com/hassanmango"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
        >
          <Image
            src="/Taco Icon.png"
            alt="Buy me a taco"
            width={16}
            height={16}
            className="object-contain"
          />

          <span className="group-hover:underline">Buy me a 🌮</span>
        </a>
        <a
          href="mailto:hmango77@gmail.com"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
        >
          <Mail className="w-4 h-4" />
          <span className="group-hover:underline">hmango77@gmail.com</span>
        </a>
        <a
          href="https://github.com/illyangz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
        >
          <Github className="w-5 h-5" />
          <span className="group-hover:underline">github.com/illyangz</span>
        </a>
        <a
          href="https://www.linkedin.com/in/hassan-mango/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
        >
          <Linkedin className="w-4 h-4" />
          <span className="group-hover:underline">
            linkedin.com/in/hassan-mango
          </span>
        </a>

        <a
          href="https://soundcloud.com/yangzog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:text-accent hover:underline"
        >
          <RiSoundcloudLine className="w-4 h-4" />
          soundcloud.com/yangzog
        </a>
        <a
          href="https://www.instagram.com/hassannmango/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:text-accent hover:underline"
        >
          <RiInstagramLine className="w-4 h-4" />
          instagram.com/hassannmango
        </a>
        <a
          href="https://x.com/illyangz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:text-accent hover:underline"
        >
          <FaXTwitter className="w-4 h-4" />
          x.com/illyangz
        </a>
      </div>

      <div className="pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Made by 🥭 © {new Date().getFullYear()} Hassan Mango
        </p>
      </div>
    </section>
  );
}
