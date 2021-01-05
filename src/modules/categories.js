import React, { useContext } from "react";
import { questionsContext } from "../App";
import categoriesList from "../categoriesData";

export default function Categories() {
  const { setCurrent } = useContext(questionsContext);

  return (
    <div>
      <label htmlFor="categories">Select Category</label>
      <select
        name="categories"
        id="categories"
        onChange={(event) => {
          setCurrent((prev) => {
            console.log(event.target.value);
            return { ...prev, category: event.target.value };
          });
        }}
      >
        <option>Any Category</option>
        {categoriesList.map((element) => {
          const { id, name } = element;
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
