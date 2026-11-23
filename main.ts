// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can hear my houseplants' thoughts, but they're all just screaming about the watering can.";

function validate(line: string): void {
  if (!line.trim()) throw new Error("Entry must not be blank.");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Entry must be 1-200 chars, got ${line.length}.`);
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
