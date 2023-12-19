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
        border-radius: 10px;
        margin-bottom: 10px;
        max-width: 596px;
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