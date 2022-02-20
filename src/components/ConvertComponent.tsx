import React, { useState, memo } from "react";
import { IData } from "../store/reducers/commonSlice";
import { ReturnImput } from "../helpers/renderFunc";

interface ConvertComponentType {
  rates: IData[];
}

const ConvertComponent: React.FC<ConvertComponentType> = ({ rates }) => {
  const initialForm = {
    summ_1: 100,
    summ_2: 100,
    summ_3: 100,
    summ_4: 100,
    summ_5: 100,
    summ_6: 100,
  };

  let [form, setForm] = useState({ ...initialForm });

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const convertUsdToBy = Number(rates[0]?.buy) * form.summ_1;
  const convertUsdToSale = Number(rates[0]?.sale) * form.summ_2;
  const convertEurToBy = Number(rates[1]?.buy) * form.summ_3;
  const convertEurToSale = Number(rates[1]?.sale) * form.summ_4;
  const convertRurToBy = Number(rates[2]?.buy) * form.summ_5;
  const convertRurToSale = Number(rates[2]?.sale) * form.summ_6;

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
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_1"
            placeholder={`Convert, ${rates[0]?.ccy}`}
            form={form.summ_1}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[0]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertUsdToBy.toFixed(2)}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>
        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[0]?.ccy}/${rates[0]?.base_ccy} ty sale`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[0]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_2"
            placeholder={`Convert, ${rates[0]?.ccy}`}
            form={form.summ_2}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[0]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertUsdToSale.toFixed(2)}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>

        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[1]?.ccy}/${rates[1]?.base_ccy} ty by`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[1]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_3"
            placeholder={`Convert, ${rates[1]?.ccy}`}
            form={form.summ_3}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[1]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertEurToBy.toFixed(2)}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>
        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[1]?.ccy}/${rates[1]?.base_ccy} ty sale`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[1]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_4"
            placeholder={`Convert, ${rates[1]?.ccy}`}
            form={form.summ_4}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[1]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertEurToSale.toFixed(2)}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>

        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[2]?.ccy}/${rates[2]?.base_ccy} ty by`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[2]?.buy}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_5"
            placeholder={`Convert, ${rates[2]?.ccy}`}
            form={form.summ_5}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[2]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertRurToBy.toFixed(2)}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
            disabled={true}
          />
        </div>
        <div className="convertWindowsConteiner">
          <ReturnImput
            name=""
            placeholder={`1 ${rates[2]?.ccy}/${rates[2]?.base_ccy} ty sale`}
            form={""}
            type="text"
            changeHandler={changeHandler}
            placeholder2={rates[2]?.sale}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength="10vw"
            disabled={true}
          />
          <ReturnImput
            name="summ_6"
            placeholder={`Convert, ${rates[2]?.ccy}`}
            form={form.summ_6}
            type="number"
            changeHandler={changeHandler}
            placeholder2={undefined}
            divAdditionalClass={"labelClass"}
            formAdditionalClass={undefined}
            maxLength={undefined}
          />
          <ReturnImput
            name=""
            placeholder={`Summ, ${rates[2]?.base_ccy}`}
            form={""}
            type="number"
            changeHandler={changeHandler}
            placeholder2={convertRurToSale.toFixed(2)}
            divAdditionalClass={"labelClass"}
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
