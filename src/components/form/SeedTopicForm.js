import React, { useState , useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SeedTopicForm() 
{
  const kwUpsell = useRef(null);
  const kwHint = useRef(null);

  const navigate = useNavigate();

  const isUserPremium=true;
  const [keywordSelected, setKeywordSelected] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Create a project using AJAX. And Save all Form Data in DB and get projectid
    const projectId = "ProjectId:1";
    if (!projectId) return;

    navigate(`/dashboard/${projectId}`);        // Go to /hub-spoke page and put the seed in the URL
  };



  const handleKeywordClick = () => {
    if(isUserPremium==false) 
      {
        kwUpsell.current.style.display = "block";
        setKeywordSelected(false); 
        return false;
      }
      else
          {
             if (kwHint.current.style.display === "none") 
                  kwHint.current.style.display = "block";
              else
                  kwHint.current.style.display = "none";
              setKeywordSelected(!keywordSelected); 
          }
  };

return (
<form>
  <div className="wrap">
    <div className="section">
      <h1>Generate your Hub‑Spoke</h1>
      <p>Enter a seed keyword or topic to get started.</p>
    
      <div className="row" id="searchRow">
        <input id="seedInput" className="input" type="text" placeholder="e.g., AI in Marketing" />

        <button id="kwToggle" className="kw-toggle" type="button" onClick={handleKeywordClick}
                style={{
                    backgroundColor: keywordSelected ? "lightgray" : "white"
                  }}>
          <span className="dot" 
                style={{
                        backgroundColor: keywordSelected? "lightblue" : "white"
                  }}></span>          
          <span className="icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="10" width="4" height="10" rx="1" strokeWidth="2"></rect>
              <rect x="10" y="6" width="4" height="14" rx="1" strokeWidth="2"></rect>
              <rect x="17" y="3" width="4" height="17" rx="1" strokeWidth="2"></rect>
            </svg>
          </span>
          <span>Include Keywords</span>
        </button>
        <button className="btn primary" onClick={handleFormSubmit}>Generate</button>
      </div>
        <div id="kwUpsell" className="upsell" ref={kwUpsell}
              style={{display: "none"}}>
          Keyword data is a <strong>Premium</strong> feature. 
        </div>
        <div id="kwHint" className="hint" ref={kwHint}
            style={{display: "none"}}>
              Will fetch keyword metrics in the background.
        </div>
  </div>  
  </div>
  </form>
  );
}

export default SeedTopicForm;