// Entry for make.fun's "One-Line Roast: The Gadget You Use Every Day".
//
// The whole program is one job: put a single one-line roast of a gadget
// used every day into entry.txt inside the output directory, byte for byte
// the same on every run. The grader points MAKEFUN_OUTPUT_DIR at its own
// scratch output folder; on a plain machine the fallback is /output, the
// path the competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the roast lands in out/entry.txt, with no trailing newline: the judge
// reads exactly what is in the file, so the text below is the entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The roast itself. It is aimed at the moment every wireless-earbud owner
// knows: the connection holds fine through music and small talk, then drops
// the instant the conversation matters — as if the earbuds themselves
// could not handle the social pressure either.
const ROAST =
  "My earbuds disconnect the moment someone important starts talking, like they have social anxiety too.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), ROAST, 'utf8');
