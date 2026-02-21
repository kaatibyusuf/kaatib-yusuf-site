export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}