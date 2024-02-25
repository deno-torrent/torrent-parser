import { Bdecoder } from 'bencode'
import { Buffer } from 'std/io/buffer.ts'
import { Reader, Writer } from 'std/io/mod.ts'

export type Torrent = {
  'created by': string
  'creation date': number
  announce?: string
  'announce-list'?: string[][]
  'url-list'?: string | string[]
  info: {
    name: string
    'piece length': number
    pieces?: Uint8Array
    length?: number
    files?: {
      path: string[]
      length: number
    }[]
    private?: number
  }
  comment?: string
  source?: string
}

/**
 *
 * @param source 需要解析的 torrent 文件,可以是 Uint8Array, Buffer, BufReader
 * @param writer 指定将解析后的 torrent 写入到流中,可以写入到文件中,也可以写入到标准输出中
 * @returns
 */
export async function parseTorrent(source: Reader | Uint8Array | Buffer, writer?: Writer): Promise<Torrent> {
  return (await new Bdecoder().d(source, writer)) as Torrent
}
