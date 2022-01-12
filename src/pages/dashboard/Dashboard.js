import React from "react";

import { useFetch } from "../../helpers/functions";
import LanguageCard from "../languages/LanguageCard";
import "./Dashboard.css";

const Dashboard = () => {
  const { isLoading, languageList } = useFetch();

  return (
    <div className="dashboard">
      <h1>{`──── DASHBOARD ────`}</h1>
      <div className="dashboard-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : languageList?.length === 0 ? (
          <p>Ekrana yazılacak veri yok</p>
        ) : (
          languageList?.map((language) => {
            return (
              <React.Fragment>
                <div className="blog-container">
                  <LanguageCard language={language} key={language.id} />
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Dashboard;
