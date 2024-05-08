import Provinces from "./Provinces";
import Cities from "./Cities";
import { useState } from "react";

export default function LocationSelector() {
  const [selectedProvince, setSelectedProvince] = useState("");
  const handleProvinceSelected = (provinceId) => {
    setSelectedProvince(provinceId);
  };

  return (
    <div>
      <Provinces onProvinceSelect={handleProvinceSelected} />
      <Cities provinceId={selectedProvince} />
    </div>
  );
}
