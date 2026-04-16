export interface SyncEnvelope {
  source: string;
  target: string;
  payload: string;
  sequence: number;
}

export interface SyncTransport {
  publish(envelope: SyncEnvelope): Promise<void>;
  healthcheck(): Promise<boolean>;
}
