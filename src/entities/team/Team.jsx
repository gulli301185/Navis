import { useQuery } from "@tanstack/react-query";
import { getOurTeamAsync } from "../../api/team";

const Team = () => {
  const { data } = useQuery({
    queryKey: ["team"],
    queryFn: getOurTeamAsync,
  });
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold pt-40 pb-10">Наша команда</h1>
      <div className="container grid grid-cols-4 gap-4">
        {data?.map((team) => (
          <div key={team.id} className="rounded-lg text-start">
            <img src={team.image} alt="" width="350px" />
            <h1 className="font-bold text-xl py-2 text-gray-800">
              {team.name}
            </h1>
            <p className="text-gray-400 ">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
