import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve(process.env.NETLIFY_PUBLISH_DIR || "dist");
const rootFiles = [
  "index.html",
  "app.js",
  "style.css",
  "design-system.css",
  "theme-vicopisano.css",
  "logo_vicopisano.png",
  "mascotte_vicopisano.webp",
];
const runtimeDirectories = ["assets", "audio"];
const stopArtworkPattern = /^tappa_\d+_.+\.(?:jpe?g|png|webp)$/i;

const rootEntries = await readdir(".", { withFileTypes: true });
const stopArtworkFiles = rootEntries
  .filter((entry) => entry.isFile() && stopArtworkPattern.test(entry.name))
  .map((entry) => entry.name)
  .sort();

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of [...rootFiles, ...stopArtworkFiles]) {
  await cp(file, path.join(outputDirectory, file));
}

for (const directory of runtimeDirectories) {
  await cp(directory, path.join(outputDirectory, directory), { recursive: true });
}

console.log(`Static site prepared in ${path.relative(process.cwd(), outputDirectory) || "."}`);
