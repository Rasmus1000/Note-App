// @ts-nocheck
import { writable } from "svelte/store";
import og_notes from "./notes.json";

function createNotes(){
    const { subscribe, set, update } = writable(og_notes);

    const add_note = (note) => {
        update((notes) => {
            let nid = notes.length;
            //let {text, timestamp, nimi, id} = note;
            //let course = {nimi, id};
            return [...notes, {nid, ...note}]
        });
    }

    return {
        subscribe,
        //add: (note) => update((notes) => [...notes, note]),
        add: add_note,
        reset: () => set([])
    }
}

export const notes = createNotes();