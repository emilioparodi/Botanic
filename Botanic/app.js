const fetch = require('node-fetch');

// The parameters for our POST request
const params = {
  origin: 'https://botanic.vercel.app',
  ip: 'THE-WEBSITE-USER-IP',
  token: 'QMoYTqrtuXFuatJhMzVfG1L_e6C_J9_sVNaDovTMrtQ'
}

(async () => {
  const response = await fetch(
    'https://trefle.io/api/auth/claim', {
      method: 'post',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    });
  const json = await response.json();
  console.log(json);
})();
