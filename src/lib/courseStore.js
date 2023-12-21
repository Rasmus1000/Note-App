// @ts-nocheck
import { writable } from 'svelte/store';
//import og_courses from '$lib/courses.json'

let jeppis ={"id": null, "name": "All"};

function createCourses(){
    const { subscribe, set, update } = writable([]);

    const add_course = (course) => {
        update((courses) => {
            let id = courses.length - 1;
            return [...courses, {id: id, name: course}]
        });
    }

    return {
        subscribe,
        //add: (course) => update((courses) => [...courses, course]),
        add: add_course,
        reset: () => set([]),
        populate: (data) => set([jeppis, ...data])
    }
}

export const courses = createCourses();