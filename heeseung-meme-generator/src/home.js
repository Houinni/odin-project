export default function loadHome() {
    const content = document.getElementById('content');
    // clear any old content
    content.innerHTML = '';
  
    // build your homepage
    const headline = document.createElement('h1');
    headline.textContent = 'WELCOME TO HEESEUNG MEME SHOP!';
  
  
    const p = document.createElement('p');
    p.textContent = '这里有最全的Heeseung表情包!';

    // 添加一个button来生成表情包
    const generateBtn = document.createElement('button');
    generateBtn.textContent = '摇一摇';

    // 添加一个div来显示生成的表情包
    const memeContainer = document.createElement('div');
    memeContainer.id = 'meme-container';

    // 添加一个img元素来显示表情包
    const memeImg = document.createElement('img');

    // 添加一个array来储存生成的表情包
    const myMemes = [];
    myMemes.push(JSON.stringify(memeImg.src));
    // 添加一个local storage 来储存生成的表情包
    localStorage.setItem('myMemes',myMemes);
    // 所有表情包的路径
    const memeArray = getAllMemePaths();
    // 按‘摇一摇’随机生成一张表情包
    generateBtn.addEventListener('click',() => {
      const randomIndex = Math.floor(Math.random() * memeArray.length);
      const randomMeme = memeArray[randomIndex];
      memeImg.src = randomMeme;
    })

    // append to #content
    content.append(headline, p, generateBtn, memeImg);
  }

// Helper to generate all image paths
function getAllMemePaths() {
  const memePaths = [];
  for (let i = 1; i <= 51; i++) {
    memePaths.push(`img/Heeseung/image${i}.webp`);
  }
  return memePaths;
}
console.log(localStorage.getItem('myMemes'));