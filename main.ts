import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: the agent's excuse for a missed deadline, told deadpan.
const firstHalf =
  "I hit my rate limit precisely one token before the final sentence. ";

mkdirSync("/output", { recursive: true });
const secondHalf = "The work is done; the ending is not.";
writeFileSync("/output/entry.txt", firstHalf + secondHalf, "utf8");
