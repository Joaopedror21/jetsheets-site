document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

function closeMenu() {
  nav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menu");
}

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  nav?.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});

const futureApps = document.querySelector("#future-apps");
if (futureApps && Array.isArray(window.jetappsFutureApps)) {
  futureApps.replaceChildren();
  window.jetappsFutureApps.forEach((app, index) => {
    const card = document.createElement("article");
    card.className = `future-card${app.href ? " is-live" : ""}`;
    const top = document.createElement("div");
    top.className = "future-top";
    const status = document.createElement("span");
    status.textContent = `${String(index + 2).padStart(2, "0")} / ${app.status || "EM BREVE"}`;
    const symbol = document.createElement("span");
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = app.href ? "↗" : "✳";
    top.append(status, symbol);
    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = app.name || "Novo programa";
    const description = document.createElement("p");
    description.textContent = app.description || "Mais informações em breve.";
    body.append(title, description);
    if (typeof app.href === "string" && /^(https:\/\/|\/|\.\/|\.\.\/|#)/.test(app.href)) {
      const link = document.createElement("a");
      link.href = app.href;
      link.textContent = "Conhecer programa ↗";
      body.append(link);
    }
    card.append(top, body);
    futureApps.append(card);
  });
}

const copyButton = document.querySelector("[data-copy-command]");
const command = "Filtre os produtos com valor acima de 5000 e quantidade maior que 4000";
copyButton?.addEventListener("click", async () => {
  const original = copyButton.innerHTML;
  try {
    await navigator.clipboard.writeText(command);
    copyButton.textContent = "Comando copiado ✓";
    window.setTimeout(() => { copyButton.innerHTML = original; }, 2200);
  } catch {
    copyButton.textContent = "Selecione e copie o comando acima";
    window.setTimeout(() => { copyButton.innerHTML = original; }, 3200);
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
