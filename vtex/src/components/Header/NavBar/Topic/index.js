import React from "react";
import style from "./topic.module.scss";
import iconCrown from "../../../../assets/img/crown-simple.svg";
import { TopicItems } from "./TopicItems";

export const TopicHeader = () => {
  return (
    <section className={style.container}>
      {TopicItems.map((item) => {
        return (
          <li key={item.id}>
            {item.id === 7 ? (
              <div className={style.signature}>
                <img src={iconCrown} alt="icon crown simple" />
                <a>
                  <span>{item.topic}</span>
                </a>
              </div>
            ) : (
              <>
                <a>{item.topic}</a>
              </>
            )}
          </li>
        );
      })}
    </section>
  );
};
