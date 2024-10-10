// components/Form/AppAndCompany.js

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const AppAndCompany = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="appType">
          How will you use our app in your company?
        </Label>
        <Textarea
          id="appType"
          value={formData.appAndCompany.type}
          onChange={(e) =>
            handleInputChange("appAndCompany", "type", e.target.value)
          }
          placeholder="Describe how you plan to use our app in your company"
          rows={4}
        />
      </div>
    </div>
  );
};

export default AppAndCompany;
