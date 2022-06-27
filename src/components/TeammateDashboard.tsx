import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TeammateForm } from './TeammateForm';
import { TeammateList } from './TeammateList';
import { useNavigate } from 'react-router-dom';

const TeammateDashboard = () => {

    const navigate = useNavigate();
    //navigate('/');

    const [teammates, setTeammates] = useState<Array<Teammate>>([]);
    const getData = async () => {
      const { data } = await axios.get(`http://localhost:5000/teammates/`);
      setTeammates(data);
    };
    useEffect(() => {
      getData();
    }, []);
  
    const addTeammate: AddTeammate = newTeammate => {
      if (newTeammate !== "") {
        setTeammates([...teammates, { id: 1, text: newTeammate }]);
      }
    };
  
    const editTeammate: EditTeammate = teammateToEdit => {
      let teammateToUpdateIndex: number = teammates.findIndex(teammate => teammate.id == teammateToEdit.id);
      let id =teammates[teammateToUpdateIndex].id
      console.log(teammateToUpdateIndex);
      if(teammateToEdit.text !== "") {
        axios.put(
            `http://localhost:5000/teammates/` + id, {
            id: id,
            text: teammateToEdit.text
          }).then(resp => {
      
            console.log(resp.data);
          }).catch(error => {
      
            console.log(error);
          });
      }
      //setTeammates(teammates);
    }
  
    return (
      <div>
          <div className="teammate-app">
            <header>
              <h1>
              Teammate Management App
              <br></br>
              <b>Create a teammate / Update a teammate</b>
              </h1>
            </header>
            <TeammateForm addTeammate={addTeammate} />
            <TeammateList teammates={teammates} editTeammate={editTeammate} />
            <button onClick={() => navigate('/')} className="goToHomePageBtn">Go to home page</button>
          </div>
      </div>
  
    );
  };

  export default TeammateDashboard;