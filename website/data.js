const posts = [
  {
    id:1,
    title:"Borsaya Yeni Başlayanlar İçin 10 Altın Kural",
    summary:"Lot, emir türleri, stop-loss ve risk yönetimi temellerini öğrenin.",
    cat:"borsa",
    date:"19.07.2025",
    body:`1) Küçük başlayın.\n2) Stop-loss kullanın.\n3) Portföyünüzü çeşitlendirin.\n4) Kaldıraçtan uzak durun.\n5) Haber akışını takip edin.\n6) Temettü ödeyen hisseleri tercih edin.\n7) Duygularınızı kontrol edin.\n8) Yıllık raporları okuyun.\n9) Yatırım günlüğü tutun.\n10) Sürekli eğitim alın.`
  },
  {
    id:2,
    title:"Finansal Okuryazarlık: Bütçe ve Yatırım",
    summary:"Gelir-gider tablosu nasıl oluşturulur? Yatırıma ayıracağınız parayı nasıl belirlersiniz?",
    cat:"egitim",
    date:"18.07.2025",
    body:`Finansal hedefiniz olmadan yatırım yapmak pusulasız denizde yüzmeye benzer.\n\n1) Aylık gelir-gider tablosu oluşturun.\n2) Acil durum fonu (6 aylık gider) ayırın.\n3) Kalan parayı %50 borsa, %30 tahvil, %20 likit fon olarak dağıtın.\n4) Otomatik ödeme talimatı verin; birikimi unutmayın.`
  },

  {
    id:4,
    title:"Şirket Bilançosunu Okumak: Temel Analiz 101",
    summary:"FAVÖK, net kar, borç/öz sermaye oranı gibi başlıca kalemler.",
    cat:"temel",
    date:"16.07.2025",
    body:`Bilanço üç ana bölümden oluşur: Varlıklar, Borçlar, Öz Kaynaklar.\n\n- FAVÖK: Faiz, amortisman ve vergi öncesi kâr.\n- Net Kâr Marjı: Net kâr / toplam gelir.\n- Borç/Öz Sermaye: 0-0,5 ideal; 1 üstü riskli.\n\nÖrnek: X şirketi son çeyrek FAVÖK marjını %8'den %12'ye yükseltmiş ise operasyonel verimlilik artmış demektir.`
  },
  {
    id:5,
    title:"Bitcoin Halving Sonrası Fiyat Modelleri",
    summary:"Tarihsel veriler ışığında 2028 öncesi senaryolar.",
    cat:"kripto",
    date:"15.07.2025",
    body:`2012, 2016 ve 2020 halving'lerinden 12-18 ay sonra BTC yeni ATH yaptı.\n2024 halving'ine göre 2025 sonu – 2026 başı arasında yeni zirve beklentisi.\n\nModel 1: Logaritmik büyüme kanalı üst bandı ≈ $200 k.\nModel 2: Stok-Akış (S2F) sapması %30 geri çekilme ile 2026'da $150 k.\n\nRisk: Regülasyonlar ve makro faiz artışı.`
  },
  {
    id:6,
    title:"Piyasayı etkileyen haberler",
    summary:"Bu egitimde piyasada etkin haberlerin manipülatif etkilerinde n bahsedecegiz",
    cat:"kripto",
    date:"15.07.2025",
  body: `Haberin kaynağını kontrol et (örneğin SEC, Reuters, Bloomberg mi?)\n Resmî açıklamaları beklemeden işlem yapma\n CoinMarketCap, CoinTelegraph, The Block, Decrypt gibi güvenilir siteleri tercih et\n Sosyal medyada bot hesaplara dikkat et\n FOMO (Fırsatı Kaçırma Korkusu) ile hareket etme` 
  },
   {
    id:7,
    title:"Temel finansal verileri anlamak",
    summary:"Tarihsel veriler ışığında 2028 öncesi senaryolar.",
    cat:"temel",
    date:"15.07.2025",
    body:`2012, 2016 ve 2020 halving'lerinden 12-18 ay sonra BTC yeni ATH yaptı.\n2024 halving'ine göre 2025 sonu – 2026 başı arasında yeni zirve beklentisi.\n\nModel 1: Logaritmik büyüme kanalı üst bandı ≈ $200 k.\nModel 2: Stok-Akış (S2F) sapması %30 geri çekilme ile 2026'da $150 k.\n\nRisk: Regülasyonlar ve makro faiz artışı.`
  },
  {
    id:8,
    title:"Borsaya Yeni Başlayanlar İçin 10 Altın Kural",
    summary:"Lot, emir türleri, stop-loss ve risk yönetimi temellerini öğrenin.",
    cat:"borsa",
    date:"19.07.2025",
    img:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=60",
    body:`1) Küçük başlayın.\n2) Stop-loss kullanın.\n3) Portföyünüzü çeşitlendirin.\n4) Kaldıraçtan uzak durun.\n5) Haber akışını takip edin.\n6) Temettü ödeyen hisseleri tercih edin.\n7) Duygularınızı kontrol edin.\n8) Yıllık raporları okuyun.\n9) Yatırım günlüğü tutun.\n10) Sürekli eğitim alın.`
  },
  {
    id:10,
    title:"Bitcoin Halving Sonrası Fiyat Modelleri",
    summary:"Tarihsel veriler ışığında 2028 öncesi senaryolar.",
    cat:"kripto",
    date:"15.07.2025",
    img:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=60",
    body:`2012, 2016 ve 2020 halving'lerinden 12-18 ay sonra BTC yeni ATH yaptı.\n2024 halving'ine göre 2025 sonu – 2026 başı arasında yeni zirve beklentisi.\n\nModel 1: Logaritmik büyüme kanalı üst bandı ≈ $200 k.\nModel 2: Stok-Akış (S2F) sapması %30 geri çekilme ile 2026'da $150 k.\n\nRisk: Regülasyonlar ve makro faiz artışı.`
  }
  
];