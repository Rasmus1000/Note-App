<script>
// @ts-nocheck
    export let id;
    export let text;
    export let timestamp;
    export let course;
</script>

<div>
    <h4>{new Date(timestamp).toLocaleDateString()} {course.name} (id {course.id})</h4>
    <span><p>{new Date(timestamp).toLocaleTimeString().substring(0, 5)}</p></span>
    <p>{text}</p>
</div>

<style>
    div{
        border: 2px solid black;
        border-radius: 10px;
        margin-bottom: 10px;
        max-width: 596px;
        overflow-wrap: break-word;
    }
    h4{
        margin: 0;
        padding: 5px;
        padding-bottom: 0;
    }
    p{
        margin: 0;
        padding: 5px;
        padding-top: 0;
    }
    span{
        color: #888888;
        font-size: 10px;
        height: 10px;
    }
</style>