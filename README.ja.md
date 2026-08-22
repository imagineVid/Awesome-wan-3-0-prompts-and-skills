<a href="https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills">
  <img src="public/images/wan-3-0-prompt-skills-cover.png" alt="Wan 3.0 Video Prompt Skills" width="100%" />
</a>

> Wan 3.0 Videoのショットブリーフ、モーションパターン、視聴覚ワークフローを集めた、出典を検証できるライブラリ。
# Awesome Wan 3.0 Video Prompts & Skills

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-wan-3-0-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> ブリーフを読み、結果を見て、クリエイターをたどり、表面的なスタイルではなく演出ロジックを再利用しましょう。

> **クレジットと訂正：** 公開された各ケースには、クリエイターと正規の出典へのリンクがあります。権利は各権利者に帰属します。クレジットの変更や削除はissueでお知らせください。

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Current-brightgreen)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README.ko.md) [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Click%20to%20View-lightgrey)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Wan 3.0 Videoで制作する

**[ImagineVidでWan 3.0ワークフローを開く](https://imaginevid.io/ja/text-to-video)**

このリポジトリで、クリエイターの指示と生成された動きを比較できます。ショットの文法を新しいクリップに応用する準備ができたらImagineVidを開いてください。

人気はエビデンスではありません。完全なプロンプトと有用な動画を備えた低反応の投稿は、再現可能な指示のないバイラルなショーケースより高く評価されることがあります。

| 制作上のニーズ | エビデンスライブラリ | ImagineVidワークフロー |
|---------|--------------|---------------------|
| ケースレビュー | プロンプト、結果、出典 | 生成して比較 |
| ディスカバリー | リポジトリ内テキスト検索 | ワークフローから探す |
| 生成 | - | Wan 3.0を開く |
| 閲覧 | GitHubネイティブMarkdown | ブラウザ制作ワークスペース |
| ビデオワークフロー | - | 制作フィルター |


### 制作ワークフローから探す

- [**カメラパスとショットのテンポ**](#workflow-camera-direction-shot-design) - フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。
- [**ネイティブ音声とパフォーマンス**](#workflow-dialogue-performance-native-audio) - 台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。
- [**コマーシャルモーションとプレゼンテーション**](#workflow-product-motion-commercial-spots) - 製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。
- [**リファレンス主導の連続性**](#workflow-image-to-video-subject-continuity) - 静止画を動かしながら、人物の同一性、構図、製品形状、絵コンテのレイアウトを保つ画像起点のワークフロー。
- [**スタイライズドアクションとエフェクト**](#workflow-stylized-motion-visual-effects) - 変形、シミュレーション、シュールな物理、グラフィックモーション、独自のメディア処理によるエフェクトとアニメーションのパターン。
- [**比較、リスタイル、シーン制御**](#workflow-video-editing-restyling-scene-control) - 連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。

---

## 目次

- [Wan 3.0 Videoで制作する](#wan-30-videoで制作する)
- [Wan 3.0 Videoとは？](#wan-30-videoとは)
- [コレクションの状態](#コレクションの状態)
- [注目のビデオプロンプト](#community-featured-prompts)
- [コミュニティのビデオプロンプト](#community-prompt-cases)
- [検証済みケースを投稿する](#検証済みケースを投稿する)
- [ライセンス](#ライセンス)
- [クリエイタークレジット](#クリエイタークレジット)
- [リポジトリの成長](#リポジトリの成長)

---

## Wan 3.0 Videoとは？

**Wan 3.0 Video**について、出典へリンクした公開デモとコミュニティのワークフローを整理しています。このコレクションでは、観測できる機能の証拠と編集上の再構成を分けています。各ケースにはクリエイター、元の投稿、再生できる結果、モデルに関する記述を残し、再構成したプロンプトは明示して逐語引用のように扱いません。利用条件や機能は変わる可能性があるため、制作前に現在の利用状況を確認してください。

実用的なプロンプトでは、リクエストをムードボードではなくショットブリーフとして書きます。見える動作、カメラの挙動、ビートのタイミング、音の設計、参照素材、維持すべき要素を指定してください。

- **テキストまたはフレームから始める** - 書かれたシーンから生成するか、構図をすでに持つ画像を動かす
- **観察できる動きを指示する** - ブロッキング、勢い、物体の相互作用、各動作が生む物理的な結果を説明する
- **あらすじではなくビートを書く** - タイミングや見せ場が重要ならタイムスタンプまたは短い動作列を使う
- **シーンと一緒に音を生成する** - 音声が物語の一部なら台詞、環境音、音楽、効果音を含める
- **既存映像を編集する** - クリップのスタイルを変え、シーンの条件を変更し、見える要素を追加・削除・置換する
- **連続性を明示的に守る** - 顔、製品形状、レイアウト、衣装、背景のうち、変化させてはいけないものを指定する

**現在の参考資料：** [Wan 3.0 workflow on ImagineVid](https://imaginevid.io/ja/text-to-video)

### プロンプトをショットテンプレートに変える

再利用可能な動画プロンプトでは、シーンの変数と演出ロジックを分けます。被写体、場所、台詞、製品を置き換えながら、検証済みのカメラパス、ビート構成、音の設計、連続性ルールを保ちます。

**テンプレート例：**
```
[DURATION + ASPECT RATIO]。[SUBJECT]が[SETTING]で[VISIBLE ACTION]を行う。カメラ： [FRAMING + MOVE]。Beats: [TIMED ACTIONS]。音声： [DIALOGUE + FOLEY + AMBIENCE]。Preserve: [IDENTITY / PRODUCT / LAYOUT]。Avoid: [FAILURE MODES]。
```

まず1つの動作と1つのカメラアイデアから始めます。時間、音、保持条件は目に見える制作上の課題を解決するときだけ加え、生成ごとに1つの変数だけを変えてください。

---

## コレクションの状態

<div align="center">

| コレクション項目 | 現在値 |
|--------|-------|
| 検証済みケース | **7** |
| 編集部のおすすめ | **4** |
| 生成日時 | **2026年8月22日土曜日 4:28:26 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## 注目のビデオプロンプト

> 再現性、動きの明瞭さ、制作上の有用性で選定

<a id="prompt-1"></a>

### #1: 雨に濡れた闘技場での読みやすいボクシング演出

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### このワークフローが重要な理由

2人のファイターを明確に分け、交換の流れを設計し、雨、反射する水たまり、カメラ、連続性で17秒の決闘を読みやすくするアクションブリーフ。

#### ローカライズ済みプロンプト

```
夜の廃墟となった円形の石造闘技場で、2人の成人女性ファイターが戦う17秒、16:9のシネマティックな3Dリアリズム映像を作成する。顔、体格、衣装、位置を最後まで固定する。使うのはパンチ、ブロック、パリー、スリップ、フットワークだけ。低いワイドショットで始め、交換中は横方向のトラッキングに移り、短いスローモーションの回避を一度入れ、最後は明確なアッパーカットの後に制御されたハーフオービットで終える。小雨、反射する水たまり、冷たい月光、暖かな松明、自然な汗と水滴。台詞、字幕、音楽、武器、超能力、解剖学的破綻、重複した人物、透かしは入れない。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 17-second, 16:9 cinematic 3D-realism boxing sequence with two adult female fighters in a ruined circular stone arena at night. Keep their faces, bodies, outfits, and positions consistent. Use only fists, blocks, parries, slips, and footwork. Start with a low wide shot, move into lateral tracking during the exchange, add one brief slow-motion dodge, then finish on a controlled half-orbit after a clean uppercut. Light rain, reflective puddles, cold moonlight, warm torchlight, realistic sweat and water droplets. Keep the action readable and grounded. No dialogue, captions, music, weapons, powers, anatomy errors, duplicate characters, or watermark.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084715180269654016/vid/avc1/1280x720/zbe-ld1fHtQVTO0d.mp4?tag=14"><img src="https://pbs.twimg.com/amplify_video_thumb/2084715180269654016/img/asHNjLcS9QnUssHz.jpg" height="420" alt="雨に濡れた闘技場での読みやすいボクシング演出 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084715180269654016/vid/avc1/1280x720/zbe-ld1fHtQVTO0d.mp4?tag=14)**
</div>

#### エビデンス

- **クリエイター:** [Oprèlia AI](https://x.com/OpreliaAI)
- **正規の出典:** [正規の出典](https://x.com/OpreliaAI/status/2084771796910211529)
- **公開日:** 2026年8月4日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="prompt-2"></a>

### #2: 画面方向を固定した7ショットの槍の決闘

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

画面上の地理、アクションベクトル、色分けしたエネルギー、ヒットストップ、カット間の連続性を固定する7ショットのセルアニメーション用ソースプロンプト。

#### ローカライズ済みプロンプト

```
手描きの2Dセルアニメーションで、15秒、16:9、7ショットの戦闘を作成する。小柄な槍使いは画面左、大柄な格闘家は画面右から始め、カメラ軸を全編で維持する。槍使いのエネルギーはシアン、格闘家のエネルギーは燃えるオレンジ。予備動作、投げられた石板、瓦礫を跳ぶ動き、空中の破片の階段、短いスローモーションの裏拳、目のクローズアップ、そして半拍の無音とヒットストップを伴う最後の槍突きを構成する。デザイン、顔、傷、闘技場の損傷、重い瓦礫の物理、7ショットの数を保持する。余分なショット、文字、字幕、透かし、融合した体は不可。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 15-second, 16:9 seven-shot 2D hand-drawn cel-animated fight. A small spear fighter starts screen-left and a massive brawler starts screen-right; keep that south-side camera axis throughout. Use cyan energy for the spear fighter and ember-orange energy for the brawler. Build the sequence with anticipation, a thrown stone slab, a rubble vault, a rising staircase of airborne chunks, a brief slow-motion backhand, an eye close-up, and a final spear pierce with a half-beat of silence and a hit-stop. Preserve character designs, face details, injury continuity, arena damage, heavy rubble physics, and the seven-shot count. No extra shots, text, subtitles, watermark, or fused bodies.
```

</details>

<details>
<summary>Related prompt variants (1)</summary>

**Creator source prompt (English)**

```
Prompt:
Multi-shot (7 shots).
TSUBAME (Spear Girl) — 17, lean and small, sharp jawline, short black bob with long straight bangs, fierce dark-teal eyes; sleeveless white gi top with teal trim, black shorts, bandaged forearms and shins, split-toe boots; carries a two-meter spear with a slim leaf-blade head — the spearhead and her motion trails read cyan.
GARAN (Brawler) — huge, over two meters, slab-muscled, shaved head, heavy brow, small pale eyes; bare-chested with a cracked stone-grey harness strap, massive taped fists, canvas trousers, iron-shod boots. Every slab he rips from the floor glows ember-orange in its tear-lines, and orange dust light clings to his hands.

Style: 2D hand-drawn cel animation, film-grade sakuga action. Clear line art, flat cel shading with hard shadow boundaries; non-photoreal — no pore-level skin, no 3D volumetric render feel. Fighter colors LOCKED: Tsubame = cyan (spear-tip glint, afterimage trails, speed-lines), Garan = ember-orange (molten glow in every floor tear, rubble rim-light). All glows two-tone — white-hot core, saturated colored rim, trailing dust and embers that linger after each impact. World: desaturated slate-grey shattered arena with a huge faded mosaic emblem in the floor, so both hues detonate off it. The nearest glow is the key light — cyan rim on her, orange bounce on him and the rock. Bold corner-to-corner diagonals on action; fast beats drawn as key poses, smear frames, and impact frames — never continuous legible travel. Real mass everywhere: slabs are tons, not props. Camera: animation camerawork — snap-zooms, speed-lines, orbits, held frames, hit-stops all allowed.

⚠️This video has STRICTLY 7 shots — do not add extra shots.
⚠️SPATIAL LAYOUT (MAIN VIEW = from the SOUTH side, top-down axis west–east; screen-left = west, screen-right = east): Tsubame starts at the west edge facing east (screen-right, toward Garan); Garan stands ~18m east of her, facing west (screen-left, toward her). Her vault path travels west→east, rising diagonally toward the upper frame as she climbs the airborne chunks. 180° LINE: camera stays on the south side all clip — Tsubame on screen-left, Garan on screen-right, no swapping.
⚠️ACTION VECTORS: (V1, SHOT 2) Garan hurls a car-sized slab two-handed, east→west (screen right→left), at Tsubame's center mass — she slides flat under it; it detonates on the floor west of her. (V2, SHOT 3) Garan's right-arm sweep flings a fan of rubble east→west — she runs into it and vaults the chunks. (V4, SHOT 5) Garan's right backhand sweeps east→west at her head as she reaches the fourth chunk — she plants the spear in the chunk and corkscrews around the shaft past the fist; one shard grazes her LEFT cheek. (V5, SHOT 7) Tsubame's spear thrust travels west→east (screen left→right) through the center of his final slab into Garan's crossed-forearm guard at chest height — he is driven east, heels carving trenches.
⚠️Continuity across cuts: designs, colors, and arena damage stay identical and only progress, never reset — the left-cheek cut appears in SHOT 5 and persists bleeding a thin line through SHOTS 6–7; rubble and craters only accumulate.

[SHOT 1] · Anticipation (~2s): scale-wide, static with a slow drift — two tiny figures on the vast cracked mosaic. Garan RIPS a car-sized slab out of the floor, orange light flaring in the tear-lines, and shoulders it; across the arena Tsubame drops low, spear leveled flat, one toe carving the dust. Her breathing is even; his grin is wide.
[SHOT 2] · The slab (~2s): low lateral tracking with her — the slab comes in huge, right→left; she slides flat under its shadow, back scraping sparks, and it detonates behind her in a wall of grey dust with an orange core. She's up and sprinting before the debris lands.
[SHOT 3] · The scatter (~2.5s): Garan tears the floor again and sweeps his arm — a shotgun fan of rubble fills the air right→left. She doesn't brake; she accelerates INTO it, first vault off the lowest chunk, drawn as anticipation pose → smear → landing pose. Lunge-track, background streaking.
[SHOT 4] · The staircase (~2.5s, the money shot): low hero-angle orbit rising with her — Tsubame vaults chunk to airborne chunk up the diagonal, each foot-plant cracking the stone she leaves, cyan afterimage stitching one unbroken line through his barrage. Below and ahead, Garan's eyes narrow — he's reading it.
[SHOT 5] · The backhand (~1.5s, brief slow-mo): his colossal backhand fills the frame right→left — she plants the spear in the fourth chunk and corkscrews around the shaft, the fist parting her hair, a shard opening a thin cut on her left cheek. Blood beads. Snap back to full speed as her feet find the chunk's edge.
[SHOT 6] · The gate (~1s): held extreme close-up, slow push-in — her eyes only, no blink, cyan spearhead light reflected across them, the cheek-cut's red line sharp against the cel shading. Behind her focus, blurred, Garan heaves the biggest slab of the fight overhead, orange light pouring through its cracks.
[SHOT 7] · The pierce (~3.5s): he hurls the colossal slab — she dives spear-first off the top chunk, left→right, and PIERCES STRAIGHT THROUGH ITS CENTER: the slab splits into two halves that peel past the camera. All sound — music and SFX — drops dead silent for the half-beat of the pierce; one deep concussive boom resolves it as the spear-tip slams into his crossed-forearm guard. Hit-stop on the impact frame, FX touching all four edges, near-white color-out. Then motion resumes: Garan is driven backward, iron heels carving twin trenches, the floor cratering — and holds his feet. Camera whips with her dive, freezes on the hit-stop, then eases back to a wide: both standing, dust ring expanding, the exchange over but the fight not.

Environmental activity: no bystanders — an empty ruined arena; dust motes and small debris rain steadily after every impact; distant rumble of settling stone.
Audio: music allowed and scored to the fight; full SFX — stone shear, rubble whistle, the silence-drop and single boom on the pierce.

The two fighters remain two distinct, separate bodies in every frame, even at full contact. Faces, hands, and designs stay on-model start to finish — five-fingered hands with clean articulation, correct limb topology, character designs identical shot to shot. The spear keeps its slim leaf-blade shape and full two-meter length in every frame. Rubble flies on heavy ballistic arcs with real tonnage — each chunk accelerates, hits hard, and stays down; her foot-plants grip and crack the stone they leave (the SHOT 5 slow-mo and SHOT 7 hit-stop are deliberate, intentional holds). Full fluid high-frame-feel animation with a living camera throughout; matte hand-drawn cel surfaces; color stays disciplined to the locked cyan/orange/slate palette. No watermark, no on-screen text, no subtitles.
15 seconds. 16:9.
```

Source: [Source](https://x.com/Dani__oros/status/2084475003223896189)

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084474303987474432/vid/avc1/1920x1080/xdN7PiMNI73-LFHG.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084474303987474432/img/2GZ8LBxzIzHzoroJ.jpg" height="420" alt="画面方向を固定した7ショットの槍の決闘 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084474303987474432/vid/avc1/1920x1080/xdN7PiMNI73-LFHG.mp4?tag=29)**
</div>

#### エビデンス

- **クリエイター:** [Dani Oros](https://x.com/Dani__oros)
- **正規の出典:** [正規の出典](https://x.com/Dani__oros/status/2084475003223896189)
- **公開日:** 2026年8月4日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="prompt-3"></a>

### #3: ひとつの視覚的な reveal を置くテレビドラマのオープニング

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

場所を提示し、人物を見せ、動機のある最後のビートへ着地する、Wan 3.0のテレビドラマ風オープニング展示から抽出した透明な再構成。

#### ローカライズ済みプロンプト

```
ひとつの一貫した視覚世界で、30秒、16:9のテレビドラマのオープニングを作成する。夜明けの静かなワイドショットから始め、雨に濡れた都市の通りを歩く人物へ近づく。物語のビートが変わる時だけカットする。反射が2人目の人物を見せ、カメラは主人公を軒下まで追い、ゆっくり押し込んで手の中の物に気づく瞬間で止める。衣装、天候、建築、画面方向を維持する。抑えた自然色、足音、金属に当たる雨、遠い交通音、最後の reveal で低い音楽の上昇。字幕、ロゴ、不自然な場面リセットは入れない。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 30-second, 16:9 television-drama opening in one coherent visual world. Begin with a quiet wide establishing shot at dawn, then track toward a lone character moving through a rain-wet urban street. Cut only when the story beat changes: a reflection reveals a second figure, the camera follows the protagonist under an awning, and a slow push-in lands on the character noticing an object in their hand. Preserve wardrobe, weather, architecture, and screen direction across the sequence. Use restrained natural color, dialogue-free ambience, footsteps, distant traffic, rain on metal, and one low musical swell at the final reveal. Keep the camera purposeful and the acting subtle; no captions, logos, or arbitrary scene resets.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084964593970118656/vid/avc1/1920x1080/O-G6eb25Vmm-HSLT.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084964593970118656/img/Cs_-4_9Ipy0tYbig.jpg" height="420" alt="ひとつの視覚的な reveal を置くテレビドラマのオープニング - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084964593970118656/vid/avc1/1920x1080/O-G6eb25Vmm-HSLT.mp4?tag=29)**
</div>

#### エビデンス

- **クリエイター:** [WaveSpeed AI](https://x.com/wavespeed_ai)
- **正規の出典:** [正規の出典](https://x.com/wavespeed_ai/status/2084965430687588477)
- **公開日:** 2026年8月5日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="prompt-4"></a>

### #4: 別々のリファレンスから人物、場所、声を組み立てる

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### このワークフローが重要な理由

PixelDojoの能力説明から再構成した再利用可能なマルチモーダルブリーフ。別々の入力に人物、場所、声を割り当て、連続性のルールを明示する。

#### ローカライズ済みプロンプト

```
3つのリファレンスから20秒、16:9のシネマティックなシーンを作成する。画像1は人物のアイデンティティ、画像2は場所、音声1は話し声を提供する。人物を前景から参照場所へ歩かせ、カメラを振り返らせ、参照音声で短く自然な台詞を言わせる。顔、髪、服、スケール、空間関係、声のアイデンティティを全編で維持する。ゆっくりした横移動を台詞の間に穏やかなプッシュインへ変える。光と遠近をリファレンスに合わせ、環境音と足音を加える。アイデンティティの変化、余分な人物、文字、透かしは不可。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 20-second, 16:9 cinematic scene from three references: image 1 supplies the character identity, image 2 supplies the location, and audio 1 supplies the speaking voice. Let the character walk from the foreground into the referenced location, turn toward camera, and deliver one short natural line from the audio reference. Preserve the character's face, hair, clothing, scale, spatial relationship to the environment, and vocal identity from start to finish. Use a slow lateral camera move that becomes a gentle push-in at the line. Match the lighting and perspective of the references, add quiet room tone and footsteps, and keep the performance restrained. No identity drift, extra people, text, or watermark.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2083212925255446528/vid/avc1/1280x720/QK8mfQ6SmZT9g0RO.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2083212925255446528/img/XZ674J3NnC6mpSLI.jpg" height="420" alt="別々のリファレンスから人物、場所、声を組み立てる - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2083212925255446528/vid/avc1/1280x720/QK8mfQ6SmZT9g0RO.mp4?tag=29)**
</div>

#### エビデンス

- **クリエイター:** [PixelDojo](https://x.com/PixelDojoAI)
- **正規の出典:** [正規の出典](https://x.com/PixelDojoAI/status/2083212955072807175)
- **公開日:** 2026年7月31日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="community-prompt-cases"></a>

## コミュニティのビデオプロンプト

> 出典の日付と編集上の価値の順.

<a id="workflow-camera-direction-shot-design"></a>

### カメラパスとショットのテンポ (3)

フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。

**注目のビデオプロンプト**

- [雨に濡れた闘技場での読みやすいボクシング演出](#prompt-1)
- [ひとつの視覚的な reveal を置くテレビドラマのオープニング](#prompt-3)

<a id="prompt-5"></a>

#### #1: 意図したカメラロジックによる縦型ストーリーテスト

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

同じプロンプトを使った縦型比較から再構成した、人物1人、明確なエスカレーション、見せ場より物語に奉仕するカメラのテスト。

##### ローカライズ済みプロンプト

```
15秒、9:16の縦型ナラティブテストを作成する。夜、点滅する街灯の下で待つ配達員をミディアムショットで始める。0〜4秒はゆっくりしたプッシュインと遠い交通音で緊張を保つ。4〜8秒、背景を2人目の人物が横切る。配達員の反応が分かるだけの小さなパンを行う。8〜12秒、赤いジャケットと濡れた路面を維持しながら狭い通路を走る配達員を後退追跡する。12〜15秒、出口と夜明けをコンパクトな俯瞰で見せる。方向、人物、光、地理を固定し、足音、布、雨、控えめな音楽の脈動を使う。ランダムなカット、文字、透かしは不可。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 15-second, 9:16 vertical narrative test. Start on a medium shot of a courier waiting beneath a flickering street sign at night. At 0-4 seconds, hold the tension with a slow push-in and distant traffic. At 4-8 seconds, a second figure crosses the background; pan just enough to reveal the courier's reaction. At 8-12 seconds, track backward as the courier runs through a narrow passage, preserving the red jacket and wet pavement. At 12-15 seconds, rise into a compact overhead reveal of the exit and the approaching dawn. Keep screen direction, body identity, lighting, and geography stable. Use footsteps, fabric movement, rain, and one restrained musical pulse. No random cuts, text, captions, or watermark.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2085020209925210112/vid/avc1/1920x3238/ltuegtJLzV0abXY_.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2085020209925210112/img/TUR8ROJJ4D0fV7V_.jpg" height="420" alt="意図したカメラロジックによる縦型ストーリーテスト - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2085020209925210112/vid/avc1/1920x3238/ltuegtJLzV0abXY_.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [WaveSpeed AI](https://x.com/wavespeed_ai)
- **正規の出典:** [正規の出典](https://x.com/wavespeed_ai/status/2085025284378538045)
- **公開日:** 2026年8月5日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="workflow-dialogue-performance-native-audio"></a>

### ネイティブ音声とパフォーマンス (2)

台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。

<a id="prompt-6"></a>

#### #2: ネイティブ音声と時間指定の音キューを使う早期アクセスシーン

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### このワークフローが重要な理由

テキストから動画、画像から動画、1080p、30秒、ネイティブ音声を示した早期アクセス投稿からの再構成。音をブリーフの一部として扱う。

##### ローカライズ済みプロンプト

```
空の海岸道路で自転車に乗る人が停止している添付静止画から、30秒、16:9のシネマティックな画像から動画へのシーンを作成する。人物、自転車の形、地平線、時刻を維持する。カメラがゆっくり横にドリーする間、自然な風と遠い波音で始める。8秒で走り出し、車輪、ゆるいジャケット、路面の水しぶきが説得力のある重さで反応する。18秒で低いトラッキングへ移り、太陽が雲を抜ける。タイヤ、チェーン、風、カモメ、地平線の reveal での穏やかな音楽をネイティブ音声にする。字幕、ロゴ、顔の変化、人工的なループは不可。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 30-second, 16:9 cinematic image-to-video scene from the attached still of a cyclist waiting at an empty coastal road. Preserve the cyclist, bicycle geometry, horizon, and time of day. Begin with natural wind and distant surf as the camera makes a slow side dolly. At 8 seconds, the cyclist starts forward; the wheels, loose jacket fabric, and road spray respond with believable weight. At 18 seconds, the camera moves into a low tracking angle while the sun breaks through the cloud. Build native audio from tire hum, chain movement, wind, gulls, and one soft musical lift at the horizon reveal. Keep motion coherent for the full shot, with no captions, logos, face drift, or artificial loop.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2085089914044207104/vid/avc1/1920x1080/YSnIMXNgd_j1-1_q.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2085089914044207104/img/6fdS2Hv6vcDWrnOm.jpg" height="420" alt="ネイティブ音声と時間指定の音キューを使う早期アクセスシーン - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2085089914044207104/vid/avc1/1920x1080/YSnIMXNgd_j1-1_q.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Enhance AI](https://x.com/enhance_ai)
- **正規の出典:** [正規の出典](https://x.com/enhance_ai/status/2085089954099757225)
- **公開日:** 2026年8月5日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="prompt-7"></a>

#### #3: 公式デモ風の環境 reveal とネイティブサウンド

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

コミュニティ投稿が添付映像をWan 3.0の公式デモと説明していることに基づく、明示的に再構成したケース。未確認の仕様は事実として扱わない。

##### ローカライズ済みプロンプト

```
30秒、16:9のシネマティックな環境 reveal を作成する。ブルーアワーに人物が高い窓を開ける静かな室内から始める。ゆっくりしたハンドヘルドのプッシュで動きを追い、雲、遠い光、近くの布に見える風がある広い海岸風景へ外に出る。世界が広がっても人物と建築を一貫させる。室内の環境音から風、鳥、波、抑えたオーケストラの上昇へ移行する。最後のワイドショットを数秒保つ。空間の連続性、物理的な光、読みやすいカメラパスを優先する。文字、字幕、ロゴ、架空の技術ラベルは不可。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 30-second, 16:9 cinematic environment reveal. Start in a quiet interior with a person opening a tall window at blue hour. Follow the movement with a slow handheld push toward the opening, then transition outside into a wide coastal landscape with moving clouds, distant lights, and visible wind through nearby fabric. Keep the person and the architecture consistent while the world expands around them. Use natural room tone that gives way to wind, birds, soft surf, and a restrained orchestral rise. Let the final wide shot breathe for several seconds. Prioritize spatial continuity, physical light, and a readable camera path. No text, subtitles, logos, or invented technical labels.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084741113894584320/vid/avc1/1280x720/VKBqU5of84zaTd6F.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084741113894584320/img/vqjwcPxwyqxvccJB.jpg" height="420" alt="公式デモ風の環境 reveal とネイティブサウンド - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084741113894584320/vid/avc1/1280x720/VKBqU5of84zaTd6F.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Furkan Gozukara](https://x.com/FurkanGozukara)
- **正規の出典:** [正規の出典](https://x.com/FurkanGozukara/status/2084741391012286807)
- **公開日:** 2026年8月4日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/text-to-video)**

---

<a id="workflow-image-to-video-subject-continuity"></a>

### リファレンス主導の連続性 (1)

静止画を動かしながら、人物の同一性、構図、製品形状、絵コンテのレイアウトを保つ画像起点のワークフロー。

**注目のビデオプロンプト**

- [別々のリファレンスから人物、場所、声を組み立てる](#prompt-4)

<a id="workflow-stylized-motion-visual-effects"></a>

### スタイライズドアクションとエフェクト (1)

変形、シミュレーション、シュールな物理、グラフィックモーション、独自のメディア処理によるエフェクトとアニメーションのパターン。

**注目のビデオプロンプト**

- [画面方向を固定した7ショットの槍の決闘](#prompt-2)

## 検証済みケースを投稿する

実際の演出パターンを学べるWan 3.0 Videoのケースを見つけましたか？プロンプト、再生可能な結果、クリエイター、出典、モデルエビデンス、入力モードをGitHub Issuesから送ってください。

### GitHub issue

1. [**ビデオプロンプトを投稿する**](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. 完全なブリーフ、出典、クリエイター、モデルエビデンス、再生可能なメディアを提示する
3. メンテナーが出所、動画としての価値、対象範囲、重複を確認する
4. 承認されたケースはローカルデータソースに正規化される
5. すべての品質チェックに合格すると、ジェネレーターがケースを公開する

**編集方針：** 人気はエビデンスではありません。完全なプロンプトと有用な動画を備えた低反応の投稿は、再現可能な指示のないバイラルなショーケースより高く評価されることがあります。

投稿前に[CONTRIBUTING.md](docs/CONTRIBUTING.md)を読んでください。

---

## ライセンス

ImagineVidが作成した編集テキストとコードは[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)でライセンスされています。第三者のプロンプト、クリエイターの身元、商標、画像、動画はそれぞれの権利者に帰属し、このライセンスの対象外です。

---

## クリエイタークレジット

<details>
<summary>Community creators we thank (6)</summary>

[Dani Oros](https://x.com/Dani__oros) · [Enhance AI](https://x.com/enhance_ai) · [Furkan Gozukara](https://x.com/FurkanGozukara) · [Oprèlia AI](https://x.com/OpreliaAI) · [PixelDojo](https://x.com/PixelDojoAI) · [WaveSpeed AI](https://x.com/wavespeed_ai)

</details>

---

## リポジトリの成長

[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-wan-3-0-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills/stargazers)

**[リポジトリの成長](https://star-history.com/#imagineVid/Awesome-wan-3-0-prompts-and-skills&Date)**

---

<div align="center">

**[Wan 3.0 Videoで制作する](https://imaginevid.io/ja/text-to-video)** •
**[検証済みケースを投稿する](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[コレクションにスターを付ける](https://github.com/imagineVid/Awesome-wan-3-0-prompts-and-skills)**

<sub>バージョン管理されたローカルデータから生成： 2026-08-22T04:28:26.932Z</sub>

</div>
