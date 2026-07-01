const emotionMeta = {
  happy: { label: "Happy", emoji: "😊", tone: "bright" },
  sad: { label: "Sad", emoji: "😢", tone: "soft" },
  angry: { label: "Angry", emoji: "😠", tone: "sharp" },
  surprise: { label: "Surprise", emoji: "😮", tone: "lifted" },
  fear: { label: "Fear", emoji: "😨", tone: "tense" },
  disgust: { label: "Disgust", emoji: "🤢", tone: "rough" },
};

const emotionColors = {
  happy: "#f7d84d",
  sad: "#72b8f3",
  angry: "#f07a7a",
  surprise: "#8fd7c4",
  fear: "#b7a2ea",
  disgust: "#9fd18b",
};

const mixedConditions = [
  { title: "Real recording", note: "Ground truth", type: "reference", key: "realSpeech" },
  { title: "CoSyVoice2 original", note: "alpha 0.0", key: "cosyBase" },
  { title: "CoSyVoice2 instruction", note: "alpha 0.0", key: "cosyInstruction" },
  { title: "Steer on CoSyVoice2 (CoCoEmo)", note: "alpha 3.0", key: "cosy3" },
  { title: "Steer on CoSyVoice2 (CoCoEmo)", note: "alpha 5.0", key: "cosy5" },
  { title: "CoSyVoice2 emo vector + steer (CoCoEmo)", note: "alpha 3.0", key: "cosyInstruction3" },
  { title: "IndexTTS2 original", note: "alpha 0.0", key: "indexBase" },
  { title: "IndexTTS2 emo vector", note: "alpha 0.0", key: "indexInstruction" },
  { title: "Steer on IndexTTS2 (CoCoEmo)", note: "alpha 3.0", key: "index3" },
  { title: "Steer on IndexTTS2 (CoCoEmo)", note: "alpha 5.0", key: "index5" },
  { title: "IndexTTS2 emo vector + steer (CoCoEmo)", note: "alpha 3.0", key: "indexInstruction3" },
];

const misalignmentConditions = [
  { title: "Real recording", note: "Ground truth", type: "reference", key: "realSpeech" },
  { title: "CoSyVoice2 original", note: "alpha 0.0", key: "cosyOriginal" },
  { title: "CoSyVoice2 instruction", note: "alpha 0.0", key: "cosyInstruction" },
  { title: "Steer on CoSyVoice2 (CoCoEmo)", note: "alpha 3.0", key: "cosy3" },
  { title: "Steer on CoSyVoice2 (CoCoEmo)", note: "alpha 6.0", key: "cosy6" },
  { title: "IndexTTS2 original", note: "alpha 0.0", key: "indexOriginal" },
  { title: "IndexTTS2 emo vector", note: "alpha 0.0", key: "indexInstruction" },
  { title: "Steer on IndexTTS2 (CoCoEmo)", note: "alpha 3.0", key: "index3" },
  { title: "Steer on IndexTTS2 (CoCoEmo)", note: "alpha 6.0", key: "index6" },
];

const datasetLinks = {
  iemocap: {
    label: "IEMOCAP",
    url: "https://sail.usc.edu/iemocap/",
  },
  cremad: {
    label: "CREMA-D",
    url: "https://github.com/CheyneyComputerScience/CREMA-D",
  },
};

