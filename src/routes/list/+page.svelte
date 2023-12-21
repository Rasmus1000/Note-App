<script>
	import CourseSelect from "../CourseSelect.svelte";
	import NoteList from "../NoteList.svelte";
</script>
<div>
	<h2>Notes</h2>

	Course Filter: <CourseSelect />

	<NoteList />
	<div class="clearfix">&nbsp;</div>
</div>


<style>
	div{
		margin-left: 50px;
		margin-right: 50px;
	}
</style>