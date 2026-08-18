import http from 'http';

http.get('http://localhost:4321/src/components/TextStyleConverter.astro?astro&type=script&index=0&lang.ts', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data);
  });
});
