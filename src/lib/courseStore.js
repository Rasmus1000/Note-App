// @ts-nocheck
import { writable } from 'svelte/store';

let chooseAll ={"id": null, "name": "All"};

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
        add: add_course,
        populate: (data) => set([chooseAll, ...data])
    }
}

export const courses = createCourses();