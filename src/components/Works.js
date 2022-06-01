import React from "react";

import WorkItem from "./WorkItem";
import Isotope from "isotope-layout";
import portfolioWorks from "../data/portfolioWorks.json";

const Works = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".isotope-container", {
      itemSelector: ".work-item",
      // layoutMode: 'fitRows',
      masonry: {
        fitWidth: true,
        gutter: 16,
      },
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const handleFilterButtons = (e) => {
    if (e.target.nodeName === "SPAN" || e.target.nodeName === "BUTTON") {
      document
        .querySelector(".filters-button-group .button.is-checked")
        .classList.remove("is-checked");
      if (e.target.nodeName === "SPAN") {
        e.target.parentElement.classList.add("is-checked");
      }
      e.target.classList.add("is-checked");
    }
  };

  return (
    <section id="works" className="my-5 pb-5">
      <div className="container">
        <div className="vertical-heading">
          <h3>Find My Work</h3>
          <h2 className="">
            My <br />
            Amazing <span>Work</span>
          </h2>
        </div>
      </div>
      <div className="my-works">
        <div className="filters-button-group" onClick={handleFilterButtons}>
          <button
            className="button is-checked"
            onClick={handleFilterKeyChange("*")}
          >
            <span>All</span>
          </button>
          <button className="button" onClick={handleFilterKeyChange("sass")}>
            <span>Sass</span>
          </button>
          <button
            className="button"
            onClick={handleFilterKeyChange("bootstrap")}
          >
            <span>Bootstrap</span>
          </button>
          <button className="button" onClick={handleFilterKeyChange("react")}>
            <span>React-JS</span>
          </button>
        </div>

        <div className="isotope-container">
          {portfolioWorks.map((workItem) => {
            return (
              <WorkItem
                key={workItem.id}
                allCategory={workItem.allCategory}
                imageSrc={workItem.imageSrc}
                imageAlt={workItem.imageAlt}
                usedTechnology={workItem.usedTechnology}
                sourceUrl={workItem.sourceUrl}
                demoUrl={workItem.demoUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
