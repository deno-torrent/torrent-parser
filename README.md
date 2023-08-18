# [torrent-parser](https://deno.land/x/dt_torrent_parser) [![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Fdt_torrent_parser%2Fmod.ts)](https://deno.land/x/dt_torrent_parser)

torrent-parser is a lightweight Deno library for parsing torrent files

## Usage

### Decode

basic usage

```typescript
  import { parseTorrent } from 'https://deno.land/x/dt_torrent_parser/mod.ts'

  const fd = await Deno.open('./your-torrent-file.torrent', { read: true })

  // parseTorrent source arg accept Uint8Array | Buffer | Reader
  const torrent = await parseTorrent(fd)

  fd.close()

```

specify writer

```typescript
  import { parseTorrent } from 'https://deno.land/x/dt_torrent_parser/mod.ts'

  const fd = await Deno.open('./your-torrent-file.torrent', { read: true })

  // parse torrent and write to stdout
  const torrent = await parseTorrent(fd, Deno.stdout)

  fd.close()

```

## Test

```bash
deno task test

# running 1 test from ./test/parser.test.ts
# test parse torrent file ... ok (11ms)

# ok | 1 passed | 0 failed (43ms)
```
