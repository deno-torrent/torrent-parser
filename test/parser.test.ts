import { join } from 'std/path/join.ts'
import { parseTorrent } from '../src/parser.ts'
import { assertEquals } from './deps.ts'

const expectedTorrent = {
  announce: 'http://example.com/',
  'announce-list': [['http://example.com/'], ['http://example2.com/']],
  comment: 'comment',
  'created by': 'createdBy',
  'creation date': 0,
  info: {
    files: [
      { length: 13, path: ['hello.txt'] },
      { length: 1, path: ['dir1', '1.txt'] },
      { length: 1, path: ['dir2', '2.txt'] }
    ],
    name: 'entry',
    'piece length': 16777216,
    pieces: Uint8Array.from([64, 170, 71, 92, 214, 18, 239, 23, 70, 83, 77, 148, 194, 170, 174, 147, 3, 240, 151, 63])
  },
  source: 'http://example.com',
  'url-list': ['http://example.com/', 'http://example2.com/']
}

// 测试解析种子文件
Deno.test('test parse torrent file', async () => {
  const actualTorrent = join(Deno.cwd(), 'test', 'torrent', 'actual.torrent')
  const fd = await Deno.open(actualTorrent, { read: true })

  const actual = await parseTorrent(fd)
  assertEquals(actual, expectedTorrent)

  // 关闭文件
  fd.close()
})
