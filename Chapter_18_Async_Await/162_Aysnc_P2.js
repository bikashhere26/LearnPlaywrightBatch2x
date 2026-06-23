function gettoken() {
    return Promise.resolve("token");
    }

    async function getdata() {
        const token = await gettoken();
        console.log(token);
    }
    getdata();