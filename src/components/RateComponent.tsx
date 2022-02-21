import React, { useState, memo } from "react";
import { IData } from "../store/reducers/commonSlice";
import { ReturnImput } from "../helpers/renderFunc";

interface ConvertComponentType {
  rates: IData[];
}

const RateComponent: React.FC<ConvertComponentType> = ({ rates }) => {
  return (
    <div className="convertConteiner">
      <div className="convertBlock">
        <div className="convertWindowsConteiner">
          <div className="imgConteiner">
            <img
              alt="United States"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            />
          </div>
          <ReturnImput
            name=""
            placeholder={`1 ${rates[0]?.ccy}/${rates[0]?.base_ccy} to by`}
            form={""}
            type="text"
            changeHandler={null}
            placeholder2={rates[0]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name=""
            placeholder={`1 ${rates[0]?.ccy}/${rates[0]?.base_ccy} to sale`}
            form={""}
            type="number"
            changeHandler={null}
            placeholder2={rates[0]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>

        <div className="convertWindowsConteiner">
          <div className="imgConteiner">
            <img
              alt="Europe"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg"
            />
          </div>
          <ReturnImput
            name=""
            placeholder={`1 ${rates[1]?.ccy}/${rates[1]?.base_ccy} to by`}
            form={""}
            type="text"
            changeHandler={null}
            placeholder2={rates[1]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_3"
            placeholder={`1 ${rates[1]?.ccy}/${rates[1]?.base_ccy} to sale`}
            form={""}
            type="number"
            changeHandler={null}
            placeholder2={rates[1]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
        </div>

        <div className="convertWindowsConteiner">
          <div className="imgConteiner">
            <img
              alt="Russia"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
            />
          </div>
          <ReturnImput
            name=""
            placeholder={`1 ${rates[2]?.ccy}/${rates[2]?.base_ccy} to by`}
            form={""}
            type="text"
            changeHandler={null}
            placeholder2={rates[2]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_5"
            placeholder={`1 ${rates[2]?.ccy}/${rates[2]?.base_ccy} to sale`}
            form={""}
            type="number"
            changeHandler={null}
            placeholder2={rates[2]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
        </div>

        <div className="convertWindowsConteiner">
          <div className="imgConteinerBTC">
            <img
              alt="BTC"
              src="https://lh4.ggpht.com/mkAOtT2IYdrrFPql95BqirLG1dtApT5Z8eEq5Q4clQHvZTBVZCb5FKPARyH7cFAvkA=w300"
            />
          </div>
          <ReturnImput
            name=""
            placeholder={`1 ${rates[3]?.ccy}/${rates[3]?.base_ccy} to by`}
            form={""}
            type="text"
            changeHandler={null}
            placeholder2={rates[3]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_5"
            placeholder={`1 ${rates[3]?.ccy}/${rates[3]?.base_ccy} to sale`}
            form={""}
            type="number"
            changeHandler={null}
            placeholder2={rates[3]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(RateComponent);
