
let eggs = 0, certs = 0, passive = 0, multiplier = 1;

function startGame() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game").style.display = "block";
  updateUI();
  setInterval(() => {
    if (passive > 0) {
      eggs += passive;
      if (eggs >= 10) {
        eggs = 0;
        certs++;
      }
      updateUI();
    }
  }, 5000);
}

function layEgg() {
  eggs += multiplier;
  if (eggs >= 10) {
    eggs = 0;
    certs++;
  }
  updateUI();
}

function buyFarm() {
  if (certs >= 10) {
    certs -= 10;
    passive += 1;
  } else {
    alert("Yetersiz sertifika!");
  }
  updateUI();
}

function buyMachine() {
  if (certs >= 20) {
    certs -= 20;
    passive += 2;
  } else {
    alert("Yetersiz sertifika!");
  }
  updateUI();
}

function buyMedal() {
  if (certs >= 30) {
    certs -= 30;
    multiplier++;
  } else {
    alert("Yetersiz sertifika!");
  }
  updateUI();
}

function updateUI() {
  document.getElementById("egg").textContent = eggs;
  document.getElementById("cert").textContent = certs;
  document.getElementById("passive").textContent = passive;
  document.getElementById("multiplier").textContent = multiplier;
}

function openGameCenter() {
  alert("🎮 Oyun Merkezi yakında geliyor!");
}

function openTree() {
  alert("🌳 Gelişim Ağacı üzerinde çalışılıyor!");
}
