// utils/imagePath.ts
export function getImagePath(path: string): string {
  const prefix =
    process.env.NODE_ENV === "production" ? "/sustainabytes" : "";
  // Ensure leading slash for safety
  if (!path.startsWith("/")) path = `/${path}`;
  return `${prefix}${path}`;
}
