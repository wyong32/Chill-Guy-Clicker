export const levels01to10 = [
  {
    id: 'cookingdom-game-level-1',
    title: 'Cookingdom Level 1 Unang Gabay sa Pizza',
    pageTitle: 'Cookingdom Level 1 Unang Gabay sa Pizza',
    pageSubtitle:
      'Masterin ang mga pangunahing kaalaman sa Cookingdom sa pamamagitan ng paggawa ng iyong unang pizza sa Level 1.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_01.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'Cookingdom-Level-1-First-Pizza-Guide' } },
    iframeUrl: 'https://www.youtube.com/embed/ItLXkQrpelU',
    seo: {
      title: 'Gabay sa Cookingdom Level 1 - Unang Pizza',
      description:
        'Matutong maghanda, magluto, at maghain ng unang pizza sa Cookingdom Level 1. Alamin ang mga batayan ng pagluluto at serbisyo sa customer.',
      keywords: 'cookingdom, level 1, unang pizza, gabay, pangunahing kaalaman, tutorial',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_01.webp',
      levelInfoHtml:
        '<h3>Unang Pizza</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 1 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Walkthrough ng Cookingdom Level 2 Fried Potatoes',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-2' },
          },
        },
      ],
    },
    detailsHtml: `<h2>Panimula ng Laro</h2>
<p>Sa Level 1 ng Cookingdom, matututunan ng mga manlalaro ang paggawa at paghahain ng pizza, isa sa mga pinakapangunahing putahe sa laro. Pokus ng lebel na ito ang pagpapakilala sa proseso ng pagluluto, paghahanda ng sangkap, at pangunahing ritmo ng operasyon ng restawran.</p>

<h2>Layunin ng Level 1</h2>
<p>Kailangan mong gumawa at maghain ng unang pizza sa isang customer. Ang paggawa ng pizza ay may ilang hakbang kabilang ang paghahanda ng sangkap, pagluluto sa oven, at paghahain. Ang layunin ay matugunan ang pangangailangan ng customer nang mabilis at wasto upang makumpleto ang gawain.</p>

<h2>Proseso ng Paggawa ng Pizza</h2>
<h3>Handa ang mga Sangkap ng Pizza:</h3>
<p>Una, tipunin ang mga pangunahing sangkap: pizza base, tomato sauce, keso, at iba pang toppings (tulad ng sausage, kabute).</p>
<ul>
  <li><strong>Pizza Base:</strong> Kumuha ng pizza base mula sa lugar ng sangkap.</li>
  <li><strong>Tomato Sauce:</strong> Ikalat ang tomato sauce nang pantay-pantay sa base.</li>
  <li><strong>Keso:</strong> Budburan ng keso nang pantay-pantay.</li>
</ul>

<h3>Magdagdag ng Toppings:</h3>
<p>Sa Level 1, simple lang ang mga toppings. Gumamit ng mga pangunahing toppings tulad ng sausage o kabute.</p>
<ul>
  <li>Ilagay ang mga toppings sa pizza nang pantay-pantay. Nakakadagdag ito sa lasa at kasiyahan ng customer.</li>
</ul>

<h3>Iluto ang Pizza sa Oven:</h3>
<p>Ilagay ang pizza sa oven.</p>
<p><strong>Paalala:</strong> Mahalaga ang oras ng pagluluto. Ang sobrang pagluto ay magsusunog sa pizza, habang ang kulang ay mag-iiwan ng hilaw na pizza.</p>

<h3>Suriin ang Pagkaluto ng Pizza:</h3>
<p>Obserbahan ang hitsura ng pizza. Kapag ito ay naging golden brown at mabango, handa na ito.</p>
<p>Ang sobrang lutong pizza ay magiging maitim at may masamang lasa, na maaaring magdulot ng pagkabigo sa customer.</p>

<h3>Ihain ang Pizza:</h3>
<p>Kunin ang pizza mula sa oven at ihain agad sa mesa ng customer.</p>
<p>Mahalaga ang timing: Ang matagal na paghihintay ay magbabawas sa kasiyahan ng customer at apektado ang iyong iskor.</p>

<h2>Mga Tip at Teknik</h2>
<ul>
  <li><strong>Pamamahala ng Oras:</strong> Sanayin ang pagsabay-sabay na gawain lalo na sa pagluluto at paghahanda.</li>
  <li><strong>Maghanda Nang Maaga:</strong> Habang naghihintay sa pizza, maghanda ng iba pang sangkap o maglinis ng kusina.</li>
  <li><strong>Paggamit ng Oven:</strong> Pag-aralan ang tamang temperatura para sa bawat pagkain.</li>
  <li><strong>Pasensya ng Customer:</strong> Ang bawat customer ay may limitadong pasensya - bilisan ang serbisyo.</li>
  <li><strong>Pagsasabay-sabay ng Gawain:</strong> Samantalahin ang oras habang nagluluto para sa iba pang preparasyon.</li>
</ul>

<h2>Buod</h2>
<p>Ang paggawa ng unang pizza ay isang panimulang gawain para ipakilala ang mga pangunahing konsepto ng laro. Sa pagtatapos ng Level 1, makakakuha ka ng mga gantimpalang barya at puntos para sa mas masalimuot na mga lebel.</p>`,
  },

  {
    id: 'cookingdom-game-level-2',
    title: 'Cookingdom Antas 2 - Patatas na Pritong Gabay',
    pageTitle: 'Cookingdom Antas 2 - Patatas na Pritong Gabay',
    pageSubtitle: 'Matutong gumawa ng malutong na pritong patatas sa Antas 2 ng Cookingdom.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_02.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-2' },
    },
    iframeUrl: 'https://www.youtube.com/embed/oCegSIHLMNE',
    seo: {
      title: 'Gabay sa Cookingdom Antas 2 - Pritong Patatas',
      description:
        'Masterin ang pagprito ng patatas sa Cookingdom Antas 2. Alamin ang tamang paraan ng pagprito, paghawak ng maraming customer, at pagpapahusay ng kusina.',
      keywords:
        'cookingdom, antas 2, pritong patatas, gabay, pagprito, pamamahala ng oras, kahusayan sa kusina',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_02.webp',
      levelInfoHtml:
        '<h3>Pritong Patatas</h3><p><strong>Kahirapan:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-1',
          title: 'Cookingdom Antas 1<br/>Unang Pizza',
          imageUrl: '/images/guides_01.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-1' },
          },
        },
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom Antas 3 - Rolled Ice Cream Gabay',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-3' },
          },
        },
      ],
    },
    detailsHtml: `
      <h2>Maligayang Pagdating sa Cookingdom Level 2: Gabay at Walkthrough para sa Fried Potatoes</h2>
<p>
  Maligayang pagdating sa <strong>Cookingdom Level 2</strong>, kung saan ang iyong misyon ay gumawa ng perpektong
  <strong>Fried Potatoes</strong> gamit ang tamang mga kagamitan, tamang pagkakasunod-sunod, at tamang timing.
  Ipinapakilala ng level na ito ang mga manlalaro sa intuitive ngunit tumpak na mekaniks ng pagluluto ng Cookingdom sa isang
  relaxed na kapaligiran na walang timer.
</p>
<p>
  Ang walkthrough na ito ay nagbibigay ng eksaktong mga hakbang upang magtagumpay sa <strong>Cookingdom Level 2</strong>,
  na nagdedetalye ng bawat sangkap, aksyon, at tamang paglalagay.
</p>

---

<h2>Kailangang Mga Sangkap</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Patatas</td>
      <td>3</td>
      <td>Nakukuha mula sa mini-game ng pag-aani ng patatas.</td>
    </tr>
    <tr>
      <td>Tubig</td>
      <td>ayon sa pangangailangan</td>
      <td>Ginagamit para sa paghuhugas at blanching.</td>
    </tr>
    <tr>
      <td>Panablas</td>
      <td>1</td>
      <td>Ginagamit para sa pagbabalat ng patatas.</td>
    </tr>
    <tr>
      <td>Kutsilyo</td>
      <td>1</td>
      <td>Ginagamit para sa paghiwa ng patatas upang maging fries.</td>
    </tr>
    <tr>
      <td>Hawakan sa Pagputol</td>
      <td>1</td>
      <td>Pinaglalagyan para sa pagbabalat at paghiwa.</td>
    </tr>
    <tr>
      <td>Saluhan</td>
      <td>1 (asul)</td>
      <td>Para paglagyan ng hiniwang fries bago i-blanch.</td>
    </tr>
    <tr>
      <td>Palayok</td>
      <td>1</td>
      <td>Ginagamit para sa blanching ng fries.</td>
    </tr>
    <tr>
      <td>Takip ng Palayok</td>
      <td>1</td>
      <td>Ginagamit upang pabilisin ang pagpakulo ng tubig.</td>
    </tr>
    <tr>
      <td>Induction Cooktop</td>
      <td>1</td>
      <td>Pinagmumulan ng init para sa blanching at pagprito.</td>
    </tr>
    <tr>
      <td>Spider Strainer / Skimmer</td>
      <td>1</td>
      <td>Ginagamit para alisin ang fries mula sa tubig at mantika.</td>
    </tr>
    <tr>
      <td>Paper Towel</td>
      <td>2 piraso</td>
      <td>Ginagamit para patuyuin ang blanch at pritong patatas.</td>
    </tr>
    <tr>
      <td>Tray</td>
      <td>1 (abo)</td>
      <td>Kasama ng paper towel para patuyuin.</td>
    </tr>
    <tr>
      <td>Prityan</td>
      <td>1</td>
      <td>Ginagamit para sa deep frying ng fries.</td>
    </tr>
    <tr>
      <td>Langis sa Pagluluto</td>
      <td>1 bote</td>
      <td>Para sa pagprito.</td>
    </tr>
    <tr>
      <td>Harina</td>
      <td>1 mangkok</td>
      <td>Para balutin ang fries bago iprito.</td>
    </tr>
    <tr>
      <td>Plastic Container na may Takip</td>
      <td>1</td>
      <td>Ginagamit para i-shake at balutin ng harina ang fries.</td>
    </tr>
    <tr>
      <td>Salt Shaker</td>
      <td>1</td>
      <td>Para sa pag-season ng huling putahe.</td>
    </tr>
    <tr>
      <td>Bote ng Ketchup</td>
      <td>1</td>
      <td>Para sa sawsawan.</td>
    </tr>
    <tr>
      <td>Munting Mangkok para sa Sawasawan</td>
      <td>1</td>
      <td>Para pagsilbihan ng ketchup.</td>
    </tr>
    <tr>
      <td>Plato</td>
      <td>1 (puti)</td>
      <td>Para sa huling presentasyon.</td>
    </tr>
    <tr>
      <td>Tinidor</td>
      <td>1</td>
      <td>Bilang bahagi ng final plating.</td>
    </tr>
  </tbody>
</table>

<h2>Hakbang-hakbang na Gabay sa Fried Potatoes</h2>

<h3>Hakbang 1. Ani ng Patatas (Mini-game)</h3>
<p>
  Pindutin at hawakan ang <strong>tangkay ng halaman ng patatas</strong> para hilahin ang mga patatas mula sa lupa.
  I-drag ang mga mabubuting patatas na nakasabit sa mga ugat papunta sa <strong>sako sa kaliwa</strong> (may markang simbolo ng patatas).
  Iwasan ang sako sa kanan (may markang 'X').
</p>
<p>
  💡 <strong>Tip:</strong> Mabilisang i-drag lahat ng patatas papunta sa tamang sako bago ito bumalik.
</p>

<h3>Hakbang 2. Hugasan ang Patatas</h3>
<p>
  Sa istasyon ng lababo, pindutin ang <strong>buton ng drain plug</strong>. Buksan ang <strong>gripo</strong> sa pamamagitan ng pag-tap para punuin ang lababo ng tubig.
  I-drag ang maruming patatas mula sa sako papunta sa lababo isa-isa. Kapag malinis na (kumikislap), i-drag papunta sa <strong>pink na tray</strong> na malapit.
  Patayin ang gripo.
</p>
<p>
  💡 <strong>Tip:</strong> Siguraduhing hugasan nang mabuti lahat ng patatas hanggang kumislap.
</p>

<h3>Hakbang 3. Balatan at Hiwa-hiwain ang Patatas</h3>
<p>
  Ilagay ang isang patatas sa <strong>cutting board</strong>. Piliin ang <strong>peeler</strong> at i-drag ito sa patatas hanggang sa mabalat nang buo.
  Piliin ang <strong>kutsilyo</strong>. I-drag ito pababa sa gitnang guide, pagkatapos ay paulit-ulit na i-drag ito pahalang sa mga guide para hiwain ang patatas na parang fries.
  Ilagay ang hiniwang fries sa <strong>asul na mangkok</strong>. Ulitin para sa natitirang dalawang patatas.
</p>
<p>
  💡 <strong>Tip:</strong> Sundin nang tama ang mga gabay sa paghiwa para pantay-pantay ang fries.
</p>

<h3>Hakbang 4. Blanch ang fries sa kumukulong tubig</h3>
<p>
  Ilagay ang <strong>palayok</strong> sa ilalim ng gripo at punuin ito ng tubig.
  Ilipat ang palayok sa <strong>induction cooktop</strong>.
  Takpan ang palayok gamit ang <strong>takip</strong> at buksan ang cooktop.
  Maghintay hanggang kumulo ang tubig (makikita sa bula).
  Alisin ang takip at ilagay ang hiniwang fries mula sa asul na mangkok sa kumukulong tubig.
  Hintayin na medyo pumuti ang kulay ng fries (blanched).
  Gamitin ang <strong>spider strainer</strong> para hanguin ang fries at ilagay sa <strong>tray na may paper towel</strong>.
</p>
<p>
  💡 <strong>Tip:</strong> Huwag palagpasin ang pagluluto sa blanching; sandali lang ang kailangan.
</p>

<h3>Hakbang 5. Iprito ang Patatas</h3>
<p>
  Ilagay ang <strong>frying pan</strong> sa cooktop at buksan.
  Maglagay ng <strong>mantika</strong> mula sa bote sa kawali at hintayin na uminit (magkikislap).
  Ibuhos ang <strong>harina</strong> mula sa mangkok sa <strong>plastic container</strong>.
  Ilagay ang blanched fries sa loob ng container.
  Isara ang takip at haluin nang mabuti (pindutin/drag nang mabilis) hanggang pantay ang harina sa fries.
  Buksan ang takip. Ilagay ang mga harina-coated fries sa mainit na mantika sa kawali.
  Iprito hanggang maging gintong kayumanggi.
  Gamitin ang <strong>spider strainer</strong> para hanguin ang lutong fries at ilagay sa bagong paper towel sa tray.
</p>
<p>
  💡 <strong>Tip:</strong> Siguraduhing mainit ang mantika bago ilagay ang fries. Haluin nang mabuti para pantay ang harina.
  Iprito hanggang maging magandang kulay ginto.
</p>

<h3>Hakbang 6. Ihain ang Fried Potatoes</h3>
<p>
  Ilipat ang lutong fries mula sa paper towel papunta sa <strong>puting plato</strong>.
  Piliin ang <strong>salt shaker</strong> at budburan ng asin ang fries.
  Piliin ang <strong>boteng ketchup</strong> at pisilin ang ketchup sa <strong>maliit na mangkok</strong> para sa sawsawan.
  Ilagay ang mangkok ng ketchup sa plato katabi ng fries.
</p>
<p>
  💡 <strong>Tip:</strong> Ayusin nang maayos ang fries, at huwag kalimutang lagyan ng asin at ketchup dip.
</p>

<h2>Mga Tip at Tricks para sa Cookingdom Level 2</h2>
<ul>
  <li>Sa mini-game, siguraduhing ilalagay ang mga patatas sa sako na may simbolo ng patatas lamang.</li>
  <li>Hugasan nang maigi ang bawat patatas sa lababo.</li>
  <li>Balatan nang buo at sundin ang mga gabay sa paghiwa para pantay ang pagluto.</li>
  <li>Ang blanching nang panandalian ay tumutulong upang maging malambot ang loob at malutong ang labas ng fries.</li>
  <li>Siguraduhing mainit nang husto ang mantika bago magprito para sa tamang lutong malutong.</li>
  <li>Haluin nang mabuti ang container para pantay ang harina sa fries.</li>
  <li>Patuyuin nang maayos ang fries pagkatapos blanching at pagprito.</li>
</ul>

<h2>Mga Karaniwang Pagkakamali na Iwasan sa Cookingdom Level 2</h2>
<ul>
  <li>Paglalagay ng patatas sa maling sako habang nag-aani.</li>
  <li>Pagkakamaling hindi paghuhugas o pagbabalat ng patatas.</li>
  <li>Pagpuputol ng fries nang masyadong makapal o hindi pantay.</li>
  <li>Paglalagay ng fries sa malamig na tubig para sa blanching o malamig na mantika para sa pagprito.</li>
  <li>Pagluluto nang sobra o kulang sa oras habang blanching o pagprito.</li>
  <li>Hindi wastong pagbalot ng fries gamit ang harina.</li>
  <li>Pagkakamaling hindi pagdagdag ng asin o ketchup sa paghahain.</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-3',
    title: 'Cookingdom Antas 3 Gabay – Ice Cream na Pinagulong',
    pageTitle: 'Cookingdom Antas 3 Gabay – Ice Cream na Pinagulong',
    pageSubtitle:
      'Masterin ang sining ng paggawa ng pinagulong na ice cream sa Antas 3 ng Cookingdom.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_03.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-3' },
    },
    iframeUrl: 'https://www.youtube.com/embed/AKOuNnLSb88',
    seo: {
      title: 'Gabay sa Cookingdom Antas 3 – Ice Cream na Pinagulong',
      description:
        'Matutunan kung paano gumawa ng ice cream na pinagulong sa Antas 3 ng Cookingdom. Sundan ang mga tip sa pagyeyelo, pag-roll, pagdekorasyon, at mabilis na pagsisilbi sa mga customer.',
      keywords:
        'cookingdom, antas 3, ice cream na pinagulong, gabay, pagyeyelo, toppings, panghimagas, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_03.webp',
      levelInfoHtml:
        '<h3>Ice Cream na Pinagulong</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom Antas 2 Gabay – Piniritong Patatas',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-2' },
          },
        },
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom Antas 4 Gabay – Simpleng Salad',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-4' },
          },
        },
      ],
    },
    detailsHtml: `
      <h2>Maligayang Pagdating sa Cookingdom Level 3: Gabay at Walkthrough para sa Rolled Ice-Cream</h2>
