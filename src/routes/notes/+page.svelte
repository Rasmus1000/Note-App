<script>
// @ts-nocheck

	import CourseSelect from "../CourseSelect.svelte";
    import { selectedId } from "$lib/selectStore.js";
    import { courses } from "$lib/courseStore.js";
    import { notes } from "$lib/noteStore.js";

    // @ts-ignore
    let text;
    // @ts-ignore
    let idx = null;
    selectedId.subscribe((val) => idx = val);
    // @ts-ignore
    $: courseName = $courses[idx]?.nimi;
    // @ts-ignore
    $: courseId = $courses[idx]?.id;
    $: course = {nimi: courseName, id: courseId}

    function saveNote(){
        let timestamp = new Date().toISOString();
        // @ts-ignore
        let note = { text, timestamp, course };

        notes.add(note);
        text = "";
    }
</script>

<h2>Create Notes</h2>

Select Course: <CourseSelect />

<textarea rows="10" bind:value={text}/>

<button on:click={saveNote}>Save</button>

<style>
    textarea {
        width: 500px;
    }
</style>