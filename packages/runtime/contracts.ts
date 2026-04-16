export interface AgentTask {
  id: string;
  goal: string;
  priority: "low" | "medium" | "high";
}

export interface RuntimeEngine {
  enqueue(task: AgentTask): Promise<void>;
  runNext(): Promise<AgentTask | null>;
}
