fetch('https://polvallesia-n8n-docker.hf.space/webhook/test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ mensaje: "Desde el script externo" })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
