<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import { courses } from '$lib/courseStore.js';

    let showCourse;
    onMount(() => {
        showCourse = document.getElementById('show');
    });

    let name = '';
    $: id = ($courses.length - 2);

    let prev_name = '';

    //Kurssin tallennus
    function saveCourse(){
        let course = name;
        courses.add(course)

        prev_name = name;
        showCourse.style.display = 'block';
        setTimeout(() => {
            showCourse.style.display = 'none';
        }, 3000);

        name = ''
    }
</script>

<div>
    <input bind:value={name} placeholder="Course Name">
    <button disabled={!name} on:click={saveCourse}>Save</button>
    <div id="show">
        <p>Course Added with the name {prev_name} (id: {id})</p>
    </div>
</div>

<style>
    div{
        height: 36px;
    }
    input{
        width: 200px;
        height: 30px;
        font-size: 20px;
        padding-left: 5px;
        border-radius: 10px;
        border: solid 2px rgb(10, 110, 110);
        background-color: rgb(230, 230, 230);
        color: #444444;
    }

    button{
        height: 36px;
        width: 90px;
        font-size: 20px;
        background-color: rgb(10, 110, 110);
        border-radius: 10px;
        border: solid 2px white;
        color: white;
        
    }
    button:disabled{
        color: #aaaaaa;
    }
    button:enabled:hover{
        border: transparent;
        cursor: pointer;
    }
    #show{
        display: none;
        background-color: rgb(10, 110, 110);
        color: #eeeeee;
        font-size: 22px;
        width: fit-content;
        height: 30px;
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>