<p>
  Maligayang pagdating sa <strong>Cookingdom Level 3</strong>, kung saan ang iyong misyon ay gumawa ng perpektong
  <strong>rolled ice cream</strong> gamit ang tamang mga kagamitan, tamang pagkakasunod-sunod, at tamang timing.
  Ipinapakilala ng level na ito ang mga manlalaro sa intuitive ngunit eksaktong mekaniks ng pagluluto ng Cookingdom
  sa isang relaxed na kapaligiran na walang timer.
</p>
<p>
  Ang walkthrough na ito ay nagbibigay sa iyo ng eksaktong mga hakbang upang magtagumpay sa <strong>Cookingdom Level 3</strong>,
  na nagdedetalye ng bawat sangkap, aksyon, at tamang lugar na kinakailangan.
</p>

<h2>Mga Kailangan na Sangkap</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ice Cream Base (Puti)</td>
      <td>4 na scoop kabuuan (2 bawat mangkok)</td>
      <td>Ang pangunahing base para sa rolled ice cream.</td>
    </tr>
    <tr>
      <td>Saging</td>
      <td>Tinatayang 1/2</td>
      <td>Hiniwa, para sa unang variation.</td>
    </tr>
    <tr>
      <td>Kiwi</td>
      <td>Tinatayang 1/2</td>
      <td>Dinice, para sa ikalawang variation.</td>
    </tr>
    <tr>
      <td>Gatas</td>
      <td>1 karton</td>
      <td>Ibubuhos sa halo sa malamig na plato (ginagamit ng dalawang beses).</td>
    </tr>
    <tr>
      <td>Makukulay na Sprinkles/Kendi Bits</td>
      <td>1 pinggan</td>
      <td>Ginagamit bilang toppings para sa parehong mangkok.</td>
    </tr>
    <tr>
      <td>Mga Ipil-ipil na Chocolate Syrup</td>
      <td>1 pinggan</td>
      <td>Pre-made swirls bilang topping para sa parehong mangkok.</td>
    </tr>
    <tr>
      <td>Chocolate Bars</td>
      <td>1 pinggan</td>
      <td>Mga piraso na ginamit bilang topping para sa parehong mangkok.</td>
    </tr>
    <tr>
      <td>Wafer Sticks/Pocky</td>
      <td>1 tasa</td>
      <td>Ginagamit bilang garnish na topping para sa parehong mangkok.</td>
    </tr>
    <tr>
      <td>Mangkuk na Pang-hain (Bughaw)</td>
      <td>2</td>
      <td>Para sa paglalagay ng tapos na rolled ice cream.</td>
    </tr>
  </tbody>
</table>

<h2>Hakbang-hakbang na Walkthrough ng Rolled Ice-Cream</h2>

<h3>Hakbang 1. Idagdag ang Base at Prutas</h3>
<p>
  Gamit ang scoop, ilagay ang <strong>dalawang scoop ng puting ice cream base</strong> sa malamig na plato.
  Piliin ang alinman sa <strong>saging o kiwi</strong> at ilagay ang mga piraso ng prutas sa base.
</p>
<p>
  💡 <strong>Tip:</strong> Siguraduhing idagdag ang prutas bago haluin. Lalabas ang icon ng puso bilang kumpirmasyon ng tamang paglalagay.
</p>

<h3>Hakbang 2. Hiwain at Haluin ang Prutas</h3>
<p>
  Gamit ang <strong>dalawang spatula</strong>, paulit-ulit na hiwain ang prutas sa ice cream base sa malamig na plato, haluing mabuti.
</p>
<p>
  💡 <strong>Tip:</strong> Haluin hanggang sa maging pantay ang prutas at base. Lalabas ang icon ng puso kapag sapat na ang paghahalo.
</p>

<h3>Hakbang 3. Ibuhos ang Gatas 🥛</h3>
<p>
  Ibuhos ang <strong>gatas</strong> mula sa karton sa ibabaw ng hinabing prutas at ice cream mixture sa plato.
</p>
<p>
  💡 <strong>Tip:</strong> Ibuhos nang pantay-pantay sa buong mixture. Maghintay sa kumpirmasyon ng icon ng puso.
</p>

<h3>Hakbang 4. Pantayin ang Mixture nang Manipis</h3>
<p>
  Mabilis na gamitin ang <strong>spatula</strong> para pantayin ang likidong mixture sa isang <strong>manipis at pantay na parihaba</strong>
  sa buong malamig na plato. Gamitin ang spatula para gawing patayong linya at hatiin ang layer sa mga strip.
</p>
<p>
  💡 <strong>Tip:</strong> Mabilisang gawin bago ito tumigas. Mahalaga ang manipis at pantay na layer para sa magandang gulungan.
  Lalabas ang icon ng puso pagkatapos mapantay.
</p>

