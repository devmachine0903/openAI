import { useEffect, useState } from "react";
import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {'Authorization': 'Bearer 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'}
});

function App() {
  const [outputList, setOutputList] = useState([]);
  const [outputData, setOutputData] = useState(
    {
      subject: "",
      body: "",
      response: ""
    },
  );

  const Output = ({ outputData }) => {
    return (
      <div
        id="sampleOutput"
        className="border w-11/12 align-center justify-center mx-auto bg-white rounded-xl shadow-lg p-4 mb-2"
      >
        <p className="">
          Hey we are working on the AI but here is the data you entered:
        </p>
        <p className="font-bold">Subject: </p>
        <p>{outputData.subject}</p>
        <p className="font-bold">Email body </p>
        <p>{outputData.body}</p>
        <p className="font-bold">Response </p>
        <p>{outputData.response}</p>
      </div>
    );
  };

  const addOnClick = async (e) => {
    e.preventDefault();

    var responseText = ""
    try {
      var res = await instance.post('/completions', {
        "model": "text-davinci-003",
        "prompt": outputData.body,
        "max_tokens": 1000,
        "temperature": 0
      })
  
      responseText = res.data.choices[0].text;
    } catch (error) {
      throw(error)
    }
    console.log('--- resposeText', responseText)
   setOutputData((prevState) => ({
      ...prevState,
      response: responseText,
    }));
   

    document.getElementById("subject").value = "";
    document.getElementById("body").value = "";

  };

  useEffect(() => {
    if (!outputData.response) return
    setOutputList(
      outputList.concat(
        <Output key={outputList.length} outputData={outputData} />
      )
    );
  }, [outputData.response])
  const onChange = (e) => {
    setOutputData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div id="builderContainer" className="flex">
        <div
          id="userInputsContainer"
          className="flex-vertical w-1/3 h-screen shadow-inner shadow-sm "
        >
          <div
            id="headlineContainer"
            className="flex mx-auto align-center justify-center m-10 border w-1/2 rounded-xl py-2"
          >
            <h1 className="font-bold text-xl">Commands</h1>
          </div>
          <div
            id="subjectInput"
            className="flex-vertical mx-auto align-center justify-center text-center"
          >
            <label className="flex mx-auto align-center justify-center text-center">
              Subject
            </label>
            <input
              type="text"
              className="border mt-2 w-3/4 h-12 rounded-xl placeholder:text-center text-center"
              placeholder="Enter email subject"
              id="subject"
              onChange={onChange}
            />
          </div>
          <div
            id="bodyInput"
            className="flex-vertical mx-auto align-center justify-center text-center my-10"
          >
            <label className="flex mx-auto align-center justify-center text-center">
              Body
            </label>
            <textarea
              className="border mt-2 w-3/4 h-48 rounded-xl placeholder:text-center placeholder:py-10 pt-3 pl-5 pr-5"
              placeholder="Enter email body text"
              id="body"
              onChange={onChange}
            />
          </div>
          <div id="generateButtonContainer">
            <button
              id="generateButton"
              className="flex align-center justify-center mx-auto border py-4 px-8 rounded-xl bg-[#46C2F5] text-white"
              onClick={addOnClick}
            >
              {" "}
              Generate Email
            </button>
          </div>
        </div>
        <div
          id="aiOutputsContainer_"
          className="flex-vertical w-2/3 bg-gray-100 h-screen shadow-inner shadow-sm "
        >
          <div>
            <button className="border py-2 px-4 border-[#46C2F5] rounded-xl mt-10 mb-5 ml-5 bg-white text-[#46C2F5] font-semibold">
              {" "}
              AI Outputs
            </button>
          </div>
          <div id="aiOutputsContainer" className="">
            {/* Outputs will be a function that returns jsx */}
            {/* <div
              id="sampleOutput"
              className="border w-11/12 align-center justify-center mx-auto bg-white rounded-xl shadow-lg p-4"
            >
              <p className="">
                Hey we are working on the AI but here is the data you entered:
              </p>
              <p>Subject:</p>
              <p>Email body </p>
            </div> */}
            {outputList}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
