import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The old man at the corner stall remembered my order from Tuesday, slid the warm bun across, and said the rain had finally given the mangoes a good excuse to be sweet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
