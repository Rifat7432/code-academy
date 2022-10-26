import React from "react";

import { useLoaderData } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";

const Dtails = () => {
    const courses = useLoaderData()
   
  return (
    <div>
      {
        courses.map(course =><DetailsCard key={course.id} course={course}></DetailsCard>)
      }
    </div>
  );
};

export default Dtails;
