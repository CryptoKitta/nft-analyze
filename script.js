const titles = [
  "Hamaha ⚡", "Elon Musk 🚀", "Trump 💨", "Pnut 🌰", "Moodeng 🔄",
  // Add the rest of your titles here...
];

function analyze() {
  document.querySelector('.analyze-btn').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  document.getElementById('result').style.display = 'none';

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 5;
    document.getElementById('progress').innerText = `${Math.min(100, progress)}%`;
    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById('loading').style.display = 'none';
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomTitle2 = titles[Math.floor(Math.random() * titles.length)];
      document.getElementById('result').innerText = Math.random() > 0.5
        ? `You are ${randomTitle}`
        : `You are half ${randomTitle}, half ${randomTitle2}`;
      document.getElementById('result').style.display = 'block';
      document.getElementById('retry').style.display = 'inline-block';
    }
  }, 500);
}

function retry() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('retry').style.display = 'none';
  document.querySelector('.analyze-btn').style.display = 'inline-block';
}
