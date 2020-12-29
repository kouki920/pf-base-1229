const idCount = document.getElementById('id__count');
const passwardCountOne = document.getElementById('passward__count__one');
const passwardCountTwo = document.getElementById('passward__count__two');

idCount.addEventListener('input',()=>{
  let idCountValue = document.getElementById('id_count_value');
  idCountValue.textContent = (idCount.value.length + "文字");
})

passwardCountOne.addEventListener('input',()=>{
  let passwardCountOneValue = document.getElementById('pwone_count_value');
  passwardCountOneValue.textContent = (passwardCountOne.value.length + "文字");
})

passwardCountTwo.addEventListener('input',()=>{
  let passwardCountTwoValue = document.getElementById('pwtwo_count_value');
  passwardCountTwoValue.textContent = (passwardCountTwo.value.length + "文字");
})

