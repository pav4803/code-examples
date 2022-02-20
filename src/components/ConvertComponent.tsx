import React, { useState, memo } from "react";
import { IData } from "../store/reducers/commonSlice";
import { ReturnImput } from "../helpers/renderFunc";

interface ConvertComponentType {
  rates: IData[];
}

const ConvertComponent: React.FC<ConvertComponentType> = ({ rates }) => {
  const initialForm = {
    summ_1: 100,
  };

  let [form, setForm] = useState({ ...initialForm });
  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const convertUsdToBy = Number(rates[0]?.buy)*form.summ_1;

  return (
    <div className="convertConteiner">
      <div className="convertBlock">
        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[0]?.ccy}/${rates[0]?.base_ccy} ty by`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[0]?.buy}
            divAdditionalClass={undefined}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_1"
            placeholder={`Convert, ${rates[0]?.base_ccy}`}
            form={form.summ_1}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={undefined}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name="firstStageSumm"
            placeholder={`Summ, ${rates[0]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertUsdToBy}
            divAdditionalClass={undefined}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ConvertComponent);
