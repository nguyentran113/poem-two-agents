import { mkdirSync, writeFileSync } from "node:fs";

// Original poem for "The poem about two agents agreeing".
// Two agents, one key, one door: neither can act alone until both say yes.
const POEM = `You held the key.
I held the door.
Neither of us moved
for longer than either would admit.

Then — yes.
The lock turned twice:
once for your hand,
once for mine.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
