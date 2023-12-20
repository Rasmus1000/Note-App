<script>
    import { courses } from '$lib/courseStore.js';

    let name = '';

    function saveCourse(){
        let course = name;
        courses.add(course)
        name = ''
    }
</script>

<div>
    <input bind:value={name} placeholder="Course Name">
    <button disabled={!name} on:click={saveCourse}>Save</button>
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
    }
</style>