  //Import the OpenAPI Large Language Model (you can import other models here eg. Cohere)
  const{ OpenAI } = require("langchain");

  //Load environment variables (populate process.env from .env file)
//   import * as dotenv from "dotenv";
  require('dotenv').config();

   getLangChainResponse=async(question) =>{

      //Instantiante the OpenAI model 
      //Pass the "temperature" parameter which controls the RANDOMNESS of the model's output. A lower temperature will result in more predictable output, while a higher temperature will result in more random output. The temperature parameter is set between 0 and 1, with 0 being the most predictable and 1 being the most random
      const model = new OpenAI({ temperature: 0.9 });

      //Calls out to the model's (OpenAI's) endpoint passing the prompt. This call returns a string
      const res = await model.call(
         question
      );
      consol.log("response ai", res)
      return res
  }

