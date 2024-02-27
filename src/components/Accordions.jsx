import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Accordions = () => {
  return (
    <div className="container mtt">
      <div className="accordion-section">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="accordion-section-wrapper">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>
                  Are the residences in DAMAC Maison Canal Views, Business Bay
                  provided with complete furnishings?
                </h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Yes, it is fully furnished, serviced apartments that include
                bathrooms, and kitchens equipped with essential appliances.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>What is the current status of DAMAC Maison Canal Views?</h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>The project has been completed, and units are filling fast.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>What facilities does DAMAC Maison Canal Views offer?</h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Damac Properties in Business Bay offer a range of amenities
                including mall access, security services, concierge facilities,
                retail outlets, healthcare facilities, and more.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>Does DAMAC Maison Canal Views offer parking facilities?</h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Yes, the property provides convenient valet parking services for
                residents and visitors.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>
                  Are there recreational amenities available within Damac
                  Residences Business Bay?
                </h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Absolutely. The residents can enjoy access to a range of
                recreational facilities, including a swimming pool, gym, sauna,
                steam room etc..
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h6>
                  What transportation options are easily accessible from Damac
                  Tower Business Bay?
                </h6>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The location offers direct access to transportation hubs, making
                commuting hassle-free. Additionally, the property is
                strategically situated near major roads for convenient travel.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordions;
