/**
 * NAVEGAÇÃO COM SCROLL SUAVE
 * Implementa scroll suave ao clicar em links de navegação
 */
function initSmoothScroll() {
  const headerNav = document.querySelector("nav");
  
  if (!headerNav) return;

  headerNav.addEventListener("click", handleNavClick);
}

/**
 * Handler para cliques na navegação
 * @param {Event} event - Evento de clique
 */
function handleNavClick(event) {
  const navLink = event.target.closest("a");

  if (!navLink) return;

  const targetId = navLink.getAttribute("href");

  // Permite que links externos funcionem normalmente
  if (isExternalLink(navLink)) {
    return; // Deixa o navegador abrir o link normalmente
  }

  if (isAnchorLink(targetId)) {
    event.preventDefault();
    scrollToElement(targetId);
  }
}

/**
 * Verifica se o link é externo
 * @param {HTMLElement} link - Elemento do link
 * @returns {boolean}
 */
function isExternalLink(link) {
  const href = link.getAttribute("href");
  return href && (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
}

/**
 * Verifica se o link é uma âncora interna
 * @param {string} href - Atributo href do link
 * @returns {boolean}
 */
function isAnchorLink(href) {
  return href && href.startsWith("#");
}

/**
 * Realiza scroll suave para um elemento
 * @param {string} elementId - ID do elemento alvo
 */
function scrollToElement(elementId) {
  const targetElement = document.querySelector(elementId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Inicializa scroll suave ao carregar a página
initSmoothScroll();

/**
 * FUNCIONALIDADE DE EMAIL
 * Copia o email para a área de transferência ao clicar
 */
function initEmailCopy() {
  const emailLink = document.querySelector('a[href^="mailto"]');

  if (!emailLink) return;

  emailLink.addEventListener("click", handleEmailClick);
}

/**
 * Handler para clique no link de email
 * @param {Event} event - Evento de clique
 */
async function handleEmailClick(event) {
  event.preventDefault();

  const emailAddress = "kauadavidcorreia@gmail.com";

  try {
    await navigator.clipboard.writeText(emailAddress);
    showEmailCopySuccess();
  } catch (error) {
    console.error("Erro ao copiar email:", error);
    showEmailCopyError();
  }
}

/**
 * Exibe mensagem de sucesso ao copiar email
 */
function showEmailCopySuccess() {
  alert("Email copiado! 🚀");
}

/**
 * Exibe mensagem de erro ao copiar email
 */
function showEmailCopyError() {
  alert("Erro ao copiar email. Tente novamente.");
}

// Inicializa funcionalidade de email ao carregar a página
initEmailCopy();
