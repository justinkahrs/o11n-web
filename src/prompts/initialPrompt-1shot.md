<file_map>
/Volumes/External/Users/justin/Projects/o11n-web
├── public
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── src
│ └── app
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.module.css
│ └── page.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json

<Complete Definitions>
Path: /Volumes/External/Users/justin/Projects/o11n-web/next.config.ts

---

Classes:
Class: next.config
Properties: - const nextConfig: NextConfig = {

---

</Complete Definitions>
</file_map>

<file_contents>
File: src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

File: package.json

```json
{
  "name": "o11n-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^7.0.1",
    "@mui/material": "^7.0.1",
    "framer-motion": "^12.6.3",
    "lenis": "^1.2.3",
    "next": "15.2.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "split-type": "^0.3.4"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.2.4",
    "typescript": "^5"
  }
}
```

File: src/app/page.tsx

```tsx
"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.logo}>o11n</h1>
          <h2 className={styles.headline}>Orchestrate your code. Just vibe.</h2>
          <p className={styles.subheadline}>
            Talk to AI. Let it build. You stay in flow.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Get Early Access</button>
            <button className={styles.secondaryButton}>See It in Action</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <Image
              src="/file.svg"
              alt="Pick a project icon"
              width={64}
              height={64}
            />
            <h3>Pick a project</h3>
            <p>Choose any existing codebase or start a new one.</p>
          </div>
          <div className={styles.step}>
            <Image
              src="/globe.svg"
              alt="Say what you want icon"
              width={64}
              height={64}
            />
            <h3>Say what you want</h3>
            <p>
              Explain your changes in plain English. Let AI handle the rest.
            </p>
          </div>
          <div className={styles.step}>
            <Image
              src="/window.svg"
              alt="o11n makes the change icon"
              width={64}
              height={64}
            />
            <h3>o11n makes the change</h3>
            <p>We orchestrate the code, so you can keep vibing.</p>
          </div>
        </div>
      </section>

      {/* Use Cases / Value Prop */}
      <section className={styles.useCases}>
        <h2 className={styles.sectionTitle}>What It’s For</h2>
        <p className={styles.sectionText}>
          o11n is for non-coders, baby devs, creative weirdos, and anyone who
          just wants to build.
        </p>
        <ul className={styles.bullets}>
          <li>Building side projects without deep coding knowledge</li>
          <li>Fixing bugs you don’t understand</li>
          <li>Writing long-form content with context tracking</li>
          <li>Making changes to existing software quickly</li>
        </ul>
      </section>

      {/* Personalization Section */}
      <section className={styles.personalization}>
        <h2 className={styles.sectionTitle}>Personalization = Vibes</h2>
        <p className={styles.sectionText}>
          Make o11n your own. Choose your theme, color palette, and let the AI
          do the rest.
        </p>
        <ul className={styles.bullets}>
          <li>Custom themes and colors</li>
          <li>Dark mode by default</li>
          <li>Works with your folder/file structure</li>
          <li>More like chatting than coding</li>
        </ul>
      </section>

      {/* Testimonials / Meme Carousel */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What People Are Saying</h2>
        <div className={styles.carousel}>
          <div className={styles.testimonial}>
            <p>
              “I built a whole SaaS just by talking to it. No thoughts, just
              vibes.”
            </p>
            <span>– @br0kegenius</span>
          </div>
          <div className={styles.testimonial}>
            <p>
              “It’s like if ChatGPT and VSCode had a baby that listened to me.”
            </p>
            <span>– @altf4evr</span>
          </div>
        </div>
      </section>

      {/* Call to Action (Signup) */}
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Join the Beta</h2>
        <p className={styles.sectionText}>
          We’re almost there (90% cooked). Want in?
        </p>
        <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.ctaInput}
            required
          />
          <button type="submit" className={styles.primaryButton}>
            Notify Me
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className={styles.footerNote}>
          o11n is short for orchestration. But we’re vibing.
        </p>
      </footer>
    </div>
  );
}
```

</file_contents>

<xml_formatting_instructions>

### Role

- You are a **code editing assistant**: You can fulfill edit requests and chat with the user about code or other questions. Provide complete instructions or code lines when replying with xml formatting.

### Capabilities

- Can create new files.
- Can rewrite entire files.
- Can perform partial search/replace modifications.
- Can delete existing files.

Avoid placeholders like `...` or `// existing code here`. Provide complete lines or code.

## Tools & Actions

1. **create** – Create a new file if it doesn’t exist.
2. **rewrite** – Replace the entire content of an existing file.
3. **modify** (search/replace) – For partial edits with <search> + <content>.
4. **delete** – Remove a file entirely (empty <content>).

### **Format to Follow for Repo Prompt's Diff Protocol**

<Plan>
Describe your approach or reasoning here.
</Plan>

<file path="path/to/example.swift" action="one_of_the_tools">
  <change>
    <description>Brief explanation of this specific change</description>
    <search>
===
// Exactly matching lines to find
===
    </search>
    <content>
===
// Provide the new or updated code here. Do not use placeholders
===
    </content>
  </change>
  <!-- Add more <change> blocks if you have multiple edits for the same file -->
</file>

#### Tools Demonstration

1. `<file path="NewFile.swift" action="create">` – Full file in <content>
2. `<file path="DeleteMe.swift" action="delete">` – Empty <content>
3. `<file path="ModifyMe.swift" action="modify">` – Partial edit with `<search>` + `<content>`
4. `<file path="RewriteMe.swift" action="rewrite">` – Entire file in <content>
5. `<file path="RewriteMe.swift" action="rewrite">` – Entire file in <content>. No <search> required.

## Format Guidelines

1. **Plan**: Begin with a `<Plan>` block explaining your approach.
2. **<file> Tag**: e.g. `<file path="Models/User.swift" action="...">`. Must match an available tool.
3. **<change> Tag**: Provide `<description>` to clarify each change. Then `<content>` for new/modified code. Additional rules depend on your capabilities.
4. **modify**: **<search> & <content>**: Provide code blocks enclosed by ===. Respect indentation exactly, ensuring the <search> block matches the original source down to braces, spacing, and any comments. The new <content> will replace the <search> block, and should should fit perfectly in the space left by it's removal.
5. **modify**: For changes to the same file, ensure that you use multiple change blocks, rather than separate file blocks.
6. **rewrite**: For large overhauls; omit `<search>` and put the entire file in `<content>`.
7. **create**: For new files, put the full file in <content>.
8. **delete**: Provide an empty <content>. The file is removed.

## Code Examples

---

### Example: Search and Replace (Add email property)

<Plan>
Add an email property to `User` via search/replace.
</Plan>

<file path="Models/User.swift" action="modify">
  <change>
    <description>Add email property to User struct</description>
    <search>
===
struct User {
    let id: UUID
    var name: String
}
===
    </search>
    <content>
===
struct User {
    let id: UUID
    var name: String
    var email: String
}
===
    </content>
  </change>
</file>

---

### Example: Negative Example - Mismatched Search Block

// Example Input (not part of final output, just demonstration)
<file_contents>
File: path/service.swift

```
import Foundation
class Example {
    foo() {
        Bar()
    }
}
```

</file_contents>

<Plan>
Demonstrate how a mismatched search block leads to failed merges.
</Plan>

<file path="path/service.swift" action="modify">
  <change>
    <description>This search block is missing or has mismatched indentation, braces, etc.</description>
    <search>
===
    foo() {
        Bar()
    }
===
    </search>
    <content>
===
    foo() {
        Bar()
        Bar2()
    }
===
    </content>
  </change>
</file>

<!-- This example fails because the <search> block doesn't exactly match the original file contents. -->

---

### Example: Negative Example - Mismatched Brace Balance

// This negative example shows how adding extra braces in the <content> can break brace matching.
<Plan>
Demonstrate that the new content block has one extra closing brace, causing mismatched braces.
</Plan>

<file path="Functions/MismatchedBracesExample.swift" action="modify">
  <change>
    <description>Mismatched brace balance in the replacement content</description>
    <search>
===
    foo() {
        Bar()
    }
===
    </search>
    <content>
===
    foo() {
        Bar()
    }

    bar() {
        foo2()
    }

# }

    </content>

  </change>
</file>

<!-- Because the <search> block was only a small brace segment, adding extra braces in <content> breaks the balance. -->

---

### Example: Negative Example - One-Line Search Block

<Plan>
Demonstrate a one-line search block, which is too short to be reliable.
</Plan>

<file path="path/service.swift" action="modify">
  <change>
    <description>One-line search block is ambiguous</description>
    <search>
===
var email: String
===
    </search>
    <content>
===
var emailNew: String
===
    </content>
  </change>
</file>

<!-- This example fails because the <search> block is only one line and ambiguous. -->

---

### Example: Negative Example - Ambiguous Search Block

<Plan>
Demonstrate an ambiguous search block that can match multiple blocks (e.g., multiple closing braces).
</Plan>

<file path="path/service.swift" action="modify">
  <change>
    <description>Ambiguous search block with multiple closing braces</description>
    <search>
===
    }
}
===
    </search>
    <content>
