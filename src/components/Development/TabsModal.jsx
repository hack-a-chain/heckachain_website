import { useState } from "react";

export default function TabsModal({ content }) {
  const [current, setCurrent] = useState(1);

  const tab1 = content && content[0]?.split(":")[0];
  const tab2 = content && content[1]?.split(":")[0];
  const tab3 = content && content[2]?.split(":")[0];
  const tab4 = content && content[3]?.split(":")[0];

  const tabContent1 = content && content[0]?.split(":")[1];
  const tabContent2 = content && content[1]?.split(":")[1];
  const tabContent3 = content && content[2]?.split(":")[1];
  const tabContent4 = content && content[3]?.split(":")[1];

  const tabs = [
    { id: 1, title: tab1, desc: tabContent1 },
    { id: 2, title: tab2, desc: tabContent2 },
    { id: 3, title: tab3, desc: tabContent3 },
    { id: 4, title: tab4, desc: tabContent4 },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  console.log();

  return (
    <div className="w-full px-2 sm:px-0">
      <div>
        <div className="flex p-1 space-x-1 bg-primary/30 rounded-xl">
          {tabs
            .map((tab) => tab)
            .filter((tab) => tab.title !== undefined && tab)
            .map((tab) => (
              <span
                key={tab.id}
                className={classNames(
                  "w-full flex justify-center cursor-pointer py-2.5 text-lg leading-5 font-medium items-center text-white rounded-lg",
                  "focus:outline-none ring-2 ring-transparent ",
                  tab.id == current
                    ? "bg-black shadow ring-primary"
                    : "text-purple-100 hover:bg-white/[0.12] hover:text-white"
                )}
                onClick={() => setCurrent(tab.id)}
              >
                {tab !== undefined && tab.title}
              </span>
            ))}
        </div>

        <div className="mt-2 text-white">
          {tabs
            .map((tab) => tab)
            .filter((tab) => tab.id == current && tab)
            .map((tab) => tab.desc)}
        </div>
      </div>
    </div>
  );
}
