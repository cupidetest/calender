console.log('hi');
const currentDate= new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
        const dateElement = document.getElementById("date")
        dateElement.innerHTML += `${month}/${day}/${year}<br>`;