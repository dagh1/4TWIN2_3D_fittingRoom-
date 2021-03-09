import React from "react";

const Section = (props) => {
  return (
    <>
      <section class={props.class}>
        <div class='container'>{props.content}</div>
      </section>
    </>
  );
};

export default Section;
