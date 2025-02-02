export async function GET() {
    const lambdaUrl = "https://d6a3fdhwt8.execute-api.ap-southeast-2.amazonaws.com/dev/hello-world-lambda";
  
    try {
      const response = await fetch(lambdaUrl);
  
      if (!response.ok) {
        throw new Error("Failed to fetch from Lambda");
      }
  
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching from Lambda:", error);
  
      return new Response(JSON.stringify({ error: "Something went wrong" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  