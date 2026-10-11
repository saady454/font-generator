import http from 'http';

http.get('http://localhost:4321/plattform/instagram', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const lastPart = html.substring(html.indexOf('mt-16 grid'));
    console.log(lastPart);
  });
});
