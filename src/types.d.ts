type AddTeammate = (newTeammate: string) => void;
type EditTeammate = (teammateToEdit: Teammate) => void;

type Teammate = {
  id: number;
  text: string;
}

type Option = {
  value: string;
  onClick: () => void;
  color?: string;
}
