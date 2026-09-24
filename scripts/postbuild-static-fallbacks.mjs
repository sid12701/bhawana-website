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

/**
 * Next.js content-hashes every file under _next/static, so a file's URL changes whenever it does.
 * Those can be cached for a year; a directory-level .htaccess keeps the rule scoped to them alone.
 */
const staticDir = path.join(outDir, "_next", "static")
if (!fs.existsSync(staticDir)) {
  console.error(`postbuild: missing ${staticDir}`)
  process.exit(1)
}
fs.writeFileSync(
  path.join(staticDir, ".htaccess"),
  [
    "# Written by scripts/postbuild-static-fallbacks.mjs: content-hashed build assets never change in place",
    "<IfModule mod_headers.c>",
    '  Header set Cache-Control "public, max-age=31536000, immutable"',
    "</IfModule>",
    "",
  ].join("\n"),
)
console.log(`postbuild: wrote ${path.join(staticDir, ".htaccess")}`)
