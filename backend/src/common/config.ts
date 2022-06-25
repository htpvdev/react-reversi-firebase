import * as dotenv from 'dotenv'

export default () => {
  /** .envがあるディレクトリから、このモジュールのディレクトリまでの相対パス */
  const currentPath = 'src\\common'

  // backend/.envを読み込む
  dotenv.config({ path: __dirname.slice(0, -currentPath.length) + '.env' })
}
