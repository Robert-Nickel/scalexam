<script lang="ts">
	import { saveTopic } from '$lib/supabaseQueries';

	export let courseId;
	export let topics;

	let newTopicName = '';

	async function createTopic() {
		for (let topic of topics) {
			if (topic.name == newTopicName) {
				alert('Topic already exists.');
				return;
			}
		}
		let savedTopic = await saveTopic(courseId, newTopicName);
		topics.push(savedTopic);
		topics = topics;
		newTopicName = '';
	}
</script>

<article>
	<h3>Topics</h3>

	<div class="mb-4">
		{#if topics}
			{#each topics as topic}
				<span class="inline-block border rounded p-2 mr-2 mb-2">{topic.name}</span>
			{/each}
		{/if}
	</div>
	<input placeholder="New Topic" bind:value={newTopicName} />
	<button class="w-32" hidden={newTopicName == ''} on:click={createTopic}>Create</button>
</article>