<h3>Hakbang 5. I-roll ang Ice Cream</h3>
<p>
  Ilagay ang isang <strong>spatula</strong> sa ilalim ng isang strip. Itulak nang matatag ng mga 45-degree na anggulo
  upang mailabas mula sa plato ang layer ng ice cream at ito ay gumulong. Ulitin para sa lahat ng strip.
</p>
<p>
  💡 <strong>Tip:</strong> Mahalaga ang tamang pressure at anggulo para sa maayos na gulungan. Lalabas ang icon ng puso kapag lahat ng strip ay na-roll.
</p>

<h3>Hakbang 6. Ilipat ang mga Gulungan sa Mangkuk</h3>
<p>
  Maingat na gamitin ang <strong>spatula</strong> para kunin ang bawat gulung na ice cream at ilagay ito ng patayo sa
  <strong>bughaw na mangkuk</strong>.
</p>
<p>
  💡 <strong>Tip:</strong> Ayusin nang maayos ang mga gulungan para mapuno ang mangkuk.
</p>

<h3>Hakbang 7. Idagdag ang Toppings 🎉</h3>
<p>
  Budburan ang <strong>makukulay na candy bits</strong> sa ibabaw ng mga gulungan ng ice cream sa mangkuk.
  Idagdag ang <strong>chocolate syrup swirls</strong>. Sa huli, ilagay ang mga piraso ng <strong>chocolate bar</strong> at <strong>wafer sticks</strong>.
</p>
<p>
  💡 <strong>Tip:</strong> Sundin ang tamang pagkakasunod-sunod ng toppings: Sprinkles -> Syrup Swirls -> Chocolate/Wafers.
  Lalabas ang icon ng puso pagkatapos idagdag ang syrup at chocolate/wafer.
</p>

<h3>Hakbang 8. Ulitin para sa Pangalawang Variation</h3>
<p>
  Gumawa ng pangalawang mangkuk ng rolled ice cream gamit ang <em>ibang</em> prutas (kung ginamit ang saging sa una,
  kiwi naman ngayon, at kabaliktaran). Sundin lahat ng naunang hakbang (1-7) para sa pangalawang mangkuk.
</p>
<p>
  💡 <strong>Tip:</strong> Kailangan ng customer ang parehong variation (Saging at Kiwi) para makumpleto ang level.
</p>

<h2>Mga Tip at Trick para sa Cookingdom Level 3</h2>
<ul>
  <li>✔️ <strong>Mahalaga ang bilis</strong> sa pag-spread ng mixture sa malamig na plato.</li>
  <li>✔️ Siguraduhing <strong>manipis na manipis</strong> ang layer para madaling i-roll.</li>
  <li>✔️ Mahalaga ang <strong>tamang anggulo ng scraping</strong> para sa perpektong gulungan na hindi mababasag.</li>
  <li>✔️ Huwag kalimutan gawin ang <strong>parehong banana at kiwi variations</strong> para matuwa ang customer.</li>
  <li>✔️ Magdagdag ng toppings ayon sa <strong>tamang pagkakasunod-sunod</strong> na ipinakita sa video.</li>
</ul>

<h2>Karaniwang Mali na Iwasan sa Cookingdom Level 3</h2>
<ul>
  <li>Pagkakapal ng ice cream base na masyadong makapal, kaya mahirap i-roll.</li>
  <li>Hindi sapat na paghahalo ng prutas at base.</li>
  <li>Pag-roll nang mabagal o mali ang pressure/anggulo na nagreresulta sa pagkabasag ng gulungan.</li>
  <li>Pagkakalimot magdagdag ng gatas.</li>
  <li>Hindi paglalagay ng lahat ng toppings o maling pagkakasunod-sunod ng mga ito.</li>
  <li>Paghahanda ng isa lang sa dalawang kinakailangang prutas variation.</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-4',
    title: 'Cookingdom Antas 4 Gabay sa Simpleng Salad',
    pageTitle: 'Cookingdom Antas 4 Gabay sa Simpleng Salad',
    pageSubtitle: 'Maghanda ng sariwa at malusog na Simpleng Salad sa Cookingdom Antas 4.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_04.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-4' },
    },
    iframeUrl: 'https://www.youtube.com/embed/gwdtg5SY7qo',
    seo: {
      title: 'Gabay sa Cookingdom Antas 4 — Simpleng Salad',
      description:
        'Matutunan kung paano gumawa ng sariwang Simpleng Salad sa Cookingdom Antas 4. Sundan ang gabay na ito para mabilis at epektibong magtadtad, maghalo, at maghain ng salad.',
      keywords:
        'cookingdom, antas 4, simpleng salad, gabay, pagtadtad, paghahalo, malusog na pagkain, bilis sa kusina',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_04.webp',
      levelInfoHtml:
        '<h3>Simpleng Salad</h3><p><strong>Antas ng Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 2–3 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom Antas 3 Gabay sa Rolled Ice-Cream',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-3' },
          },
        },
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom Antas 5 Gabay sa Grilled Fish',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-5' },
          },
        },
      ],
    },
    detailsHtml: `
    <h2>Maligayang Pagdating sa Cookingdom Level 4: Simpleng Salad Walkthrough & Gabay 🥗</h2>
<p>
  Maligayang pagdating sa <strong>Cookingdom Level 4</strong>, kung saan ang iyong misyon ay gumawa ng perpektong
  <strong>Simpleng Salad</strong> gamit ang tamang kagamitan, pagkakasunod-sunod, at tamang oras. Ipinapakilala ng level na ito
  ang mga manlalaro sa intuitive ngunit tumpak na mekaniks ng pagluluto sa Cookingdom sa isang relaxed na kapaligiran na walang timer.
</p>
<p>
  Ang walkthrough na ito ay nagbibigay ng eksaktong mga hakbang upang magtagumpay sa <strong>Cookingdom Level 4</strong>,
  na nagdedetalye ng bawat sangkap, aksyon, at tamang pag-aayos na kinakailangan.
</p>

<h2>Mga Kinakailangang Sangkap</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lettuce (Letsugas)</td>
      <td>1 ulo</td>
      <td>Kailangang hugasan at hiwain.</td>
    </tr>
    <tr>
      <td>Avocado</td>
      <td>1</td>
      <td>Kailangang hugasan, balatan, at hiwain.</td>
    </tr>
    <tr>
      <td>Kamatis</td>
      <td>1</td>
      <td>Kailangang hugasan at hiwain.</td>
    </tr>
    <tr>
      <td> Sibuyas</td>
      <td>1</td>
      <td>Kailangang hugasan at hiwain.</td>
    </tr>
    <tr>
      <td>Red Cabbage (Pulangkabis)</td>
      <td>1 piraso</td>
      <td>Kailangang hugasan at hiwain.</td>
    </tr>
    <tr>
      <td>Carrot (Karot)</td>
      <td>1</td>
      <td>Kailangang hugasan, balatan, at hiwain.</td>
    </tr>
    <tr>
      <td>Tubig</td>
      <td>Gaano man ang kailangan</td>
      <td>Ginagamit sa paghuhugas ng mga gulay sa lababo.</td>
    </tr>
    <tr>
      <td>Panabong Pang-balatan (Peeler)</td>
      <td>1</td>
      <td>Ginagamit para sa pagbabalat ng karot at avocado.</td>
    </tr>
    <tr>
      <td>Kutsilyo</td>
      <td>1</td>
      <td>Ginagamit sa paghiwa ng lahat ng gulay.</td>
    </tr>
    <tr>
      <td>Tabla sa Pagputol</td>
      <td>1</td>
      <td>Hulugan para sa pagbabalat at paghiwa.</td>
    </tr>
    <tr>
      <td>Mga Lalagyan</td>
      <td>3</td>
      <td>
        Pansamantalang lagayan para sa mga hugas at inihandang gulay (berde, rosas, at lila na mga gilid).
      </td>
    </tr>
    <tr>
      <td>Mangkuk para sa Paghahalo</td>
      <td>1 (lila)</td>
      <td>Ginagamit para pagsamahin at ihalo ang mga sangkap ng salad.</td>
    </tr>
    <tr>
      <td>Mga Sandok/Panghalo</td>
      <td>2 (kahoy)</td>
      <td>Ginagamit sa paghahalo ng salad.</td>
    </tr>
    <tr>
      <td>Plato para sa Paghain</td>
      <td>1 (may lila na gilid)</td>
      <td>Para sa huling presentasyon.</td>
    </tr>
    <tr>
      <td>Malalaking Dahon ng Lettuce</td>
      <td>2-3</td>
      <td>Ginagamit bilang base sa pagplato ng salad.</td>
    </tr>
    <tr>
      <td>Salad Dressing</td>
      <td>1 bote</td>
      <td>Kewpie style na bote, ginagamit para sa huling pagbudbod.</td>
    </tr>
  </tbody>
</table>

<h2>Hakbang-hakbang na Gabay sa Simpleng Salad</h2>

<h3>Hakbang 1. Hugasan ang Mga Gulay</h3>
<p>
  Buksan ang <strong>gripo</strong> sa lababo. Isa-isang ilagay ang <strong>lettuce, avocado, kamatis, sibuyas, pulangkabis, at karot</strong> sa lababo.
  Hintayin na kumislap ang bawat isa na nangangahulugang malinis na ito. Ilagay ang mga hinugasan na gulay sa <strong>pansamantalang mga lalagyan</strong>.
  Patayin ang gripo.
</p>
<p>
  💡 <strong>Tips:</strong> Siguraduhing kumislap ang bawat gulay bago ilabas mula sa lababo.
</p>

<h3>Hakbang 2. Hiwaing ang Lettuce</h3>
<p>
  Ilagay ang hinugasan na <strong>lettuce</strong> sa <strong>tabla sa pagputol</strong>. Piliin ang <strong>kutsilyo</strong>.
  Sundan ang mga gabay sa screen para hiwain ang lettuce. Ilipat ang hiniwang lettuce sa <strong>berdeng lalagyan</strong>.
</p>
<p>
  💡 <strong>Tips:</strong> Sundan nang maayos ang mga gabay upang makuha ang tamang sukat at hugis.
</p>

<h3>Hakbang 3. Hiwaing ang Pulang Kabis</h3>
<p>
  Ilagay ang hinugasan na <strong>pulangkabis</strong> sa tabla sa pagputol. Piliin ang kutsilyo at sundan ang mga gabay para sa paghiwa.
  Ilipat ang hiniwang pulangkabis sa <strong>lilang lalagyan na may gilid</strong>.
</p>
<p>
  💡 <strong>Tips:</strong> Ang tamang paghiwa ayon sa gabay ay mahalaga para sa wastong pag-shred.
</p>

<h3>Hakbang 4. Hiwaing ang Sibuyas</h3>
<p>
  Ilagay ang hinugasan na <strong>sibuyas</strong> sa tabla sa pagputol. Piliin ang kutsilyo at sundan ang gabay para hiwain; ang balat ay kusang matatanggal.
  Ilipat ang hiniwang sibuyas sa <strong>rosas na lalagyan na may gilid</strong>.
</p>
<p>
  💡 <strong>Tips:</strong> Ang paghiwa ayon sa gabay ay awtomatikong nagtatanggal ng balat.
</p>

<h3>Hakbang 5. Hiwaing ang Kamatis</h3>
<p>
  Ilagay ang hinugasan na <strong>kamatis</strong> sa tabla sa pagputol. Piliin ang kutsilyo at sundan ang gabay sa paghiwa.
  Ilipat ang hiniwang kamatis sa rosas na lalagyan.
</p>
<p>
  💡 <strong>Tips:</strong> Ang matatag na paghiwa ayon sa linya ay nagreresulta ng perpektong hiwa.
</p>

<h3>Hakbang 6. Balatan at Hiwaing ang Karot</h3>
<p>
  Ilagay ang hinugasan na <strong>karot</strong> sa tabla sa pagputol. Piliin ang <strong>panabong pang-balatan</strong> at balatan ang karot nang buo.
  Palitan sa kutsilyo at sundan ang gabay para hiwain. Ilipat ang hiniwang karot sa lilang lalagyan na may gilid.
</p>
<p>
  💡 <strong>Tips:</strong> Siguraduhing lubos na nabalatan ang karot bago hiwain.
</p>

<h3>Hakbang 7. Balatan at Hiwaing ang Avocado</h3>
<p>
  Ilagay ang hinugasan na <strong>avocado</strong> sa tabla sa pagputol. Piliin ang panabong pang-balatan at balatan ang avocado.
  Palitan sa kutsilyo at sundan ang gabay para hiwain (kusang tinatanggal ang buto).
  Ilipat ang hiniwang avocado sa berdeng lalagyan.
</p>
<p>
  💡 <strong>Tips:</strong> Mas madali ang paghiwa kapag nauna nang nabalatan; sundan ang gabay.
</p>

<h3>Hakbang 8. Haluin ang Salad</h3>
<p>
  Lalabas ang eksena kay Chef Capybara. Ilagay lahat ng inihandang sangkap
  (hiniwang lettuce, pulangkabis, sibuyas, kamatis, karot, at avocado) mula sa mga lalagyan
  sa malaking <strong>lilang mangkuk para sa paghahalo</strong>. Gamitin ang dalawang kahoy na sandok para haluin ang salad
  sa pamamagitan ng pag-tap o paghila hanggang mapuno ang progress bar.
</p>
<p>
  💡 <strong>Tips:</strong> Siguraduhing lahat ng sangkap ay nasa mangkuk bago haluin nang mabuti.
</p>

<h3>Hakbang 9. Ihain at Lagyan ng Dressing ang Salad</h3>
<p>
  Ayusin ang <strong>malalaking dahon ng lettuce</strong> sa <strong>plato para sa paghain</strong> bilang base.
  Ibuhos ang hinalong salad mula sa lilang mangkuk sa ibabaw ng mga dahon ng lettuce. Piliin ang
  <strong>boteng salad dressing</strong> at ipahid ang dressing sa salad gamit ang crisscross na pattern.
</p>
<p>
  💡 <strong>Tips:</strong> Gumawa ng magandang base gamit ang lettuce at pantay-pantayin ang dressing gaya ng ipinakita.
</p>

<h2>Mga Tips at Tricks para sa Cookingdom Level 4</h2>
<ul>
  <li>✔️ Hugasan ang mga gulay hanggang kumislap para siguraduhing malinis.</li>
  <li>✔️ Sundin nang maingat ang mga gabay sa pagputol upang makuha ang tamang sukat at hugis.</li>
  <li>✔️ Huwag kalimutan balatan ang karot at avocado bago hiwain.</li>
  <li>✔️ Haluin ang salad hanggang mapuno ang progress bar.</li>
  <li>✔️ Gamitin ang malalaking dahon ng lettuce bilang dekorasyon at base sa pagplato.</li>
  <li>✔️ Sundin ang crisscross na pattern sa paglalagay ng dressing para sa pinakamagandang presentasyon.</li>
</ul>

<h2>Karaniwang Mali na Iwasan sa Cookingdom Level 4</h2>
<ul>
  <li>Hindi maingat na paghuhugas ng lahat ng gulay.</li>
  <li>Pagkakaligtaan ng pagbabalat ng karot o avocado.</li>
  <li>Maling paghiwa ng mga gulay (hindi pagsunod sa gabay).</li>
  <li>Paglalagay ng mga sangkap sa mangkuk sa maling pagkakasunod-sunod (bagamat kadalasan ay walang penalty).</li>
  <li>Hindi sapat na paghahalo ng salad (hindi napupuno ang progress bar).</li>
  <li>Pagkakaligtaan ng paglalagay ng base ng dahon ng lettuce sa plato.</li>
  <li>Hindi paglalagay o magulo ang paglalagay ng salad dressing.</li>
</ul>

    `,
  },

  {
    id: 'cookingdom-game-level-5',
    title: 'Cookingdom Antas 5: Gabay sa Inihaw na Isda',
    pageTitle: 'Cookingdom Antas 5: Gabay sa Inihaw na Isda',
    pageSubtitle: 'Masterin ang pag-ihaw ng isda sa Antas 5 ng Cookingdom.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_05.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-5' },
    },
    iframeUrl: 'https://www.youtube.com/embed/x8l4-Iu40Ek',
    seo: {
      title: 'Cookingdom Gabay Antas 5: Inihaw na Isda | Mga Tips at Estratehiya',
      description:
        'Alamin kung paano mag-ihaw ng isda nang tama sa Antas 5 ng Cookingdom. Matutunan ang kontrol sa init, tamang oras ng pagluluto, at pagseserbisyo sa mga customer.',
      keywords:
        'cookingdom, antas 5, inihaw na isda, gabay, grilling, kontrol sa init, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_05.webp',
      levelInfoHtml:
        '<h3>Inihaw na Isda</h3><p><strong>Kahirapan:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom Antas 4: Gabay sa Simpleng Salad',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-4' },
          },
        },
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom Antas 6: Gabay sa Cafe Espresso',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-6' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
<p>Sa Cookingdom, bawat antas ay may bagong hamon sa pagluluto. Sa Antas 5, kailangan mong magluto ng Inihaw na Isda. Kumpara sa mga naunang antas, nangangailangan ito ng maingat na pagsubaybay sa oras at kontrol sa init. Dapat mong masterin ang tamang teknik sa pag-ihaw, tiyaking luto nang tama ang isda, at agad na ihain ito upang mapanatiling masaya ang mga customer.</p>
<p>Habang sumusulong ka sa Cookingdom, mas nagiging komplikado ang mga resipe at tumataas ang pangangailangan ng customer. Sa antas na ito, ipinapakilala ang pag-ihaw bilang mahalagang teknik, kaya't susubukin nito ang iyong kakayahan sa pamamahala ng oras.</p>

