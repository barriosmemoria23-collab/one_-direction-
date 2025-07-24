// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ main.js cargado y DOM listo');

  // 1) Configuración de las 20 preguntas
  const quizQuestions = [
    { q: "¿Qué tipo de música prefieres?", opts:["Rock clásico","Pop alegre","R&B","Electropop"], map:["Harry Styles","Niall Horan","Zayn Malik","Liam Payne"] },
    { q: "¿Plan ideal para un día libre?", opts:["Leer un libro","Playa y sol","Netflix","Gym"], map:["Louis Tomlinson","Harry Styles","Zayn Malik","Liam Payne"] },
    { q: "¿Color favorito?", opts:["Verde","Negro","Rojo","Rosa"], map:["Niall Horan","Zayn Malik","Louis Tomlinson","Harry Styles"] },
    { q: "¿Qué hobby te define?", opts:["Componer música","Fútbol","Pintar","Cantar"], map:["Liam Payne","Louis Tomlinson","Zayn Malik","Harry Styles"] },
    { q: "¿Mascota ideal?", opts:["Perro","Gato","Hámster","Pez"], map:["Niall Horan","Zayn Malik","Liam Payne","Louis Tomlinson"] },
    { q: "¿Bebida favorita?", opts:["Té","Café","Batido","Agua"], map:["Zayn Malik","Harry Styles","Louis Tomlinson","Niall Horan"] },
    { q: "¿Eres más…?", opts:["Introvertido","Extrovertido","Ambivertido","Depende"], map:["Zayn Malik","Louis Tomlinson","Harry Styles","Niall Horan"] },
    { q: "¿Ciudad ideal para vivir?", opts:["Londres","LA","NYC","Dublín"], map:["Louis Tomlinson","Harry Styles","Liam Payne","Niall Horan"] },
    { q: "¿Estilo de ropa?", opts:["Vintage","Casual","Todo negro","Sport"], map:["Harry Styles","Niall Horan","Zayn Malik","Liam Payne"] },
    { q: "¿Red social favorita?", opts:["Instagram","Twitter","TikTok","YouTube"], map:["Zayn Malik","Louis Tomlinson","Harry Styles","Niall Horan"] },
    { q: "¿Instrumento favorito?", opts:["Guitarra","Batería","Piano","Voz"], map:["Niall Horan","Liam Payne","Zayn Malik","Harry Styles"] },
    { q: "¿Álbum de 1D favorito?", opts:["Up All Night","Take Me Home","FOUR","Made in the A.M."], map:["Niall Horan","Zayn Malik","Louis Tomlinson","Harry Styles"] },
    { q: "¿Shows grandes o íntimos?", opts:["Estadios","Acústicos","Teatros","Escuchar"], map:["Harry Styles","Niall Horan","Liam Payne","Zayn Malik"] },
    { q: "¿País para visitar?", opts:["Japón","Irlanda","Italia","EEUU"], map:["Zayn Malik","Niall Horan","Louis Tomlinson","Harry Styles"] },
    { q: "¿Comida ideal?", opts:["Pizza","Sushi","Hamburguesas","Casera"], map:["Louis Tomlinson","Zayn Malik","Harry Styles","Niall Horan"] },
    { q: "¿Tu rol en el grupo?", opts:["Líder","Payaso","Tímido","Carismático"], map:["Liam Payne","Louis Tomlinson","Zayn Malik","Harry Styles"] },
    { q: "¿Cómo te relajas?", opts:["Música y velas","Caminar","Con amigos","Videojuegos"], map:["Zayn Malik","Liam Payne","Louis Tomlinson","Niall Horan"] },
    { q: "¿Poder favorito?", opts:["Volar","Leer mentes","Viajar en el tiempo","Hacer reír"], map:["Harry Styles","Liam Payne","Zayn Malik","Louis Tomlinson"] },
    { q: "¿Tatuaje ideal?", opts:["Frase","Símbolos","Nada","Tribal"], map:["Harry Styles","Louis Tomlinson","Niall Horan","Zayn Malik"] },
    { q: "¿Lema de vida?", opts:["Sé tú mismo","Familia","Menos es más","Con pasión"], map:["Harry Styles","Louis Tomlinson","Zayn Malik","Liam Payne"] }
  ];

  // 2) Estado del quiz
  let currentIndex = 0;
  const score = {};
  const quizContainer = document.getElementById('quiz-container');

  if (!quizContainer) {
    console.error('❌ DIV #quiz-container no encontrado');
    return;
  }

  // 3) Renderizar pregunta
  function renderQuestion() {
    if (currentIndex >= quizQuestions.length) {
      return showResult();
    }
    const { q, opts } = quizQuestions[currentIndex];
    quizContainer.innerHTML = `
      <div class="question"><h3>${q}</h3></div>
      <div class="options">
        ${opts.map((opt,i)=>
          `<button class="option" data-index="${i}">${opt}</button>`
        ).join('')}
      </div>
    `;
    quizContainer.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => choose(parseInt(btn.dataset.index)));
    });
  }

  // 4) Procesar elección
  function choose(i) {
    const member = quizQuestions[currentIndex].map[i];
    score[member] = (score[member]||0) + 1;
    currentIndex++;
    renderQuestion();
  }

  // 5) Mostrar resultado
  function showResult() {
    const winner = Object.entries(score)
      .sort((a,b)=>b[1]-a[1])[0]?.[0] || 'Nadie';
    quizContainer.innerHTML = `
      <h3>¡Eres <strong>${winner}</strong>! 🎤</h3>
      <p>¡Gracias por jugar! 💛</p>
    `;
  }

  // 6) Iniciar
  console.log('▶️ Iniciando quiz...');
  renderQuestion();

  // —— Lógica del audio player ——
  const audio = document.getElementById('bg-audio');
  const selector = document.getElementById('song-selector');
  const playBtn = document.getElementById('play-audio-btn');
  selector.addEventListener('change', () => {
    audio.src = selector.value;
    audio.load();
  });
  playBtn.addEventListener('click', () => {
    audio.volume = 0.9;
    audio.play();
  });
});
