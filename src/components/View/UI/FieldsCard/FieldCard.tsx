import React, { FC } from 'react';
import './FieldCard.scss';
import icon from '../../../../assets/logo.svg'
interface Props {
    fieldLabel: String,
    selectLabel: String,
    list: any
}
const FieldCard: FC<Props> = (props) => {
    return (
        <>
            <div className="card field-card">
                <div className="card-body py-2">
                    <div className="row">
                        <div className=" col-6 col-sm-7">
                            <label className="form-label">{props.fieldLabel}</label>
                            <input type="email" className="form-control field-input" placeholder="0.0" />
                        </div>
                        <div className=" col-6 col-sm-5">
                            <div className="align-end">
                                <label className="form-label">{props.selectLabel}</label>

                            </div>
                            <select className="form-control field-select ">
                                {props.list.map((list: any) => <option  data-content='<img src="https://www.base64-image.de/build/img/base64-image-logo-3eb23a9eef.png"/>' key={list.name} value={list.id}>
                                    {list.name}
                                </option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FieldCard;