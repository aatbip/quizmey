import React from "react";
import Skeleton from "react-loading-skeleton";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";

export const Start = (props) => {
  const [formData, setFormData] = React.useState({
    categoryId: "",
  });

  const [category, setCategory] = React.useState([]);

  const ALL_CATOGORY_API = "https://opentdb.com/api_category.php";

  React.useEffect(() => {
    fetch(ALL_CATOGORY_API)
      .then((res) => res.json())
      .then((data) => setCategory(data.trivia_categories));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <div className="container">
      <div className="wrapper">
        <img className="top-bg" src="/top-background.png" alt="blobby top" />

        <img
          className="bottom-bg"
          src="/bottom-background.png"
          alt="blobby bottom"
        />
        <div className="body-contents">
          <div className="contents">
            <h1>Let Me QUIZ!</h1>
            <p>The Quiz Game You Love</p>
          </div>
          <div className="dropdown">
            <label htmlFor="category-dropdown">Select Category</label>
            <br />
            <select
              id="category-dropdown"
              value={formData.categoryId}
              onChange={handleChange}
              name="categoryId"
            >
              {category.map((categories) => {
                return (
                  <option value={categories.id}>
                    {categories.name || <Skeleton count={1} />}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="buttons">
            <button
              onClick={() => props.startButtonClick(formData)}
              type="button"
            >
              Start Quiz
            </button>
          </div>
          <p
            style={{
              fontSize: "10px",
              marginTop: "5em",
              position: "relative",
              top: "20em",
            }}
          >
            &copy; AAT BIP DEV
          </p>
        </div>
      </div>
    </div>
  );
};
