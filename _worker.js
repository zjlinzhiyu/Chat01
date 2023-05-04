export default {
  async fetch(request, env) {
    const url = new URL("https://api.openai.com/v1/chat/completions");
    const myHeaders = {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json" 
    };
      
    // openai is already set all CORS headers 
    return fetch(url, {
      headers: myHeaders,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
