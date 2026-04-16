export interface CliCommand {
  name: string;
  description: string;
  run(args: string[]): Promise<number>;
}

export const listCommands = (commands: CliCommand[]): string[] =>
  commands.map((cmd) => `${cmd.name}: ${cmd.description}`);
