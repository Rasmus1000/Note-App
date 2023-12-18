<script>
// @ts-nocheck

	import Note from "./Note.svelte";
    import notes from '$lib/notes.json'
    import { courses } from "$lib/courseStore.js";
    import { selectedId } from "$lib/selectStore.js";

    let idx = null;
    selectedId.subscribe((val) => idx = val);



    //let notes = [
    //    {text: "Console.log() log messageja", timestamp: new Date().toLocaleDateString(), course: 'JavaScript'},
    //    {text: "Käytä aina git status", timestamp: new Date().toLocaleDateString(), course: 'Versionhallinta'},
    //    {text: "Prata du svenska", timestamp: new Date().toLocaleDateString(), course: 'Ruotsi'}
    //];

</script>

{#each notes as note}
    {#if note.course.id === $courses[idx]?.id || $courses[idx]?.id === null}
        <Note {...note}/>
    {/if}
{/each}








