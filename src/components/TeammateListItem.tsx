import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';

interface TeammateListItemProps {
  teammate: Teammate;
  editTeammate: EditTeammate;
}

export const TeammateListItem: React.FC<TeammateListItemProps> = ({ teammate, editTeammate }) => {

  const [inputText, setInputText] = useState<string>(teammate.text);

  const onTeammateUpdate = (e: any) => {
    teammate.text = e.target.value;
    editTeammate(teammate);
    setInputText(e.target.value);
  }


  return (
    <li className="teammate-row">
      <label>
        <input className="edit-input" type="text" value={inputText} onInput={(e) => onTeammateUpdate(e)} data-tip="Update" />
        <ReactTooltip />
      </label>
    </li>
  )
}
