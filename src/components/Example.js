import React, { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function Example() {
  const [value, setValue] = useState("+998");
  return (
    <PhoneInput
      placeholder="Enter phone number"
      className="form-input"
      defaultCountry="UZBEKISTAN"
      value={value}
      onChange={setValue}
    />
  );
}
export default Example;