function buildMixedAudio(dataset, id) {
  const folder = dataset === "cremad" ? "cremad_mixed" : "iemocap";
  return {
    realSpeech: `./real_speech/${id}.wav`,
    cosyBase: `./cosyvoice2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_0.0_manual_layers/generated_speech/${id}.wav`,
    cosyInstruction: `./cosyvoice2/mixed_emotion/instruction/${folder}/attn_output/alpha_0.0_manual_layers/generated_speech/${id}.wav`,
    cosy3: `./cosyvoice2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_3.0_manual_layers/generated_speech/${id}.wav`,
    cosy5: `./cosyvoice2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_5.0_manual_layers/generated_speech/${id}.wav`,
    cosyInstruction3: `./cosyvoice2/mixed_emotion/instruction_alpha3/${folder}/attn_output/alpha_3.0_manual_layers/generated_speech/${id}.wav`,
    indexBase: `./indextts2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_0.0_manual_layers/generated_speech/${id}.wav`,
    indexInstruction: `./indextts2/mixed_emotion/mixed_emotion_instruction/${folder}/attn_output/alpha_0.0_manual_layers/generated_speech/${id}.wav`,
    indexInstruction3: `./indextts2/mixed_emotion/mixed_emotion_instruction/${folder}/attn_output/alpha_3.0_manual_layers/generated_speech/${id}.wav`,
    index3: `./indextts2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_3.0_manual_layers/generated_speech/${id}.wav`,
    index5: `./indextts2/mixed_emotion/steer_cocoemo/${folder}/attn_output/alpha_5.0_manual_layers/generated_speech/${id}.wav`,
  };
}

const mixedSamples = [
  {
    id: "Ses04F_script01_3_M030",
    title: "Sad + angry",
    transcript: "It takes a lot of time to toss that off because they weren't just men.",
    prompt: "Say it with a blend, mostly sad with some angry.",
    dataset: "iemocap",
    datasetFile: "Ses04F_script01_3_M030.wav",
    referenceHint: "Session4/sentences/wav/Ses04F_script01_3/Ses04F_script01_3_M030.wav",
    emotions: [
      { key: "sad", percent: 75 },
      { key: "angry", percent: 25 },
    ],
    audio: buildMixedAudio("iemocap", "Ses04F_script01_3_M030"),
  },
  {
    id: "Ses03F_impro02_F036",
    title: "Sad + angry",
    transcript: "It's all I ever knew how to do. I can't quit now.",
    prompt: "Say it with a blend, mostly sad with some angry.",
    dataset: "iemocap",
    datasetFile: "Ses03F_impro02_F036.wav",
    referenceHint: "Session3/sentences/wav/Ses03F_impro02/Ses03F_impro02_F036.wav",
    emotions: [
      { key: "sad", percent: 75 },
      { key: "angry", percent: 25 },
    ],
    audio: buildMixedAudio("iemocap", "Ses03F_impro02_F036"),
  },
  {
    id: "Ses03F_impro06_F035",
    title: "Happy + sad",
    transcript: "I loved him so much.",
    prompt: "Say it with a blend, mostly sad with some happy.",
    dataset: "iemocap",
    datasetFile: "Ses03F_impro06_F035.wav",
    referenceHint: "Session3/sentences/wav/Ses03F_impro06/Ses03F_impro06_F035.wav",
    emotions: [
      { key: "happy", percent: 25 },
      { key: "sad", percent: 75 },
    ],
    audio: buildMixedAudio("iemocap", "Ses03F_impro06_F035"),
  },
  {
    id: "Ses02F_script01_3_M010",
    title: "Happy + sad",
    transcript:
      "You feel it's wrong here, don't you? This yard, this chair. I want you to be ready for me. I don't want to have to win you away from anything.",
    prompt: "Say it with a blend, mostly happy with some sad.",
    dataset: "iemocap",
    datasetFile: "Ses02F_script01_3_M010.wav",
    referenceHint: "Session2/sentences/wav/Ses02F_script01_3/Ses02F_script01_3_M010.wav",
    emotions: [
      { key: "happy", percent: 75 },
      { key: "sad", percent: 25 },
    ],
    audio: buildMixedAudio("iemocap", "Ses02F_script01_3_M010"),
  },
  {
    id: "Ses01M_impro03_M000",
    title: "Happy + surprise",
    transcript: "The craziest thing just happened to me.",
    prompt: "Say it with a blend, mostly happy with some surprise.",
    dataset: "iemocap",
    datasetFile: "Ses01M_impro03_M000.wav",
    referenceHint: "Session1/sentences/wav/Ses01M_impro03/Ses01M_impro03_M000.wav",
    emotions: [
      { key: "happy", percent: 75 },
      { key: "surprise", percent: 25 },
    ],
    audio: buildMixedAudio("iemocap", "Ses01M_impro03_M000"),
  },
];

