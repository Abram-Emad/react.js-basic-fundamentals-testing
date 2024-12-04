import "./TheFirsttPageComponentStyle.css"

function TheFirsttPageComponent() {
    const x = 10;
    const person = {
        name: "Abram",
        email: "abram@gmail.com",
    };
    const elmStyle = {
        backgroundColor: "blue",
        fontSize: "20px",
        boxShadow: "0px 20px 10px black",
      };
    return (
        <>
            <div>
                <h1 style={elmStyle}>{person.name} Hello World x + 20</h1>
                <h3 className={"active redBg"}>{person.email}</h3>
                <h2 className={"active"} style={elmStyle}>hi</h2>
                <h1 className={person.name === "Emad" ? "redBg" : "greenBg"}>Check Name</h1>
                <button onClick={sayHello}>ClickMe</button>
            </div>

        </>
    )
}

function sayHello() {
    alert("hello");
}

export default TheFirsttPageComponent;