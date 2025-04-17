import { TeamMember, teamMembers } from "@/mocks/team";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Badge from "../ui/badge";

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div key={member.id} className="flex flex-col items-center text-center p-4">
    <Avatar className="w-24 h-24 mb-4">
      <AvatarImage src={member.imageSrc} alt={member.name} />
      <AvatarFallback>{member.fallback}</AvatarFallback>
    </Avatar>
    <div className="mb-2">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <span className="text-sm text-neutral-300 font-medium">
        {member.role}
      </span>
    </div>
    <span className=" text-neutral-400 ">{member.description}</span>
  </div>
);

export default function TeamSection() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <Badge title="NOSSA EQUIPE" />
        <h2 className="text-6xl mt-2">
          Conheça nosso <span className="text-[#F85B93]">time</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
