"use client";

import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "not-prose flex w-full flex-col overflow-clip border my-3 ",
        "border-border bg-background text-foreground rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type CodeBlockCodeProps = {
  code: string;
  language?: string;
  theme?: string;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlockCode({
  code,
  language = "tsx",
  className,
  ...props
}: CodeBlockCodeProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);
  const { theme: currentSiteTheme } = useTheme();
  const dynamicTheme =
    currentSiteTheme === "dark" ? "github-dark" : "github-light";

  useEffect(() => {
    async function highlight() {
      if (!code) {
        setHighlightedHtml("<pre><code></code></pre>");
        return;
      }

      const html = await codeToHtml(code, {
        lang: language,
        theme: dynamicTheme,
      });
      setHighlightedHtml(html);
    }
    highlight();
  }, [code, language, dynamicTheme]);

  const classNames = cn("w-full overflow-x-auto text-[13px]", className);

  // Copy to clipboard handler
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className={classNames} {...props}>
      <div className="flex items-center justify-between px-4 py-2.5 ">
        <span className="text-xs font-mono text-muted-foreground bg-muted/60 rounded px-2 py-0.5">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-transparent  transition-colors  ml-2"
        >
          {copied ? (
            <Check className="size-4 text-green-600" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      {highlightedHtml ? (
        <div
          dangerouslySetInnerHTML={{
            __html: highlightedHtml
              .replace(/style="[^"]*background[^"]*"/g, 'style=""')
              .replace(
                /<pre[^>]*>/g,
                '<pre style="margin: 0; padding: 0; background: transparent !important;">'
              ),
          }}
          className="p-3 bg-muted/30 [&_pre]:!bg-transparent [&_code]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0"
        />
      ) : (
        <pre className="p-3 bg-muted/30 m-0">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>;

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { CodeBlockGroup, CodeBlockCode, CodeBlock };
