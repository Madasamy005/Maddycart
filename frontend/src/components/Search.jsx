import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [keyword, setKeyWord] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setTimeout(() => {
      const value = e.target.value.trim();
      if (value) {
        navigate(`/search?keyword=${value}`);
      }
    }, );
  };
  
  return (
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        value={keyword} // Controlled input
        onChange={(e) => setKeyWord(e.target.value)}
        className="form-control"
        onBlur={searchHandler} // Calls updated function
        placeholder="Enter Product Name ..."
      />
      <div className="input-group-append">
        <button onClick={() => searchHandler({ target: { value: keyword } })} id="search_btn" className="btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
