// components/Form/PersonalInfo.js

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PersonalInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={formData.moreInfo.fullName}
          onChange={(e) =>
            handleInputChange("moreInfo", "fullName", e.target.value)
          }
          placeholder="Enter your full name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select
          value={formData.moreInfo.role}
          onValueChange={(value) =>
            handleInputChange("moreInfo", "role", value)
          }
        >
          <SelectTrigger id="role">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="it">IT</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="hr">HR</SelectItem>
            <SelectItem value="customer-service">Customer Service</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            {/* Add more roles as needed */}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="typeOfAds">How did you hear about us?</Label>
        <Select
          value={formData.moreInfo.typeOfAds}
          onValueChange={(value) =>
            handleInputChange("moreInfo", "typeOfAds", value)
          }
        >
          <SelectTrigger id="typeOfAds">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="social-media">Social Media</SelectItem>
            <SelectItem value="search-engine">Search Engine</SelectItem>
            <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
            <SelectItem value="advertisement">Advertisement</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInfo;
