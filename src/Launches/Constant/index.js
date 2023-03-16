export const filterDateOptions = [
  { id: 1, name: "date", value: "week", checked: false, label: "Last Week" },
  { id: 2, name: "date", value: "month", checked: false, label: "Last Month" },
  { id: 3, name: "date", value: "year", checked: false, label: "Last Year" },
  {
    id: 4,
    name: "date",
    value: "all",
    checked: true,
    label: "All",
  },
];

export const filterStatusOptions = [
  { id: 1, name: "status", value: false, checked: "", label: "Failure" },
  { id: 2, name: "status", value: true, checked: "", label: "Success" },
  {
    id: 3,
    name: "status",
    value: "all",
    checked: "defaultChecked",
    label: "All",
  },
];
