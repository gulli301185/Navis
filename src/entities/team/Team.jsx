import { useQuery } from "@tanstack/react-query";
import { getOurTeamAsync } from "../../api/team";

const Team = () => {
  const { data } = useQuery({
    queryKey: ["team"],
    queryFn: getOurTeamAsync,
  });
  return (
    <div className="container mx-auto pt-40 ">
      <h1 className="text-[40px] font-bold  text-center pb-5">Наша команда</h1>
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
