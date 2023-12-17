<script>

    import { courses } from '$lib/courseStore.js'

    // @ts-ignore
    /**
	 * @type {null | undefined}
	 */

    let selectedCourse;

    // @ts-ignore
    function handleChange(event) {
    const selectedIndex = event.target.selectedIndex;
    // @ts-ignore
    selectedCourse = $courses[selectedIndex];
  }
</script>

<!-- Luo alasvetovalikko -->
<select on:change={handleChange}>
  {#each $courses as course}
    <option value={course.nimi}>{course.nimi}</option>
  {/each}
</select>

<!-- Näytä valittu objekti -->
{#if selectedCourse !== undefined && selectedCourse !== null}
  <p>Valittu objekti: {selectedCourse}</p>
{/if}
{#if selectedCourse === null}
  <p>Valittu objekti: All</p>
{/if}

<style>
  select{
    margin-bottom: 20px;
  }
</style>
