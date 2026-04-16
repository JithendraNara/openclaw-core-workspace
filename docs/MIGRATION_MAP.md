# Migration Map

## Archived repositories and destination

- `openclaw-workspace` -> `packages/runtime/` and `examples/local-dev/`
- `openclaw-mymemory` -> `packages/memory/`
- `openclaw-private-sync` -> `packages/sync/`
- `openclaw-work` -> `packages/cli/` and `examples/production-patterns/`

## Migration rule

Migrate behavior first, then optimize structure. Preserve user-facing workflows before refactoring internals.
