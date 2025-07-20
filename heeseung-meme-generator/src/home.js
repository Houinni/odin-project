export default function loadHome() {
    const content = document.getElementById('content');
    // clear any old content
    content.innerHTML = '';
  
    // build your homepage
    const headline = document.createElement('h1');
    headline.textContent = 'WELCOME TO HEESEUNG MEME SHOP!';
  
    // const img = document.createElement('img');
    // img.src = 'https://via.placeholder.com/300x200';
    // img.alt = 'Delicious food';
  
    const p = document.createElement('p');
    p.textContent = '这里有最全的Heeseung表情包!';

    const generateBtn = document.createElement('button');
    generateBtn.textContent = '摇一摇';

    // // 添加一个div来显示生成的表情包
    // const memeContainer = document.createElement('div');
    // memeContainer.id = 'meme-container';

    // 添加一个img元素来显示表情包
    const memeImg = document.createElement('img');
    memeImg.src = 'img/Heeseung/image1.webp';

  
    // append to #content
    content.append(headline, p, generateBtn, memeImg);
  }
  