<h2 id="goal">Mga Layunin sa Antas 5</h2>
<ul>
  <li><strong>Lutuin ang Inihaw na Isda:</strong> Matutunan kung paano lutuin ang isda nang tama. Binibigyan ka ng Cookingdom ng mga kasangkapang pangkontrol sa init, ngunit dapat mong bantayan ang isda upang hindi ito masunog o hilaw.</li>
  <li><strong>Kontrolin ang Init:</strong> Ang pag-ihaw ng isda ay nangangailangan ng eksaktong init. Kailangan mong makuha ang balanseng pagkaluto — malutong sa labas at malambot sa loob.</li>
  <li><strong>Mabilis na Serbisyuhan ang mga Customer:</strong> Habang dumarami ang mga customer, kakailanganin mong ayusin ang mga order nang sabay-sabay habang pinapanatiling perpekto ang bawat putahe.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Pagluto ng Inihaw na Isda</h2>
<ol>
  <li>
    <h3>Ihanda ang Isda:</h3>
    <p>Kunin ang isda mula sa mga sangkap at ilagay ito sa ihawan. Sa Cookingdom, maaaring may iba’t ibang uri ng isda — siguraduhing piliin ang tamang uri base sa hinihingi ng customer.</p>
    <p><strong>Tip:</strong> Kung may partikular na isda ang customer, ihanda agad ito upang maiwasan ang pagkaantala.</p>
  </li>
  <li>
    <h3>Timplahan ang Isda:</h3>
    <p>Pagkalagay sa ihawan, timplahan ang isda ayon sa hiling ng customer — maaaring asin, paminta, o iba pang pampalasa.</p>
    <p><strong>Tip:</strong> Huwag labis ang pampalasa upang hindi matabunan ang natural na lasa ng isda.</p>
  </li>
  <li>
    <h3>Ihawin ang Isda:</h3>
    <p>Bantayan ang isda habang iniihaw. Dapat mo itong lutuin hanggang magkulay ginto ang labas at manatiling malambot ang loob.</p>
    <p><strong>Tip:</strong> Kapag nagsisimula nang kumintab at bumula ang isda, oras na para suriin ito. Huwag hintaying masunog!</p>
  </li>
  <li>
    <h3>Ihain ang Isda:</h3>
    <p>Kapag lutong-luto na, alisin ito mula sa ihawan at ilagay sa pinggan. Maaaring magdagdag ng palamuti tulad ng lemon, gulay, o side dish para mas maganda ang presentasyon.</p>
    <p>Ihain agad upang hindi mabawasan ang kasiyahan ng customer.</p>
  </li>
</ol>

<h2 id="tips">Mga Tips at Tricks</h2>
<ul>
  <li><strong>Masterin ang Oras sa Pag-ihaw:</strong> Ang susi sa tamang pag-ihaw ay ang tamang timing. Kapag sobra sa luto, tuyo na ito; kapag kulang, hilaw pa. Bantayan ang kulay at texture bilang palatandaan.</li>
  <li><strong>Mabisang Pamamahala ng Order:</strong> Kapag marami nang customer, kailangang ayusin ang mga order ayon sa oras ng pagdating. Maghanda ng sangkap bago pa dumagsa ang order.</li>
  <li><strong>I-upgrade ang Kagamitan sa Kusina:</strong> Sa pag-usad mo, makakakuha ka ng bagong kagamitan. Ang mas mahusay na ihawan ay makakatulong sa bilis at kalidad ng pagluto.</li>
  <li><strong>Gamitin ang mga Booster:</strong> Sa ilang antas, maaari kang gumamit ng mga booster o speedup para mapabilis ang pagluto o paghahanda. Makakatulong ito lalo na sa panahon ng rush orders.</li>
  <li><strong>Siyempre, Kasiyahan ng Customer:</strong> Ang layunin sa Cookingdom ay mapasaya ang customer. Agarang serbisyo at masarap na pagkain ang susi sa mataas na score.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Antas 5 ng Cookingdom, ipapakilala sa iyo ang hamon ng pag-ihaw ng isda. Mahalaga ang kontrol sa init at oras upang makamit ang perpektong luto. Sa pamamagitan ng tamang estratehiya, pag-upgrade ng kusina, at paggamit ng booster, makakamit mo ang tagumpay sa antas na ito.</p>
