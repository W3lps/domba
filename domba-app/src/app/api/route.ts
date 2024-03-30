export async function GET(request: Request) {
  return new Response("Hello, World! - API", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
