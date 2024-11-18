import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import Card from "../Card/Card";
import url from '../../Assets/3dotmenu.svg';
import dp from '../../Assets/dp.jpg';
import lowimg from '../../Assets/Img-LowPriority.svg'
import midimg from '../../Assets/Img-MediumPriority.svg'
import higimg from '../../Assets/Img-HighPriority.svg'
import nopimg from '../../Assets/No-priority.svg'
import urgimg from '../../Assets/SVG-UrgentPrioritycolour.svg'

import todo from '../../Assets/To-do.svg'
import inprogress from '../../Assets/in-progress.svg'
import done from '../../Assets/Done.svg'
import cancelled from '../../Assets/Cancelled.svg'
import Backlog from '../../Assets/Backlog.svg'


const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <>
                        {elem[index].title === "Low" ? (
                            <img src={lowimg} alt="Low Priority" />
                          ) : elem[index].title === "Medium" ? (
                            <img src={midimg} alt="Medium Priority" />
                          ) : elem[index].title === "High" ? (
                            <img src={higimg} alt="High Priority" />
                          ) : elem[index].title === "No priority" ? (
                            <img src={nopimg} alt="No priority" />
                          ) : elem[index].title === "Urgent" ? (
                            <img src={urgimg} alt="Urgent Priority" />
                          ) : elem[index].title === "Todo" ? (
                            <img src={todo} alt="todo" />
                          ): elem[index].title === "In progress" ? (
                            <img src={inprogress} alt="inprogress" />
                          ): elem[index].title === "Done" ? (
                            <img src={done} alt="done" />
                          ): elem[index].title === "Cancelled" ? (
                            <img src={cancelled} alt="cancelled" />
                          ): elem[index].title === "Backlog" ? (
                            <img src={Backlog} alt="Backlog" />
                          ):null}
                      </>
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src={dp}
                            alt="dp"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>
                      <img src={url} alt="My SVG" />
                    </span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card
                       id={elem.id} title={elem.title} tag={elem.tag} 
                       />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