<p>Matapos malampasan ang antas, magbubukas ka ng mga bagong kagamitan at resipe. Patuloy lamang sa pagsasanay upang maging bihasa sa pagluluto at pamamahala ng oras!</p>
`,
  },

  {
    id: 'cookingdom-game-level-6',
    title: 'Gabay sa Cookingdom Antas 6: Espresso',
    pageTitle: 'Gabay sa Cookingdom Antas 6: Espresso',
    pageSubtitle: 'Alamin kung paano gumawa ng perpektong espresso sa Antas 6 ng Cookingdom.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_06.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-6' },
    },
    iframeUrl: 'https://www.youtube.com/embed/jZaXNSTn1Ng',
    seo: {
      title: 'Cookingdom Antas 6: Espresso | Mga Tip at Estratehiya',
      description:
        'Masterin ang paggawa ng espresso sa Antas 6 ng Cookingdom. Gabay sa paggiling, pag-brew, at pamamahala ng order.',
      keywords: 'cookingdom, antas 6, espresso, kape, gabay, paghahanda, time management',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_06.webp',
      levelInfoHtml:
        '<h3>Espresso</h3><p><strong>Kahirapan:</strong> Katamtaman</p><p><strong>Oras ng paglalaro:</strong> 1.5 minuto</p><p><strong>Gantimpala:</strong> 4 na bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-5',
          title: 'Gabay sa Cookingdom Antas 5: Inihaw na Isda',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-5' },
          },
        },
        {
          id: 'cookingdom-game-level-7',
          title: 'Gabay sa Cookingdom Antas 7: Sunny-Side Up',
          imageUrl: '/images/guides_07.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-7' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Antas</h2>
<p>Ang bawat antas sa Cookingdom ay nagpapakilala ng bagong hamon at resipe. Sa Antas 6, matututuhan mong gumawa ng espresso — isang mahalagang kasanayan upang mapalawak ang menu ng iyong café at mapasaya ang mga customer. Isa ito sa mga pangunahing inumin na madalas lilitaw sa mga susunod na antas.</p>
<p>Magsisimula ka na ring tumanggap ng mas mahihirap na order at kailangang maghanda ng maraming inumin nang sabay-sabay. Ito na ang tamang oras para hasain ang iyong time management skills at maging mas episyente sa kusina!</p>

<h2 id="goal">Mga Layunin sa Antas 6</h2>
<ul>
  <li><strong>Gumawa ng espresso:</strong> Kailangang ma-master ang tamang brewing technique. Kabilang dito ang wastong paggiling, tamang dami ng coffee grounds, at pare-parehong pressure ng tubig.</li>
  <li><strong>Pamahalaan ang maraming order:</strong> Pagmasdan ang daloy ng order at maghanda ng higit sa isang inumin nang hindi bumababa ang kalidad.</li>
  <li><strong>Mabilis at tumpak na paghahanda:</strong> Ang espresso ay dapat ihain agad upang mapanatili ang lasa at customer satisfaction.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paggawa ng Espresso</h2>
<ol>
  <li>
    <h3>Gilingin ang coffee beans:</h3>
    <p>Pumili ng tamang beans at gamitin ang grinder. Para sa espresso, kailangang pinong-pino ang giling — mas pinong kaysa sa regular na kape.</p>
    <p><strong>Tip:</strong> Kung masyadong magaspang, matabang ang lasa; kung sobrang pino, mapait.</p>
  </li>
  <li>
    <h3>Ihanda ang espresso machine:</h3>
    <p>Ilagay ang coffee grounds sa portafilter at tampering ito nang pantay. Mahalaga ito para sa even brewing.</p>
    <p><strong>Tip:</strong> Ang pantay at firm na tamp ay nagbibigay ng mas masarap at konsistent na espresso.</p>
  </li>
  <li>
    <h3>Simulan ang brewing:</h3>
    <p>Ilagay ang portafilter sa machine at simulan ang brewing. Ang mainit na tubig ay dadaanan ang coffee grounds para makagawa ng espresso na may crema sa ibabaw.</p>
    <p><strong>Tip:</strong> Ang ideal brewing time ay 25–30 segundo. Iwasang masyadong maikli o mahaba ang oras.</p>
  </li>
  <li>
    <h3>Ihain ang inumin:</h3>
    <p>Ihain agad sa maliit na tasa. Maari mo itong palamutian ng asukal o cinnamon, pero kadalasan ay plain lang ito.</p>
    <p><strong>Tip:</strong> Ihain agad pagkatapos ma-brew upang hindi mainip ang customer.</p>
  </li>
</ol>

<h2 id="tips">Karagdagang Tips</h2>
<ul>
  <li><strong>Kabitan ng tamang giling:</strong> Ang maling grinding size ay makaaapekto sa lasa. Subukan hanggang makuha ang tamang timpla.</li>
  <li><strong>Bantayan ang brewing time:</strong> 25–30 segundo ang ideal. Masyadong maikli = kulang sa lasa; masyadong mahaba = mapait.</li>
  <li><strong>I-prioritize ang order:</strong> Unahin ang pinaka-mainit o kulang sa pasensyang customer.</li>
  <li><strong>I-upgrade ang gamit:</strong> I-upgrade ang coffee machine at grinder para sa mas bilis at kalidad.</li>
  <li><strong>Mabilis na serbisyo = masayang customer:</strong> Ang bilis ng pag-serve ay malaki ang epekto sa ratings at kita.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Ang Antas 6 ay nakatuon sa tamang paggawa ng espresso — mula paggiling, pagbubrew, hanggang paghahain. Kapag nasanay ka rito, magiging mas handa ka sa mas mahirap na mga antas ng Cookingdom.</p>
<p>Isang mahusay na panimula ito sa mundo ng paggawa ng kape at isang magandang pagkakataon upang sanayin ang iyong time management at kitchen performance!</p>
`,
  },

  {
    id: 'cookingdom-game-level-7',
    title: 'Cookingdom Antas 7: Gabay sa Sunny Eggs',
    pageTitle: 'Cookingdom Antas 7: Gabay sa Sunny Eggs',
    pageSubtitle: 'Matutong magluto ng perpektong sunny-side-up na itlog sa Cookingdom Antas 7.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_07.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-7' },
    },
    iframeUrl: 'https://www.youtube.com/embed/U06ryujgPy4',
    seo: {
      title: 'Cookingdom Antas 7 Gabay: Sunny Eggs | Mga Tip at Estratehiya',
      description:
        'Maging eksperto sa pagluluto ng sunny-side-up na itlog sa Cookingdom Antas 7. Mga tip sa kontrol ng init, pag-iwas sa basag na pula ng itlog, at mabilis na serbisyo.',
      keywords:
        'cookingdom, antas 7, sunny eggs, gabay, sunny side up, itlog, kontrol ng init, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_07.webp',
      levelInfoHtml:
        '<h3>Sunny Eggs</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 1 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom Antas 6: Gabay sa Cafe Espresso',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-6' },
          },
        },
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom Antas 8: Gabay sa Texas BBQ',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-8' },
          },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, bawat antas ay nagtatampok ng mga bagong hamon sa pagluluto at mga recipe na sumusubok sa iyong kakayahan at pamamahala ng oras. Ang Antas 7 ay nakatuon sa paggawa ng Sunny Eggs, isang simpleng ulam ngunit nangangailangan ng eksaktong pag-aalaga upang matiyak na hindi mabasag ang pula ng itlog habang niluluto. Habang sumusulong ka sa Cookingdom, kailangan mong ma-master ang ulam na ito upang matugunan ang tumataas na pangangailangan ng mga customer na naghahanap ng perpektong sunny-side-up na itlog.</p>
<p>Itong antas ay nagdadala ng mas komplikadong multitasking dahil kailangan mong asikasuhin ang maraming order nang sabay-sabay, pero huwag mag-alala — sa tamang pamamaraan, kaya mo ito. Tara, simulan natin ang mga hakbang para makagawa ng perpektong sunny eggs!</p>

<h2 id="goal">Mga Layunin ng Antas 7</h2>
<ul>
    <li><strong>Lutuin ang Sunny Eggs:</strong> Sa Cookingdom, ang sunny eggs ay isang klasikong pagkain sa almusal. Layunin ng antas na ito na maluto ang itlog nang perpekto kung saan buo ang pula at hindi sobra ang pagluto ng puti. Ang tamang pagkakaluto ang susi sa tagumpay.</li>
    <li><strong>Mahusay na Pamahalaan ang Maramihang Order:</strong> Tulad ng mga naunang antas, kailangan mong harapin ang maraming order nang sabay-sabay. Ang sunny eggs ay popular sa menu, kaya kailangan mong bantayan ang oras at ihain ang bawat ulam sa tamang panahon.</li>
    <li><strong>Mabilis at Tumpak na Paghain:</strong> Hindi matiisin ang mga customer sa Cookingdom at inaasahan nilang tama lang ang luto ng kanilang sunny eggs. Ang sobrang pagluto o huling paghahain ay magbababa ng iyong iskor, kaya mahalaga ang tamang timing at pagiging epektibo.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paggawa ng Sunny Eggs</h2>
<ol>
    <li>
        <h3>Ihanda ang Kawali:</h3>
        <p>Para magluto ng sunny eggs, simulan sa pagpainit ng kawali. Kapag mainit na, maglagay ng kaunting mantika o butter para hindi dumikit ang itlog. Siguraduhing pantay ang pagkakalagay ng mantika sa ibabaw ng kawali.</p>
        <p><strong>Tip:</strong> Mas maganda ang non-stick na kawali para hindi mabasag ang pula ng itlog.</p>
    </li>
    <li>
        <h3>Basagin ang Itlog:</h3>
        <p>Maingat na basagin ang itlog at ilagay sa kawali. Iwasang mabasag ang pula. Pinapayagan ka ng Cookingdom na basagin ang itlog isa-isa, kaya maghinay-hinay at siguraduhing buo ang pula habang inilalagay ang bawat itlog.</p>
        <p><strong>Tip:</strong> Kapag maraming itlog ang niluluto, siguraduhing may sapat na pagitan para hindi magsanib ang mga itlog.</p>
    </li>
    <li>
        <h3>Lutuin ang Itlog:</h3>
        <p>Hayaan ang itlog na maluto sa katamtamang init ng ilang minuto hanggang sa maluto nang buo ang puti pero nananatiling malabnaw ang pula. Ang susi ay malutong ang puti nang hindi nasusunog ang pula. Dapat malambot at gintong dilaw ang pula sa gitna.</p>
        <p><strong>Tip:</strong> Huwag balik-balikan ang itlog! Ang sunny eggs ay niluluto lamang sa isang bahagi upang hindi mabasag ang pula.</p>
    </li>
    <li>
        <h3>Ihain ang Sunny Eggs:</h3>
        <p>Kapag perpekto na ang luto ng itlog, maingat na ilipat ito sa plato. Sa Cookingdom, maaari mong dagdagan ng garnish o isabay sa iba pang pagkain depende sa order ng customer.</p>
        <p><strong>Tip:</strong> Ihain agad para mapanatili ang pagiging sariwa at maiwasan ang reklamo ng customer dahil sa tagal ng paghihintay.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trick</h2>
