
/* POST DATA to API */
const apiUrl  = 'http://localhost:3000/';

const postData = async function (todo)  {
    const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      })
      const data = await response.json();
     
      console.log('post', data);
};




/* GET DATA FROM API */

const getTask = async function() {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        });

        const data = await response.json();
        createTask(data);
        console.log('get task', data);


};



/* DELETE DATA to API */

const deleteData = async function (id)  {
   const response = await fetch(apiUrl + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
      });

      const data = await response;
      console.log('delete', data);

};



/* PUT DATA (update) */

const putData = async function (id, todo)  {
    
    const response = await fetch(apiUrl + id, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      });

      const data = await response;
      console.log('put', data);
};





