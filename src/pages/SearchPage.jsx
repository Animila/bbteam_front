import React from "react";
import TitleProjectList from "../components/TitleProjects/TitleProjectList";
import TitlePopularList from "../components/TitlePopular/TitlePopularList";
import mangas from "../../data";

const SearchPage = () => {
  return (
    <div className="bg-main_bg text-white">
      <h2 className="text-white text-[15px] mt-[12px] ml-[16px] mb-[12px]">
        Найденные запросы по “...”
      </h2>
      <hr className="border-border_block" />
      <TitleProjectList mangas={mangas} />
      <TitlePopularList />
    </div>
  );
};

export default SearchPage;
