<script lang="ts">
	export let label: String;
	export let onClick: () => void;
</script>

<button
	class="
  px-4
  py-2
  rounded-md
  border-solid
  border-2
  border-sky-900"
	on:click={onClick}
>
	{label}
</button>
