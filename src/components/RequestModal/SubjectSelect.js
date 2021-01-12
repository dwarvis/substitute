import React, { useState } from "react";
import { Select } from "@geist-ui/react";
import "./SubjectSelect.css";

function SubjectSelect(props) {
  return (
    <Select
      placeholder="Choose a subject"
      onChange={(val) => {
        props.subjectHandler(val);
      }}
      className="subjectSelect"
      disableMatchWidth
    >
      <Select.Option label>Languages</Select.Option>
      <Select.Option value="English Lit SL">English Lit SL</Select.Option>
      <Select.Option value="English Lit HL">English Lit HL</Select.Option>
      <Select.Option value="Chinese Ab Initio">Chinese Ab Initio</Select.Option>
      <Select.Option value="Chinese B SL">Chinese B SL</Select.Option>
      <Select.Option value=">Chinese B HL">Chinese B HL</Select.Option>
      <Select.Option value="Chinese A SL">Chinese A SL</Select.Option>
      <Select.Option value="Chinese A HL">Chinese A HL</Select.Option>
      <Select.Option value="French B SL">French B SL</Select.Option>
      <Select.Option value="French B HL">French B HL</Select.Option>
      <Select.Option value="Spanish B SL">Spanish B SL</Select.Option>
      <Select.Option value="Spanish B HL">Spanish B HL</Select.Option>
      <Select.Option label>Individuals & Societies</Select.Option>
      <Select.Option value="Economics SL">Economics SL</Select.Option>
      <Select.Option value="Economics HL">Economics HL</Select.Option>
      <Select.Option value="Geography SL">Geography SL</Select.Option>
      <Select.Option value="Geography HL">Geography HL</Select.Option>
      <Select.Option value="History SL">History SL</Select.Option>
      <Select.Option value="History HL">History HL</Select.Option>
      <Select.Option value="Psychology SL">Psychology SL</Select.Option>
      <Select.Option value="Psychology HL">Psychology HL</Select.Option>
      <Select.Option value="Psychology SL">Psychology SL</Select.Option>
      <Select.Option label>Sciences</Select.Option>
      <Select.Option value="Biology SL">Biology SL</Select.Option>
      <Select.Option value="Biology HL">Biology HL</Select.Option>
      <Select.Option value="Chemistry SL">Chemistry SL</Select.Option>
      <Select.Option value="Chemistry HL">Chemistry HL</Select.Option>
      <Select.Option value="Physics SL">Physics SL</Select.Option>
      <Select.Option value="Physics HL">Physics HL</Select.Option>
      <Select.Option value="Sports Science SL">Sports Science SL</Select.Option>
      <Select.Option value="Sports Science HL">Sports Science HL</Select.Option>
      <Select.Option value="Design Technology SL">
        Design Technology SL
      </Select.Option>
      <Select.Option value="Design Technology HL">
        Design Technology HL
      </Select.Option>
      <Select.Option value="Computer Science SL">
        Computer Science SL
      </Select.Option>
      <Select.Option value="Computer Science HL">
        Computer Science HL
      </Select.Option>
      <Select.Option label>Mathematics</Select.Option>
      <Select.Option value="Mathematics: Analysis & Approaches SL">
        Mathematics: Analysis & Approaches SL
      </Select.Option>
      <Select.Option value="Mathematics: Analysis & Approaches HL">
        Mathematics: Analysis & Approaches HL
      </Select.Option>
      <Select.Option value="Mathematics: Applications & Interpretation SL">
        Mathematics: Applications & Interpretation SL
      </Select.Option>
      <Select.Option value="Mathematics: Applications & Interpretation HL">
        Mathematics: Applications & Interpretation HL
      </Select.Option>
      <Select.Option label>The Arts</Select.Option>
      <Select.Option value="Film SL">Film SL</Select.Option>
      <Select.Option value="Film HL">Film HL</Select.Option>
      <Select.Option value="Music SL">Music SL</Select.Option>
      <Select.Option value="Music HL">Music HL</Select.Option>
      <Select.Option value="Theatre SL">Theatre SL</Select.Option>
      <Select.Option value="Theatre HL">Theatre HL</Select.Option>
      <Select.Option value="Visual Arts SL">Visual Arts SL</Select.Option>
      <Select.Option value="Visual Arts HL">Visual Arts HL</Select.Option>
    </Select>
  );
}

export default SubjectSelect;
