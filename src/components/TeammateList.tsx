import React from "react";
import { TeammateListItem } from './TeammateListItem';

interface TeammateListProps {
  teammates: Array<Teammate>;
  editTeammate: EditTeammate;
}

export const TeammateList: React.FC<TeammateListProps> = ({ teammates, editTeammate }) => {

  // useEffect(() => {
  //     axios.get(`http://localhost:5000/teammates/1`).then(data => {
  //       {teammates: data.data}
  //     })
  //  });


  return (
    <ul>
     {teammates.map(teammate => (
       <TeammateListItem
          key={teammate.id}
          teammate={teammate}
          editTeammate={editTeammate}
        />
     ))}
    </ul>
  );
};
