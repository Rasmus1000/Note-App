<script>
// @ts-nocheck

    import { onMount } from "svelte";
	import CourseSelect from "../CourseSelect.svelte";
    import { selectedId } from "$lib/selectStore.js";
    import { courses } from "$lib/courseStore.js";
    import { notes } from "$lib/noteStore.js";

    let select;
    let nameCourse;
    let notesHeading;
    onMount(() => {
        select = document.getElementById('select');
        nameCourse = document.getElementById('courseName');
        notesHeading = document.getElementById('notesHeading');
    });

    // @ts-ignore
    let text;
    let listNotes = [];
    // @ts-ignore
    let idx = null;
    selectedId.subscribe((val) => idx = val);
    // @ts-ignore
    $: courseName = $courses[idx]?.nimi;
    // @ts-ignore
    $: courseId = $courses[idx]?.id;
    $: course = {nimi: courseName, id: courseId}


    function saveNote(){
        select.style.display = 'none';
        nameCourse.style.display = 'block';
        notesHeading.style.display = 'block';
        let timestamp = new Date().toISOString();
        // @ts-ignore
        let note = { text, timestamp, course };

        notes.add(note);
        listNotes = [...listNotes, text];
        text = "";
    }
</script>

<h2>Create Notes For:</h2>

<div id="select">Select Course: <CourseSelect /></div>

<h2 id="courseName">{courseName}</h2>

<textarea rows="10" placeholder=" Write your notes here..." bind:value={text}/><br>
<button id="saveButton" disabled={!text || $courses[idx]?.id == null} on:click={saveNote}>Save</button>

<h4 id="notesHeading">Notes from this session:</h4>

{#if listNotes}
    {#each listNotes as note (note)}
    <div id="note">
        <p>{note}</p>
    </div>
    {/each}
{/if}

<style>
    textarea {
        resize: none;
        width: 586px;
        max-width: 586px;
        background-color: rgb(230, 230, 230);
        color: #444444;
        border-radius: 10px;
        border: solid 2px transparent;
        padding: 5px;
    }
    p{
        padding: 5px;
        margin: 0;
    }
    div#note{
        border: 2px solid black;
        border-radius: 10px;
        margin-bottom: 10px;
        max-width: 596px;
    }
    #notesHeading{
        display: none;
    }
    #courseName{
        display: none;
    }
    #saveButton{
        height: 30px;
        width: 70px;
        background-color: rgb(10, 110, 110);
        border-radius: 10px;
        border: solid 2px white;
        color: white;
    }
    #saveButton:disabled{
        color: #aaaaaa;
    }
    #saveButton:enabled:hover{
        border: transparent;
    }
</style>