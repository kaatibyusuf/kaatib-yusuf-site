"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
      <input
        className="w-full rounded-md border px-3 py-2 text-sm"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
      />
      <button className="rounded-md border px-4 py-2 text-sm font-medium" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "ok" && <p className="text-sm text-green-700">Done.</p>}
      {status === "error" && <p className="text-sm text-red-700">Try again.</p>}
    </form>
  );
}