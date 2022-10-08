import React from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { useContext } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { useEffect } from "react";
import { Loader } from "../components/Loader";

export const Home = () => {
    // const notes = new Array(3).fill().map((_, i) => ({id: i, title: `Note ${i + 1}`}))
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, []);

    return (
        <React.Fragment>
            <Form/>

            <hr/>

            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}></Notes>}
            
        </React.Fragment>
    )
}