const misalignmentGroups = [
  {
    emotion: "happy",
    summary: "All requested slots are available for two of the three curated happy samples.",
    rows: [
      {
        id: "happy_Ses05M_script03_1_M013",
        label: "Happy",
        transcript: "You mustn't be serious, darling. That's just what they want.",
        audio: {
          realSpeech: "./real_speech/Ses05M_script03_1_M013.wav",
          cosyOriginal:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_0.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          cosyInstruction:
            "./cosyvoice2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          cosy3:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_3.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          cosy6:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_6.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          indexOriginal:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_0.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          indexInstruction:
            "./indextts2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_6_8_1/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          index3:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_3.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
          index6:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_6.0_layer_manual_17_14/happy_high/audio/happy_Ses05M_script03_1_M013.wav",
        },
      },
    ],
  },
  {
    emotion: "sad",
    summary: "The current export includes original, instruction, CoSyVoice2 alpha 6.0, and both IndexTTS2 steered runs.",
    rows: [
      {
        id: "sad_Ses05F_script01_3_M024",
        label: "Sad",
        transcript: "Remember when I was overseas? I was in command of the company.",
        audio: {
          realSpeech: "./real_speech/Ses05F_script01_3_M024.wav",
          cosyOriginal:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_0.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          cosyInstruction:
            "./cosyvoice2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          cosy3:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_3.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          cosy6:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_6.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          indexOriginal:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_0.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          indexInstruction:
            "./indextts2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_6_8_1/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          index3:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_3.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
          index6:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_6.0_layer_manual_17_14/sad_high/audio/sad_Ses05F_script01_3_M024.wav",
        },
      },
    ],
  },
  {
    emotion: "angry",
    summary: "These angry rows show the requested structure while making missing alpha 3.0 exports explicit.",
    rows: [
      {
        id: "angry_Ses03F_impro05_F003",
        label: "Angry",
        transcript:
          "I had my luggage transferred here from Paris to L.A. and now I'm here and I need to be working and I have all my stuff in there.",
        audio: {
          realSpeech: "./real_speech/Ses03F_impro05_F003.wav",
          cosyOriginal:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_0.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          cosyInstruction:
            "./cosyvoice2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          cosy3:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_3.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          cosy6:
            "./cosyvoice2/misalignment_steer/attn_output/alpha_6.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          indexOriginal:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_0.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          indexInstruction:
            "./indextts2/misalignment_instruction/iemocap/attn_output/alpha_0.0_layer_manual_6_8_1/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          index3:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_3.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
          index6:
            "./indextts2/misalignment_steer/iemocap/attn_output/alpha_6.0_layer_manual_17_14/angry_high/audio/angry_Ses03F_impro05_F003.wav",
        },
      },
    ],
  },
];

function renderEmotionBadges(emotions) {
  return emotions
    .map(({ key, percent }) => {
      const meta = emotionMeta[key];
      return `<span class="emotion-badge"><span class="emoji">${meta.emoji}</span>${meta.label} ${percent}%</span>`;
    })
    .join("");
}

