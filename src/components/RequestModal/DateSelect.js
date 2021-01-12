import React, { useState } from "react";
import { Select } from "@geist-ui/react";
import "./DateSelect.css";

function DateSelect(props) {
  console.log(props.day + "/" + props.month + "/" + props.year);

  return (
    <div className="selectHolder">
      <Select
        placeholder="Day"
        onChange={(e) => props.dayHandler(e)}
        size="mini"
        value={props.day}
      >
        <Select.Option value="01">01</Select.Option>
        <Select.Option value="02">02</Select.Option>
        <Select.Option value="03">03</Select.Option>
        <Select.Option value="04">04</Select.Option>
        <Select.Option value="05">05</Select.Option>
        <Select.Option value="06">06</Select.Option>
        <Select.Option value="07">07</Select.Option>
        <Select.Option value="08">08</Select.Option>
        <Select.Option value="09">09</Select.Option>
        <Select.Option value="10">10</Select.Option>
        <Select.Option value="11">11</Select.Option>
        <Select.Option value="12">12</Select.Option>
        <Select.Option value="13">13</Select.Option>
        <Select.Option value="14">14</Select.Option>
        <Select.Option value="15">15</Select.Option>
        <Select.Option value="16">16</Select.Option>
        <Select.Option value="17">17</Select.Option>
        <Select.Option value="18">18</Select.Option>
        <Select.Option value="19">19</Select.Option>
        <Select.Option value="20">20</Select.Option>
        <Select.Option value="21">21</Select.Option>
        <Select.Option value="22">22</Select.Option>
        <Select.Option value="23">23</Select.Option>
        <Select.Option value="24">24</Select.Option>
        <Select.Option value="25">25</Select.Option>
        <Select.Option value="26">26</Select.Option>
        <Select.Option value="27">27</Select.Option>
        <Select.Option value="28">28</Select.Option>
        <Select.Option value="29">29</Select.Option>
        <Select.Option value="30">30</Select.Option>
        <Select.Option value="31">31</Select.Option>
      </Select>
      <Select
        placeholder="Month"
        onChange={(e) => props.monthHandler(e)}
        size="mini"
        value={props.month}
      >
        <Select.Option value="01">January</Select.Option>
        <Select.Option value="02">February</Select.Option>
        <Select.Option value="03">March</Select.Option>
        <Select.Option value="04">April</Select.Option>
        <Select.Option value="05">May</Select.Option>
        <Select.Option value="06">June</Select.Option>
        <Select.Option value="07">July</Select.Option>
        <Select.Option value="08">August</Select.Option>
        <Select.Option value="09">September</Select.Option>
        <Select.Option value="10">October</Select.Option>
        <Select.Option value="11">November</Select.Option>
        <Select.Option value="12">December</Select.Option>
      </Select>
      <Select
        placeholder="Year"
        onChange={(e) => props.yearHandler(e)}
        size="mini"
        value={props.year}
      >
        <Select.Option value="2021">2021</Select.Option>
        <Select.Option value="2022">2022</Select.Option>
        <Select.Option value="2023">2023</Select.Option>
        <Select.Option value="2024">2024</Select.Option>
        <Select.Option value="2025">2025</Select.Option>
        <Select.Option value="2026">2026</Select.Option>
        <Select.Option value="2027">2027</Select.Option>
        <Select.Option value="2028">2028</Select.Option>
        <Select.Option value="2029">2029</Select.Option>
        <Select.Option value="2030">2030</Select.Option>
        <Select.Option value="2031">2031</Select.Option>
        <Select.Option value="2032">2032</Select.Option>
        <Select.Option value="2033">2033</Select.Option>
        <Select.Option value="2034">2034</Select.Option>
        <Select.Option value="2035">2035</Select.Option>
        <Select.Option value="2036">2036</Select.Option>
        <Select.Option value="2037">2037</Select.Option>
        <Select.Option value="2038">2038</Select.Option>
        <Select.Option value="2039">2039</Select.Option>
        <Select.Option value="2040">2040</Select.Option>
      </Select>
    </div>
  );
}

export default DateSelect;
