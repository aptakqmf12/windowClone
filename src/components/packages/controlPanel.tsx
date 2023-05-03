import React from "react";

export default function ControlPanel() {
  return (
    <div>
      <div>제어판</div>

      <div>
        {["위임전결규정", "양식함", "사용자관리", "권한설정"].map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
    </div>
  );
}
