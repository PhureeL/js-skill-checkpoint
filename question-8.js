// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getNewUsersList() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let newUsersData = await response.json();
      
      let newUsers = newUsersData.map(function(data){return data.name});
      
      return console.log(newUsers);
    } 
    catch (error) {
      return console.log(error);
    }
  }
  
  getNewUsersList();

