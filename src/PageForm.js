import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { format } from 'date-fns';
const PageForm = () => {
  const parentref = useRef(null);
  const [curentDateTime,setCurentDateTime] = useState(new Date());
  setInterval(()=>
    setCurentDateTime(new Date()),1000
  )
  const [intItems, setIntItems] = useState([
    { id: 1, itemName: "Branding", itemSelect: false },
    { id: 2, itemName: "Web design", itemSelect: false },
    { id: 3, itemName: "App design", itemSelect: false },
    { id: 4, itemName: "Pitch deck", itemSelect: false },
    { id: 5, itemName: "Illustration", itemSelect: false },
    { id: 6, itemName: "Motion design", itemSelect: false },
    { id: 7, itemName: "Design concept", itemSelect: false },
    { id: 8, itemName: "Site from scratch", itemSelect: false },
    { id: 9, itemName: "App from scratch", itemSelect: false },
    { id: 10, itemName: "HTML/CSS coding", itemSelect: false },
    { id: 11, itemName: "iOS development", itemSelect: false },
    { id: 12, itemName: "Android development", itemSelect: false },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleclick = (id) => {
    const newarray = intItems.map((item) =>
      item.id === id ? { ...item, itemSelect: !item.itemSelect } : item
    );
    setIntItems(newarray);
  };

  useEffect(() => {
    const parentRefArr = Array.from(parentref.current.children);
    const handleFocus = (item) => {
      item.children[1].classList.add("moveup");
    };

    const handleBlur = (item) => {
      if (item.children[0].value.trim() === "") {
        item.children[1].classList.remove("moveup");
      }
    };

    parentRefArr.forEach((item, index) => {
      if (index < 3) {
        const input = item.children[0];
        const label = item.children[1];

        input.addEventListener("focus", () => handleFocus(item));
        input.addEventListener("blur", () => handleBlur(item));

        return () => {
          input.removeEventListener("focus", () => handleFocus(item));
          input.removeEventListener("blur", () => handleBlur(item));
        };
      }
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let submit = true;
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    if (!isValid) {
      submit = false;
    }
    if (submit) {
      intItems.forEach((item) => {
        if (item.itemSelect === true) {
          const itemName = item.itemName;
          selectedItems.push(itemName);
        }
      });
      try {
        const filledDate = format(curentDateTime, 'yyyy-MM-dd');
        const id = userData && userData.length ? userData[userData.length - 1].id + 1 : 1;
        const submissionData = {
          id,
          filledDate,
          ...formData,
          interests: selectedItems,
        };
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });
      } catch (err) {
        console.log(err);
      }
      const newarray = intItems.map((item) => ({ ...item, itemSelect: false }));
      setIntItems(newarray);
      setFormData({
        name: "",
        email: "",
        description: "",
      });

      const parentRefArr = Array.from(parentref.current.children);
      parentRefArr.forEach((item, index) => {
        if(index < 3){
              parentRefArr[index].classList.remove("makered")
               parentRefArr[index].children[0].placeholder = ""
            }
          if (item.children[1]) { 
              item.children[1].classList.remove("moveup");
          }
      })
    }
    else{
        const parentRefArr = Array.from(parentref.current.children);
        parentRefArr.forEach((item, index) => {
            if(parentRefArr[index].children[0].value.trim() === '' && index < 3){
                parentRefArr[index].classList.add("makered")

            }
            if (item.children[1]) { 
                item.children[1].classList.add("moveup");
                if(index === 0 &&  parentRefArr[0].children[0].value.trim() === ''){
                    parentRefArr[0].children[0].placeholder = "Required name"
                }
                if(index === 1 &&  parentRefArr[1].children[0].value.trim() === ''){
                    parentRefArr[1].children[0].placeholder = "Required email"
                }
                if(index === 2 &&  parentRefArr[2].children[0].value.trim() === ''){
                    parentRefArr[2].children[0].placeholder = "Required description"
                }
            }
        })
    }
  };

  const handleInputs = (e) => {
    const { name, value, id } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const API_URL = "http://localhost:3500/users";
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setUserData(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pageform">
      <div className="pageDesc">
        <span>
          Hello! Just tell us <br /> what you have?
        </span>
      </div>

      <form action="" id="Fillform" >
        <div className="formDiv">
          <div className="formDivInner">
            <span>I’m interested in</span>
            <div className="interestedItems">
              {intItems.map((item) => (
                <div
                  className={
                    item.itemSelect
                      ? "interestItemChild selected"
                      : "interestItemChild"
                  }
                  key={item.id}
                  onClick={() => handleclick(item.id)}
                >
                  <span>{item.itemName}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="formDivInner" ref={parentref}>
            <div className="formRightInputs">
              <input
                type="text"
                id="NameInput"
                name="name"
                value={formData.name}
                onChange={handleInputs}
              />
              <label htmlFor="NameInput" className="inputLabel">
                Name
              </label>
            </div>
            <div className="formRightInputs">
              <input
                type="text"
                id="EmailInput"
                name="email"
                value={formData.email}
                onChange={handleInputs}
              />
              <label htmlFor="EmailInput" className="inputLabel">
                Email
              </label>
            </div>
            <div className="formRightInputs">
              <textarea
                type="text"
                id="TextInput"
                name="description"
                value={formData.description}
                onChange={handleInputs}
              ></textarea>
              <label htmlFor="TextInput" className="inputLabel">
                Tell us about your project
              </label>
            </div>
            <div className="submitBtn">
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default PageForm;
