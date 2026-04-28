import jwt from "jsonwebtoken";

export function verifyToken(req) {
  try {
    const auth = req.headers.get("authorization");
    if (!auth) return null;
    const token = auth.split(" ")[1];
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}