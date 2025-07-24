// js/main.js

// ====== 1) Datos de la línea de tiempo ======
const timelineData = [
  {
    year: '2010',
    desc: 'Tras audicionar individualmente, Harry, Louis, Liam, Niall y Zayn son reunidos en The X Factor UK como un grupo. Su química y estilo pop‑rock capturan al público.',
  },
  {
    year: '2010',
    desc: 'Terminan terceros en la competencia (detrás de Matt Cardle y Rebecca Ferguson). Aunque no ganan, consiguen una base de fans que impulsa su carrera.',
  },
  {
    year: '2011',
    desc: 'El 18 de noviembre de 2011 lanzan su álbum debut "Up All Night". Con “What Makes You Beautiful” alcanzan un #1 en Billboard, algo que no lograba un acto británico desde The Beatles.',
  },
  {
    year: '2012',
    desc: 'En noviembre publican "Take Me Home" y a partir de febrero de 2013 inician su gira mundial con más de 120 conciertos en 4 continentes.',
  },
  {
    year: '2013',
    desc: 'Estrenan en cines el documental-concierto "One Direction: This Is Us" (29 agosto). Combina backstage, entrevistas y actuaciones en vivo.',
  },
  {
    year: '2013',
    desc: 'El 25 de noviembre publican "Midnight Memories", con un sonido más maduro y guitarras rockeras; debuta #1 en Reino Unido y EE. UU.',
  },
  {
    year: '2014',
    desc: 'Del abril al octubre hacen la gira "Where We Are" en estadios, 69 conciertos, 3 millones de fans y casi $290 M recaudados.',
  },
  {
    year: '2014',
    desc: 'El 17 de noviembre lanzan su cuarto álbum "FOUR" con éxitos como “Steal My Girl” y “Night Changes”.',
  },
  {
    year: '2015',
    desc: 'Durante la gira "On The Road Again", el 25 de marzo Zayn anuncia su salida para buscar un sonido R&B más personal.',
  },
  {
    year: '2015',
    desc: 'Publican "Made in the A.M." (13 noviembre), su último álbum como cuarteto, con singles “Drag Me Down” y “Perfect”.',
  },
  {
    year: '2016',
    desc: 'El 30 de marzo anuncian un hiato indefinido; cada miembro inicia carrera en solitario.',
  },
  {
    year: '2020',
    desc: 'El 23 de julio celebran 10° aniversario con conciertos online, merch especial y mensajes de agradecimiento.',
  },
  {
    year: '2024',
    desc: 'Tras el fallecimiento de Liam Payne el 24 de octubre de 2024, publican videos tributo compartiendo recuerdos y versos en su honor.',
  },
  {
    year: '2025',
    desc: 'El 23 de julio de 2025 fans organizan listening parties, challenges (#1D15Years) y exposiciones celebrando 15 años de One Direction.',
  }
];

// ====== 2) Interactividad de la línea de tiempo ======
function initTimelineInteraction() {
  document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
      const year = circle.querySelector('.year').textContent;
      const item = timelineData.find(ev => ev.year === year);
      if (item) {
        alert(`${year}\n\n${item.desc}`);
      }
    });
  });
}

