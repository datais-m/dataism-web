import Image from "next/image";
import teamMembers from "./data/teamMembers";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-gray-900">Dataism</h1>
          <p className="text-gray-700">
            We offer SaaS featuring in-depth data analysis.
          </p>
        </div>
      </section>

      <section className="h-screen flex flex-col items-center justify-center bg-blue-500">
        <h2 className="text-3xl font-bold mb-8">Team Members</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-black rounded-lg shadow-md p-4">
              <div className="flex">
                <img
                  className="w-20 h-20 rounded-full"
                  src={member.image}
                  alt={member.name}
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-white">{member.position}</p>
                  <a href={`mailto:${member.email}`} className="text-blue-500">
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
