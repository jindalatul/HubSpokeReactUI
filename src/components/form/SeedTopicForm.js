import React, { useState , useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SeedTopicForm() 
{
  const kwUpsell = useRef(null);
  const kwHint = useRef(null);

  const [showPersonalizationForm, setShowPersonalizationForm] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [checkboxQuestionsToggle, setCheckboxQuestionsToggle] = useState(false);

  const navigate = useNavigate();

  const isUserPremium=false;
  const [keywordSelected, setKeywordSelected] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Create a project using AJAX. And Save all Form Data in DB and get projectid
    const projectId = "ProjectId:1";
    if (!projectId) return;

    navigate(`/dashboard/${projectId}`);        // Go to /hub-spoke page and put the seed in the URL
  };

  const showHideToolTip =(input) => {
    setShowTooltip(input);
    //alert(input);
  }

  const handleKeywordClick = () => {
    if(isUserPremium!=true) 
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
  <div className="wrap main-form">
    <div className="section" style={{marginTop:"60px"}}>
      <h1>Build Content for your Website</h1>
      <p>Enter topic to get started.</p>
    
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
        <button className="btn-form primary" onClick={handleFormSubmit}>Generate</button>
      </div>

        <div id="kwUpsell" className="upsell" ref={kwUpsell}
              style={{display: "none"}}>
          Keyword data is a <strong>Premium</strong> feature. 
        </div>
        <div id="kwHint" className="hint" ref={kwHint}
            style={{display: "none"}}>
              Will fetch keyword metrics in the background.
        </div>

      {/*<!-- Personalization toggle + tooltip --> */}
      {showPersonalizationForm && (
      <div className="controls">
        <label className="switch">
          <input type="checkbox" id="personalizeToggle" 
                 checked={checkboxQuestionsToggle}
                 onChange={(e) => setCheckboxQuestionsToggle(e.target.checked)} />
          <span className="slider"></span>
        </label>
        <span className="label">Personalize content generation</span>
        <button className="info-btn" id="infoBtn"
                onClick={() => setShowTooltip((prev) => !prev)} // toggle on click
                onMouseEnter={() => showHideToolTip(true)}    // show on hover //setShowTooltip(true)
                onMouseLeave={() => showHideToolTip(false)}      // hide on mouse leave
              >i</button>

          {/* Tooltip */}
          {showTooltip && (
            <div className="tooltip"
                style={{ 
                  display:"block"
                }}
            >
              <h4>Personalize your hub‑spoke</h4>
              <p>Answer a few quick questions about your role, audience, and goals to tailor clusters & briefs.</p>
              <ul>
                <li>More relevant subtopics</li>
                <li>Better briefs & tone</li>
                <li>Smarter linking suggestions</li>
              </ul>
              <small>Demo note: answers stay in your browser.</small>
          </div>
          )}
      </div>
    )}

    {/*<!-- Advanced questionnaire (animated) --> */}

    {checkboxQuestionsToggle && (
      <div className="advanced" 
      style={{ 
        display: "block",
        height:"550px",
        opacity:"1",
        transform:"translateY(0)"
       }}
      >
        <h3>Your Persona</h3>
        <div className="field">
          <label htmlFor="role">Your Role</label>
          <select id="role">
            <option>Founder</option><option>Marketing Manager</option><option>Content Strategist</option><option>Solo Creator</option><option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="industry">Industry</label>
          <input type="text" id="industry" placeholder="e.g., SaaS, Healthcare, Finance" />
        </div>

        <h3>Your Audience</h3>
        <div className="field">
          <label htmlFor="audience">Primary Audience</label>
          <select id="audience">
            <option>B2B Buyers</option><option>Consumers</option><option>Students</option><option>Tech Professionals</option><option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="pain">Biggest Pain Point</label>
          <textarea id="pain" placeholder="Describe the main challenge your audience faces"></textarea>
        </div>

        <h3>Your Goals</h3>
        <div className="field">
          <label htmlFor="goal">Main Goal</label>
          <select id="goal">
            <option>Drive Traffic</option><option>Generate Leads</option><option>Build Authority</option><option>Educate</option><option>Convert Customers</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="tone">Preferred Tone</label>
          <select id="tone">
            <option>Professional</option><option>Conversational</option><option>Storytelling</option><option>Technical</option>
          </select>
        </div>
      </div>
      )}

    </div>  
  </div>
  </form>
  );
}

export default SeedTopicForm;