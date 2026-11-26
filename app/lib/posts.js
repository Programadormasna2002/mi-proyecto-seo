import { DatabaseSync } from "node:sqlite";
import path from "node:path";

export function getPosts() {
  const db = new DatabaseSync(path.join(process.cwd(), "data", "blog.sqlite"), { readOnly: true });
  try {
    return db.prepare("SELECT slug, title, description FROM posts ORDER BY slug").all();
  } finally {
    db.close();
  }
}
