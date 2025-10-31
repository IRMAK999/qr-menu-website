

const urunVeritabani = {
  "sicak-detay": [
    {
      ad: "Flat White",
      fiyat: "50 TL",
      resim: "menu-inside/31757f90-8b1e-4fc6-b0fa-dcce17d603e5.jpeg"
    },
    {
      ad: "Americano",
      fiyat: "60 TL",
      resim: "menu-inside/Americano.jpeg"
    },
    {
      ad: "Cappuccino",
      fiyat: "70 TL",
      resim: "menu-inside/Cappuccino.jpeg"
    },
    {
      ad: "Cortado",
      fiyat: "90 TL",
      resim: "menu-inside/Cortado.jpeg"
    },
    {
      ad: "Espresso",
      fiyat: "90 TL",
      resim: "menu-inside/Espresso Coffee Recipe.jpeg"
    },
    {
      ad: "Hot Mocha",
      fiyat: "100 TL",
      resim: "menu-inside/Hot Mocha Coffee Recipe.jpeg"
    },
    {
      ad: "Latte",
      fiyat: "180 TL",
      resim: "menu-inside/Latte.jpeg"
    },
    {
      ad: "Lungo",
      fiyat: "160 TL",
      resim: "menu-inside/Lungo.jpeg"
    },
    {
      ad: "MAcchiato",
      fiyat: "140 TL",
      resim: "menu-inside/Macchiato.jpeg"
    },
    {
      ad: "Ristretto",
      fiyat: "85 TL",
      resim: "menu-inside/Ristretto.jpeg"
    }
  ],
  "soguk-detay": [
    {
      ad: "Kola",
      fiyat: "50 TL",
      resim: "soguk-icecekler/cola.jpeg"
    },
    {
      ad: "Cold Brew",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Cold Brew Coffee.jpeg"
    },
    {
      ad: "Fanta",
      fiyat: "50 TL",
      resim: "soguk-icecekler/fanta.jpeg"
    },
    {
      ad: "Gazoz",
      fiyat: "50 TL",
      resim: "soguk-icecekler/gazoz.jpeg" 
    },
    {
      ad: "Ice Cappucino",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Ice Cappuccino.jpeg"
    },
    {
      ad: "Ice Latte",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Ice Latte.jpeg"
    },
    {
      ad: " Ice MAcchiato",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Ice Macchiato.jpeg"
    },
    {
      ad: "Ice Mocha",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Ice Mocha.jpeg"
    },
    {
      ad: "Iced AMericano",
      fiyat: "140 TL",
      resim: "soguk-icecekler/Iced americano.jpeg"
    },
    {
      ad: "Ice Tea",
      fiyat: "140 TL",
      resim: "soguk-icecekler/iced tea.jpeg"
    },
    {
      ad: "Spritte",
      fiyat: "140 TL",
      resim: "soguk-icecekler/sprite.jpeg"
    },
    {
      ad: "su",
      fiyat: "140 TL",
      resim: "soguk-icecekler/su.jpeg"
    },
  ],
  "tatli-detay": [
    {
      ad: "Cheesecake",
      fiyat: "70 TL",
      resim: "5f0a99fa-e525-47e2-8abb-003e02ea7f42.jpeg"
    },
    {
      ad: "Brownie",
      fiyat: "65 TL",
      resim: "resimler/brownie.jpg"
    }
  ]
};


const anaMenu = document.getElementById('ana-menu');
const tumDetaySayfalari = document.querySelectorAll('.menu-detay-sayfasi');
const navbarToggle = document.getElementById('navbar-toggle');

const heroBolumu = document.querySelector('.karsilama-gorseli'); 



function sayfaGoster(sayfaId) {

  // 1. Tüm detay sayfalarını gizle
  tumDetaySayfalari.forEach(function(sayfa) {
    sayfa.style.display = "none";
  });

  // 2. Ana menüyü gizle
  anaMenu.style.display = 'none';

  // 3. Gösterilecek sayfayı bul
  const gosterilecekSayfa = document.getElementById(sayfaId);

  // 4. Bu sayfanın ilgili "urun-grid"ini bul
  const urunGrid = gosterilecekSayfa.querySelector('.urun-grid');

  // 5. O sayfada bir 'urun-grid' var mı? Ve o sayfa için veritabanında veri var mı?
  if (urunGrid && urunVeritabani[sayfaId]) {

    // O zaman önce içini temizle (varsa eskiler)
    urunGrid.innerHTML = '';

    // Veritabanından o sayfanın ürünlerini çek
    const urunler = urunVeritabani[sayfaId];

    // Her bir ürün için HTML oluştur ve gride ekle
    urunler.forEach(function(urun) {

      // Yeni bir "urun-karti" div'i oluştur
      const urunKartiHTML = `
        <div class="urun-karti">
          <img src="${urun.resim}" class="urun-resmi" alt="${urun.ad}">
          <h3 class="urun-adi">${urun.ad}</h3>
          <span class="urun-fiyat">${urun.fiyat}</span>
        </div>
      `;

      // Oluşturduğun bu HTML'i grid'in içine ekle
      urunGrid.innerHTML += urunKartiHTML;
    });
  }
  /* === YENİ KISIM BİTTİ === */

  // 6. O sayfayı göster
  gosterilecekSayfa.style.display = 'block';

  // 7. Gösterilen bölüme kaydır
  gosterilecekSayfa.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  // 8. Navbar'ı kapat
  navbarToggle.checked = false;
}



function anaMenuyeDon() {

  // Tüm detay sayfalarını gizle
  tumDetaySayfalari.forEach(function(sayfa) {
    sayfa.style.display = 'none';
  });

  // Ana menüyü geri göster
  anaMenu.style.display = 'block';
  
  // En üste (hero bölüme) kaydır
  heroBolumu.scrollIntoView({
    behavior: 'smooth'
  });
}


const yukariCikButon = document.getElementById('yukari-cik-buton');

window.onscroll = function() {
  scrollFonksiyonu();
};

function scrollFonksiyonu() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    yukariCikButon.classList.add('goster');
  } else {
    yukariCikButon.classList.remove('goster');
  }
}

function sayfaBasaDon() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}