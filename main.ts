import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Five stars. He feeds me $5 bounties at 1am and still believes the next one wins.";

// The five stars are for the hope, not the sleep schedule.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
