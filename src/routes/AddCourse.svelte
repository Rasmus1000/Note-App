<script>
    import { courses } from '$lib/courseStore.js';

    let name = '';

    function saveCourse(){
        let course = {name};
        courses.add(course)
        name = ''
    }
</script>

<div>
    <input bind:value={name} placeholder="Kurssin nimi">
    <button on:click={saveCourse}>Tallenna</button>
</div>