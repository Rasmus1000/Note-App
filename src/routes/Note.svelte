<script>
// @ts-nocheck

    export let nid;
    export let text;
    export let timestamp;
    export let course;
</script>

<div>
    <h4>{new Date(timestamp).toLocaleDateString()} {course.nimi} (id {course.id}) {nid}</h4>
    <p>{text}</p>
</div>

<style>
    div{
        border: 2px solid black;
        border-radius: 15px;
        margin-bottom: 10px;
        padding-left: 1rem;
        padding-right: 1rem;
        max-width: 500px;
    }
    h4{
        margin: 0;
        padding: 5px;
    }
    p{
        margin: 0;
        padding: 5px;
    }
</style>