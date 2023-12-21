export async function load({ fetch }){
    const resCourse = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses');
    const courseData = await resCourse.json();
    const resNotes = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes');
    const notesData = await resNotes.json();
    return{ courses: courseData, notes: notesData };
}