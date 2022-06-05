<script>
  import { base } from "$app/paths";

  export let postInfo;

  let isHovered = false;
</script>

<a href={base + postInfo.url}>
  <div
    class="post-entry"
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
  >
    <div class="post-entry__content">
      {#if !isHovered}
        <h2  class="post-entry__title">
          {postInfo.title}
        </h2>
      {:else}
        <p  class="post-entry__description">
          {postInfo.description}
        </p>
      {/if}
    </div>
    <div class="post-entry__cover">
      {@html postInfo.cover}
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }

  .post-entry {
    outline: 2px solid var(--color-teal-primary);
    background-color: var(--color-dark-primary);
    height: 100%;
    position: relative;
    min-height: 245px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    transition: all 0.4s;
  }

  .post-entry__cover {
    fill: var(--color-teal-primary);
    stroke: var(--color-teal-primary);
    stroke-width: 2px;
    width: 100%;
  }

  .post-entry:hover {
    background-color: var(--color-teal-primary);
  }

  .post-entry__content h2.post-entry__title {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-white-primary);
    margin: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .post-entry__description {
    font-size: 1.75rem;
    line-height: 2.25rem;
    color: var(--color-dark-primary);
    margin: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
