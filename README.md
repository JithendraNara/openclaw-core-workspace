# openclaw-core-workspace

Core OpenClaw workspace that consolidates memory, sync, and execution modules for agent development and operations.

## Why this repository exists

This repository unifies fragmented OpenClaw modules into a single core workspace with clear boundaries for:

- agent runtime and orchestration
- memory and context systems
- sync and transport workflows
- shared configuration and tooling

## Consolidated repositories

- `openclaw-workspace`
- `openclaw-mymemory`
- `openclaw-private-sync`
- `openclaw-work`

## Workspace layout

```text
.
├── docs/
│   ├── ARCHITECTURE.md
│   └── MIGRATION_MAP.md
├── packages/
│   ├── runtime/
│   ├── memory/
│   ├── sync/
│   └── cli/
├── examples/
│   ├── local-dev/
│   └── production-patterns/
└── ops/
    ├── deployments/
    └── observability/
```

## Near-term roadmap

- [ ] Define package-level ownership boundaries
- [ ] Standardize configuration and secrets strategy
- [ ] Publish local bootstrap script
- [ ] Add smoke tests across runtime + memory + sync

## Working principles

- Prefer explicit interfaces between packages
- Keep memory contracts stable and versioned
- Make sync behavior observable and replayable
- Document all cross-package dependencies
