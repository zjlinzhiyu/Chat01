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
