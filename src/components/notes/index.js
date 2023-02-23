import React, { Fragment, useEffect, useState } from "react";

import List from "../notes/list";
import NoteService from '../../services/note'


function Notes(props) {
  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id == id;
    })
    setCurrentNote(note);
  }

  return (
    <Fragment>
      <div className="notes" id="notes">
          <List
            notes={notes}
            selectNote={selectNote}
            current_note={current_note} />
 </div>
    </Fragment>
  )
}

export default Notes;