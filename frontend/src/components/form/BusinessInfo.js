// components/Form/BusinessInfo.js

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const BusinessInfo = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          value={formData.businessInfo.name}
          onChange={(e) =>
            handleInputChange("businessInfo", "name", e.target.value)
          }
          placeholder="Enter your business name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="businessType">Business Type</Label>
        <Select
          value={formData.businessInfo.type}
          onValueChange={(value) =>
            handleInputChange("businessInfo", "type", value)
          }
        >
          <SelectTrigger id="businessType">
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sole-proprietorship">
              Sole Proprietorship
            </SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="corporation">Corporation</SelectItem>
            <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
            <SelectItem value="non-profit">Non-Profit</SelectItem>
            {/* Add more business types as needed */}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Select
          value={formData.businessInfo.department}
          onValueChange={(value) =>
            handleInputChange("businessInfo", "department", value)
          }
        >
          <SelectTrigger id="department">
            <SelectValue placeholder="Select your department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="it">IT</SelectItem>
            <SelectItem value="hr">HR</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="customer-service">Customer Service</SelectItem>
            {/* Add more departments as needed */}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BusinessInfo;
