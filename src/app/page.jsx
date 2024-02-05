"use client";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState, useMemo } from "react";

export default function Page() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [aiubIdValue, setAiubIdValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState(new Set([]));
  const [academicYearValue, setAcademicYearValue] = useState(new Set([]));
  const [completedCreditsValue, setCompletedCreditsValue] = useState("");
  const [bloodGroupValue, setBloodGroupValue] = useState(new Set([]));
  const [genderValue, setGenderValue] = useState(new Set([]));
  const [addressValue, setAddressValue] = useState("");
  const [facebookValue, setFacebookValue] = useState("");
  const [linkedinValue, setLinkedinValue] = useState("");
  const [portfolioValue, setPortfolioValue] = useState("");
  const [positionValue, setPositionValue] = useState(new Set([]));
  const [descriptionValue, setDescriptionValue] = useState("");
  const [qualificationValue, setQualificationValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");
  const [resumeValue, setResumeValue] = useState("");
  const [photoValue, setPhotoValue] = useState("");

  const isNameInvalid = useMemo(() => {
  return (name) => {
    if (name === "") return false;
    return name.match(/^[A-Za-z]+$/) ? false : true;
  };
});

const isEmailInvalid = useMemo(() => {
    if (emailValue === "") return false;
    return emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? false : true;
  }
);

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isPhoneInvalid = useMemo(() => {
    if (phoneValue === "") return false;
    return phoneValue.match(/^(01|\+8801)[3-9][0-9]{8}$/) ? false : true;
  });

  const isAiubIdInvalid = useMemo(() => {
    if (aiubIdValue === "") return false;
    return aiubIdValue.match(/^(1[0-9]|2[0-4])-\d{5}-[1-3]$/) ? false : true;
  });

  const isCompletedCreditsInvalid = useMemo(() => {
    if (completedCreditsValue == "") return false;
    return completedCreditsValue.match(/^([0-9]|[1-9][0-9]|1[0-5][0-9]|160)$/) ? false : true;
  });

    const [departmentTouched, setDepartmentTouched] = useState(false);
    const [academicYearTouched, setAcademicYearTouched] = useState(false);
    const [bloodGroupTouched, setBloodGroupTouched] = useState(false);
    const [genderTouched, setGenderTouched] = useState(false);
    const [positionTouched, setPositionTouched] = useState(false);

  return (
    <div className=" overflow-y-hidden grid place-items-center bg-gray-200">
      <div className="lg:max-w-2xl max-w-screen-sm w-full">
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl my-6">
          <div className="text-4xl w-full text-center pt-16 text-gray-600 font-semibold">Volunteer Recruitment 2024 </div>
          <div className="px-4 py-6 sm:p-8 grid place-items-center">
            <div className="max-w-md w-full">
              <div className="">
                {/* <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label> */}
                <div className="mt-2 w-full grid grid-cols-2 gap-2">
                  <Input
                    isRequired
                    isClearable
                    value={firstNameValue}
                    type="text"
                    label="First Name"
                    variant="bordered"
                    isInvalid={isNameInvalid(firstNameValue)}
                    color={isNameInvalid(firstNameValue) ? "danger" : "content"}
                    errorMessage={
                      isNameInvalid(firstNameValue) &&
                      "Please enter a valid name"
                    }
                    onValueChange={setFirstNameValue}
                    className="w-full"
                  />
                  <Input
                    isRequired
                    isClearable
                    value={lastNameValue}
                    type="text"
                    label="Last Name"
                    variant="bordered"
                    isInvalid={isNameInvalid(lastNameValue)}
                    color={isNameInvalid(lastNameValue) ? "danger" : "content"}
                    errorMessage={
                      isNameInvalid(lastNameValue) &&
                      "Please enter a valid name"
                    }
                    onValueChange={setLastNameValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={emailValue}
                    type="email"
                    label="Email"
                    variant="bordered"
                    isInvalid={isEmailInvalid}
                    color={isEmailInvalid ? "danger" : "content"}
                    errorMessage={
                      isEmailInvalid && "Please enter a valid email"
                    }
                    onValueChange={setEmailValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={phoneValue}
                    type="text"
                    label="Phone"
                    variant="bordered"
                    isInvalid={isPhoneInvalid}
                    color={isPhoneInvalid ? "danger" : "content"}
                    errorMessage={
                      isPhoneInvalid && "Please enter a valid phone number"
                    }
                    onValueChange={setPhoneValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Input
                  isRequired
                  isClearable
                  value={aiubIdValue}
                  type="text"
                  label="AIUB ID"
                  variant="bordered"
                  isInvalid={isAiubIdInvalid}
                  color={isAiubIdInvalid ? "danger" : "content"}
                  errorMessage={isAiubIdInvalid && "Please enter a valid email"}
                  onValueChange={setAiubIdValue}
                  className="w-full"
                />

                <Select
                  isRequired
                  label="Department"
                  variant="bordered"
                  placeholder="Select a Department"
                  errorMessage={
                    departmentValue.size == 0 && departmentTouched
                      ? "You must select a department"
                      : ""
                  }
                  isInvalid={
                    departmentTouched && departmentValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={departmentValue}
                  className="w-full"
                  onSelectionChange={setDepartmentValue}
                  onClose={() => setDepartmentTouched(true)}
                >
                  <SelectItem key={"CSE"} value={"CSE"}>
                    {"CSE"}
                  </SelectItem>
                  <SelectItem key={"EEE"} value={"EEE"}>
                    {"EEE"}
                  </SelectItem>
                  <SelectItem key={"IPE"} value={"IPE"}>
                    {"CSE"}
                  </SelectItem>
                  <SelectItem key={"Architecture"} value={"Architecture"}>
                    {"Architecture"}
                  </SelectItem>
                </Select>
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Select
                  isRequired
                  label="Academic Year"
                  variant="bordered"
                  placeholder="Select an Academic Year"
                  errorMessage={
                    academicYearTouched && academicYearValue.size == 0
                      ? "You must select an academic year"
                      : ""
                  }
                  isInvalid={
                    academicYearTouched && academicYearValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={academicYearValue}
                  className="max-w-xs"
                  onSelectionChange={setAcademicYearValue}
                  onClose={() => setAcademicYearTouched(true)}
                >
                  <SelectItem key={"1st"} value={"1st"}>
                    {"1st"}
                  </SelectItem>
                  <SelectItem key={"2nd"} value={"2nd"}>
                    {"2nd"}
                  </SelectItem>
                  <SelectItem key={"3rd"} value={"3rd"}>
                    {"3rd"}
                  </SelectItem>
                  <SelectItem key={"4th"} value={"4th"}>
                    {"4th"}
                  </SelectItem>
                </Select>

                <Input
                  isClearable
                  isRequired
                  value={completedCreditsValue}
                  type="text"
                  label="Completed Credits"
                  variant="bordered"
                  isInvalid={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                  }
                  color={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                      ? "danger"
                      : "content"
                  }
                  errorMessage={
                    completedCreditsValue.length > 0 &&
                    isCompletedCreditsInvalid
                      ? "Please enter a valid email"
                      : ""
                  }
                  onValueChange={setCompletedCreditsValue}
                  className="w-full"
                />
              </div>

              <div className="mt-2 w-full grid grid-cols-2 gap-2">
                <Select
                  isRequired
                  label="Blood Group"
                  variant="bordered"
                  placeholder="Select a Blood Group"
                  errorMessage={
                    bloodGroupTouched && bloodGroupValue.size == 0
                      ? "You must select a Blood Group"
                      : ""
                  }
                  isInvalid={
                    bloodGroupTouched && bloodGroupValue.size == 0
                      ? true
                      : false
                  }
                  selectedKeys={bloodGroupValue}
                  className="w-full"
                  onSelectionChange={setBloodGroupValue}
                  onClose={() => setBloodGroupTouched(true)}
                >
                  <SelectItem key={"A+"} value={"A+"}>
                    {"A Positive (A+)"}
                  </SelectItem>
                  <SelectItem key={"A-"} value={"A-"}>
                    {"A Negative (A-)"}
                  </SelectItem>
                  <SelectItem key={"B+"} value={"B+"}>
                    {"B Positive (B+)"}
                  </SelectItem>
                  <SelectItem key={"B-"} value={"B-"}>
                    {"B Negative (B-)"}
                  </SelectItem>
                  <SelectItem key={"AB+"} value={"AB+"}>
                    {"AB Positive (AB+)"}
                  </SelectItem>
                  <SelectItem key={"AB-"} value={"AB-"}>
                    {"AB Negative (AB-)"}
                  </SelectItem>
                  <SelectItem key={"O+"} value={"O+"}>
                    {"O Positive (O+)"}
                  </SelectItem>
                  <SelectItem key={"O-"} value={"O-"}>
                    {"O Negative (O-)"}
                  </SelectItem>
                </Select>

                <Select
                  isRequired
                  label="Gender"
                  variant="bordered"
                  placeholder="Select a Gender"
                  errorMessage={
                    genderTouched && genderValue.size == 0
                      ? "You must select a Gender"
                      : ""
                  }
                  isInvalid={
                    genderTouched && genderValue.size == 0 ? true : false
                  }
                  selectedKeys={genderValue}
                  className="w-full"
                  onSelectionChange={setGenderValue}
                  onClose={() => setGenderTouched(true)}
                >
                  <SelectItem key={"Male"} value={"Male"}>
                    {"Male"}
                  </SelectItem>
                  <SelectItem key={"Female"} value={"Female"}>
                    {"Female"}
                  </SelectItem>
                </Select>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={addressValue}
                    type="text"
                    label="Address"
                    variant="bordered"
                    onValueChange={setAddressValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={facebookValue}
                    type="text"
                    label="Facebook"
                    variant="bordered"
                    onValueChange={setFacebookValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={linkedinValue}
                    type="text"
                    label="Linkedin"
                    variant="bordered"
                    onValueChange={setLinkedinValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isClearable
                    value={portfolioValue}
                    type="text"
                    label="Portfolio"
                    variant="bordered"
                    onValueChange={setPortfolioValue}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Select
                    isRequired
                    label="Which position do you want apply?"
                    variant="bordered"
                    placeholder="Select an Position"
                    errorMessage={
                      positionTouched && positionValue.size == 0
                        ? "You must select a position"
                        : ""
                    }
                    isInvalid={
                      positionTouched && positionValue.size == 0 ? true : false
                    }
                    selectedKeys={positionValue}
                    className="w-full"
                    onSelectionChange={setPositionValue}
                    onClose={() => setPositionTouched(true)}
                  >
                    <SelectItem
                      key={"Event Management"}
                      value={"Event Management"}
                    >
                      {"Event Management"}
                    </SelectItem>
                    <SelectItem key={"Logistics"} value={"Logistics"}>
                      {"Logistics"}
                    </SelectItem>
                    <SelectItem key={"Publications"} value={"Publications"}>
                      {"Publications"}
                    </SelectItem>
                    <SelectItem
                      key={"Website Development"}
                      value={"Website Development"}
                    >
                      {"Website Development"}
                    </SelectItem>
                    <SelectItem
                      key={"Public Relation"}
                      value={"Public Relation"}
                    >
                      {"Public Relation"}
                    </SelectItem>
                    <SelectItem key={"Video Editor"} value={"Video Editor"}>
                      {"Video Editor"}
                    </SelectItem>
                    <SelectItem
                      key={"Photojournalist"}
                      value={"Photojournalist"}
                    >
                      {"Photojournalist"}
                    </SelectItem>
                    <SelectItem
                      key={"WIE (Women in Engineering)"}
                      value={"WIE (Women in Engineering)"}
                    >
                      {"WIE (Women in Engineering)"}
                    </SelectItem>
                    <SelectItem
                      key={"Graphics Designer"}
                      value={"Graphics Designer"}
                    >
                      {"Graphics Designer"}
                    </SelectItem>
                  </Select>
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={1200}
                    isInvalid={false}
                    value={descriptionValue}
                    variant="bordered"
                    label="Describe your previous volunteering experience (Max 1200 characters)"
                    placeholder="Enter your description"
                    defaultValue=""
                    errorMessage={
                      descriptionValue.length >= 1200
                        ? "The description should be at max 1200 Characters."
                        : ""
                    }
                    minRows={3}
                    classNames={{
                      base: "w-full",
                      input: "resize-y ",
                    }}
                    onValueChange={setDescriptionValue}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={2500}
                    isInvalid={false}
                    value={qualificationValue}
                    variant="bordered"
                    label="What qualifies you, in your opinion, for “IEEE AIUB Student Branch” as a volunteer?"
                    placeholder="Enter your description"
                    defaultValue=""
                    errorMessage={
                      qualificationValue.length >= 2500
                        ? "The description should be at max 2500 Characters."
                        : ""
                    }
                    minRows={3}
                    classNames={{
                      base: "w-full",
                      input: "resize-y",
                    }}
                    onValueChange={setQualificationValue}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Textarea
                    isRequired
                    maxLength={2000}
                    isInvalid={false}
                    value={reasonValue}
                    variant="bordered"
                    label="Why do you want to join “ IEEE AIUB Student Branch ” as a volunteer? (Max 2000 Characters)"
                    placeholder="Enter your description"
                    defaultValue=""
                    onValueChange={setReasonValue}
                    errorMessage={
                      reasonValue.length >= 2000
                        ? "The description should be at max 2000 words."
                        : ""
                    }
                    classNames={{
                      base: "w-full",
                      input: "resize-y min-h-[40px]",
                    }}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={resumeValue}
                    type="file"
                    label="CV/Resume"
                    labelPlacement="outside-left"
                    variant="bordered"
                    onValueChange={setResumeValue}
                    className="w-full pl-3"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="mt-2">
                  <Input
                    isRequired
                    isClearable
                    value={photoValue}
                    type="file"
                    label="Picture"
                    labelPlacement="outside-left"
                    variant="bordered"
                    onValueChange={setPhotoValue}
                    className="w-full pl-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
