import Construction from "@/components/General/Construction";
import Stats from "@/components/Skills/Stats";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
function Skills() {
  return (
    <div className="h-screen w-screen bg-gray-950 flex flex-col gap-2">
      <TopMenuContainer />
      <Stats />
    </div>
  );
}

export default Skills;
