import type { AgentTask } from "../../packages/runtime/contracts";
import type { MemoryEntry } from "../../packages/memory/contracts";

const task: AgentTask = { id: "task-1", goal: "Summarize repo context", priority: "medium" };
const memory: MemoryEntry = {
  key: "repo.summary",
  value: "Consolidated workspace initialized.",
  updatedAtIso: new Date().toISOString(),
};

console.log({ task, memory });
