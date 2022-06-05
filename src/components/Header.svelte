<script>
  import logo from "$svg/logo.svg";
  import SideMenu from "$components/SideMenu.svelte";
  import { showSideMenu } from "$stores/sideMenu.js";

  function openMenu() {
    $showSideMenu = true;
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
      <span>About</span>
    </div>
  </div>

  <div id="main-header-border" />

  <SideMenu />
</header>

<style>
  header {
    margin-bottom: 3rem;
  }

  #main-header {
    background-color: var(--color-teal-primary);
    height: var(main-header-height);
    padding: var(--main-header-padding);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 500px) {
    #main-header {
      padding: var(--main-header-padding-mobile);
    }
  }

  #main-header-border {
    height: var(--main-header-border-height);
    background-image: url("/assets/img/pixel-texture.png");
  }

  .header__logo__icon * {
    width: 48px;
    margin: 0 1rem;
    display: inline-block;
    transition: all 0.4s;
    fill: var(--color-white-primary);
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

  @media (max-width: 500px) {
    .header__logo__text {
      display: none;
    }
  }

  .header__about-menu span {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-dark-primary);
    cursor: pointer;
    transition: 0.4s all;
  }
  .header__about-menu:hover span {
    color: #fff;
  }
</style>