<ul>
    <li>
        <strong>Masusing Subaybayan ang Init:</strong> Sa Cookingdom, mahalaga ang kontrol sa init para sa perpektong sunny eggs. Kapag sobrang init, maaaring masunog ang puti bago maluto ang pula. Gamitin ang katamtamang init para makamit ang ginintuang pula at luto na puti.
    </li>
    <li>
        <strong>Huwag Magmadali:</strong> Kahit simpleng lutuin, ang pagmamadali ay maaaring magresulta sa basag na pula o sobrang luto. Maglaan ng oras at tutukan ang tamang pagluluto. Matindi ang pagpili ng mga customer sa kalidad ng pagkain.
    </li>
    <li>
        <strong>Multitasking:</strong> Susubukin ng Cookingdom ang iyong multitasking skills dahil kailangan mong magluto ng sunny eggs habang inaalagaan ang ibang order. Bigyang-priyoridad ang mga order ayon sa oras at kahirapan, at huwag kalimutang bantayan ang itlog habang ginagawa ang iba pang pagkain.
    </li>
    <li>
        <strong>Gamitin ang Boosters para sa Mas Mabilis na Serbisyo:</strong> Habang sumusulong, makakakuha ka ng boosters at speed-ups na makakatulong magluto nang mas mabilis o tumaas ang iyong kahusayan. Gamitin ito nang tama upang matapos ang mga order sa oras, lalo na kapag maraming sunny eggs ang ini-order.
    </li>
    <li>
        <strong>Kasiyahan ng Customer:</strong> Ang Cookingdom ay tungkol sa pagpapaligaya sa mga customer. Kapag perpekto ang lutong itlog at mabilis ang paghahain, makakakuha ka ng mataas na ratings. Laging sikaping ihain agad ang pagkain upang maiwasan ang pagkadismaya ng mga customer.
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Ang Antas 7 sa Cookingdom ay tungkol sa pagiging dalubhasa sa pagluluto ng perpektong sunny eggs. Ang susi sa tagumpay ay ang tamang kontrol ng init, tamang pagluluto nang hindi nasusunog, at mabilis na paghahain. Mahalaga ang pamamahala ng oras at multitasking habang naghahanda ng sunny eggs kasabay ng iba pang mga pagkain.</p>
<p>Sa tamang teknik at mabilis na serbisyo, madali mong matatapos ang antas na ito at mapapaligaya ang iyong mga customer. Habang sumusulong sa Cookingdom, haharap ka sa mas kumplikadong mga recipe at order, kaya ang pag-master sa sunny eggs ay isang mahalagang pundasyon para sa tagumpay sa hinaharap.</p>
`,
  },

  {
    id: 'cookingdom-game-level-8',
    title: 'Cookingdom Antas 8 Texas BBQ Walkthrough',
    pageTitle: 'Cookingdom Antas 8 Texas BBQ Walkthrough',
    pageSubtitle: 'Masterin ang mausok at malinamnam na Texas BBQ sa Antas 8 ng Cookingdom.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_08.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-8' },
    },
    iframeUrl: 'https://www.youtube.com/embed/qxPUF3cKPrs',
    seo: {
      title: 'Gabay sa Cookingdom Antas 8: Texas BBQ | cookingdom.co',
      description:
        'Matutong magluto ng Texas BBQ (ribs, brisket) sa Cookingdom Antas 8. Alamin ang mga tip sa slow-cooking, BBQ sauce, mga side dish (cornbread, beans, coleslaw), at tamang timing.',
      keywords:
        'Cookingdom Antas 8, cookingdom Texas BBQ, BBQ Gabay, Ribs, Brisket, BBQ Sauce, Cornbread, Slow Cooking, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_08.webp',
      levelInfoHtml:
        '<h3>Texas BBQ</h3><p><strong>Hirap:</strong> Mahirap</p><p><strong>Tinatayang Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom Antas 7 Sunny Eggs Walkthrough',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-7' },
          },
        },
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom Antas 9 Spaghetti Walkthrough',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-9' },
          },
        },
      ],
    },
    detailsHtml: `
 <h2>Maligayang Pagdating sa Cookingdom Level 8: Texas BBQ Walkthrough & Gabay</h2>
<p>
  Maligayang pagdating sa <strong>Cookingdom Level 8</strong>, kung saan ang iyong misyon ay lumikha ng perpektong <strong>Texas BBQ</strong> gamit ang tamang mga kasangkapan, tamang pagkakasunod-sunod, at tamang oras.
  Ang lebel na ito ay nagpapakilala sa mga manlalaro sa mga intuitive ngunit tumpak na mekanika ng pagluluto ng Cookingdom sa isang relaxed, walang timer na kapaligiran.
</p>
<p>
  Ang gabay na ito ay magbibigay sa iyo ng mga eksaktong hakbang upang magtagumpay sa <strong>Cookingdom Level 8</strong>, na detalyado ang bawat sangkap, aksyon, at pag-aayos na kinakailangan.
</p>

<h2>Kailangan na mga Sangkap</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pork Ribs</td>
      <td>1 rack (4 ribs)</td>
      <td>Makukuha mula sa boar mini-game gamit ang karot.</td>
    </tr>
    <tr>
      <td>Paper Towel</td>
      <td>1 roll</td>
      <td>Ginagamit upang patuyuin ang ribs.</td>
    </tr>
    <tr>
      <td>Red Seasoning (Paprika/Cili?)</td>
      <td>1 shaker</td>
      <td>Ipinapahid sa ribs pagkatapos itong patuyuin at putulin.</td>
    </tr>
    <tr>
      <td>Asin</td>
      <td>1 shaker</td>
      <td>Inilalagay sa ribs pagkatapos ng red seasoning.</td>
    </tr>
    <tr>
      <td>Bawang</td>
      <td>1 ulo</td>
      <td>Pinipiga at tinutuklap para sa sarsa.</td>
    </tr>
    <tr>
      <td>Spring Onions</td>
      <td>1 bunot</td>
      <td>Pinutol para sa sarsa.</td>
    </tr>
    <tr>
      <td>Butter</td>
      <td>1 cube</td>
      <td>Ginagamit upang simulan ang sarsa sa kawali.</td>
    </tr>
    <tr>
      <td>Asukal</td>
      <td>1 mangkok</td>
      <td>Idinadagdag sa sarsa.</td>
    </tr>
    <tr>
      <td>Red Sauce Base (Ketchup/BBQ Base?)</td>
      <td>1 mangkok</td>
      <td>Ang pangunahing likidong bahagi ng BBQ sarsa.</td>
    </tr>
    <tr>
      <td>Salad Mix</td>
      <td>1 mangkok</td>
      <td>Komponent para sa huling paghahain.</td>
    </tr>
    <tr>
      <td>Salad Dressing</td>
      <td>1 mangkok</td>
      <td>Idinadagdag sa salad habang inilalagay sa plato.</td>
    </tr>
    <tr>
      <td>Fried Egg</td>
      <td>1</td>
      <td>Komponent para sa huling paghahain.</td>
    </tr>
    <tr>
      <td>Cooked BBQ Sauce</td>
      <td>1 mangkok</td>
      <td>Ang natapos na sarsa, ginagamit para sa pag-baste at paghahain.</td>
    </tr>
    <tr>
      <td>Karot</td>
      <td>1</td>
      <td>Ginagamit lamang sa boar mini-game.</td>
    </tr>
  </tbody>
</table>

<h2>Step-by-Step Texas BBQ Walkthrough</h2>

<h3>Step 1. Kumuha ng Karne ng Baboy (Mini-game)</h3>
<p>
  Sa labas, maghintay para dumating ang <strong>kuneho</strong> na may dala na <strong>karot</strong>.
  Hilahin ang <strong>karot</strong> papunta sa <strong>boar</strong> na nakatago sa palumpong.
  Kainin ng boar ang karot at tumakbo, iniiwan ang karne ng baboy.
</p>
<p>
  💡 <strong>Tip:</strong> Maging handa na hilahin ang karot agad kapag dinala ito ng kuneho.
</p>

<h3>Step 2. Ihanda ang Ribs</h3>
<p>
  Ilagay ang <strong>ribs</strong> sa <strong>cutting board</strong>.
  Gamitin ang <strong>paper towel</strong> upang punasan ng tuyo ang tatlong itinatampok na bahagi.
  Piliin ang <strong>kutsilyo</strong> at putulin nang pahaba sa pagitan ng mga buto (3 hiwa).
  Ipinapahid ang <strong>red seasoning</strong>, pagkatapos ay ang <strong>asin</strong> sa ribs.
</p>
<p>
  💡 <strong>Tip:</strong> Siguraduhin na ang lahat ng bahagi ay tuyo at tumpak ang mga hiwa. Pantay ang paglalagay ng seasoning.
</p>

<h3>Step 3. Ihanda ang Mga Aromatikong Sangkap</h3>
<p>
  Ilagay ang <strong>bawang</strong> sa walang laman na cutting board.
  I-tap nang paulit-ulit upang paghiwalayin ang mga cloves.
  Piliin ang <strong>kutsilyo</strong> at i-tap upang i-mince ang mga cloves. Ilagay ang bawang sa isang tabi.
  Ilagay ang <strong>spring onions</strong> sa board, piliin ang <strong>kutsilyo</strong> at i-tap upang putulin ang puti at berdeng bahagi.
</p>
<p>
  💡 <strong>Tip:</strong> Ang paulit-ulit na pag-tap ay nagpapabilis sa mincing at chopping.
</p>

<h3>Step 4. Lutuin ang BBQ Sauce</h3>
<p>
  I-on ang <strong>induction cooktop</strong>. Ilagay ang <strong>pan</strong> dito.
  Maglagay ng <strong>butter</strong> at hayaan itong matunaw.
  Idagdag ang <strong>bawang na mincing</strong> at mag-saute nang saglit.
  Gamitin ang <strong>spoon</strong> upang magdagdag ng <strong>asukal</strong> mula sa mangkok; haluin.
  Idagdag ang <strong>red sauce base</strong> at haluin. Ilagay ang <strong>chopped spring onions</strong> at haluin hanggang mag-simmer ang sarsa.
</p>
<p>
  💡 <strong>Tip:</strong> Idagdag ang mga sangkap sa tamang pagkakasunod-sunod at haluin pagkatapos ng bawat karagdagan.
</p>

<h3>Step 5. I-grill ang Ribs</h3>
<p>
  Ilagay ang <strong>grill plate</strong> sa cooktop. Ilagay ang mga inihandang <strong>ribs</strong> sa mainit na grill.
  Gamitin ang <strong>spoon</strong> upang kumuha ng <strong>BBQ sauce</strong> mula sa mangkok at paulit-ulit na ipahid ito sa ribs habang ito ay niluluto.
</p>
<p>
  💡 <strong>Tip:</strong> Siguraduhin na ang lahat ng ribs ay maayos na na-baste ng maraming beses para sa magandang glaze. Maghintay para sa heart confirmation.
</p>

<h3>Step 6. Ihain ang Texas BBQ</h3>
<p>
  Sa isang malinis na plato, unang ilagay ang <strong>salad mix</strong>.
  Gamitin ang <strong>spoon</strong> upang maglagay ng <strong>salad dressing</strong> sa salad.
  Ilagay ang <strong>grilled ribs</strong> sa tabi ng salad. Idagdag ang <strong>fried egg</strong> sa tabi ng ribs.
  Huling ilagay ang <strong>BBQ sauce</strong> sa ribs gamit ang <strong>spoon</strong>.
</p>
<p>
  💡 <strong>Tip:</strong> Ayusin ang mga sangkap nang maayos tulad ng ipinapakita sa huling larawan ng ulam para sa pinakamagandang presentasyon.
</p>

<h2>Mga Tip at Trik para sa Cookingdom Level 8</h2>
<ul>
  <li>✔️ Ang unang mini-game ay nangangailangan ng mabilis na aksyon gamit ang karot.</li>
  <li>✔️ Mahalaga ang tamang pag-pat dry, pag-putol, at pag-season ng ribs.</li>
  <li>✔️ Sundin ang tamang pagkakasunod-sunod kapag nagluluto ng sarsa.</li>
  <li>✔️ Ang masaganang pag-baste habang nag-i-grill ay lumilikha ng tamang BBQ glaze.</li>
  <li>✔️ Ang maayos na pag-plating ay nakakatulong sa huling iskor.</li>
</ul>

<h2>Mga Karaniwang Pagkakamali na Dapat Iwasan sa Cookingdom Level 8</h2>
<ul>
  <li>Pagkawala ng timing sa boar mini-game.</li>
  <li>Pagkakalimutang patuyuin ang ribs o maling mga hiwa.</li>
  <li>Pagdagdag ng mga sangkap ng sarsa sa maling pagkakasunod-sunod o hindi paghahalo.</li>
  <li>Kulang ang pag-baste habang nag-i-grill ng ribs.</li>
  <li>Magulong pag-aayos ng mga bagay sa huling plato.</li>
