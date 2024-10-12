const heading = {
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black",
};

export function ShowDate() {
  let hours = new Date().getHours();
  if (hours > 0 && hours < 12) {
    return <h1 style={{ ...heading, color: "red" }}>Good Morning</h1>;
  } else if (hours > 12 && hours < 18) {
    return <h1 style={{ ...heading, color: "green" }}>Good Afternoon</h1>;
  } else {
    return <h1 style={{ ...heading, color: "blue" }}>Good Evening</h1>;
  }
}
