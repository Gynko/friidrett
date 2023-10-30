import InputRadio from "../../components/inputRadio/inputRadio.component";

export default function ResultsManagement() {
  const radioList = [
    { value: "M", label: "M", name: "gender" },
    { value: "F", label: "F", name: "gender" },
  ];
  return <InputRadio list={radioList} label="Gender" />;
}
