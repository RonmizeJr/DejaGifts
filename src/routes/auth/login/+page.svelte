<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Github, Chrome } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Card.Root class="w-[400px]">
	<Card.Header>
		<Card.Title>Login/Signup</Card.Title>
		<Card.Description>Sign in to view your orders and make more!</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col justify-center items-center w-full gap-4">
			<Button class="w-full bg-red-700">
				<Chrome class="mr-2 h-4 w-4" />
				Sign in With Google
			</Button>
			
		</div>
	</Card.Content>
</Card.Root>
