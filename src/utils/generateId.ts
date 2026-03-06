export function generateId(title: string): string {

  let id = title.toLowerCase()

  id = id.replace(/[^a-z0-9 ]/g, "")

  id = id.replace(/\s+/g, "-")

  id = id.replace(/^-+|-+$/g, "")

  if (id.length < 3) {
    id = id + "-activity"
  }

  if (id.length > 50) {
    id = id.slice(0, 50)
  }

  return id
}