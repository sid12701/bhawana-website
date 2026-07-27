import fs from "fs"
import path from "path"

/**
 * Copy selected route index.html files to sibling .html files at site root.
 * Helps Apache/cPanel hosts that fail to serve long directory paths reliably.
 */
const routes = ["rbi-ombudsman-salient-features-hindi"]

const outDir = path.join(process.cwd(), "out")

for (const route of routes) {
  const indexPath = path.join(outDir, route, "index.html")
  const flatPath = path.join(outDir, `${route}.html`)

  if (!fs.existsSync(indexPath)) {
    console.error(`postbuild: missing ${indexPath}`)
    process.exit(1)
  }

  fs.copyFileSync(indexPath, flatPath)
  console.log(`postbuild: wrote ${flatPath}`)
}
