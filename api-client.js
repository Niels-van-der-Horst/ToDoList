/* POST DATA to API */

const postData = function (todo)  {
    fetch('http://localhost:3000/', {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
};




/* GET DATA FROM API */

const getTask = function() {
    const response =  fetch('http://localhost:3000/', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((data) =>  createTask(data));

};



/* DELETE DATA to API */

const deleteData = function (id)  {
    fetch('http://localhost:3000/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
};

const putData = function (id, todo)  {
    
    fetch('http://localhost:3000/' + id, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
};





