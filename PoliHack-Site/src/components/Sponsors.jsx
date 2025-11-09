import React, { useState, useEffect, useRef } from 'react';
import './Sponsors.scss'
import { func } from 'prop-types';

// Sponnsors Assets
import Sponsor1 from "/src/assets/Sponsors/Cloudflight.png";
import Sponsor2 from "/src/assets/Sponsors/Aqirys.png";
import Sponsor3 from "/src/assets/Sponsors/Arobs.png";
import Sponsor4 from "/src/assets/Sponsors/Bigbelly.png";
import Sponsor5 from "/src/assets/Sponsors/Csi.png";
import Sponsor6 from "/src/assets/Sponsors/Finshape.png";
import Sponsor7 from "/src/assets/Sponsors/Linnify.svg";
import Sponsor8 from "/src/assets/Sponsors/Transilvanianuts.png";
import Sponsor9 from "/src/assets/Sponsors/Upevent.jpg";
import Sponsor10 from "/src/assets/Sponsors/Netmatch.png";
import Sponsor11 from "/src/assets/Sponsors/Zerotak.jpeg";

const sponsors = [
    { id: 1,   name: "Sponsor 1",   logo: Sponsor1, url: "https://www.cloudflight.io/en/" },
    { id: 2,   name: "Sponsor 2",   logo: Sponsor2, url: "https://www.aqirys.com/"  },
    { id: 3,   name: "Sponsor 3",   logo: Sponsor3, url: "https://arobs.com/"  },
    { id: 4,   name: "Sponsor 4",   logo: Sponsor4, url: "https://www.bigbelly-cluj.ro/"  },
    { id: 5,   name: "Sponsor 5",   logo: Sponsor5, url: "https://csiromania.ro/"  },
    { id: 6,   name: "Sponsor 6",   logo: Sponsor6, url: "https://finshape.com/"  },
    { id: 7,   name: "Sponsor 7",   logo: Sponsor7, url: "https://www.linnify.com/"  },
    { id: 8,   name: "Sponsor 8",   logo: Sponsor8, url: "https://www.transilvanianuts.ro/"  },
    { id: 9,   name: "Sponsor 9",   logo: Sponsor9, url: "https://upevent.ro/"  },
    { id: 10,  name: "Sponsor 10",  logo: Sponsor10, url: "https://www.netmatch.nl/"  },
    { id: 11,  name: "Sponsor 11",  logo: Sponsor11, url: "https://zerotak.com/"  },
  ];

function Sponsors() {
    return (
        <>
            <div className="sponsorsSection">
            <h1 className="headingHover">Our Sponsors</h1>
                <div className="sponsors">
                    <div className="sponsorSlider">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="sponsorItem">
                        <a href={sponsor.url} target="_blank">
                            <img src={sponsor.logo} alt={sponsor.name} />
                        </a>
                        </div>
                    ))}
                    {sponsors.map((sponsor) => (
                        <div key={`duplicate-${sponsor.id}`} className="sponsorItem">
                        <a href={sponsor.url} target="_blank">
                            <img src={sponsor.logo} alt={sponsor.name} />
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sponsors;