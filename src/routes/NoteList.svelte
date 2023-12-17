<script>
	import Note from "./Note.svelte";
    import notes from '$lib/notes.json'

    //let notes = [
    //    {text: "Console.log() log messageja", timestamp: new Date().toLocaleDateString(), course: 'JavaScript'},
    //    {text: "Käytä aina git status", timestamp: new Date().toLocaleDateString(), course: 'Versionhallinta'},
    //    {text: "Prata du svenska", timestamp: new Date().toLocaleDateString(), course: 'Ruotsi'}
    //];

</script>

{#each notes as note}
    <Note {...note}/>
{/each}