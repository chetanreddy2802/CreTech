const bgImages = {
    default: 'url("https://c0.wallpaperflare.com/preview/544/568/910/postcard-gift-voucher-wish-invitation-card.jpg")',
    birthday: 'url("https://thumbs.dreamstime.com/z/birthday-podium-vector-background-design-happy-birthday-invitation-card-balloons-birthday-podium-vector-background-design-276083927.jpg?ct=jpeg")',
    marriage: 'url("https://t3.ftcdn.net/jpg/09/35/29/02/360_F_935290297_c56omypkVfVr5imFTAEgY48Wj4frtbNM.jpg")',
    house: 'url("https://templates.sfo3.cdn.digitaloceanspaces.com/house_warming/lovely_home/video_thumbnail.jpg")',
    festival: 'url("https://media.istockphoto.com/id/1399105128/vector/golden-glitter-confetti-falling-on-black-vector-background-shining-gold-shimmer-luxury.jpg?s=612x612&w=0&k=20&c=aiC5-QyzDJy6IZ91FiDYSxKvAVX4QZnohGBBbl5tczk=")'
  };
  
  function changeBackground() {
    const occasion = document.getElementById('occasion').value;
    document.body.style.backgroundImage = bgImages[occasion];
  }
  
  function generateCard() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const occasion = document.getElementById('occasion').value;
  
    const card = `
      <h3>${occasion.toUpperCase()}</h3>
      <p><strong>To:</strong> ${name}</p>
      <p>${message}</p>
    `;
    const cardElement = document.getElementById('card');
    cardElement.innerHTML = card;
  
    cardElement.style.backgroundImage = bgImages[occasion];
    cardElement.style.backgroundSize = 'cover';
    cardElement.style.backgroundPosition = 'center';
    cardElement.style.backgroundRepeat = 'no-repeat';
    cardElement.style.color = 'white';
    cardElement.style.textShadow = '1px 1px 2px black';
  }
  
  function downloadCard() {
    const element = document.createElement('a');
    const cardContent = document.getElementById('card').innerText;
    const file = new Blob([cardContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'greeting_card.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  
  window.onload = () => {
    document.getElementById('occasion').value = 'default';
    changeBackground();
  };
  