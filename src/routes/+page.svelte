<script>
// @ts-nocheck
    import { courses } from "$lib/courseStore";
    import { notes } from "$lib/noteStore";

    export let data;
    let notesLoaded = false;

    if ($courses.length === 0){
        courses.populate(data.courses)
    }

    if ($notes.length === 0 && notesLoaded === false){
        notes.populate(data.notes)
        notesLoaded = true;
    }
</script>

<div>
    <h1>Main View</h1>

    <p>Courses in system: <span>{$courses.length - 1}</span></p>
    <p>Notes in system: <span>{$notes.length}</span></p>
</div>

<style>
    div{
        width: fit-content;
       margin: auto;
    }
    h1{
        text-align: center;
    }
    p{
        font-size: 25px;
    }
    span{
        font-weight: bold;
        font-size: 30px;
        color: rgb(10, 110, 110);
    }
</style>