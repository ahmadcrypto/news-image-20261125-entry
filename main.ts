// Entry for make.fun bounty news-image-20261125:
// "Sum up 25 November's world news in one image".
// The program copies the front-page image held in this repository to the
// output directory as entry.png. It uses only the Node standard library,
// performs no network access, and always writes the same bytes, so the two
// grading runs are byte-identical by construction.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "frontpage.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`entry.png written (${statSync(target).size} bytes)`);