// Quiz de 4 opciones (igual que antes)
const quizQuestions = [
  { q: "¿Qué tipo de música prefieres?", opts:["Rock clásico","Pop alegre","R&B melódico","Electropop"], map:["Harry Styles","Niall Horan","Zayn Malik","Liam Payne"] },
  { q: "¿Plan ideal un día libre?", opts:["Leer un libro","Surf y playa","Netflix y comida","Ir al gimnasio"], map:["Louis Tomlinson","Harry Styles","Zayn Malik","Liam Payne"] },
  { q: "Color favorito", opts:["Verde","Negro","Rojo","Rosa"], map:["Niall Horan","Zayn Malik","Louis Tomlinson","Harry Styles"] },
  { q: "Hobby que más te define", opts:["Componer música","Jugar fútbol","Pintar","Cantar"], map:["Liam Payne","Louis Tomlinson","Zayn Malik","Harry Styles"] },
  { q: "Mascota ideal", opts:["Perro","Gato","Hamster","Pez"], map:["Niall Horan","Zayn Malik","Liam Payne","Louis Tomlinson"] },
  { q: "Bebida favorita", opts:["Té","Café","Ambos","Ninguno"], map:["Zayn Malik","Harry Styles","Louis Tomlinson","Niall Horan"] },
  { q: "Introvertido o extrovertido", opts:["Introvertido","Extrovertido","Ambivertido","Depende"], map:["Zayn Malik","Louis Tomlinson","Harry Styles","Niall Horan"] },
  { q: "Ciudad ideal para vivir", opts:["Londres","Los Ángeles","Nueva York","Dublín"], map:["Louis Tomlinson","Harry Styles","Liam Payne","Niall Horan"] },
  { q: "Estilo de ropa", opts:["Vintage","Cómodo","Todo negro","Deportivo"], map:["Harry Styles","Niall Horan","Zayn Malik","Liam Payne"] },
  { q: "Red social favorita", opts:["Instagram","Twitter","TikTok","YouTube"], map:["Zayn Malik","Louis Tomlinson","Harry Styles","Niall Horan"] },
  { q: "Instrumento favorito", opts:["Guitarra","Batería","Piano","Voz"], map:["Niall Horan","Liam Payne","Zayn Malik","Harry Styles"] },
  { q: "Álbum de 1D favorito", opts:["Up All Night","Take Me Home","FOUR","Made in the A.M."], map:["Niall Horan","Zayn Malik","Louis Tomlinson","Harry Styles"] },
  { q: "Shows grandes o íntimos", opts:["Estadios","Acústicos","Teatros","Solo escuchar"], map:["Harry Styles","Niall Horan","Liam Payne","Zayn Malik"] },
  { q: "País que quieres visitar", opts:["Japón","Irlanda","Italia","EEUU"], map:["Zayn Malik","Niall Horan","Louis Tomlinson","Harry Styles"] },
  { q: "Comida ideal", opts:["Pizza","Sushi","Hamburguesas","Casera"], map:["Louis Tomlinson","Zayn Malik","Harry Styles","Niall Horan"] },
  { q: "Rol en grupo", opts:["Líder","Divertido","Tímido","Carismático"], map:["Liam Payne","Louis Tomlinson","Zayn Malik","Harry Styles"] },
  { q: "Cómo te relajas", opts:["Música y velas","Caminar","Con amigos","Videojuegos"], map:["Zayn Malik","Liam Payne","Louis Tomlinson","Niall Horan"] },
  { q: "Poder mágico", opts:["Volar","Leer mentes","Viajar en el tiempo","Hacer reír"], map:["Harry Styles","Liam Payne","Zayn Malik","Louis Tomlinson"] },
  { q: "Tatuaje ideal", opts:["Frase","Símbolos","Nada","Tribal"], map:["Harry Styles","Louis Tomlinson","Niall Horan","Zayn Malik"] },
  { q: "Lema de vida", opts:["Sé tú mismo","La familia","Menos es más","Con pasión"], map:["Harry Styles","Louis Tomlinson","Zayn Malik","Liam Payne"] }
];

let currentIndex = 0;
const score = {};
const quizContainer = document.getElementById("quiz-container");

function renderQuestion() {
  const { q, opts } = quizQuestions[currentIndex];
  quizContainer.innerHTML = `
    <div class="question"><h3>${q}</h3></div>
    <div class="options">
      ${opts.map((opt,i)=>
        `<div class="option" onclick="choose(${i})">${opt}</div>`
      ).join("")}
    </div>
  `;
}

function choose(i) {
  const member = quizQuestions[currentIndex].map[i];
  score[member] = (score[member]||0) + 1;
  currentIndex++;
  if (currentIndex < quizQuestions.length) renderQuestion();
  else showResult();
}

function showResult() {
  const winner = Object.entries(score)
    .sort((a,b)=>b[1]-a[1])[0][0];
  quizContainer.innerHTML = `
    <h3>¡Eres <strong>${winner}</strong>! 🎤</h3>
    <p>¡Gracias por jugar! 💛</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
