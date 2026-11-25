import * as fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "I didn't miss the deadline — scope creep fed it so many new features it had to be legally reclassified as next quarter's roadmap.\n", "utf-8");
