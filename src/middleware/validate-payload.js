const joi = require('joi');


const validateBodyPayload = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      console.error("Validation Error:", error.details);

      return res.status(400).json({
        message: "Validation Failed",
        errors: error.details.map((err) => err.message),
      });
    }

    console.log("Payload Validation is Successful");
    next();
  };
};

const validateQueryPayload = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.query, { abortEarly: false });

    if (error) {
      console.error("Query Validation Error:", error.details);

      return res.status(400).json({
        message: "Query Validation Failed",
        errors: error.details.map((err) => err.message),
      });
    }

    console.log("Query Payload Validation Successful");
    next();
  };
};


    module.exports = {validateBodyPayload,validateQueryPayload}