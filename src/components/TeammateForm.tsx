import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
interface TeammateFormProps {
  addTeammate: AddTeammate;
}
export const TeammateForm: React.FC<TeammateFormProps> = ({ addTeammate }) => {

  const [newTeammate, setNewTeammate] = useState<string>("");
  const [newTeammateId, setNewTeammateId] = useState<number>(1);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let teammateName = e.target.value;
    setNewTeammate(teammateName);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTeammate(newTeammate);
    if(newTeammate !== "") {
      axios.post(`http://localhost:5000/teammates`, { text: newTeammate }).then(resp => {
        console.log(resp.data);
        setNewTeammateId(resp.data.id);
        setNewTeammate("");
      }).catch(error => {
          console.log(error);
      });
    }
    
  }

  return (
    <form className="teammate-form">
      <input type="text" value={newTeammate} className="teammate-input" placeholder="Create a teammate" onChange={handleChange} />
        <button type="submit" className="teammate-button" onClick={handleSubmit}>
          Create
        </button>
    </form>
  )
};
