<script>
// @ts-nocheck
    import { onMount } from "svelte";
    import { onDestroy } from "svelte";
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

    let id = 0;
    let text;
    let listNotes = [];
    let idx = null;
    selectedId.subscribe((val) => idx = val);
    $: courseName = $courses[idx]?.name;
    $: courseId = $courses[idx]?.id;
    $: course = {id: courseId, name: courseName}


    // Tallenna muistiinpano
    function saveNote(){
        select.style.display = 'none';
        nameCourse.style.display = 'block';
        notesHeading.style.display = 'block';
        let timestamp = new Date().toISOString();
        let note = { text, course, timestamp };

        notes.add(note);
        listNotes = [...listNotes, {id, text}];
        id++;
        text = "";
    }
    onDestroy(() => {
            selectedId.set(null)
    });
</script>

<h2>Create Notes For:</h2>

<div id="select">Select Course: <CourseSelect /></div>

<h2 id="courseName">{courseName}</h2>

<textarea rows="10" placeholder=" Write your notes here..." bind:value={text}/><br>
<button id="saveButton" disabled={!text || $courses[idx]?.id == null} on:click={saveNote}>Save</button>
<div style="clear: both;"></div>

<h4 id="notesHeading">Notes from this session:</h4>

{#if listNotes}
    {#each listNotes as {id, text} (id)}
    <div id="note">
        <p>{text}</p>
    </div>
    {/each}
{/if}
<div style="clear: both;"></div>

<style>
    textarea {
        resize: none;
        margin: 0 50px 0 50px;
        width: 586px;
        max-width: 95%;
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
    h2, h4, #select{
        margin-left: 50px;
    }
    h4{
        margin-top: 0;
    }
    div#note{
        border: 2px solid black;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-left: 50px;
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
        margin-right: 50px;
        margin-bottom: 10px;
        float: right;
    }
    #saveButton:disabled{
        color: #aaaaaa;
    }
    #saveButton:enabled:hover{
        border: transparent;
        cursor: pointer;
    }
</style>