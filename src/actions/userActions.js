export function createUser() {
    return (dispatch) => {
        dispatch({ type: "RETURNING_USER" });
        debugger
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    username: "HI I AM TEST"
                })
            })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}