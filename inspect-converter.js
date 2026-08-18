import http from 'http';

http.get('http://localhost:4321/schrift/gotische-schrift', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const gridIdx = html.indexOf('id="converter-results-grid"');
    console.log(html.substring(gridIdx, gridIdx + 3000));
  });
});
