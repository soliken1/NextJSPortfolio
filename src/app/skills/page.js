import Construction from "@/components/General/Construction";
import Stats from "@/components/Skills/Stats";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
function Skills() {
  return (
    <div className="h-full w-screen bg-gray-950 flex flex-col md:pt-0 pt-20 gap-2">
      <TopMenuContainer />
      <Stats />
    </div>
  );
}

export default Skills;
