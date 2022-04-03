import MultipleCard from "../../../containers/MultipleCard";

const Agent = () => {
  
    // Simple GET request using fetch
    fetch('/client.json')
        .then(response => response.json())
        .then(data => console.log(data));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MultipleCard />
    </div>
  );
};

export default Agent;
