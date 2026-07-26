const pathScreen = document.querySelector("#path-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

const pathButtons = document.querySelectorAll("[data-path]");
const progressEl = document.querySelector("#progress");
const topicEl = document.querySelector("#topic");
const promptEl = document.querySelector("#prompt");
const choicesEl = document.querySelector("#choices");
const feedbackEl = document.querySelector("#feedback");
const nextBtn = document.querySelector("#next-btn");
const scoreEl = document.querySelector("#score");
const summaryEl = document.querySelector("#summary");
const restartBtn = document.querySelector("#restart-btn");

const state = {
  path: null, // "js-to-py" | "py-to-js"
  index: 0,
  score: 0,
  answered: false,
  order: [],
};

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function show(screen) {
  for (const el of [pathScreen, quizScreen, resultScreen]) {
    el.hidden = el !== screen;
  }
}

function start(path) {
  state.path = path;
  state.index = 0;
  state.score = 0;
  state.answered = false;
  state.order = shuffle(QUESTIONS).slice(0, 10);
  document.body.dataset.path = path;
  show(quizScreen);
  renderQuestion();
}

function currentQuestion() {
  return state.order[state.index];
}

function renderQuestion() {
  const q = currentQuestion();
  const toPy = state.path === "js-to-py";
  state.answered = false;
  nextBtn.hidden = true;
  feedbackEl.hidden = true;
  feedbackEl.textContent = "";
  choicesEl.replaceChildren();

  progressEl.textContent = `${state.index + 1} / ${state.order.length}`;
  topicEl.textContent = q.topic;
  promptEl.textContent = toPy ? q.promptJsToPy : q.promptPyToJs;

  const choices = shuffle(toPy ? q.choicesJsToPy : q.choicesPyToJs);
  for (const choice of choices) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.textContent = choice.text;
    btn.addEventListener("click", () => onChoose(btn, choice, q));
    choicesEl.appendChild(btn);
  }

  quizScreen.classList.remove("enter");
  void quizScreen.offsetWidth;
  quizScreen.classList.add("enter");
}

function onChoose(btn, choice, q) {
  if (state.answered) return;
  state.answered = true;

  const buttons = [...choicesEl.querySelectorAll(".choice")];
  for (const b of buttons) b.disabled = true;

  if (choice.correct) {
    state.score += 1;
    btn.classList.add("is-correct");
    feedbackEl.textContent = `Correct. ${q.explain}`;
  } else {
    btn.classList.add("is-wrong");
    const right = buttons.find((b) => {
      const text = b.textContent;
      const list =
        state.path === "js-to-py" ? q.choicesJsToPy : q.choicesPyToJs;
      return list.some((c) => c.correct && c.text === text);
    });
    right?.classList.add("is-correct");
    feedbackEl.textContent = `Not quite. ${q.explain}`;
  }

  feedbackEl.hidden = false;
  nextBtn.hidden = false;
  nextBtn.textContent =
    state.index === state.order.length - 1 ? "See results" : "Next";
}

function next() {
  if (state.index >= state.order.length - 1) {
    finish();
    return;
  }
  state.index += 1;
  renderQuestion();
}

function finish() {
  const total = state.order.length;
  const pct = Math.round((state.score / total) * 100);
  scoreEl.textContent = `${state.score} / ${total}`;

  let line;
  if (pct === 100) line = "Flawless — the DIFF tags stuck.";
  else if (pct >= 80) line = "Strong transfer. Skim NOTES on the misses.";
  else if (pct >= 50) line = "Solid start. Revisit truthiness, loops, and OOP.";
  else line = "Good baseline. Walk fundamentals 01–04 again, then retry.";

  const direction =
    state.path === "js-to-py" ? "JS → Python" : "Python → JS";
  summaryEl.textContent = `${direction}: ${pct}%. ${line}`;
  show(resultScreen);
  resultScreen.classList.remove("enter");
  void resultScreen.offsetWidth;
  resultScreen.classList.add("enter");
}

function restart() {
  show(pathScreen);
  document.body.removeAttribute("data-path");
}

for (const btn of pathButtons) {
  btn.addEventListener("click", () => start(btn.dataset.path));
}
nextBtn.addEventListener("click", next);
restartBtn.addEventListener("click", restart);
