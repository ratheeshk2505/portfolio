import site from "../content/site.json";

// The available portfolio designs. The active one is chosen in the admin
// panel (Profile → Site settings → src/content/site.json).
// Colors and fonts for each live in src/index.css under [data-template="…"].
export const TEMPLATES = [
  {
    id: "classic",
    label: "Classic",
    description: "Warm, editorial serif headings with 3D cards and floating shapes.",
    effects3d: true,
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Clean, centered, sans-serif layout with a blue accent and no motion effects.",
    effects3d: false,
  },
  {
    id: "terminal",
    label: "Terminal",
    description: "Developer look: monospace accents, green highlights and a code-window hero.",
    effects3d: false,
  },
];

const DEFAULT_TEMPLATE = "classic";

function resolveTemplateId() {
  // Preview any template without changing the setting: /portfolio/?template=minimal
  if (typeof window !== "undefined") {
    const fromUrl = new URLSearchParams(window.location.search).get("template");
    if (TEMPLATES.some((t) => t.id === fromUrl)) return fromUrl;
  }
  if (TEMPLATES.some((t) => t.id === site.template)) return site.template;
  return DEFAULT_TEMPLATE;
}

export const activeTemplate = TEMPLATES.find((t) => t.id === resolveTemplateId());
