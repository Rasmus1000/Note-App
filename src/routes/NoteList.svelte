<script>
// @ts-nocheck
    import { slide } from 'svelte/transition';
	import Note from "./Note.svelte";
    import { notes } from "$lib/noteStore.js"
    import { courses } from "$lib/courseStore.js";
    import { selectedId } from "$lib/selectStore.js";

    let idx = null;
    selectedId.subscribe((val) => idx = val);

    $: found = $notes.filter((n) => n.course.id === $courses[idx]?.id || $courses[idx]?.id === null);

    function deleteNote(id){
        notes.delete(id);
    }
    
</script>

<!--{#each $notes as note}
    {#if note.course.id === $courses[idx]?.id || $courses[idx]?.id === null}
        <div transition:slide>
            <Note {...note}/>
            <button on:click={deleteNote(note.id)}>&times;</button>
        </div>
    {/if}
{/each}-->

{#if found.length > 0}
    {#each found as note (note.id)}
        <div transition:slide>
            <Note {...note}/>
            <button title="Delete Note" on:click={deleteNote(note.id)}>&times;</button>
        </div>
    {/each}
{:else}
    <p>No notes found!</p>
{/if}

<style>
    div{
        display: grid;
        grid-template-columns: 1fr max-content;
        position: relative;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        height: 20px;
        width: 20px;
        font-size: 25px;
        border-radius: 10px;
        color: red;
        background-color: #dddddd;
        cursor: pointer;
        position: absolute;;
        right: 5px;
        top: 5px;
    }
    button:hover{
        border: solid 2px rgb(10, 110, 110);
    }
</style>