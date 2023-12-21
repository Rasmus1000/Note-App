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

<h2>Main View</h2>

<p>Courses in system: {$courses.length - 1}</p>
<p>Notes in system: {$notes.length}</p>
