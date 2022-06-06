<script>
  import PostEntry from "$components/PostEntry.svelte";
  import { posts as postsList } from "$data/posts.js";
</script>

<section class="posts">
  <ul>
    {#each postsList as postInfo}
      <li class="posts__post-entry">
        <PostEntry {postInfo} />
      </li>
    {/each}
  </ul>
</section>

<style>
  .posts {
    padding: 3rem;
    min-height: 100vh;
    background-color: var(--color-dark-primary);
  }

  .posts ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    max-width: var(--main-column-width);
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    column-gap: 1.5rem;
  }

  @media (max-width: 480px) {
    .posts ul {
		grid-template-columns: 1fr;
    }
  }
</style>
