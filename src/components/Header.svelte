<script>
  import logo from "$svg/logo.svg";
  import help from "$svg/help.svg";
  import SideMenu from "$components/SideMenu.svelte";
  import { showSideMenu } from "$stores/sideMenu.js";
  import { width, contentWidth } from "$stores/window.js";

  function openMenu() {
    $showSideMenu = true;
    const scrollBarWidth = $width - $contentWidth;
    window.document.body.style.paddingRight = `${scrollBarWidth}px`;
    window.document.body.classList.toggle("no-scroll");
  }
</script>

<header class="header">
  <div id="main-header">
    <div class="header__logo">
      <div class="header__logo__icon">
        <a href="https://ohmychart.com">{@html logo}</a>
      </div>

      <div class="header__logo__text">
        <div>Data-driven visualizations &</div>
        <div>visual stories</div>
      </div>
    </div>

    <div class="header__about-menu" on:click={openMenu}>
      {#if !$showSideMenu}
        <div class="header__about-menu__icon">{@html help}</div>
      {/if}
    </div>
  </div>

  <div id="main-header-border" />

  <SideMenu />
</header>

<style>
  header {
    width: 100%;
  }

  #main-header {
    background-color: var(--color-teal-primary);
    height: var(--main-header-height);
    padding: var(--main-header-padding);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {
    #main-header {
      height: var(--main-header-height-mobile);
      padding: var(--main-header-padding-mobile);
    }
  }

  #main-header-border {
    height: var(--main-header-border-height);
    background-image: url("/assets/img/pixel-texture.png");
    background-color: var(--color-dark-primary);
  }

  @media (max-width: 480px) {
    #main-header-border {
      display: none;
    }
  }

  .header__logo__icon * {
    width: 48px;
    margin: 0 1rem;
    display: inline-block;
    transition: all 0.4s;
    fill: var(--color-white-primary);
  }

  @media (max-width: 480px) {
    .header__logo__icon * {
      width: 32px;
    }
  }

  .header__logo {
    display: flex;
    flex-direction: row;
    line-height: 0;
    align-items: center;
  }

  .header__logo__text {
    font-size: 1.5rem;
    line-height: 1.85rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    .header__logo__text {
      font-size: 1.15rem;
      line-height: 1.2rem;
    }
  }

  .header__about-menu__icon {
    width: 28px;
    height: 28px;
    fill: var(--color-white-primary);
    cursor: pointer;
    transition: all 0.4s ease-in;
  }

  .header__about-menu__icon:hover {
    fill: var(--color-dark-primary);
    background-color: var(--color-white-primary);
  }

  @media (max-width: 480px) {
    .header__about-menu__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