</ul>

  `,
  },

  {
    id: 'cookingdom-game-level-9',
    title: 'Cookingdom Level 9: Spaghetti - Kumpletong Gabay',
    pageTitle: 'Cookingdom Level 9: Spaghetti - Kumpletong Gabay',
    pageSubtitle: 'Magsanay sa paggawa ng perpektong spaghetti sa Cookingdom Level 9.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_09.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-9' },
    },
    iframeUrl: 'https://www.youtube.com/embed/tZMPN2bgwZo',
    seo: {
      title: 'Cookingdom Level 9 Gabay: Spaghetti | Mga Tip at Estratehiya',
      description:
        'Matutong gumawa ng perpektong spaghetti (al dente!) gamit ang tamang sarsa sa Cookingdom Level 9. Mga tip sa timing, paghahanda ng sarsa, at multitasking.',
      keywords:
        'cookingdom, level 9, spaghetti, gabay, pasta, sarsa, al dente, pamamahala ng oras, multitasking',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_09.webp',
      levelInfoHtml:
        '<h3>Spaghetti</h3><p><strong>Kahirapan:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 2.5 minuto</p><p><strong>Gantimpala:</strong> 5 Star</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom Level 8: Texas BBQ - Gabay',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-8' },
          },
        },
        {
          id: 'cookingdom-game-level-10',
          title: 'Cookingdom Level 10: Salmon Sushi - Gabay',
          imageUrl: '/images/guides_10.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-10' },
          },
        },
      ],
    },
    detailsHtml: `
<h2>Maligayang pagdating sa Cookingdom Level 9: Gabay sa Spaghetti</h2>
<p>
  Maligayang pagdating, mag-aaral ng pagluluto! Sa **Cookingdom Level 9**, ang iyong hamon sa pagluluto ay ang gawing perpekto ang isang masarap na plato ng **spaghetti**. Ang level na ito ay dinisenyo upang masanay ka sa mga tumpak na mekanika ng pagluluto ng Cookingdom sa isang kalmado at walang pagmamadali na kapaligiran.
</p>
<p>
  Ang gabay na ito ay magbibigay ng eksaktong mga hakbang upang magtagumpay sa **Cookingdom Level 9**, kasama ang bawat sangkap, aksyon, at tamang paglalagay.
</p>

<h2>Sangkap para sa Iyong Perpektong Spaghetti</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dry Spaghetti</td>
      <td>1 bahagi</td>
      <td>Hilaw na pasta.</td>
    </tr>
    <tr>
      <td>Water</td>
      <td>1 mangkok</td>
      <td>Kailangan para pakuluin ang pasta.</td>
    </tr>
    <tr>
      <td>Salt</td>
      <td>1 lalagyan</td>
      <td>Para timplahan ang tubig na pinakuluan.</td>
    </tr>
    <tr>
      <td>Tomatoes</td>
      <td>1 mangkok</td>
      <td>Buong kamatis, para hiwain sa sos at gamitin din sa garnish.</td>
    </tr>
    <tr>
      <td>Onion</td>
      <td>1 mangkok</td>
      <td>Buong sibuyas, para hiwain sa sos.</td>
    </tr>
    <tr>
      <td>Basil Leaves</td>
      <td>1 mangkok</td>
      <td>Preskong basil, para sa huling garnish.</td>
    </tr>
    <tr>
      <td>Ground Meat</td>
      <td>1 mangkok</td>
      <td>Hilaw na giniling na karne para sa iyong Bolognese.</td>
    </tr>
    <tr>
      <td>Oil/Butter</td>
      <td>1 mangkok</td>
      <td>Gamitin sa pagluluto ng sos.</td>
    </tr>
    <tr>
      <td>Pepper</td>
      <td>1 shaker</td>
      <td>Para sa pag-season ng sos.</td>
    </tr>
    <tr>
      <td>Tomato Sauce Base</td>
      <td>1 garapon</td>
      <td>Ang pangunahing tomato base para sa iyong meat sauce.</td>
    </tr>
    <tr>
      <td>Shredded Cheese</td>
      <td>1 mangkok</td>
      <td>Pinatibay na Parmesan, para iwisik sa ibabaw ng spaghetti.</td>
    </tr>
    <tr>
      <td>Cream Sauce Topping</td>
      <td>1 garapon</td>
      <td>Isang patak ng puting sos para sa gitna habang nilalagay sa plato.</td>
    </tr>
  </tbody>
</table>

<h2>Spaghetti Mastery: Gabay sa Hakbang-hakbang</h2>

<h3>Hakbang 1. Pakuluin ang Tubig at Lagyan ng Asin</h3>
<p>
  Una, buksan ang <strong>hot plate</strong>. Ibuhos ang <strong>tubig</strong> mula sa mangkok papunta sa <strong>kaserola</strong>. Hintaying kumulo ang tubig (maraming bula!), pagkatapos ay magdagdag ng <strong>asin</strong> mula sa lalagyan.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Huwag magmadali! Siguraduhin na kumukulo ang tubig bago magdagdag ng asin o pasta. Ito ay mahalaga para sa tamang pagluluto.
</div>

<h3>Hakbang 2. Lutuin ang Spaghetti Hanggang Al Dente</h3>
<p>
  Ngayon, dahan-dahang ilagay ang <strong>dry spaghetti</strong> sa kumukulong tubig na may asin. Maghintay ng mahinahon hanggang maluto ang pasta.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Ang spaghetti ay maghihina at babagsak nang kusa. Maghintay ng isang sparkle animation – iyon ang tanda na perpekto na ang luto!
</div>

<h3>Hakbang 3. Salain ang Nilutong Spaghetti</h3>
<p>
  Kumuha ng <strong>spider strainer tool</strong>. Maingat na hilahin ang nilutong spaghetti mula sa kaserola at ilipat ito sa <strong>plato ng paghahain</strong>.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Siguraduhing makuha ang bawat piraso ng spaghetti mula sa kaserola!
</div>

<h3>Hakbang 4. Hiwain ang mga Kamatis ng Tumpak</h3>
<p>
  Ilagay ang <strong>whole tomatoes</strong> sa <strong>cutting board</strong>. Piliin ang <strong>knife</strong> at sundin ang mga gabay sa screen upang hiwain muna at saka dicing ang mga kamatis. Ilagay ang diced na kamatis pabalik sa mangkok nito.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Ang tumpak na pagdices ayon sa mga gabay ng laro ay mahalaga para sa mataas na iskor. Maglaan ng oras dito!
</div>

<h3>Hakbang 5. Hiwain ang Sibuyas ng Maingat</h3>
<p>
  Ilagay ang <strong>sibuyas</strong> sa <strong>cutting board</strong>. Gamitin ang <strong>knife tool</strong>, sundin ang mga gabay sa screen, upang hiwain at saka dicing ang sibuyas. Ilagay ang diced na sibuyas sa mangkok nito.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Ang tamang pag-gamit ng kutsilyo ay magreresulta sa pantay na pagluluto mamaya.
</div>

<h3>Hakbang 6. Simulan ang Sos Bolognese</h3>
<p>
  Ilagay ang malinis na <strong>kaserola</strong> sa <strong>hot plate</strong>. Magdagdag ng <strong>minyak/mentega</strong> mula sa mangkok nito. I-timpla ng kaunting <strong>lada</strong> mula sa shaker. Pagkatapos, idagdag ang <strong>tomato at sibuyas na hinati</strong> sa kaserola.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Hayaang uminit ang langis o mantikilya bago idagdag ang mga gulay.
</div>

<h3>Hakbang 7. Igisa ang mga Gulay at Lutuin ang Karne</h3>
<p>
  Gamitin ang <strong>ladle</strong> upang haluin ang mga kamatis at sibuyas sa kaserola. Ngayon, idagdag ang <strong>ground meat</strong>. Magpatuloy sa paghalo at durugin ang karne habang luto ito hanggang magbago ang kulay at maluto ng buo.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Palaging haluin! Pinipigilan nito ang pagdikit at sinisiguro na pantay ang pagluluto ng karne.
</div>

<h3>Hakbang 8. Hayaang Kumulo ang Matamis na Sos</h3>
<p>
  Ibuhos ang <strong>tomato sauce base</strong> mula sa garapon sa kaserola kasama ang nilutong karne at gulay. Haluin ng mabuti gamit ang <strong>ladle</strong> upang pagsamahin ang lahat ng sangkap. Hayaang kumulo ang sos hanggang maging handa.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Ang sos ay magiging mas makapal habang ito'y kumukulo. Magkakaroon ng sparkle animation bilang senyales na tapos na ito!
</div>

<h3>Hakbang 9. Ihain ang Spaghetti at Sos</h3>
<p>
  Sa iyong nilutong spaghetti na nasa plato ng paghahain, gamitin ang <strong>ladle</strong> upang maglagay ng maraming <strong>Bolognese sauce</strong> sa ibabaw ng pasta.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Siguraduhing pantay-pantay ang pagtakip ng masarap na sos sa spaghetti.
</div>

<h3>Hakbang 10. Garnish para sa Isang Masterpiece</h3>
<p>
  Maingat na ayusin ang <strong>sliced tomato garnishes</strong> sa paligid ng pasta. Maglagay ng patak ng <strong>cream sauce topping</strong> sa gitna. Magwiwisik ng <strong>shredded cheese</strong> sa Bolognese sauce. Sa huli, ilagay ang sariwang <strong>basil leaves</strong> sa ibabaw bilang huling pirma.
</p>
<div class="tip">
  💡 <strong>Pro Tip:</strong> Mahalaga ang eksaktong paglalagay ng bawat garnish, ayon sa mga visual na gabay, upang makuha ang pinakamataas na rating na 'Taste explosion!'
</div>

<h2>Top Tips para sa Tagumpay sa Cookingdom Level 9</h2>
<ul>
  <li>
    ✔️ **Pansinin ang visual at tunog na senyales** tulad ng sparkle at tunog — ipinapakita nito kung kailan natapos ang mga proseso ng pagluluto (pasta at sos).
  </li>
  <li>
    ✔️ **Tumpak na pagdices** ng mga gulay at **tamang paglalagay** ng huling garnish ay susi sa mataas na marka.
  </li>
  <li>
    ✔️ **Laging haluin ang Bolognese sauce** sa bawat hakbang, lalo na pagkatapos idagdag ang karne at tomato base, upang matiyak na maganda ang pagkakasama ng mga sangkap.
  </li>
  <li>
    ✔️ Sundin ang **tamang pagkakasunod-sunod ng mga hakbang** na ipinapakita sa laro upang maiwasan ang mga pagkakamali.
  </li>
</ul>

<h2>Mga Karaniwang Pagkakamali na Dapat Iwasan sa Cookingdom Level 9</h2>
<ul>
  <li>Hindi paghihintay na kumulo ang tubig bago maglagay ng spaghetti.</li>
  <li>Pagkuha ng pasta o sos ng masyadong maaga bago pa ang signal ng pagkakatapos (sparkle effect).</li>
  <li>Hindi tumpak o magulo ang paggupit ng kamatis at sibuyas.</li>
  <li>Hindi pantay na pagluluto ng ground meat dahil sa hindi sapat na paghahalo.</li>
  <li>Hindi tamang paglalagay o hindi pagkakaroon ng garnish sa final na plating.</li>
</ul>

  `,
  },

  {
    id: 'cookingdom-game-level-10',
    title: 'Cookingdom Gabay sa Level 10: Salmon Sushi',
    pageTitle: 'Cookingdom Gabay sa Level 10: Salmon Sushi',
    pageSubtitle:
      'Matutunan kung paano maghanda ng perpektong salmon sushi sa Cookingdom Level 10.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_10.webp',
    detailsRoute: {
      name: 'guide-detail',
      params: { id: 'cookingdom-game-level-10' },
    },
    iframeUrl: 'https://www.youtube.com/embed/Z6UgpR3Z8CI',
    seo: {
      title: 'Cookingdom Level 10: Salmon Sushi | cookingdom.co',
      description:
        'Alamin kung paano maghanda ng salmon sushi sa Cookingdom Level 10. Mga tips para sa tamang lutong kanin, hiwa ng salmon, paraan ng pag-roll, at presentation.',
      keywords:
        'cookingdom level 10, cookingdom salmon sushi, sushi guide, sushi rice, fish slicing, strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_10.webp',
      levelInfoHtml:
        '<h3>Cookingdom Level 10: Salmon Sushi</h3><p><strong>Antas ng Hirap:</strong> Mataas</p><p><strong>Tinatayang Oras:</strong> 4.5 minuto</p><p><strong>Mga Gantimpala:</strong> 5 bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom Gabay sa Level 9: Spaghetti',
          imageUrl: '/images/guides_09.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-9' },
          },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Gabay sa Level 11: Popcorn',
          imageUrl: '/images/guides_11.webp',
          detailsRoute: {
            name: 'guide-detail',
            params: { id: 'cookingdom-game-level-11' },
          },
        },
      ],
    },
    detailsHtml: `
