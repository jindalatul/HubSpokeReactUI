import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function HubSpokeTables() 
{
    return (
    <>
    <div className="subhint">💡 Double‑click any hub or spoke to open details.</div>
    <section className="workspace">
        
        {/*<!-- Left: Hubs -->*/}

        <div className="panel hubs-left" id="hubsList">
            <h3>Hubs</h3>

            {/*<!-- hubs injected --> */}

            <div className="hub dbl">
                <div className="t">Living Trusts (CA)</div>
                <div className="m">
                    <span className="pill">Est. Traffic: 3,981</span>
                    <span className="pill">Avg KD: 50</span>
                    <span className="pill">Rank Prob: 73%</span>
                </div>
            </div>
            <div className="hub dbl">
                <div className="t">Wills &amp; Probate (CA)</div>
                <div className="m">
                    <span className="pill">Est. Traffic: 3,054</span>
                    <span className="pill">Avg KD: 30</span>
                    <span className="pill">Rank Prob: 74%</span>
                </div>
            </div>
            <div className="hub dbl">
                <div className="t">Power of Attorney (CA)</div>
                <div className="m">
                    <span className="pill">Est. Traffic: 4,489</span>
                    <span className="pill">Avg KD: 33</span>
                    <span className="pill">Rank Prob: 83%</span>
                </div>
            </div>
            <div className="hub dbl">
            <div className="t">Asset Protection (CA)</div>
                <div className="m">
                    <span className="pill">Est. Traffic: 3,756</span>
                    <span className="pill">Avg KD: 39</span>
                    <span className="pill">Rank Prob: 84%</span>
                </div>
            </div>
        </div>

        {/*<!-- Right: Spokes -->*/}

            <div className="panel spokes-right">
                <table>
                    <thead>
                        <tr>
                        <th>Spoke</th>
                        <th>Est. Traffic</th>
                        <th>KD</th>
                        <th>Rank Prob</th>
                        <th>CPC</th>
                        </tr>
                    </thead>
                    <tbody id="spokesBody">
                        <tr className="dbl">
                            <td>Court Procedures for Adult Guardianship in California</td>
                            <td>1,539</td>
                            <td>41</td>
                            <td><span className="badge2 med">65%</span></td>
                            <td>$4.56</td>
                        </tr>
                        <tr className="dbl">
                            <td>Taxes &amp; Adult Guardianship: What to Know in California</td>
                            <td>389</td>
                            <td>28</td>
                            <td><span className="badge2 med">64%</span></td>
                            <td>$6.93</td>
                        </tr>
                        <tr className="dbl">
                            <td>Common Mistakes with Adult Guardianship (California)</td>
                            <td>947</td>
                            <td>29</td>
                            <td><span className="badge2 hard">76%</span></td>
                            <td>$2.42</td>
                        </tr>
                        <tr className="dbl">
                            <td>How to Set Up Adult Guardianship in California</td>
                            <td>273</td>
                            <td>32</td>
                            <td><span className="badge2 easy">82%</span></td>
                            <td>$6.05</td>
                        </tr>
                        <tr className="dbl">
                            <td>Common Mistakes with Adult Guardianship (California)</td>
                            <td>1,040</td>
                            <td>49</td>
                            <td><span className="badge2 easy">85%</span></td>
                            <td>$3.17</td>
                        </tr>
                        <tr className="dbl">
                            <td>Taxes &amp; Adult Guardianship: What to Know in California</td>
                            <td>1,247</td>
                            <td>48</td>
                            <td><span className="badge2 easy">81%</span></td>
                            <td>$4.37</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </>
    )
}