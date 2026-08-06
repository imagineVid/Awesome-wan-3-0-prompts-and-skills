/**
 * [INPUT]: 依赖 data/categories.json 的六类 Wan 3.0 Video 工作流 slug
 * [OUTPUT]: 对外提供十四种语言的工作流说明查询函数 workflowDescription
 * [POS]: scripts/utils 的视频分类解释边界，集中管理本地化说明并保持渲染器只关心布局
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const DESCRIPTIONS: Record<string, Record<string, string>> = {
  "camera-direction-shot-design": {
    "en": "Shot briefs built around framing, camera path, blocking, pacing, reveals, and transitions.",
    "es": "Briefs de plano basados en encuadre, recorrido de cámara, blocking, ritmo, revelaciones y transiciones.",
    "pt": "Briefings construídos em torno do enquadramento, percurso da câmara, marcação, ritmo, revelações e transições.",
    "it": "Brief per le inquadrature costruiti su composizione, percorso della camera, blocking, ritmo, rivelazioni e transizioni.",
    "de": "Shot-Briefings rund um Bildausschnitt, Kamerapfad, Blocking, Tempo, Enthüllungen und Übergänge.",
    "fr": "Briefs de plans construits autour du cadrage, du mouvement de caméra, de la mise en scène, du rythme, des révélations et des transitions.",
    "ar": "موجزات لقطات تتمحور حول التأطير ومسار الكاميرا والتوزيع والإيقاع والكشف والانتقالات.",
    "ja": "フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。",
    "ko": "프레이밍, 카메라 경로, 블로킹, 페이싱, 공개 순서, 전환을 중심으로 구성한 샷 브리프입니다.",
    "zh": "围绕构图、镜头路径、调度、节奏、揭示和转场构建的镜头简报。",
    "nl": "Shotbriefings rond kadrering, camerapad, blocking, tempo, onthullingen en overgangen.",
    "ru": "Брифы кадров с композицией, маршрутом камеры, мизансценой, темпом, раскрытиями и переходами.",
    "tr": "Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.",
    "pl": "Briefy ujęć oparte na kadrowaniu, trasie kamery, blockingu, tempie, ujawnieniach i przejściach."
  },
  "dialogue-performance-native-audio": {
    "en": "Performance-led prompts where speech, acting, ambience, music, or synchronized sound carries the scene.",
    "es": "Prompts guiados por la interpretación en los que el habla, la actuación, el ambiente, la música o el sonido sincronizado sostienen la escena.",
    "pt": "Prompts em que a fala, a interpretação, o ambiente sonoro, a música ou o som sincronizado conduzem a cena.",
    "it": "Prompt guidati dalla performance, in cui parlato, recitazione, atmosfera, musica o suono sincronizzato sostengono la scena.",
    "de": "Performance-orientierte Prompts, in denen Sprache, Schauspiel, Atmosphäre, Musik oder synchroner Ton die Szene tragen.",
    "fr": "Prompts centrés sur l'interprétation, où la parole, le jeu, l'ambiance, la musique ou un son synchronisé portent la scène.",
    "ar": "مطالبات يقود فيها الكلام أو التمثيل أو الأجواء أو الموسيقى أو الصوت المتزامن المشهد.",
    "ja": "台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。",
    "ko": "대사, 연기, 분위기음, 음악 또는 동기화된 사운드가 장면을 이끄는 퍼포먼스 중심 프롬프트입니다.",
    "zh": "以对白、表演、环境声、音乐或同步声音推动场景的表演型提示词。",
    "nl": "Performancegerichte prompts waarin spraak, acteren, ambiance, muziek of gesynchroniseerd geluid de scène dragen.",
    "ru": "Промпты на основе исполнения, где речь, актёрская игра, атмосфера, музыка или синхронный звук несут сцену.",
    "tr": "Konuşma, oyunculuk, ambiyans, müzik veya senkron sesin sahneyi taşıdığı performans odaklı promptlar.",
    "pl": "Prompty oparte na występie, w których mowę, aktorstwo, atmosferę, muzykę lub zsynchronizowany dźwięk niesie scena."
  },
  "product-motion-commercial-spots": {
    "en": "Commercial clips that keep a product, offer, garment, dish, device, or brand moment at the center of the motion.",
    "es": "Clips comerciales que mantienen un producto, una oferta, una prenda, un plato, un dispositivo o un momento de marca en el centro del movimiento.",
    "pt": "Clips comerciais que mantêm um produto, uma oferta, uma peça de vestuário, um prato, um dispositivo ou um momento de marca no centro do movimento.",
    "it": "Clip commerciali che mantengono prodotto, offerta, capo d'abbigliamento, piatto, dispositivo o momento di brand al centro del movimento.",
    "de": "Werbeclips, die ein Produkt, Angebot, Kleidungsstück, Gericht, Gerät oder einen Markenmoment ins Zentrum der Bewegung stellen.",
    "fr": "Clips publicitaires qui placent au centre du mouvement un produit, une offre, un vêtement, un plat, un appareil ou un moment de marque.",
    "ar": "مقاطع تجارية يبقى فيها المنتج أو العرض أو الزي أو الطبق أو الجهاز أو لحظة العلامة التجارية محور الحركة.",
    "ja": "製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。",
    "ko": "제품, 오퍼, 의상, 요리, 기기 또는 브랜드 순간을 움직임의 중심에 두는 광고 클립입니다.",
    "zh": "让产品、优惠、服装、菜肴、设备或品牌时刻成为运动中心的商业片段。",
    "nl": "Commerciële clips waarin een product, aanbod, kledingstuk, gerecht, apparaat of merkmoment centraal staat in de beweging.",
    "ru": "Рекламные клипы, в которых продукт, предложение, одежда, блюдо, устройство или брендовый момент находятся в центре движения.",
    "tr": "Ürünü, teklifi, giysiyi, yemeği, cihazı veya marka anını hareketin merkezinde tutan ticari klipler.",
    "pl": "Klipy komercyjne, które stawiają produkt, ofertę, ubranie, danie, urządzenie lub moment marki w centrum ruchu."
  },
  "image-to-video-subject-continuity": {
    "en": "Image-anchored workflows that animate a still while preserving identity, composition, product geometry, or storyboard layout.",
    "es": "Flujos anclados en una imagen que animan un fotograma estático mientras conservan la identidad, la composición, la geometría del producto o el diseño del storyboard.",
    "pt": "Fluxos ancorados numa imagem que animam uma imagem fixa preservando a identidade, a composição, a geometria do produto ou a disposição do storyboard.",
    "it": "Workflow ancorati a un'immagine che animano un fotogramma preservando identità, composizione, geometria del prodotto o layout dello storyboard.",
    "de": "Bildverankerte Workflows, die ein Standbild animieren und dabei Identität, Komposition, Produktgeometrie oder Storyboard-Layout bewahren.",
    "fr": "Workflows ancrés dans une image qui animent un arrêt sur image tout en préservant l'identité, la composition, la géométrie du produit ou la mise en page du storyboard.",
    "ar": "سير عمل يستند إلى صورة لتحريك إطار ثابت مع الحفاظ على الهوية أو التكوين أو هندسة المنتج أو تخطيط لوحة القصة.",
    "ja": "静止画を動かしながら、人物の同一性、構図、製品形状、絵コンテのレイアウトを保つ画像起点のワークフロー。",
    "ko": "정지 이미지를 애니메이션화하면서 인물의 정체성, 구도, 제품 형태 또는 스토리보드 레이아웃을 보존하는 이미지 기반 워크플로입니다.",
    "zh": "以图像为锚点让静帧动起来，同时保留身份、构图、产品结构或分镜布局的工作流。",
    "nl": "Op een afbeelding gebaseerde workflows die een stilstaand beeld animeren en identiteit, compositie, productgeometrie of storyboardlayout behouden.",
    "ru": "Рабочие процессы, оживляющие изображение с сохранением личности, композиции, геометрии продукта или раскадровки.",
    "tr": "Bir sabit görseli canlandırırken kimliği, kompozisyonu, ürün geometrisini veya storyboard yerleşimini koruyan görsel temelli iş akışları.",
    "pl": "Workflowy zakotwiczone w obrazie, które animują still, zachowując tożsamość, kompozycję, geometrię produktu lub układ storyboardu."
  },
  "stylized-motion-visual-effects": {
    "en": "Effects and animation patterns driven by transformations, simulation, surreal physics, graphic motion, or a distinctive media treatment.",
    "es": "Efectos y patrones de animación impulsados por transformaciones, simulación, física surrealista, movimiento gráfico o un tratamiento visual distintivo.",
    "pt": "Padrões de efeitos e animação conduzidos por transformações, simulação, física surrealista, movimento gráfico ou um tratamento visual distinto.",
    "it": "Schemi di effetti e animazione guidati da trasformazioni, simulazioni, fisica surreale, movimento grafico o un trattamento visivo distintivo.",
    "de": "Effekt- und Animationsmuster, die von Transformationen, Simulation, surrealer Physik, grafischer Bewegung oder einer markanten medialen Gestaltung angetrieben werden.",
    "fr": "Effets et motifs d'animation guidés par des transformations, de la simulation, une physique surréaliste, un mouvement graphique ou un traitement visuel distinctif.",
    "ar": "أنماط مؤثرات ورسوم متحركة تقودها التحولات أو المحاكاة أو الفيزياء السريالية أو الحركة الرسومية أو المعالجة الإعلامية المميزة.",
    "ja": "変形、シミュレーション、シュールな物理、グラフィックモーション、独自のメディア処理によるエフェクトとアニメーションのパターン。",
    "ko": "변형, 시뮬레이션, 초현실적 물리, 그래픽 모션 또는 독특한 미디어 처리로 구동되는 효과 및 애니메이션 패턴입니다.",
    "zh": "由变形、模拟、超现实物理、图形运动或独特媒介处理驱动的特效与动画模式。",
    "nl": "Effect- en animatiepatronen rond transformaties, simulatie, surrealistische fysica, grafische beweging of een onderscheidende mediabewerking.",
    "ru": "Паттерны эффектов и анимации на основе трансформаций, симуляции, сюрреалистической физики, графического движения или особой медиатехники.",
    "tr": "Dönüşüm, simülasyon, sürreal fizik, grafik hareket veya ayırt edici medya işlemiyle yönlendirilen efekt ve animasyon kalıpları.",
    "pl": "Wzorce efektów i animacji napędzane transformacjami, symulacją, surrealistyczną fizyką, ruchem graficznym lub charakterystyczną obróbką medium."
  },
  "video-editing-restyling-scene-control": {
    "en": "Existing-video workflows that restyle, extend, add, remove, replace, or redirect part of a scene while protecting continuity.",
    "es": "Flujos de vídeo existente que cambian el estilo, amplían, añaden, eliminan, sustituyen o redirigen parte de una escena mientras protegen la continuidad.",
    "pt": "Fluxos para vídeo existente que mudam o estilo, prolongam, adicionam, removem, substituem ou redirecionam parte de uma cena, protegendo a continuidade.",
    "it": "Workflow su video esistenti che ne cambiano lo stile, li estendono, aggiungono, rimuovono, sostituiscono o reindirizzano una parte della scena proteggendo la continuità.",
    "de": "Workflows mit bestehendem Video, die einen Teil der Szene restylen, verlängern, hinzufügen, entfernen, ersetzen oder neu ausrichten und dabei die Kontinuität schützen.",
    "fr": "Workflows appliqués à une vidéo existante pour en restyler, prolonger, ajouter, supprimer, remplacer ou réorienter une partie de la scène tout en préservant la continuité.",
    "ar": "سير عمل للفيديو الموجود يعيد تصميم الأسلوب أو يمدد المشهد أو يضيف أو يزيل أو يستبدل أو يغيّر اتجاه جزء منه مع حماية الاستمرارية.",
    "ja": "連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。",
    "ko": "연속성을 보호하면서 기존 영상의 스타일을 바꾸고 확장, 추가, 제거, 교체하거나 장면의 방향을 바꾸는 워크플로입니다.",
    "zh": "重塑、延展、添加、移除、替换或改导现有视频场景，同时保护连续性的工作流。",
    "nl": "Workflows voor bestaand videomateriaal die een scène restylen, verlengen, elementen toevoegen, verwijderen, vervangen of omleiden met behoud van continuïteit.",
    "ru": "Работа с готовым видео: рестайлинг, продление, добавление, удаление, замена или перенаправление части сцены с сохранением непрерывности.",
    "tr": "Sürekliliği koruyarak mevcut videoyu yeniden stillendiren, uzatan, ekleyen, kaldıran, değiştiren veya sahnenin bir kısmını yönlendiren iş akışları.",
    "pl": "Workflowy istniejącego wideo, które restylizują, wydłużają, dodają, usuwają, zastępują lub przekierowują część sceny przy ochronie ciągłości."
  }
};

export function workflowDescription(slug: string, locale: string): string {
  return DESCRIPTIONS[slug]?.[locale] || DESCRIPTIONS[slug]?.en || "";
}
