const dataService = {
    async getUser(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json();
    
        return data;
    }
};

async function main() {
    try {
        const user = await dataService.getUser(2)
        console.log(user);
    } catch (error) {
        console.log(error);
    }

}

main();