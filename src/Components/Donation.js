import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

export default function Donation() {
    const { name, price } = useParams();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));//'שמירת המשתמש הנוכחי בלוקאל סטורג
    function save(data){
            data.prizeName = name;
            data.donationSum = price * watch("ticketsNum");
            donations.push(data)
            navigate(`/products`); };
    
        return (
            <from className="div1">
                <p id="OwnerDetails">פרטים אישיים</p>
                <Form.Group className="FromDo" controlId="formBasicEmail">
                  <Form.Label>userName</Form.Label>
                  <Form.Control type="text" onChange={(event) => { userName = event.target.value }} value={userName} 
                                {...register("userName", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-zא-ת]+$/i,
                                })}
                            />
                            {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
              </Form.Group>
              <Form.Group className="FromDo" controlId="formBasicEmail">
                 <Form.Label>prizeName</Form.Label>
                 <Form.Control type="text" onChange={(event) => { prizeName = event.target.value }} value={prizeName}
                   {...register("prizeName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-zא-ת]+$/i,
                })}
                   />
                {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
              </Form.Group>
              <Form.Group className="FromDo" controlId="formBasicEmail">
                  <Form.Label>ticketNum</Form.Label>
                  <Form.Control type="int" placeholder="{}" onChange={(event) => { ticketNum = event.target.value }} value={ticketNum}
                 onClick={() => { setValue("donationSum", `${price * watch('ticketsNum')}`) }}
                />
                {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
              </Form.Group>
              <Form.Group className="FromDo" controlId="formBasicEmail">
                  <Form.Label>donationSum</Form.Label>
                  <Form.Control type="int" placeholder="sum donation" onChange={(event) => { donationSum = event.target.value }} value={donationSum}
                   {...register("donationSum", { disabled: true, value: price })}/>
                {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}
              </Form.Group>
              <Form.Group className="FromDo" controlId="formBasicEmail">
                  <Form.Label>date</Form.Label>
                  <Form.Control type="DateTime" placeholder="date" onChange={(event) => { date = event.target.value }} value={date} />
              </Form.Group>
                {errors?.userName?.type === "required" && <p style={{ color: "red" }}>זהו שדה חובה!</p>}

                <button type="submit" onClick={Save}>לתשלום</button>
            </from>
           );
}
