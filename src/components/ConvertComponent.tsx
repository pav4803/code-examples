import React, { useEffect, useState, memo } from "react";
import { IData } from "../store/reducers/commonSlice";
import { ReturnImput } from "../helpers/renderFunc";

interface ConvertComponent {
  rates: IData[];
}

const ConvertComponent: React.FC<ConvertComponent> = ({ rates }) => {

  const initialForm = {
     summ_1: 10,
     summ_2: 10,
     summ_3: 10,
     summ_4: 10,
  }
    
    let [form, setForm] = useState({ ...initialForm });
    const changeHandler = (event:any) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  return (
    <div className="convertConteiner">
      <div className="convertBlock">
      <div className="convertWindowsConteiner">
        <ReturnImput
          name="firstStageSumm"
          placeholder="Сума 1 етап, $"
          form={form.summ_1}
          type="text"
          changeHandler={changeHandler} 
          placeholder2={undefined} 
          divAdditionalClass={undefined} 
          formAdditionalClass={undefined}
          maxLength={undefined}/>
           <ReturnImput
          name="firstStageSumm"
          placeholder="Сума 1 етап, $"
          form={form.summ_1}
          type="text"
          changeHandler={changeHandler} 
          placeholder2={undefined} 
          divAdditionalClass={undefined} 
          formAdditionalClass={undefined}
          maxLength={undefined}/>
           <ReturnImput
          name="firstStageSumm"
          placeholder="Сума 1 етап, $"
          form={form.summ_1}
          type="text"
          changeHandler={changeHandler} 
          placeholder2={undefined} 
          divAdditionalClass={undefined} 
          formAdditionalClass={undefined}
          maxLength={undefined}/>
      </div>
      </div>
    </div>
  );
};

export default memo(ConvertComponent);
