import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./value.css";
import { useState } from "react";
const Value = () => {
  return (
    <div className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="img-container">
            <img src="./value.png" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br></br>
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <>
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton flexCenter">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flecCenter icon">{item.icon}</div>
                        <span className="primaryText"> {item.heading}</span>
                        <div className="flecCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Value;