<h2>Maligayang Pagdating sa Cookingdom Level 10: Gabay at Hakbang ng Sushi Salmon</h2>
<p>
  Maligayang pagdating, sushi artisan! Sa **Cookingdom Level 10**, ang iyong misyon ay gumawa ng masarap na **sushi ng salmon**. Ang level na ito ay magpapakilala sa iyo sa mga eksaktong mekanika ng pagluluto ng Cookingdom sa isang tahimik at hindi-mabilis na kapaligiran.
</p>
<p>
  Ang gabay na ito ay magdadala sa iyo sa bawat hakbang na kinakailangan upang magtagumpay sa **Cookingdom Level 10**, na naglalaman ng mga detalye ng bawat sangkap, aksyon, at tamang posisyon.
</p>

<h2>Mga Sangkap na Kailangan para sa Sushi</h2>
<table>
  <thead>
    <tr>
      <th>Sangkap</th>
      <th>Dami</th>
      <th>Mga Tala</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Isda</td>
      <td>5</td>
      <td>Iba't ibang uri, nahuli sa unang mini-game ng pangingisda. Iwasan ang basura!</td>
    </tr>
    <tr>
      <td>Kanin</td>
      <td>1 mangkok</td>
      <td>Kailangan hugasan ng tubig sa isang palayok, pagkatapos ay lutuin sa rice cooker.</td>
    </tr>
    <tr>
      <td>Water</td>
      <td>Kailangan</td>
      <td>Ginagamit sa paghuhugas at pagluluto ng kanin sa palayok.</td>
    </tr>
    <tr>
      <td>Karot</td>
      <td>1</td>
      <td>Kailangan balatan, pagkatapos ay hiwain sa manipis na piraso (julienne).</td>
    </tr>
    <tr>
      <td>Abukado</td>
      <td>1</td>
      <td>Kailangan balatan (gamitin ang kutsilyo) at hiwain ng maayos.</td>
    </tr>
    <tr>
      <td>Kamatis</td>
      <td>1</td>
      <td>Kailangan balatan (gamitin ang kutsilyo) at hiwain sa manipis na piraso.</td>
    </tr>
    <tr>
      <td>Salmon</td>
      <td>1 bahagi (hiwa)</td>
      <td>Pre-sliced, ngunit kailangan pang i-cut ng mas manipis na piraso para sa pag-fill.</td>
    </tr>
    <tr>
      <td>Nori (Sheet ng Seaweed)</td>
      <td>3 piraso</td>
      <td>Ang mahalagang pambalot para sa iyong sushi rolls.</td>
    </tr>
    <tr>
      <td>Wasabi</td>
      <td>1 bahagi</td>
      <td>Kaunting halaga para sa loob ng roll (optional), at isang kutsara para sa paghain.</td>
    </tr>
    <tr>
      <td>Pickled Ginger (Gari)</td>
      <td>1 bahagi</td>
      <td>Ibinibigay nang maayos sa tabi ng iyong sushi sa huling pinggan.</td>
    </tr>
    <tr>
      <td>Parsley/Garnish</td>
      <td>1 tangkay</td>
      <td>Para sa huling dekorasyon sa iyong platter.</td>
    </tr>
    <tr>
      <td>Peeler</td>
      <td>1</td>
      <td>Ginagamit para sa pagbalat ng karot.</td>
    </tr>
    <tr>
      <td>Kutsilyo</td>
      <td>1</td>
      <td>Ang iyong pangunahing gamit sa pagbalat, paghiwa, pagputol ng piraso, at pagputol ng mga natapos na roll.</td>
    </tr>
    <tr>
      <td>Cutting Board</td>
      <td>2</td>
      <td>Isa para sa paghahanda ng sangkap, isa para sa paglilinis ng mga sushi rolls.</td>
    </tr>
    <tr>
      <td>Palayok</td>
      <td>1</td>
      <td>Para sa paghuhugas ng kanin at paglilipat nito sa rice cooker.</td>
    </tr>
    <tr>
      <td>Rice Cooker</td>
      <td>1</td>
      <td>Ang iyong espesyal na kagamitan para sa perpektong lutong kanin.</td>
    </tr>
    <tr>
      <td>Sink & Faucet</td>
      <td>1</td>
      <td>Para sa tamang paghuhugas ng kanin.</td>
    </tr>
    <tr>
      <td>Bamboo Rolling Mat (Makisu)</td>
      <td>1</td>
      <td>Ang hindi mawawala na kagamitan para sa mahigpit na pag-roll ng sushi.</td>
    </tr>
    <tr>
      <td>Containers</td>
      <td>Marami</td>
      <td>Para sa pansamantalang pagtatago ng mga hinandang sangkap at natapos na mga roll.</td>
    </tr>
    <tr>
      <td>Serving Platter</td>
      <td>1 (itim, pahaba)</td>
      <td>Ang eleganteng lugar para sa iyong huling sushi presentation.</td>
    </tr>
    <tr>
      <td>Small Bowls/Dishes</td>
      <td>2</td>
      <td>Para sa paghahain ng wasabi at pickled ginger sa platter.</td>
    </tr>
  </tbody>
</table>

<h2>Mastery ng Sushi Salmon: Hakbang-hakbang na Gabay</h2>

<h3>Hakbang 1. Mini-Game ng Pangingisda</h3>
<p>
  Pumasok sa ilalim ng dagat bilang ang capybara chef. Ang iyong layunin ay manghuli ng **5 isda** mula sa iba't ibang uri sa pamamagitan ng paglangoy papunta sa kanila. Mag-ingat na **iwasan ang basura** tulad ng mga plastik na bote, bote ng salamin, at lata. Kapag nahuli mo na ang limang isda, awtomatikong ililipat ito sa iyong bangka.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Magplano ng iyong landas ng paglangoy upang manghuli ng isda nang epektibo habang maingat na iniiwasan ang mga basura.
</div>

<h3>Hakbang 2. Lutuin ang Kanin ng Perpekto</h3>
<p>
  Ilagay ang mangkok ng **kanin** sa **palayok**. Ilipat ang palayok sa **lababo** at magdagdag ng sapat na **tubig** upang masakop ang kanin para sa paghuhugas. Pagkatapos, ilipat ang palayok (kasama ang kanin at tubig) sa **rice cooker**. Isara ang takip. Awtomatikong magsisimula ang rice cooker, na tinandaan ng liwanag at singaw.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Huwag kalimutan magdagdag ng tubig sa kanin *bago* ilagay ang palayok sa rice cooker para sa wastong paghuhugas at pagluluto.
</div>

<h3>Hakbang 3. Ihanda ang Karot</h3>
<p>
  Ilagay ang **karot** sa **cutting board**. Gamitin ang **peeler tool** upang balatan ito, pagkatapos ay itapon ang balat. Palitan ito ng **kutsilyo** at sundin ang mga gabay sa screen upang hiwain ang karot sa mahahabang manipis na piraso (julienne). Ilagay ang mga hiniwang karot sa **container**.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Siguraduhing maayos na nababalatan ang karot bago hiwain ito ayon sa mga gabay.
</div>

<h3>Hakbang 4. Ihanda ang Avokado</h3>
<p>
  Ilagay ang **avokado** sa **cutting board**. Gamitin ang **kutsilyo** upang hatiin ito (ang buto ay awtomatikong aalisin). Pagkatapos, gamitin muli ang **kutsilyo** (gamitin ito bilang peeler) upang dahan-dahang balatan ang kalahating bahagi ng avokado. Itapon ang balat. Sundin ang mga gabay at hiwain ang laman ng avokado ng manipis. Ilagay ang mga hiniwang avokado sa **container**.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Gumamit ng kutsilyo para sa pagbalat, kaya sundin ang mga gabay ng maayos.
</div>

<h3>Hakbang 5. Ihanda ang Kamatis</h3>
<p>
  Ilagay ang **kamatis** sa **cutting board**. Gamitin ang **kutsilyo** at sundin ang gabay upang hiwain ito sa manipis na piraso. Ilagay ang mga hiniwang kamatis sa **container**.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Siguraduhin na ang mga piraso ng kamatis ay makakapit at pantay-pantay sa lahat ng bahagi ng sushi.
</div>

<h3>Hakbang 6. Ihanda ang mga Salmon Strips</h3>
<p>
  Ilagay ang **pre-sliced salmon** sa **cutting board**. Gamitin ang **kutsilyo** at sundin ang mga gabay upang hiwain ang mga hiwa ng salmon sa mas manipis na strips na perpekto para sa iyong sushi. Ilagay ang mga strips ng salmon sa **container**.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> I-cut nang tumpak ang mga piraso ng salmon upang makuha ang tamang porma para sa sushi rolls.
</div>

<h3>Hakbang 7. Kunin ang Nasi na Lutong</h3>
<p>
  Buksan ang **rice cooker lid** at kunin ang palayok na naglalaman ng perpektong lutong kanin. Ilagay ang palayok sa ibabaw ng mesa ng paghahanda.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Ang kanin ay dapat naglalabas ng singaw, na nangangahulugang ito ay niluto nang perpekto at handa na para sa pag-roll.
</div>

<h3>Hakbang 8. I-roll ang iyong Sushi (Tatlong beses!)</h3>
<p>
  Ilagay ang isang piraso ng **Nori** sa **bamboo rolling mat**. Gamitin ang isang bahagi ng **kanin** at i-spread ito nang pantay-pantay sa ibabaw ng Nori, mag-iwan ng kaunting space sa dulo. Maaari kang maglagay ng manipis na linya ng **wasabi** sa ibabaw ng kanin. I-lay ang **cucumber, carrot, avocado, at salmon** nang pahalang sa kanin, malapit sa ilalim na bahagi. Dahan-dahan iangat ang dulo ng mat at i-roll ang Nori at mga sangkap upang maging isang cylinder. Ilagay ang tapos na roll sa **container**. Kailangan mong **ulitin ang proseso ng paggawa ng tatlong rolls**.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Siguraduhing manipis at pantay-pantay ang pag-kalat ng kanin at gamitin ang mat para maging solid at mahigpit ang pag-roll ng sushi upang hindi ito matanggal.
</div>

<h3>Hakbang 9. I-cut ang Sushi Rolls ng Eksakto</h3>
<p>
  Ilagay ang isang tapos na sushi roll sa **clean cutting board**. Gamitin ang **kutsilyo** at sundin ang mga gabay sa pagputol upang gawing 4 na pantay na piraso. Ulitin ang proseso para sa iba pang mga roll.
</p>
<div class="tip">
  💡 <strong>Tip ng Pro:</strong> Gumamit ng matalim na kutsilyo at mabilis na pagputol upang makuha ang malinis na edges. Siguraduhing pare-pareho ang kapal ng bawat piraso ng sushi.
</div>

<h3>Hakbang 10. Huwag kalimutan ang Panghuling Pagplano</h3>
<p>
  I-arrange ang cut sushi pieces sa **black serving platter** (12 pieces). Siguraduhin na ang wasabi at pickled ginger ay nakaayos sa tamang lugar.
</p>

  `,
  },
]