function buildEmotionGradient(emotions) {
  const stops = emotions.map(({ key, percent }) => {
    const color = emotionColors[key] || "#d9e2ef";
    const alpha = Math.max(0.14, Math.min(0.34, percent / 260));
    return `rgba(${hexToRgb(color)}, ${alpha})`;
  });

  if (!stops.length) {
    return "linear-gradient(135deg, rgba(255,255,255,0.94), rgba(244,248,252,0.94))";
  }

  if (stops.length === 1) {
    return `linear-gradient(135deg, ${stops[0]} 0%, rgba(255,255,255,0.95) 100%)`;
  }

  return `linear-gradient(135deg, ${stops.join(", ")}, rgba(255,255,255,0.94))`;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3
    ? value
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : value;
  const num = Number.parseInt(normalized, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

function renderAudioTile(condition, audioPath, dataset, datasetFile, referenceHint) {
  const datasetMeta = datasetLinks[dataset] || datasetLinks.iemocap;
  if (condition.type === "reference") {
    if (audioPath) {
      return `
        <article class="audio-tile">
          <h4>${condition.title}</h4>
          <div class="audio-meta">${condition.note}</div>
          <audio controls preload="none" src="${audioPath}"></audio>
        </article>
      `;
    }
    return `
      <article class="audio-tile">
        <h4>${condition.title}</h4>
        <div class="audio-meta">${condition.note}</div>
        <a class="dataset-link" href="${datasetMeta.url}" target="_blank" rel="noreferrer">Open ${datasetMeta.label}</a>
        <div class="audio-meta">${datasetFile}<br>${referenceHint}</div>
      </article>
    `;
  }

  if (!audioPath) {
    return `
      <article class="audio-tile missing-tile">
        <h4>${condition.title}</h4>
        <div class="audio-meta">${condition.note}</div>
        <span class="missing-pill">Pending export</span>
              <div class="audio-meta">This slot stays visible so missing wav files can be dropped in later.</div>
      </article>
    `;
  }

  return `
    <article class="audio-tile">
      <h4>${condition.title}</h4>
      <div class="audio-meta">${condition.note}</div>
      <audio controls preload="none" src="${audioPath}"></audio>
    </article>
  `;
}

function renderMixedSampleStack(containerSelector, samples) {
  const container = document.querySelector(containerSelector);
  samples.forEach((sample) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.style.background = buildEmotionGradient(sample.emotions);
    const tiles = mixedConditions
      .map((condition) =>
        renderAudioTile(
          condition,
          sample.audio[condition.key],
          sample.dataset,
          sample.datasetFile,
          sample.referenceHint,
        ),
      )
      .join("");

    card.innerHTML = `
      <div class="sample-head">
        <div>
          <h3 class="sample-title">${sample.title}</h3>
          <p class="transcript">"${sample.transcript}"</p>
        </div>
        <div class="badge-row">${renderEmotionBadges(sample.emotions)}</div>
      </div>
      <p class="sample-summary"><strong>Instruction prompt:</strong> ${sample.prompt}</p>
      <div class="audio-grid-wrap">
        <div class="audio-grid">${tiles}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function createMixedSamples() {
  renderMixedSampleStack("#mixed-samples", mixedSamples);
}

function createMisalignmentSamples() {
  const container = document.querySelector("#mismatch-samples");

  misalignmentGroups.forEach((group) => {
    const meta = emotionMeta[group.emotion];
    group.rows.forEach((row) => {
      const tiles = misalignmentConditions
        .map((condition) =>
          renderAudioTile(
            condition,
            row.audio[condition.key],
            "iemocap",
            `${row.id}.wav`,
            row.id,
          ),
        )
        .join("");

      const card = document.createElement("article");
      card.className = `sample-card mismatch-card mismatch-${group.emotion}`;
      card.innerHTML = `
        <div class="sample-head">
          <div>
            <h4 class="sample-title">${row.label}</h4>
            <p class="transcript">"${row.transcript}"</p>
          </div>
          <div class="badge-row">
            <span class="emotion-badge"><span class="emoji">${meta.emoji}</span>${meta.label}</span>
            <span class="tag">High mismatch</span>
          </div>
        </div>
        <div class="audio-grid-wrap">
          <div class="audio-grid">${tiles}</div>
        </div>
      `;
      container.appendChild(card);
    });
  });
}

createMixedSamples();
createMisalignmentSamples();
