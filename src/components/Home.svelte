<script>
	import PostEntry from '$components/PostEntry.svelte';
	import {posts as postsList} from '$data/posts.js';


</script>

<section id="posts">
	<ul>
		{#each postsList as postInfo}
			<li>
				<PostEntry {postInfo} />
			</li>
		{/each}
	</ul>
</section>

<style>
	#posts ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
        max-width: var(--main-column-width);
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1.5rem;
	}
</style>
