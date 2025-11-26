
document.getElementById('greetBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const output = document.getElementById('output');
  if (!name) {
    output.textContent = '请先输入名字。';
    return;
  }
  const now = new Date();
  const hour = now.getHours();
  const greet = hour < 12 ? '早上好' : hour < 18 ? '下午好' : '晚上好';
  output.textContent = `${greet}, ${name}！欢迎来到你的网页 App。`;
});