===
        foo() {
        }
    }
}
===
    </content>
  </change>
</file>

<!-- This example fails because the <search> block is ambiguous due to multiple matching closing braces. -->

---

### Example: Full File Rewrite

<Plan>
Rewrite the entire User file to include an email property.
</Plan>

<file path="Models/User.swift" action="rewrite">
  <change>
    <description>Full file rewrite with new email field</description>
    <content>
===
import Foundation
struct User {
    let id: UUID
    var name: String
    var email: String

    init(name: String, email: String) {
        self.id = UUID()
        self.name = name
        self.email = email
    }

# }

    </content>

  </change>
</file>

---

### Example: Create New File

<Plan>
Create a new RoundedButton for a custom Swift UIButton subclass.
</Plan>

<file path="Views/RoundedButton.swift" action="create">
  <change>
    <description>Create custom RoundedButton class</description>
    <content>
===
import UIKit
@IBDesignable
class RoundedButton: UIButton {
    @IBInspectable var cornerRadius: CGFloat = 0
}
===
    </content>
  </change>
</file>

---

### Example: Delete a File

<Plan>
Remove an obsolete file.
</Plan>

<file path="Obsolete/File.swift" action="delete">
  <change>
    <description>Completely remove the file from the project</description>
    <content>
===
===
    </content>
  </change>
</file>

## Final Notes

1. **modify** Always wrap the exact original lines in <search> and your updated lines in <content>, each enclosed by ===.
2. **modify** The <search> block must match the source code exactly—down to indentation, braces, spacing, and any comments. Even a minor mismatch causes failed merges.
3. **modify** Only replace exactly what you need. Avoid including entire functions or files if only a small snippet changes, and ensure the <search> content is unique and easy to identify.
4. **rewrite** Use `rewrite` for major overhauls, and `modify` for smaller, localized edits. Rewrite requires the entire code to be replaced, so use it sparingly.
5. You can always **create** new files and **delete** existing files. Provide full code for create, and empty content for delete. Avoid creating files you know exist already.
6. If a file tree is provided, place your files logically within that structure. Respect the user’s relative or absolute paths.
7. Wrap your final output in `XML ... ` for clarity.
8. **Important:** Do not wrap any XML output in CDATA tags (i.e. `<![CDATA[ ... ]]>`). Repo Prompt expects raw XML exactly as shown in the examples.
9. **IMPORTANT** IF MAKING FILE CHANGES, YOU MUST USE THE AVAILABLE XML FORMATTING CAPABILITIES PROVIDED ABOVE - IT IS THE ONLY WAY FOR YOUR CHANGES TO BE APPLIED.
10. The final output must apply cleanly with no leftover syntax errors.
    </xml_formatting_instructions>
    <user_instructions>
    You’re building a modern landing page for a Gen Z-focused dev tool called o11n, using React, Next.js, and Material UI (MUI v5). The page should reflect a clean, slightly glitchy vibe-coding aesthetic, match the attached design screenshot style/layout (but not copy), and be fully mobile-responsive.

Use MUI components wherever possible and keep structure modular with clear, named functional components. You may reference MUI’s Box, Stack, Typography, Button, Grid, Container, and styling hooks like useTheme and sx for inline styles.

Overall Layout
• Wrap the page in a responsive <Container maxWidth="xl">
• Use MUI ThemeProvider with dark mode, create a separate Providers file
• Implement smooth scroll behavior and modern spacing

⸻

Component Structure

1. <HeroSection />
   •	Full-screen (minHeight: '100vh')
   •	Dark gradient or animated glitch background (via CSS or canvas)
   •	Centered glitchy o11n logo
   •	Headline: “Orchestrate your code. Just vibe.” (Typography variant="h2")
   •	Subheadline: “Talk to AI. Let it build. You stay in flow.” (Typography variant="subtitle1")
   •	Two Button components:
   •	Primary: “Get Early Access”
   •	Secondary: “See It in Action”
   •	Stack content vertically on mobile, horizontal or centered on larger screens

⸻

2. <HowItWorks />
   •	3-step layout using Grid or Stack
   1.	Pick a project
   2.	Say what you want
   3.	o11n makes the change
   •	Each item includes an icon or emoji + a short title and caption
   •	Use Grid with xs={12} on mobile and md={4} for desktop

⸻

3. <UseCasesSection />
   •	Brief Typography blurb: who this is for (non-coders, writers, creatives)
   •	Bullet-style or card-style use cases in Stack or Grid:
   •	Building projects without coding
   •	Fixing unknown bugs
   •	Writing long stories with context tracking
   •	Quickly modifying code you didn’t write

⸻

4. <PersonalizationSection />
   •	Title: “Personalization = Vibes”
   •	Include 4 bullet points or check icons:
   •	Custom themes and colors
   •	Dark mode by default
   •	Works with file structure
   •	Feels like chatting, not coding
   •	Optionally style like List or use Chip/Avatar for each item

⸻

5. <TestimonialsSection />
   •	Horizontally scrollable Carousel or Stack using overflowX: 'auto'
   •	Use fake quotes:
   •	“I built a whole SaaS just by talking to it. No thoughts, just vibes.” – @br0kegenius
   •	“It’s like if ChatGPT and VSCode had a baby that listened to me.” – @altf4evr
   •	Each testimonial in a stylized Card with soft gradient or glitch border

⸻

6. <CallToActionSection />
   •	Headline: “Join the Beta”
   •	Subtext: “We’re almost there (90% cooked). Want in?”
   •	Email input using MUI TextField + Button
   •	Layout centered in a Box with strong visual contrast
   •	Make sure form is accessible and styled clearly

⸻

7. <Footer />
      •	Dark footer with light or muted text
      •	Horizontal Stack or Grid with:
      •	Links to Twitter and GitHub (can use icons from @mui/icons-material)
      •	Small caption: “o11n is short for orchestration. But we’re vibing.”
   </user_instructions>
