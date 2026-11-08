// All site content lives in the JSON files in this folder.
// They are edited through the CMS at /portfolio/admin/ (see public/admin/config.yml).
import profile from "./profile.json";
import experience from "./experience.json";
import projects from "./projects.json";
import skills from "./skills.json";

export { profile, experience, projects, skills };

// Files in public/ are served under the Vite base path (/portfolio/),
// so turn "/images/me.jpg" into "/portfolio/images/me.jpg".
export function assetUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

// "https://github.com/user" -> "github.com/user"
export function displayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
